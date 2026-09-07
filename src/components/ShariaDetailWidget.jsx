// src/components/ShariaDetailWidget.jsx
//
// Eigenständiges, wiederverwendbares Widget für die granulare
// Sharia-Screening-Aufschlüsselung. Zwei Varianten über `variant`:
//   - "card"  : inline, aufklappbare Karte (Standard im Screener)
//   - "modal" : Overlay-Dialog (z.B. von einem "Details"-Button aus geöffnet)
//
// WICHTIG — Grenzwerte sind konfigurierbar, kein Hardcoding:
// Euer aktueller Screening-Lauf verwendet 30% für Verschuldung/Cash-Quote,
// nicht 33%. Default-Werte unten spiegeln das. Falls ihr auf 33%
// umstellt, muss das SOWOHL hier als auch im Python-Screening-Skript
// geändert werden — sonst zeigt die UI etwas anderes an, als tatsächlich
// gerechnet wurde.
//
// "Non-Halal Income" ist als dritte Kennzahl vorgesehen, aber in eurer
// aktuellen Datenbasis nicht befüllt (siehe stock.financials) — das Widget
// zeigt in dem Fall "Nicht verfügbar" statt eine Zahl zu erfinden.

import { useEffect } from "react";

export const DEFAULT_SHARIA_THRESHOLDS = {
  debtRatio: 30, // Verschuldung / Marktkapitalisierung
  cashRatio: 30, // Cash & Zinsanlagen / Marktkapitalisierung
  nonHalalIncome: 5, // Zinstragende/unzulässige Erträge / Umsatz
};

function RatioRow({ label, value, max }) {
  const available = value != null && !Number.isNaN(value);
  const pct = available ? Math.min(100, (value / max) * 100) : 0;
  const over = available && value > max;

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-xs">
        <span className="text-[var(--muted)]">{label}</span>
        {available ? (
          <span className="font-[IBM_Plex_Mono]">
            <span className={over ? "text-[var(--red-soft)]" : "text-[var(--emerald-soft)]"}>
              Dein Wert: {value}%
            </span>
            <span className="text-[var(--faint)]"> · Erlaubt: max. {max}%</span>
          </span>
        ) : (
          <span className="text-[var(--faint)]">Nicht verfügbar</span>
        )}
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--track)]">
        <div
          className={"h-full rounded-full " + (over ? "bg-[var(--red-soft)]" : available ? "bg-[var(--emerald)]" : "bg-[var(--track)]")}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function BusinessCheckRow({ label, pass }) {
  return (
    <li className="flex items-start gap-2 text-sm">
      <span
        className={
          "mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-[10px] " +
          (pass ? "bg-[var(--emerald)]/20 text-[var(--emerald-soft)]" : "bg-[var(--red)]/20 text-[var(--red-soft)]")
        }
      >
        {pass ? "✓" : "✕"}
      </span>
      <span className="text-[var(--text-soft)]">{label}</span>
    </li>
  );
}

/**
 * @param {object} stock - erwartet { ticker, name, status, business: [{label, pass}],
 *   financials: [{label, value, max}] } — passend zum bestehenden Amanah-Schema
 * @param {"card"|"modal"} variant
 * @param {object} thresholds - überschreibt DEFAULT_SHARIA_THRESHOLDS teilweise
 * @param {boolean} open - nur für variant="modal" relevant
 * @param {() => void} onClose - nur für variant="modal" relevant
 */
export function ShariaDetailWidget({
  stock,
  variant = "card",
  thresholds = {},
  open = true,
  onClose,
}) {
  const t = { ...DEFAULT_SHARIA_THRESHOLDS, ...thresholds };

  // Financials aus dem Stock-Objekt ziehen, mit Fallback auf "nicht verfügbar"
  const findRatio = (keyword) => stock.financials?.find((f) => f.label.toLowerCase().includes(keyword));
  const debt = findRatio("verschuldung");
  const cash = findRatio("cash");
  const nonHalal = findRatio("zinstragende") || findRatio("non-halal") || findRatio("unzulässig");

  useEffect(() => {
    if (variant !== "modal" || !open) return undefined;
    function onKeyDown(e) {
      if (e.key === "Escape") onClose?.();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [variant, open, onClose]);

  const content = (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Sharia-Screening — Detailaufschlüsselung</p>
          <p className="mt-1 text-sm text-[var(--text)]">{stock.name} ({stock.ticker})</p>
        </div>
        {variant === "modal" && (
          <button onClick={onClose} className="text-[var(--faint)] hover:text-[var(--text)]" aria-label="Schließen">
            ✕
          </button>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.15em] text-[var(--faint)]">Business Activity</p>
          <ul className="space-y-2">
            {(stock.business || []).map((b, i) => (
              <BusinessCheckRow key={i} label={b.label} pass={b.pass} />
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <p className="mb-1 text-xs uppercase tracking-[0.15em] text-[var(--faint)]">Financial Ratios</p>
          <RatioRow label="Verschuldung / Marktkapitalisierung" value={debt?.value} max={t.debtRatio} />
          <RatioRow label="Cash & Zinsanlagen / Marktkapitalisierung" value={cash?.value} max={t.cashRatio} />
          <RatioRow label="Non-Halal Income / Umsatz" value={nonHalal?.value} max={t.nonHalalIncome} />
        </div>
      </div>
    </div>
  );

  if (variant === "card") return content;

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4" onClick={onClose}>
      <div className="w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
        {content}
      </div>
    </div>
  );
}
