// src/hooks/useWatchlist.js
//
// Modularer Watchlist-Hook. Verhalten hängt davon ab, ob `userId` gesetzt ist:
//   - Kein userId (Gast): Watchlist lebt in localStorage (wie bisher)
//   - userId gesetzt (eingeloggt): Watchlist wird aus Supabase geladen und
//     bei jeder Änderung dorthin geschrieben — funktioniert dann
//     geräteübergreifend, nicht mehr nur im aktuellen Browser.
//
// Limit von 5 Assets und Toast-Warnung gelten in beiden Fällen gleich.

import { useState, useCallback, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export const WATCHLIST_MAX_SIZE = 5;

export function useWatchlist(initial = [], { storageKey, userId } = {}) {
  const [watchlist, setWatchlist] = useState(() => {
    if (userId) return []; // wird per useEffect aus Supabase nachgeladen
    if (storageKey && typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem(storageKey);
        if (raw) return JSON.parse(raw);
      } catch {
        // korrupte/fehlende Daten -> auf initial zurückfallen
      }
    }
    return initial;
  });

  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(!!userId);

  // localStorage-Sync nur im Gast-Modus
  useEffect(() => {
    if (userId || !storageKey) return;
    localStorage.setItem(storageKey, JSON.stringify(watchlist));
  }, [watchlist, storageKey, userId]);

  // Beim Login (userId wechselt von null -> etwas): aus Supabase laden
  useEffect(() => {
    if (!userId) return;
    let cancelled = false;
    setLoading(true);
    supabase
      .from("watchlist_items")
      .select("ticker")
      .eq("user_id", userId)
      .then(({ data, error }) => {
        if (cancelled) return;
        if (!error && data) setWatchlist(data.map((r) => r.ticker));
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [userId]);

  const isWatched = useCallback((ticker) => watchlist.includes(ticker), [watchlist]);
  const isFull = watchlist.length >= WATCHLIST_MAX_SIZE;

  function showLimitToast() {
    setToast({
      id: Date.now(),
      type: "warning",
      message: `Watchlist ist voll (max. ${WATCHLIST_MAX_SIZE} Werte). Entferne zuerst einen Titel.`,
    });
  }

  const add = useCallback(
    (ticker) => {
      if (watchlist.includes(ticker)) return false;
      if (watchlist.length >= WATCHLIST_MAX_SIZE) {
        showLimitToast();
        return false;
      }
      setWatchlist((prev) => [...prev, ticker]);
      if (userId) {
        supabase.from("watchlist_items").insert({ user_id: userId, ticker }).then(({ error }) => {
          if (error) {
            // Fehlgeschlagen (z.B. Netzwerkfehler) -> lokale Änderung zurückrollen
            setWatchlist((prev) => prev.filter((t) => t !== ticker));
            setToast({ id: Date.now(), type: "error", message: "Konnte nicht gespeichert werden. Bitte erneut versuchen." });
          }
        });
      }
      return true;
    },
    [watchlist, userId]
  );

  const remove = useCallback(
    (ticker) => {
      setWatchlist((prev) => prev.filter((t) => t !== ticker));
      if (userId) {
        supabase.from("watchlist_items").delete().eq("user_id", userId).eq("ticker", ticker).then(() => {});
      }
    },
    [userId]
  );

  const toggle = useCallback(
    (ticker) => {
      if (watchlist.includes(ticker)) remove(ticker);
      else add(ticker);
    },
    [watchlist, add, remove]
  );

  const dismissToast = useCallback(() => setToast(null), []);

  return {
    watchlist,
    isWatched,
    isFull,
    add,
    remove,
    toggle,
    toast,
    dismissToast,
    loading,
    maxSize: WATCHLIST_MAX_SIZE,
    remainingSlots: Math.max(0, WATCHLIST_MAX_SIZE - watchlist.length),
  };
}
