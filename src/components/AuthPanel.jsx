// src/components/AuthPanel.jsx
//
// Einfaches E-Mail+Passwort-Login/Registrierung als Modal. Bewusst minimal
// gehalten (kein Social Login, keine Passwort-Reset-UI) — reicht, um selbst
// mit einem echten Konto zu testen. Kann später erweitert werden.

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export function AuthPanel({ onClose }) {
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setInfo(null);
    setLoading(true);

    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setInfo("Konto erstellt. Falls E-Mail-Bestätigung aktiviert ist, prüfe dein Postfach — sonst kannst du dich jetzt direkt einloggen.");
        setMode("login");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        onClose?.();
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4" onClick={onClose}>
      <div
        className="w-full max-w-sm rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-xl text-[var(--text)]">
            {mode === "login" ? "Anmelden" : "Konto erstellen"}
          </h2>
          <button onClick={onClose} className="text-[var(--faint)] hover:text-[var(--text)]" aria-label="Schließen">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            required
            placeholder="E-Mail-Adresse"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-full border border-[var(--border)] bg-[var(--bg-deep)] px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--faint)] focus:outline-none"
          />
          <input
            type="password"
            required
            minLength={6}
            placeholder="Passwort (mind. 6 Zeichen)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-full border border-[var(--border)] bg-[var(--bg-deep)] px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--faint)] focus:outline-none"
          />

          {error && <p className="text-xs text-[var(--red-soft)]">{error}</p>}
          {info && <p className="text-xs text-[var(--emerald-soft)]">{info}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[var(--gold)] px-4 py-2.5 text-sm font-medium text-[var(--bg)] hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "…" : mode === "login" ? "Anmelden" : "Konto erstellen"}
          </button>
        </form>

        <button
          onClick={() => { setMode(mode === "login" ? "signup" : "login"); setError(null); setInfo(null); }}
          className="mt-4 w-full text-center text-xs text-[var(--muted)] hover:text-[var(--gold-soft)]"
        >
          {mode === "login" ? "Noch kein Konto? Registrieren" : "Schon ein Konto? Anmelden"}
        </button>
      </div>
    </div>
  );
}
