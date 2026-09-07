// src/hooks/useWatchlist.js
//
// Modularer Watchlist-Hook — löst sich aus der bisherigen, direkt in der
// Root-Komponente verdrahteten useState-Logik. Kapselt: Hinzufügen/Entfernen,
// 1-Klick-Toggle, hartes Limit von 5 Assets, und eine Toast-Nachricht bei
// Erreichen des Limits. Persistenz (localStorage/Backend) ist bewusst als
// eigener Schritt ausgelagert (siehe persist-Parameter unten).

import { useState, useCallback, useEffect } from "react";

export const WATCHLIST_MAX_SIZE = 5;

/**
 * @param {string[]} initial - initiale Ticker-Liste
 * @param {object} options
 * @param {string} options.storageKey - falls gesetzt, wird die Watchlist in
 *   localStorage gespiegelt (Klartext-Ticker, keine sensiblen Daten)
 */
export function useWatchlist(initial = [], { storageKey } = {}) {
  const [watchlist, setWatchlist] = useState(() => {
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

  useEffect(() => {
    if (!storageKey) return;
    localStorage.setItem(storageKey, JSON.stringify(watchlist));
  }, [watchlist, storageKey]);

  const isWatched = useCallback((ticker) => watchlist.includes(ticker), [watchlist]);
  const isFull = watchlist.length >= WATCHLIST_MAX_SIZE;

  const add = useCallback((ticker) => {
    let didAdd = false;
    setWatchlist((prev) => {
      if (prev.includes(ticker)) return prev;
      if (prev.length >= WATCHLIST_MAX_SIZE) {
        setToast({
          id: Date.now(),
          type: "warning",
          message: `Watchlist ist voll (max. ${WATCHLIST_MAX_SIZE} Werte). Entferne zuerst einen Titel.`,
        });
        return prev;
      }
      didAdd = true;
      return [...prev, ticker];
    });
    return didAdd;
  }, []);

  const remove = useCallback((ticker) => {
    setWatchlist((prev) => prev.filter((t) => t !== ticker));
  }, []);

  // 1-Klick-Action: fügt hinzu ODER entfernt, je nach aktuellem Zustand
  const toggle = useCallback((ticker) => {
    setWatchlist((prev) => {
      if (prev.includes(ticker)) return prev.filter((t) => t !== ticker);
      if (prev.length >= WATCHLIST_MAX_SIZE) {
        setToast({
          id: Date.now(),
          type: "warning",
          message: `Watchlist ist voll (max. ${WATCHLIST_MAX_SIZE} Werte). Entferne zuerst einen Titel.`,
        });
        return prev;
      }
      return [...prev, ticker];
    });
  }, []);

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
    maxSize: WATCHLIST_MAX_SIZE,
    remainingSlots: Math.max(0, WATCHLIST_MAX_SIZE - watchlist.length),
  };
}
