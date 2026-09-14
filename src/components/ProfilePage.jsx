// src/components/ProfilePage.jsx
//
// "Mein Profil"-Seite. Aktuell umgesetzt:
//   1) Persönliche Informationen (Anzeigename, Vor-/Nachname, E-Mail-Status)
//   2) Passwort ändern
//
// Bewusst noch NICHT enthalten (spätere Ausbaustufen, siehe Projektnotizen):
//   - E-Mail-Adresse ändern (eigener Bestätigungs-Flow an die neue Adresse)
//   - Lokalisierung (Währung/Sprache/Format/Zeitzone)
//   - OAuth-Verknüpfungen, 2FA, aktive Sitzungen
//   - Datenexport, Konto löschen (Konto löschen braucht eine serverlose
//     Funktion mit Service-Role-Key, siehe api/-Ordner — niemals im Frontend)
//
// Jede Card speichert unabhängig voneinander und meldet Erfolg/Fehler über
// die bestehende <Toast />-Komponente.

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { Toast } from "./Toast";

const cardClass = "rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6";
const inputClass =
  "w-full rounded-full border border-[var(--border)] bg-[var(--bg-deep)] px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--faint)] focus:outline-none";
const labelClass = "mb-1 block text-xs text-[var(--muted)]";

function passwordStrength(pw) {
  if (!pw) return { label: "", color: "" };
  if (pw.length < 6) return { label: "Zu kurz", color: "text-[var(--red-soft)]" };
  if (pw.length < 10) return { label: "Mittel", color: "text-[var(--amber-soft)]" };
  return { label: "Stark", color: "text-[var(--emerald-soft)]" };
}

function PersonalInfoCard({ session, onToast }) {
  const meta = session?.user?.user_metadata || {};
  const [displayName, setDisplayName] = useState(meta.display_name || "");
  const [firstName, setFirstName] = useState(meta.first_name || "");
  const [lastName, setLastName] = useState(meta.last_name || "");
  const [saving, setSaving] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState(null);

  const email = session?.user?.email || "";
  const verified = !!session?.user?.email_confirmed_at;

  async function handleSave(e) {
    e.preventDefault();
    setError(null);
    if (!displayName.trim()) {
      setError("Bitte einen Anzeigenamen angeben.");
      return;
    }
    setSaving(true);
    try {
      const payload = {
        display_name: displayName.trim(),
        first_name: firstName.trim() || null,
        last_name: lastName.trim() || null,
      };

      // Beide Stellen aktualisieren: user_metadata (für schnellen Zugriff
      // z.B. direkt aus der Session) und die profiles-Tabelle (für
      // Abfragen/Filterung, siehe supabase_schema_profiles.sql).
      const { error: metaError } = await supabase.auth.updateUser({ data: payload });
      if (metaError) throw metaError;

      const { error: profileError } = await supabase
        .from("profiles")
        .update(payload)
        .eq("id", session.user.id);
      if (profileError) throw profileError;

      onToast("success", "Profil erfolgreich aktualisiert.");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  async function handleResend() {
    setResending(true);
    setError(null);
    try {
      const { error } = await supabase.auth.resend({ type: "signup", email });
      if (error) throw error;
      onToast("success", "Bestätigungs-E-Mail erneut gesendet.");
    } catch (err) {
      setError(err.message);
    } finally {
      setResending(false);
    }
  }

  return (
    <div className={cardClass}>
      <h2 className="font-display mb-4 text-lg text-[var(--text)]">Persönliche Informationen</h2>

      <form onSubmit={handleSave} className="space-y-4">
        <div>
          <label className={labelClass}>Anzeigename *</label>
          <input
            type="text"
            required
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelClass}>Vorname</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Nachname</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>E-Mail-Adresse</label>
          <div className="flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--bg-deep)] px-4 py-2.5">
            <span className="flex-1 truncate text-sm text-[var(--text)]">{email}</span>
            <span
              className={
                "rounded-full px-2 py-0.5 text-[10px] font-medium " +
                (verified
                  ? "bg-[var(--emerald)]/20 text-[var(--emerald-soft)]"
                  : "bg-[var(--amber)]/20 text-[var(--amber-soft)]")
              }
            >
              {verified ? "Verifiziert" : "Nicht verifiziert"}
            </span>
          </div>
          {!verified && (
            <button
              type="button"
              onClick={handleResend}
              disabled={resending}
              className="mt-1 text-xs text-[var(--faint)] hover:text-[var(--gold-soft)] disabled:opacity-50"
            >
              {resending ? "…" : "Bestätigungs-E-Mail erneut senden"}
            </button>
          )}
          <p className="mt-1 text-[11px] text-[var(--faint)]">
            E-Mail-Adresse ändern folgt in einem späteren Ausbauschritt.
          </p>
        </div>

        {error && <p className="text-xs text-[var(--red-soft)]">{error}</p>}

        <button
          type="submit"
          disabled={saving}
          className="rounded-full bg-[var(--gold)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] hover:opacity-90 disabled:opacity-50"
        >
          {saving ? "…" : "Speichern"}
        </button>
      </form>
    </div>
  );
}

function PasswordCard({ onToast }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  const strength = passwordStrength(newPassword);

  async function handleSave(e) {
    e.preventDefault();
    setError(null);

    if (newPassword.length < 6) {
      setError("Das Passwort muss mindestens 6 Zeichen lang sein.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Die Passwörter stimmen nicht überein.");
      return;
    }

    setSaving(true);
    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) throw error;
      setNewPassword("");
      setConfirmPassword("");
      onToast("success", "Passwort erfolgreich geändert.");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className={cardClass}>
      <h2 className="font-display mb-4 text-lg text-[var(--text)]">Passwort ändern</h2>

      <form onSubmit={handleSave} className="space-y-4">
        <div>
          <label className={labelClass}>Neues Passwort</label>
          <input
            type="password"
            required
            minLength={6}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className={inputClass}
          />
          {newPassword && (
            <p className={"mt-1 text-[11px] " + strength.color}>Passwortstärke: {strength.label}</p>
          )}
        </div>

        <div>
          <label className={labelClass}>Neues Passwort bestätigen</label>
          <input
            type="password"
            required
            minLength={6}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={inputClass}
          />
        </div>

        {error && <p className="text-xs text-[var(--red-soft)]">{error}</p>}

        <button
          type="submit"
          disabled={saving}
          className="rounded-full bg-[var(--gold)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] hover:opacity-90 disabled:opacity-50"
        >
          {saving ? "…" : "Passwort speichern"}
        </button>
      </form>
    </div>
  );
}

export function ProfilePage({ session }) {
  const [toast, setToast] = useState(null);

  function showToast(type, message) {
    setToast({ id: Date.now(), type, message });
  }

  if (!session) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-16 text-center text-sm text-[var(--muted)]">
        Bitte melde dich an, um dein Profil zu sehen.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="font-display mb-8 text-2xl text-[var(--text)]">Mein Profil</h1>

      <div className="space-y-6">
        <PersonalInfoCard session={session} onToast={showToast} />
        <PasswordCard onToast={showToast} />
      </div>

      <Toast toast={toast} onDismiss={() => setToast(null)} />
    </div>
  );
}
