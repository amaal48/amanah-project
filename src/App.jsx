import React, { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ALL_STOCKS } from "./data/stocks";

/* ============================================================
   AMANAH — Basis-Prototyp
   Enthält: Startseite + Aktien-Detailseite in einer Datei,
   per einfachem State-Switch navigierbar (als Grundlage gedacht,
   nicht als fertiges Routing).
   ============================================================ */

/* ---------- Gemeinsame Bausteine ---------- */

// Signatur-Element: achtzackiger Stern (Khatam) als Compliance-Badge
function ComplianceStar({ score = 92, size = 56, label = "Halal" }) {
  const radius = size / 2 - 4;
  const circumference = 2 * Math.PI * radius;
  const dash = (score / 100) * circumference;
  const starPath = (cx, cy, rOuter, rInner) => {
    let pts = [];
    for (let i = 0; i < 16; i++) {
      const r = i % 2 === 0 ? rOuter : rInner;
      const a = (Math.PI / 8) * i - Math.PI / 2;
      pts.push(`${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`);
    }
    return `M${pts.join("L")}Z`;
  };
  const cx = size / 2;
  const cy = size / 2;
  return (
    <div className="relative inline-flex flex-col items-center gap-1.5">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={cx} cy={cy} r={radius} fill="none" stroke="var(--border)" strokeWidth="2" />
        <circle
          cx={cx} cy={cy} r={radius} fill="none" stroke="var(--gold)" strokeWidth="2"
          strokeDasharray={`${dash} ${circumference}`} strokeLinecap="round"
          transform={`rotate(-90 ${cx} ${cy})`}
        />
        <path d={starPath(cx, cy, radius - 8, (radius - 8) * 0.55)} fill="var(--bg)" stroke="var(--gold-soft)" strokeWidth="1" />
        <text x={cx} y={cy + 4} textAnchor="middle" fontSize={size * 0.22} fontFamily="IBM Plex Mono, monospace" fill="var(--gold-soft)">
          {score}
        </text>
      </svg>
      {label && <span className="text-[10px] tracking-[0.15em] uppercase text-[var(--muted)]">{label}</span>}
    </div>
  );
}

const CRITERIA_INFO = [
  ["Kerngeschäft", "Prüft, ob das Hauptgeschäft der Firma in einer erlaubten Branche liegt (z. B. keine Bank, kein Alkohol, keine Rüstung)."],
  ["Nebeneinnahmen", "Auch bei erlaubten Firmen darf nur ein kleiner Teil des Umsatzes aus unzulässigen Quellen wie Zinsen stammen."],
  ["Wesentlicher Umsatz", "Prüft, ob ein Großteil des Umsatzes aus unzulässigen Geschäftsfeldern wie dem Zinsgeschäft stammt."],
  ["Fondsbasis", "Bei ETFs/Fonds wird geprüft, in welche Branchen die zugrunde liegenden Werte investieren."],
  ["konventionellen Banken", "Prüft, ob der Fonds Anteile an klassischen, zinsbasierten Banken hält."],
  ["einzeln gescreent", "Jede einzelne Position im Fonds wird separat nach den gleichen Kriterien geprüft."],
];
function getCriterionInfo(label) {
  const hit = CRITERIA_INFO.find(([key]) => label.includes(key));
  return hit ? hit[1] : "Teil der Sharia-Screening-Prüfung.";
}

function Criterion({ b }) {
  return (
    <li className="flex items-start gap-2 text-sm">
      <span className={"mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-[10px] " +
        (b.pass ? "bg-[var(--emerald)]/20 text-[var(--emerald-soft)]" : "bg-[var(--red)]/20 text-[var(--red-soft)]")}>
        {b.pass ? "✓" : "✕"}
      </span>
      <span className="text-[var(--text-soft)]">{b.label}</span>
      <span
        title={getCriterionInfo(b.label)}
        className="ml-auto flex h-4 w-4 flex-shrink-0 cursor-help items-center justify-center rounded-full border border-[var(--border)] text-[9px] text-[var(--faint)] hover:border-[var(--muted)] hover:text-[var(--muted)]"
      >
        ?
      </span>
    </li>
  );
}

function getWhyText(stock) {
  if (stock.status === "Nicht Halal") {
    const failedBiz = stock.business.find((b) => !b.pass);
    if (failedBiz) return `Nicht Halal, weil: ${failedBiz.label}.`;
    const failedRatio = stock.financials.find((f) => f.value > f.max);
    if (failedRatio) return `Nicht Halal, weil ${failedRatio.label} bei ${failedRatio.value}% liegt (erlaubt: max. ${failedRatio.max}%).`;
    return "Diese Aktie erfüllt mindestens ein Ausschlusskriterium.";
  }
  if (stock.status === "Grenzwertig") {
    return stock.note || "Mindestens eine Kennzahl liegt nah am AAOIFI-Grenzwert und sollte regelmäßig neu geprüft werden.";
  }
  return "Alle Geschäftsmodell- und Finanz-Kriterien liegen innerhalb der AAOIFI-Grenzwerte.";
}

const STATUS_STYLES = {
  "Halal": { text: "text-[var(--emerald-soft)]", bg: "bg-[var(--emerald)]/15", border: "border-[var(--emerald)]/40", dot: "bg-[var(--emerald-soft)]" },
  "Grenzwertig": { text: "text-[var(--amber-soft)]", bg: "bg-[var(--amber)]/15", border: "border-[var(--amber)]/40", dot: "bg-[var(--amber-soft)]" },
  "Nicht Halal": { text: "text-[var(--red-soft)]", bg: "bg-[var(--red)]/15", border: "border-[var(--red)]/40", dot: "bg-[var(--red-soft)]" },
};

function StatusPill({ status }) {
  const s = STATUS_STYLES[status] || STATUS_STYLES["Nicht Halal"];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] tracking-wide uppercase border ${s.bg} ${s.text} ${s.border}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {status}
    </span>
  );
}

function RatioBar({ label, value, max }) {
  const pct = Math.min(100, (value / max) * 100);
  const over = value > max;
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-xs">
        <span className="text-[var(--muted)]">{label}</span>
        <span className="font-[IBM_Plex_Mono]">
          <span className={over ? "text-[var(--red-soft)]" : "text-[var(--emerald-soft)]"}>Dein Wert: {value}%</span>
          <span className="text-[var(--faint)]"> · Erlaubt: max. {max}%</span>
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--track)]">
        <div className={"h-full rounded-full " + (over ? "bg-[var(--red-soft)]" : "bg-[var(--emerald)]")} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

/* ---------- Kurs-Chart mit Zeitfiltern ----------
   generateMockSeries() erzeugt Demo-Kursreihen. fetchPriceHistory() ist die
   Stelle, an der eine echte Marktdaten-API angebunden wird — siehe Hinweise
   am Ende der Datei / im Chat für konkrete Anbieter und Anbindung. */

const CHART_RANGES = [
  { key: "1W", label: "1W", days: 7 },
  { key: "1M", label: "1M", days: 30 },
  { key: "3M", label: "3M", days: 90 },
  { key: "6M", label: "6M", days: 180 },
  { key: "1Y", label: "1J", days: 365 },
  { key: "YTD", label: "YTD", days: null },
];

function daysSinceYearStart() {
  const now = new Date();
  const jan1 = new Date(now.getFullYear(), 0, 1);
  return Math.max(1, Math.round((now - jan1) / 86400000));
}

function parseEuro(str) {
  return parseFloat(str.replace(/\./g, "").replace(",", ".").replace("$", "").replace("€", "").trim());
}
function parsePercent(str) {
  return parseFloat(str.replace("%", "").replace(",", "."));
}

// Deterministischer Pseudo-Zufallswert (gleiches Ticker+Range ergibt immer dieselbe Kurve)
function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function generateMockSeries(ticker, days, currentPrice) {
  const seedBase = ticker.split("").reduce((a, c) => a + c.charCodeAt(0), 0) + days;
  const rand = seededRandom(seedBase);
  const points = [];
  let price = currentPrice * (0.92 + rand() * 0.06);
  const today = new Date();
  for (let i = days; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    price = Math.max(price + (rand() - 0.485) * currentPrice * 0.012, currentPrice * 0.5);
    points.push({ date: d.toISOString().slice(0, 10), price: Number(price.toFixed(2)) });
  }
  points[points.length - 1].price = currentPrice; // heutiger Kurs bleibt exakt
  return points;
}

// Versucht die echte API-Route; fällt bei Fehler (z.B. Function noch nicht
// eingerichtet, kein API-Key, ISIN fehlt) automatisch auf Demo-Daten zurück,
// damit die App auch ohne Backend-Setup lauffähig bleibt.
async function fetchPriceHistory(ticker, rangeKey, currentPrice) {
  const range = CHART_RANGES.find((r) => r.key === rangeKey);
  const days = range.days ?? daysSinceYearStart();

  try {
    const res = await fetch(`/api/price-history?symbol=${ticker}&range=${rangeKey}`);
    if (!res.ok) throw new Error("API nicht erreichbar");
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) throw new Error("Keine Daten");
    return data;
  } catch (err) {
    // Fallback: Demo-Daten (z.B. während der lokalen Entwicklung ohne Vercel-Function)
    await new Promise((r) => setTimeout(r, 150));
    return generateMockSeries(ticker, days, currentPrice);
  }
}

function StockChart({ stock }) {
  const [range, setRange] = useState("3M");
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentPrice = parseEuro(stock.price);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchPriceHistory(stock.ticker, range, currentPrice).then((data) => {
      if (!cancelled) {
        setSeries(data);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stock.ticker, range]);

  const first = series[0]?.price;
  const last = series[series.length - 1]?.price;
  const changeAbs = first != null ? last - first : 0;
  const changePct = first ? (changeAbs / first) * 100 : 0;
  const up = changeAbs >= 0;
  const color = up ? "var(--emerald-soft)" : "var(--red-soft)";

  return (
    <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          {loading ? (
            <span className="text-sm text-[var(--faint)]">Lade Kursdaten…</span>
          ) : (
            <>
              <span className={"font-[IBM_Plex_Mono] text-lg " + (up ? "text-[var(--emerald-soft)]" : "text-[var(--red-soft)]")}>
                {up ? "+" : ""}{changePct.toFixed(2)}%
              </span>
              <span className="ml-2 text-xs text-[var(--muted)]">
                ({up ? "+" : ""}{changeAbs.toFixed(2)} $) im gewählten Zeitraum
              </span>
            </>
          )}
        </div>
        <div className="flex gap-1 rounded-full border border-[var(--border)] p-1">
          {CHART_RANGES.map((r) => (
            <button
              key={r.key}
              onClick={() => setRange(r.key)}
              className={
                "rounded-full px-3 py-1 text-xs font-[IBM_Plex_Mono] " +
                (range === r.key ? "bg-[var(--gold)] text-[var(--bg)]" : "text-[var(--muted)] hover:text-[var(--text)]")
              }
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex h-56 items-center justify-center text-xs text-[var(--faint)]">Lade Kursdaten…</div>
      ) : (
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={series} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="chartFade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.25} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" hide />
            <YAxis domain={["dataMin", "dataMax"]} hide />
            <Tooltip
              contentStyle={{ background: "var(--bg-deep)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }}
              labelStyle={{ color: "var(--muted)" }}
              formatter={(v) => [`${v.toFixed(2)} $`, "Kurs"]}
            />
            <Area type="monotone" dataKey="price" stroke={color} fill="url(#chartFade)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      )}

      <div className="mt-3 flex items-center justify-between text-[11px] text-[var(--faint)]">
        <span>Quelle: Demo-Daten (Platzhalter — siehe fetchPriceHistory für echte API-Anbindung)</span>
      </div>
    </div>
  );
}

/* ---------- Daten ---------- */

// Echte Screening-Ergebnisse aus eurer CSV (503 Unternehmen) statt Fantasie-Daten.
const sampleStocks = ALL_STOCKS;

// Portfolio-Beispiel: 4 real vorhandene Titel mit angenommenen Gewichtungen
// (die Gewichtung selbst ist weiterhin frei erfunden — echte Portfolios kommen
// erst mit Nutzerkonten/Depot-Anbindung).
const holdings = ["MSFT", "NVDA", "GOOGL", "JPM"]
  .map((t) => sampleStocks.find((s) => s.ticker === t))
  .filter(Boolean)
  .map((s, i) => ({ ticker: s.ticker, weight: [38, 27, 20, 15][i], status: s.status }));

/* ---------- Startseite ---------- */

function StockCard({ s, expanded, onToggle }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-colors hover:border-[var(--emerald)]/60">
      <button onClick={onToggle} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
        <div className="flex items-center gap-4">
          <ComplianceStar score={s.score} size={48} label={s.status === "Halal" ? "Halal" : s.status === "Grenzwertig" ? "Prüfen" : "Nicht Halal"} />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-[IBM_Plex_Mono] text-sm text-[var(--text)] tracking-wide">{s.ticker}</span>
              <StatusPill status={s.status} />
            </div>
            <p className="mt-1 text-[15px] text-[var(--text)]/90">{s.name}</p>
            <p className="text-xs text-[var(--muted)]">{s.sector} · Verschuldung {s.debt}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="font-[IBM_Plex_Mono] text-sm text-[var(--text)]">{s.price}</p>
            <p className={"font-[IBM_Plex_Mono] text-xs " + (s.up ? "text-[var(--emerald-soft)]" : "text-[var(--red-soft)]")}>{s.change}</p>
          </div>
          <span className={"text-[var(--faint)] transition-transform " + (expanded ? "rotate-180" : "")}>⌄</span>
        </div>
      </button>

      {expanded && (
        <div className="grid gap-6 border-t border-[var(--border)] px-5 py-5 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Geschäftsmodell-Screen</p>
            <ul className="space-y-2">
              {s.business.map((b, i) => <Criterion key={i} b={b} />)}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Finanz-Ratios (AAOIFI-Grenzwerte)</p>
            <div className="space-y-3">{s.financials.map((f, i) => <RatioBar key={i} {...f} />)}</div>
            {s.purification != null && (
              <p className="mt-4 text-xs text-[var(--muted)]">
                Spendenanteil auf Dividenden: geschätzt{" "}
                <span className="text-[var(--gold-soft)] font-[IBM_Plex_Mono]">{s.purification}%</span>{" "}
                zur Bereinigung unzulässiger Nebeneinnahmen.
              </p>
            )}
            {s.note && (
              <p className="mt-4 rounded-lg border border-[var(--amber)]/40 bg-[var(--amber)]/10 px-3 py-2 text-xs text-[var(--amber-soft)]">
                ⚠ {s.note}
              </p>
            )}
            <p className="mt-4 border-t border-[var(--border)] pt-3 text-xs text-[var(--text-soft)]">
              <span className="font-medium text-[var(--text)]">Warum {s.status}? </span>
              {getWhyText(s)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

const SECTORS = [...new Set(sampleStocks.map((s) => s.sector))].sort();
const STATUSES = ["Halal", "Grenzwertig", "Nicht Halal"];

function FilterChip({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={
        "rounded-full border px-3 py-1.5 text-xs transition-colors " +
        (active
          ? "border-[var(--gold)] bg-[var(--gold)]/15 text-[var(--gold-soft)]"
          : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--emerald)]/60")
      }
    >
      {children}
    </button>
  );
}

function HomePage({ onOpenStock, onNavigate, watchlist, onToggleWatchlist, compareTickers, onToggleCompare, presetFilter }) {
  const [query, setQuery] = useState("");
  const [expandedTicker, setExpandedTicker] = useState("MSFT");
  const [dividend, setDividend] = useState("1000");

  // Screener: Suche + Filter (Schritt 1 aus dem UX-Plan)
  const [screenerQuery, setScreenerQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeStatuses, setActiveStatuses] = useState([]);
  const [activeSectors, setActiveSectors] = useState([]);
  const [maxDebt, setMaxDebt] = useState(70);
  const [sortBy, setSortBy] = useState("score");
  const [showFilters, setShowFilters] = useState(false);

  // Von der Sidebar gesetzter Status-/Sektor-Filter übernehmen
  React.useEffect(() => {
    if (!presetFilter) return;
    setShowFilters(true);
    if (presetFilter.type === "status") setActiveStatuses([presetFilter.value]);
    if (presetFilter.type === "sector") setActiveSectors([presetFilter.value]);
  }, [presetFilter]);

  const toggleStatus = (s) =>
    setActiveStatuses((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));
  const toggleSector = (s) =>
    setActiveSectors((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  const suggestions = screenerQuery
    ? sampleStocks.filter(
        (s) =>
          s.ticker.toLowerCase().includes(screenerQuery.toLowerCase()) ||
          s.name.toLowerCase().includes(screenerQuery.toLowerCase())
      ).slice(0, 6)
    : [];

  const filteredStocks = sampleStocks
    .filter((s) => (screenerQuery ? suggestions.includes(s) : true))
    .filter((s) => (activeStatuses.length ? activeStatuses.includes(s.status) : true))
    .filter((s) => (activeSectors.length ? activeSectors.includes(s.sector) : true))
    .filter((s) => (s.debt === "—" ? true : parseInt(s.debt) <= maxDebt))
    .sort((a, b) => {
      if (sortBy === "score") return b.score - a.score;
      if (sortBy === "az") return a.name.localeCompare(b.name);
      if (sortBy === "price") return parseEuro(b.price) - parseEuro(a.price);
      if (sortBy === "debt") return parseFloat(a.debt) - parseFloat(b.debt);
      return 0;
    });

  // Pagination: bei über 500 Titeln nicht alles auf einmal rendern
  const [visibleCount, setVisibleCount] = useState(30);
  useEffect(() => {
    setVisibleCount(30);
  }, [screenerQuery, activeStatuses, activeSectors, maxDebt, sortBy]);
  const visibleStocks = filteredStocks.slice(0, visibleCount);

  const activeFilterChips = [
    ...activeStatuses.map((s) => ({ type: "status", value: s })),
    ...activeSectors.map((s) => ({ type: "sector", value: s })),
    ...(maxDebt < 70 ? [{ type: "debt", value: `Verschuldung ≤ ${maxDebt}%` }] : []),
  ];

  function removeFilterChip(chip) {
    if (chip.type === "status") toggleStatus(chip.value);
    if (chip.type === "sector") toggleSector(chip.value);
    if (chip.type === "debt") setMaxDebt(70);
  }

  const halalWeight = holdings.filter((h) => h.status === "Halal").reduce((sum, h) => sum + h.weight, 0);
  const purificationRate = 0.018;
  const dividendNum = parseFloat(dividend.replace(",", ".")) || 0;
  const purifyAmount = (dividendNum * purificationRate).toFixed(2);

  return (
    <div className="font-body">
      {/* HEADER (Navigation liegt jetzt in der linken Sidebar) */}
      <header className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <ComplianceStar score={100} size={34} label="" />
          <span className="font-display text-lg tracking-wide">Amanah</span>
        </div>
        <button className="rounded-full border border-[var(--gold)]/50 px-4 py-2 text-sm text-[var(--gold-soft)] transition-colors hover:bg-[var(--gold)]/10">
          Kostenlos starten
        </button>
      </header>

      {/* HERO */}
      <section className="bg-lattice relative mx-auto max-w-[1440px] px-6 pb-20 pt-12">
        <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Halal Investieren · Datenbasierte Aktienanalyse
            </p>
            <h1 className="font-display text-5xl leading-[1.1] tracking-tight text-[var(--text)] md:text-6xl">
              Investiere nach deinen Werten.
              <br />
              <span className="text-[var(--gold-soft)]">Entscheide mit Daten.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--muted)]">
              Amanah prüft jede Aktie nach Sharia-Kriterien und liefert dir
              verständliche Markteinschätzungen — auch mit kleinem Budget.
            </p>
            <div className="mt-8 flex max-w-lg items-center rounded-full border border-[var(--border)] bg-[var(--surface)] pl-5 pr-1.5 py-1.5">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Aktie, ETF oder ISIN suchen…"
                className="w-full bg-transparent text-sm text-[var(--text)] placeholder:text-[var(--faint)] focus:outline-none"
              />
              <button className="rounded-full bg-[var(--gold)] px-4 py-2 text-sm font-medium text-[var(--bg)] transition-opacity hover:opacity-90">
                Prüfen
              </button>
            </div>
            <p className="mt-3 text-xs text-[var(--faint)]">z. B. „NVDA", „ICLN" oder „DE0005557508"</p>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[var(--muted)]">
              <span className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-[var(--gold)]" /> Unabhängig von Brokern
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-[var(--gold)]" /> Keine Pflicht zur Depoteröffnung
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-[var(--gold)]" /> Keine Produktbindung
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-[var(--border)]">
              <div className="absolute h-56 w-56 rounded-full border border-[var(--border)]" />
              <ComplianceStar score={94} size={160} label="Ø Portfolio-Score" />
            </div>
          </div>
        </div>
      </section>

      {/* TOP-LISTEN */}
      <section className="mx-auto max-w-[1440px] px-6 pb-4 pt-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { title: "Top nach Score", desc: "Höchste Sharia-Scores zuerst", action: () => { setActiveStatuses(["Halal"]); setSortBy("score"); } },
            { title: "Grenzwertige Titel", desc: "Kennzahlen knapp über dem Limit — regelmäßig neu prüfen", action: () => { setActiveStatuses(["Grenzwertig"]); setSortBy("score"); } },
            { title: "Niedrigste Verschuldung", desc: "Solideste Bilanzen zuerst", action: () => { setActiveStatuses(["Halal"]); setSortBy("debt"); } },
          ].map((tile) => (
            <a
              key={tile.title}
              href="#screener"
              onClick={tile.action}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5 transition-colors hover:border-[var(--emerald)]/60"
            >
              <p className="text-[15px] text-[var(--text)]">{tile.title}</p>
              <p className="mt-1 text-xs text-[var(--muted)]">{tile.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* SCREENER: Sticky Search + Filter + dreistufige Ergebnisliste */}
      <section id="screener" className="mx-auto max-w-[1440px] px-6 py-16">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">Screener</p>
            <h2 className="font-display mt-2 text-2xl text-[var(--text)]">Aktien durchsuchen</h2>
            <p className="mt-1 text-xs text-[var(--faint)]">
              Branche & Finanzkennzahlen aus eigenem Screening-Lauf · Kurse sind Demo-Werte, Score ist eine vereinfachte Kennzahl aus Verschuldung/Cash-Quote
            </p>
          </div>
        </div>

        {/* Sticky Search */}
        <div className="sticky top-0 z-20 -mx-6 bg-[var(--bg)]/95 px-6 py-3 backdrop-blur">
          <div className="relative">
            <div className="flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3">
              <input
                value={screenerQuery}
                onChange={(e) => { setScreenerQuery(e.target.value); setShowSuggestions(true); }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                placeholder="Ticker, Firmenname oder ISIN suchen…"
                className="w-full bg-transparent text-sm text-[var(--text)] placeholder:text-[var(--faint)] focus:outline-none"
              />
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={
                  "flex-shrink-0 rounded-full border px-4 py-1.5 text-xs " +
                  (showFilters ? "border-[var(--gold)] text-[var(--gold-soft)]" : "border-[var(--border)] text-[var(--muted)]")
                }
              >
                Filter {activeFilterChips.length > 0 && `(${activeFilterChips.length})`}
              </button>
            </div>

            {/* Live-Vorschläge während des Tippens */}
            {showSuggestions && screenerQuery && (
              <div className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xl">
                {suggestions.length === 0 && (
                  <p className="px-5 py-4 text-sm text-[var(--faint)]">Keine Treffer für „{screenerQuery}"</p>
                )}
                {suggestions.map((s) => (
                  <button
                    key={s.ticker}
                    onMouseDown={() => onOpenStock(s.ticker)}
                    className="flex w-full items-center justify-between gap-3 px-5 py-3 text-left hover:bg-[var(--track)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-[IBM_Plex_Mono] text-xs text-[var(--muted)]">{s.ticker}</span>
                      <span className="text-sm text-[var(--text)]">{s.name}</span>
                    </div>
                    <StatusPill status={s.status} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Filter-Panel (aufklappbar) */}
        {showFilters && (
          <div className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="grid gap-5 md:grid-cols-3">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Status</p>
                <div className="flex flex-wrap gap-2">
                  {STATUSES.map((s) => (
                    <FilterChip key={s} active={activeStatuses.includes(s)} onClick={() => toggleStatus(s)}>
                      {s}
                    </FilterChip>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Sektor</p>
                <div className="flex flex-wrap gap-2">
                  {SECTORS.map((s) => (
                    <FilterChip key={s} active={activeSectors.includes(s)} onClick={() => toggleSector(s)}>
                      {s}
                    </FilterChip>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  <span>Verschuldung ≤</span>
                  <span className="font-[IBM_Plex_Mono] normal-case tracking-normal text-[var(--gold-soft)]">{maxDebt}%</span>
                </div>
                <input
                  type="range" min="0" max="70" value={maxDebt}
                  onChange={(e) => setMaxDebt(parseInt(e.target.value))}
                  className="w-full accent-[var(--gold)]"
                />
                <div className="mt-3 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  <span>Sortierung</span>
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--text)] focus:outline-none"
                >
                  <option value="score">Nach Score</option>
                  <option value="price">Nach Kurs</option>
                  <option value="debt">Nach Verschuldung (aufsteigend)</option>
                  <option value="az">Alphabetisch</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Aktive Filter-Chips */}
        {activeFilterChips.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {activeFilterChips.map((chip, i) => (
              <button
                key={i}
                onClick={() => removeFilterChip(chip)}
                className="flex items-center gap-1.5 rounded-full border border-[var(--emerald)]/40 bg-[var(--emerald)]/10 px-3 py-1 text-xs text-[var(--emerald-soft)]"
              >
                {chip.value} <span className="text-[var(--emerald-soft)]/70">✕</span>
              </button>
            ))}
            <button
              onClick={() => { setActiveStatuses([]); setActiveSectors([]); setMaxDebt(70); }}
              className="text-xs text-[var(--faint)] hover:text-[var(--muted)]"
            >
              Alle zurücksetzen
            </button>
          </div>
        )}

        {/* Ergebnisliste */}
        <div className="mt-6 mb-3 flex items-center justify-between">
          <p className="text-xs text-[var(--faint)]">
            {filteredStocks.length} {filteredStocks.length === 1 ? "Titel" : "Titel"} gefunden
            {filteredStocks.length > visibleStocks.length && ` · ${visibleStocks.length} angezeigt`}
          </p>
        </div>
        <div className="grid gap-3">
          {filteredStocks.length === 0 && (
            <p className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-8 text-center text-sm text-[var(--muted)]">
              Keine Aktien passen zu den aktuellen Filtern.
            </p>
          )}
          {visibleStocks.map((s) => (
            <div key={s.ticker}>
              <StockCard
                s={s}
                expanded={expandedTicker === s.ticker}
                onToggle={() => setExpandedTicker(expandedTicker === s.ticker ? null : s.ticker)}
              />
              <div className="ml-2 mt-1 flex items-center gap-4 text-xs">
                <button onClick={() => onOpenStock(s.ticker)} className="text-[var(--faint)] hover:text-[var(--muted)]">
                  Zur Detailseite →
                </button>
                <button
                  onClick={() => onToggleWatchlist(s.ticker)}
                  className={watchlist.includes(s.ticker) ? "text-[var(--gold-soft)]" : "text-[var(--faint)] hover:text-[var(--muted)]"}
                >
                  {watchlist.includes(s.ticker) ? "✓ In Watchlist" : "+ Watchlist"}
                </button>
                <label className="flex items-center gap-1.5 text-[var(--faint)] hover:text-[var(--muted)]">
                  <input
                    type="checkbox"
                    checked={compareTickers.includes(s.ticker)}
                    onChange={() => onToggleCompare(s.ticker)}
                    className="accent-[var(--gold)]"
                  />
                  Vergleichen
                </label>
              </div>
            </div>
          ))}
        </div>
        {filteredStocks.length > visibleStocks.length && (
          <div className="mt-5 flex justify-center">
            <button
              onClick={() => setVisibleCount((c) => c + 30)}
              className="rounded-full border border-[var(--border)] px-5 py-2 text-sm text-[var(--muted)] hover:border-[var(--gold)]/50 hover:text-[var(--gold-soft)]"
            >
              Weitere {Math.min(30, filteredStocks.length - visibleStocks.length)} von {filteredStocks.length - visibleStocks.length} laden
            </button>
          </div>
        )}
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="mx-auto max-w-[1440px] px-6 pb-16">
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">Portfolio</p>
        <h2 className="font-display mt-2 text-2xl text-[var(--text)]">Deine Portfolio-Reinheit</h2>
        <div className="mt-6 grid gap-8 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:grid-cols-[auto_1fr] md:p-8">
          <div className="flex flex-shrink-0 justify-center">
            <ComplianceStar score={halalWeight} size={120} label="Halal-Anteil" />
          </div>
          <div>
            <div className="mb-4 h-3 w-full overflow-hidden rounded-full bg-[var(--track)]">
              {holdings.map((h) => (
                <div
                  key={h.ticker}
                  className={"float-left h-full " + (h.status === "Halal" ? "bg-[var(--emerald)]" : "bg-[var(--red)]")}
                  style={{ width: `${h.weight}%` }}
                  title={`${h.ticker} · ${h.weight}%`}
                />
              ))}
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {holdings.map((h) => (
                <div key={h.ticker} className="flex items-center justify-between rounded-lg border border-[var(--border)] px-3 py-2 text-sm">
                  <span className="font-[IBM_Plex_Mono] text-[var(--text)]">{h.ticker}</span>
                  <span className="text-[var(--muted)]">{h.weight}% Gewichtung</span>
                  <StatusPill status={h.status} />
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-[var(--muted)]">
              {holdings.filter((h) => h.status !== "Halal").length} Position mit Klärungsbedarf —
              reduziere sie oder gleiche sie über den Reinheits-Rechner aus.
            </p>
          </div>
        </div>
      </section>

      {/* REINHEITS-RECHNER */}
      <section id="rechner" className="mx-auto max-w-[1440px] px-6 pb-16">
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">Werkzeug</p>
        <h2 className="font-display mt-2 text-2xl text-[var(--text)]">Reinheits-Rechner für Dividenden</h2>
        <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">
          Auch bei Halal-konformen Aktien enthalten Dividenden oft einen kleinen Anteil aus
          unzulässigen Nebeneinnahmen (z. B. Zinserträge). Dieser Anteil sollte gespendet werden.
        </p>
        <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
          <div className="flex items-center gap-3">
            <span className="text-sm text-[var(--muted)]">Erhaltene Dividende</span>
            <div className="flex items-center rounded-full border border-[var(--border)] bg-[var(--bg)] px-4 py-2">
              <span className="mr-1 text-[var(--muted)]">€</span>
              <input
                value={dividend}
                onChange={(e) => setDividend(e.target.value)}
                className="w-24 bg-transparent font-[IBM_Plex_Mono] text-sm text-[var(--text)] focus:outline-none"
              />
            </div>
          </div>
          <div className="h-px w-full bg-[var(--border)] sm:h-10 sm:w-px" />
          <div className="text-right sm:text-left">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Geschätzter Spendenanteil</p>
            <p className="font-[IBM_Plex_Mono] text-2xl text-[var(--gold-soft)]">{purifyAmount} €</p>
          </div>
        </div>
      </section>

      {/* MARKTBERICHT (vormals "KI-Agent") */}
      <section id="bericht" className="mx-auto max-w-[1440px] px-6 pb-24">
        <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--surface)] to-[var(--bg)] p-8 md:p-10">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">Marktbericht</p>
              <h2 className="font-display mt-2 text-2xl text-[var(--text)]">Diese Woche im Überblick</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--muted)]">
                Halal-konforme KI-Infrastrukturwerte zeigen relative Stärke gegenüber dem
                Gesamtmarkt. Clean-Energy-ETFs profitieren von sinkenden Finanzierungskosten.
                Bei Halal-Fintechs bleibt die Verschuldungsquote im Sektor stabil unter 20%.
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.15em] text-[var(--faint)]">
                Automatisch erstellt · Keine Anlageberatung
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["KI-Infrastruktur", "Clean Energy", "Halal-Fintech"].map((tag) => (
                  <span key={tag} className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="mt-7 rounded-full bg-[var(--gold)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] hover:opacity-90">
                Vollständigen Bericht lesen
              </button>
            </div>
            <div className="flex flex-col justify-center gap-4 border-t border-[var(--border)] pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              {[
                { label: "Geprüfte Werte", value: sampleStocks.length.toLocaleString("de-DE") },
                { label: "Ø Sharia-Score", value: `${Math.round(sampleStocks.reduce((sum, s) => sum + s.score, 0) / sampleStocks.length)} / 100` },
                { label: "Davon Halal", value: `${sampleStocks.filter((s) => s.status === "Halal").length}` },
              ].map((stat) => (
                <div key={stat.label} className="flex items-baseline justify-between">
                  <span className="text-sm text-[var(--muted)]">{stat.label}</span>
                  <span className="font-[IBM_Plex_Mono] text-lg text-[var(--gold-soft)]">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-[1440px] px-6 pb-10 text-xs text-[var(--faint)]">
        Amanah · Screening orientiert an AAOIFI-Standards · Unabhängig, keine Depot- oder Produktbindung · Keine Anlageberatung
      </footer>
    </div>
  );
}

/* ---------- Aktien-Detailseite ---------- */

function StockDetailPage({ onBack, ticker, watchlist, onToggleWatchlist, onOpenStock }) {
  const [showSignup, setShowSignup] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);

  const stock = sampleStocks.find((s) => s.ticker === ticker) || sampleStocks[0];
  const saved = watchlist.includes(stock.ticker);
  const priceNum = parseEuro(stock.price);
  const dayPct = parsePercent(stock.change);
  const dayAbs = (priceNum * dayPct) / (100 + dayPct);

  useEffect(() => {
    setLastUpdated(new Date());
  }, [ticker]);

  function handleSave() {
    if (!saved) setShowSignup(true);
    else onToggleWatchlist(stock.ticker);
  }

  function confirmSignupAndSave() {
    onToggleWatchlist(stock.ticker);
    setShowSignup(false);
  }

  const similarStocks = sampleStocks
    .filter((s) => s.sector === stock.sector && s.status === "Halal" && s.ticker !== stock.ticker)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return (
    <div className="font-body">
      <header className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-6 text-sm text-[var(--muted)]">
        <span onClick={onBack} className="cursor-pointer hover:text-[var(--text)]">Screener</span>
        <span>/</span>
        <span className="text-[var(--text)]">{stock.ticker}</span>
        <div className="ml-auto flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5">
          <input defaultValue={stock.ticker} className="w-40 bg-transparent text-sm text-[var(--text)] focus:outline-none" placeholder="Suchen…" />
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-24">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-[var(--border)] pb-8 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-[IBM_Plex_Mono] text-lg tracking-wide text-[var(--text)]">{stock.ticker}</span>
              <StatusPill status={stock.status} />
            </div>
            <h1 className="font-display mt-1 text-3xl text-[var(--text)]">{stock.name}</h1>
            <p className="mt-1 text-sm text-[var(--muted)]">{stock.sector}</p>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-[IBM_Plex_Mono] text-2xl text-[var(--text)]">{stock.price}</span>
              <span className={"font-[IBM_Plex_Mono] text-sm " + (stock.up ? "text-[var(--emerald-soft)]" : "text-[var(--red-soft)]")}>
                {stock.up ? "+" : ""}{dayPct.toFixed(2)}% ({stock.up ? "+" : ""}{dayAbs.toFixed(2)} $) heute
              </span>
            </div>
            <p className="mt-1.5 text-[11px] text-[var(--faint)]">
              Zuletzt aktualisiert: {lastUpdated ? lastUpdated.toLocaleString("de-DE", { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit" }) : "—"} · Demo-Kurs
            </p>
          </div>
          <ComplianceStar score={stock.score} size={88} label="Sharia-Score" />
        </div>

        <StockChart stock={stock} />

        <div className="mt-6 flex flex-wrap gap-3">
          <button onClick={handleSave} className="rounded-full bg-[var(--gold)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] hover:opacity-90">
            {saved ? "In der Watchlist ✓" : "Zur Watchlist hinzufügen"}
          </button>
          <button onClick={handleSave} className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm text-[var(--text)] hover:border-[var(--emerald)]/60">
            Ins Portfolio buchen
          </button>
        </div>

        <div className="mt-10 grid gap-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:grid-cols-2 md:p-8">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Geschäftsmodell-Screen</p>
            <ul className="space-y-2">
              {stock.business.map((b, i) => <Criterion key={i} b={b} />)}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Finanz-Ratios (AAOIFI-Grenzwerte)</p>
            <div className="space-y-3">{stock.financials.map((f, i) => <RatioBar key={i} {...f} />)}</div>
            <p className="mt-4 text-xs text-[var(--muted)]">
              Spendenanteil auf Dividenden: geschätzt{" "}
              <span className="font-[IBM_Plex_Mono] text-[var(--gold-soft)]">{stock.purification}%</span>
              {" "}·{" "}
              <span className="cursor-pointer text-[var(--gold-soft)] hover:underline">Zum Reinheits-Rechner</span>
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4">
          <p className="text-sm text-[var(--text-soft)]">
            <span className="font-medium text-[var(--text)]">Warum {stock.status}? </span>
            {getWhyText(stock)}
          </p>
        </div>

        {/* Einschätzung (vormals "KI-Einschätzung") */}
        <div className="mt-8 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--surface)] to-[var(--bg)] p-6 md:p-8">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Einschätzung</p>
            <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--faint)]">Automatisch erstellt</span>
          </div>
          <p className="text-[15px] leading-relaxed text-[var(--text-soft)]">{stock.insight}</p>
        </div>

        {similarStocks.length > 0 && (
          <div className="mt-10">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Ähnliche, konforme Alternativen</p>
            <div className="grid gap-3 sm:grid-cols-3">
              {similarStocks.map((s) => (
                <button
                  key={s.ticker}
                  onClick={() => onOpenStock && onOpenStock(s.ticker)}
                  className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-left hover:border-[var(--emerald)]/60"
                >
                  <ComplianceStar score={s.score} size={36} label="" />
                  <div>
                    <p className="font-[IBM_Plex_Mono] text-sm text-[var(--text)]">{s.ticker}</p>
                    <p className="text-xs text-[var(--muted)]">{s.name}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </main>

      {showSignup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6">
          <div className="w-full max-w-sm rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7">
            <ComplianceStar score={100} size={40} label="" />
            <h3 className="font-display mt-4 text-xl text-[var(--text)]">Konto erstellen, um zu speichern</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Damit deine Watchlist und dein Portfolio erhalten bleiben, brauchen wir kurz eine E-Mail-Adresse.
            </p>
            <input
              placeholder="E-Mail-Adresse"
              className="mt-4 w-full rounded-full border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--faint)] focus:outline-none"
            />
            <button
              onClick={confirmSignupAndSave}
              className="mt-3 w-full rounded-full bg-[var(--gold)] px-4 py-2.5 text-sm font-medium text-[var(--bg)] hover:opacity-90"
            >
              Konto erstellen
            </button>
            <button onClick={() => setShowSignup(false)} className="mt-2 w-full rounded-full px-4 py-2 text-sm text-[var(--muted)] hover:text-[var(--text)]">
              Abbrechen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Root ---------- */

/* ---------- Watchlist-Seite ---------- */

function WatchlistPage({ watchlist, onBack, onOpenStock, onToggleWatchlist }) {
  const [expandedTicker, setExpandedTicker] = useState(null);
  const items = sampleStocks.filter((s) => watchlist.includes(s.ticker));
  return (
    <div className="font-body">
      <header className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-6 text-sm text-[var(--muted)]">
        <span onClick={onBack} className="cursor-pointer hover:text-[var(--text)]">Amanah</span>
        <span>/</span>
        <span className="text-[var(--text)]">Watchlist</span>
      </header>
      <main className="mx-auto max-w-5xl px-6 pb-24">
        <h1 className="font-display text-2xl text-[var(--text)]">Deine Watchlist</h1>
        <p className="mt-1 text-sm text-[var(--muted)]">
          {items.length === 0
            ? "Noch keine Aktien gemerkt."
            : "Status-Änderungen (z. B. Halal → Grenzwertig) erscheinen hier zuerst."}
        </p>

        {items.some((s) => s.status !== "Halal") && (
          <div className="mt-4 space-y-2">
            {items.filter((s) => s.status !== "Halal").map((s) => (
              <div
                key={s.ticker}
                className="flex items-center justify-between rounded-xl border border-[var(--amber)]/40 bg-[var(--amber)]/10 px-4 py-3 text-sm"
              >
                <span className="text-[var(--amber-soft)]">
                  ⚠ {s.ticker} steht aktuell auf <strong>{s.status}</strong> — {getWhyText(s)}
                </span>
                <button onClick={() => onOpenStock(s.ticker)} className="flex-shrink-0 text-xs text-[var(--amber-soft)] hover:underline">
                  Prüfen →
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 grid gap-3">
          {items.map((s) => (
            <div key={s.ticker}>
              <StockCard
                s={s}
                expanded={expandedTicker === s.ticker}
                onToggle={() => setExpandedTicker(expandedTicker === s.ticker ? null : s.ticker)}
              />
              <div className="ml-2 mt-1 flex gap-4 text-xs">
                <button onClick={() => onOpenStock(s.ticker)} className="text-[var(--faint)] hover:text-[var(--muted)]">
                  Zur Detailseite →
                </button>
                <button onClick={() => onToggleWatchlist(s.ticker)} className="text-[var(--red-soft)] hover:underline">
                  Entfernen
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

/* ---------- Berichte-Seite ---------- */

const mockReports = [
  { date: "27. Juli 2026", title: "Wochenbericht KW 30", highlight: "KI-Infrastruktur weiter stark" },
  { date: "20. Juli 2026", title: "Wochenbericht KW 29", highlight: "Neu als Halal eingestuft: 4 Titel" },
  { date: "13. Juli 2026", title: "Wochenbericht KW 28", highlight: "Clean-Energy-ETFs mit Zuflüssen" },
  { date: "06. Juli 2026", title: "Wochenbericht KW 27", highlight: "Ø Sharia-Score leicht gestiegen" },
];

function ReportsPage({ onBack }) {
  return (
    <div className="font-body">
      <header className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-6 text-sm text-[var(--muted)]">
        <span onClick={onBack} className="cursor-pointer hover:text-[var(--text)]">Amanah</span>
        <span>/</span>
        <span className="text-[var(--text)]">Berichte</span>
      </header>
      <main className="mx-auto max-w-5xl px-6 pb-24">
        <h1 className="font-display text-2xl text-[var(--text)]">Wöchentliche Berichte</h1>
        <p className="mt-1 text-sm text-[var(--muted)]">Automatisch erstellt, jeden Montag aktualisiert.</p>
        <div className="mt-6 grid gap-3">
          {mockReports.map((r) => (
            <div key={r.title} className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4">
              <div>
                <p className="text-sm text-[var(--text)]">{r.title}</p>
                <p className="text-xs text-[var(--muted)]">{r.date} · {r.highlight}</p>
              </div>
              <button className="rounded-full border border-[var(--border)] px-4 py-1.5 text-xs text-[var(--muted)] hover:border-[var(--emerald)]/60 hover:text-[var(--text)]">
                PDF laden
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

/* ---------- Akademie (Einstieg, Broker-Vergleich, Glossar, Methodik) ---------- */

const glossarItems = [
  { q: "Was ist Sharia-Screening?", a: "Eine Prüfung, ob eine Aktie oder ein Fonds nach islamischen Grundsätzen investierbar ist — sowohl das Geschäftsmodell als auch bestimmte Finanzkennzahlen werden dafür geprüft." },
  { q: "Was bedeutet die Verschuldungsquote?", a: "Das Verhältnis von Schulden zur Marktkapitalisierung. Liegt sie über 33%, gilt die Aktie in der Regel nicht mehr als konform." },
  { q: "Was sind unzulässige Nebeneinnahmen?", a: "Einnahmen aus z. B. Zinsgeschäften, die bei sonst konformen Firmen in kleinem Umfang (meist unter 5% des Umsatzes) toleriert werden." },
  { q: "Warum gibt es einen Spendenanteil bei Dividenden?", a: "Auch bei konformen Aktien steckt oft ein kleiner Anteil unzulässiger Erträge in der Dividende — dieser Anteil wird traditionell gespendet, um das Einkommen zu bereinigen." },
  { q: "Was bedeutet 'Grenzwertig'?", a: "Eine Aktie liegt knapp an einem Grenzwert (z. B. Verschuldung bei 30-33%). Sie ist nicht klar konform oder nicht-konform und sollte regelmäßig neu geprüft werden." },
  { q: "Was ist ein ETF?", a: "Ein Fonds, der einen Index oder Korb von Wertpapieren nachbildet und wie eine Aktie an der Börse gehandelt wird. Bei Amanah wird jede enthaltene Position einzeln gescreent." },
  { q: "Was ist ein Sparplan?", a: "Regelmäßige, meist monatliche Investition eines festen Betrags — unabhängig vom aktuellen Kurs. Reduziert das Risiko, zum ungünstigsten Zeitpunkt zu kaufen." },
  { q: "Was sind Teilaktien (Fractional Shares)?", a: "Bruchteile einer Aktie, die es erlauben, auch mit kleinem Budget in teure Einzeltitel zu investieren, statt eine ganze Aktie kaufen zu müssen." },
  { q: "Was ist Zakat?", a: "Die jährliche Pflichtabgabe auf bestimmtes Vermögen im Islam. Sie ist unabhängig von der Dividenden-Reinigung (Purification) und wird meist einmal jährlich auf das Gesamtvermögen berechnet." },
  { q: "Was bedeutet Marktkapitalisierung?", a: "Der Gesamtwert aller ausstehenden Aktien eines Unternehmens (Aktienkurs × Anzahl Aktien). Dient als Bezugsgröße für die Verschuldungs- und Zinsquoten im Screening." },
];

const einstiegsSteps = [
  { title: "1. Grundbegriffe verstehen", text: "Aktie, ETF, Dividende, Sparplan — bevor es um Halal-Kriterien geht, hilft ein Blick ins Glossar weiter unten. Niemand muss alles auf einmal verstehen." },
  { title: "2. Broker auswählen", text: "Ein Depot ist Voraussetzung fürs Investieren. Amanah empfiehlt keinen bestimmten Anbieter — der Vergleich unten zeigt nur Kriterien, keine Wertung. Achte besonders auf schariakonforme Kontoführung, falls dir das wichtig ist." },
  { title: "3. Screening verstehen", text: "Bevor du eine Aktie kaufst, prüf ihren Status im Screener und lies die 'Warum'-Begründung auf der Detailseite. Bei 'Grenzwertig' lohnt sich ein zweiter Blick vor dem Kauf." },
  { title: "4. Klein anfangen", text: "Ein Sparplan mit kleinen, regelmäßigen Beträgen ist oft sinnvoller als eine einzelne große Investition — gerade am Anfang, wenn Marktschwankungen noch ungewohnt sind." },
  { title: "5. Portfolio im Blick behalten", text: "Nutze die Watchlist, um Statusänderungen (z. B. Halal → Grenzwertig) nicht zu verpassen, und prüfe die Portfolio-Reinheit regelmäßig — Unternehmen können sich verändern." },
  { title: "6. Dividenden bereinigen", text: "Sobald du Dividenden erhältst, hilf dir der Reinheits-Rechner dabei, den Spendenanteil zu schätzen — ein fester Bestandteil vieler Muslim-Investment-Routinen." },
];

const brokerCompare = [
  { name: "Broker A", sparplan: true, teilaktien: true, shariaKonto: false, kosten: "niedrig" },
  { name: "Broker B", sparplan: true, teilaktien: false, shariaKonto: true, kosten: "mittel" },
  { name: "Broker C", sparplan: false, teilaktien: true, shariaKonto: false, kosten: "niedrig" },
];

const literaturItems = [
  { title: "The Art of Islamic Banking and Finance", author: "Yahia Abdul-Rahman", note: "Praxisnaher Einstieg in die Prinzipien hinter zinsfreiem Wirtschaften." },
  { title: "Islamic Finance: Principles and Practice", author: "Hans Visser", note: "Akademischer, aber verständlicher Überblick über Instrumente und Regelwerke wie AAOIFI." },
  { title: "Understanding Islamic Finance", author: "Muhammad Ayub", note: "Umfangreiches Nachschlagewerk, eher für alle, die tiefer einsteigen wollen." },
];

const vertiefenItems = [
  {
    title: "Islamischer Kontext",
    text: "Riba (Zins) gilt als ausbeuterisch, weil er einen garantierten Gewinn ohne unternehmerisches Risiko verspricht. Gharar (übermäßige Unsicherheit) betrifft Geschäfte mit unklaren Bedingungen — beides zusammen erklärt, warum klassische Banken, Versicherer und stark verschuldete Firmen ausgeschlossen werden, nicht nur einzelne Kennzahl-Grenzwerte.",
  },
  {
    title: "Risiken & Chancen",
    text: "Halal-konforme Aktien sind nicht automatisch risikoärmer — die Ausschlusskriterien führen oft zu einer Konzentration auf bestimmte Sektoren (z. B. Technologie, Gesundheit), was Klumpenrisiken erzeugen kann. Gleichzeitig bringt der niedrigere Verschuldungsgrad vieler konformer Unternehmen tendenziell mehr finanzielle Stabilität in Krisenzeiten mit sich — beides gehört zur ehrlichen Einordnung.",
  },
];

const AKADEMIE_TABS = ["Einstieg", "Broker-Vergleich", "Glossar", "Methodik", "Vertiefen"];


function AkademiePage({ onBack }) {
  const [tab, setTab] = useState("Einstieg");
  const [open, setOpen] = useState(0);

  return (
    <div className="font-body">
      <header className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-6 text-sm text-[var(--muted)]">
        <span onClick={onBack} className="cursor-pointer hover:text-[var(--text)]">Amanah</span>
        <span>/</span>
        <span className="text-[var(--text)]">Akademie</span>
      </header>
      <main className="mx-auto max-w-5xl px-6 pb-24">
        <h1 className="font-display text-3xl text-[var(--text)]">Akademie</h1>
        <p className="mt-2 max-w-xl text-sm text-[var(--muted)]">
          Grundlagen, Vergleiche und Erklärungen — unabhängig davon, wo du dein Depot führst.
        </p>

        <div className="mt-6 flex gap-2 border-b border-[var(--border)]">
          {AKADEMIE_TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={
                "border-b-2 px-1 pb-3 text-sm -mb-px " +
                (tab === t ? "border-[var(--gold)] text-[var(--text)]" : "border-transparent text-[var(--muted)] hover:text-[var(--text)]")
              }
            >
              {t}
            </button>
          ))}
        </div>

        {tab === "Einstieg" && (
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {einstiegsSteps.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm text-[var(--text)]">{s.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)]">{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Broker-Vergleich" && (
          <div className="mt-6 overflow-x-auto rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)] text-left text-xs uppercase tracking-[0.1em] text-[var(--muted)]">
                  <th className="px-5 py-3">Broker</th>
                  <th className="px-5 py-3">Sparplanfähig</th>
                  <th className="px-5 py-3">Teilaktien</th>
                  <th className="px-5 py-3">Schariakonforme Kontoführung</th>
                  <th className="px-5 py-3">Kosten</th>
                </tr>
              </thead>
              <tbody>
                {brokerCompare.map((b) => (
                  <tr key={b.name} className="border-b border-[var(--border)] last:border-0">
                    <td className="px-5 py-3 text-[var(--text)]">{b.name}</td>
                    <td className="px-5 py-3 text-[var(--muted)]">{b.sparplan ? "Ja" : "Nein"}</td>
                    <td className="px-5 py-3 text-[var(--muted)]">{b.teilaktien ? "Ja" : "Nein"}</td>
                    <td className="px-5 py-3 text-[var(--muted)]">{b.shariaKonto ? "Ja (swap-free)" : "Nicht bekannt"}</td>
                    <td className="px-5 py-3 text-[var(--muted)]">{b.kosten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="border-t border-[var(--border)] px-5 py-3 text-xs text-[var(--faint)]">
              Neutraler Vergleich — Amanah erhält keine Provision und empfiehlt keinen Anbieter. „Swap-free" bedeutet: keine Zinsgutschrift/-belastung bei über Nacht gehaltenen Positionen.
            </p>
          </div>
        )}

        {tab === "Glossar" && (
          <div className="mt-6 divide-y divide-[var(--border)] rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
            {glossarItems.map((item, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-sm text-[var(--text)]"
                >
                  {item.q}
                  <span className="text-[var(--faint)]">{open === i ? "−" : "+"}</span>
                </button>
                {open === i && <p className="px-5 pb-4 text-sm text-[var(--muted)]">{item.a}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "Methodik" && (
          <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <p className="text-sm leading-relaxed text-[var(--text-soft)]">
              Das Screening orientiert sich an AAOIFI-Standards und prüft jede Aktie in zwei
              Schritten: zuerst das Geschäftsmodell (z. B. Ausschluss von Banken, Alkohol,
              Glücksspiel), danach die Finanzkennzahlen (Verschuldung, zinstragende Erträge und
              Einlagen — jeweils im Verhältnis zur Marktkapitalisierung). Liegt eine Kennzahl über
              dem Grenzwert, gilt der Titel als nicht konform; liegt sie knapp darunter, als
              Grenzwertig. Die genaue Berechnung ist auf jeder Aktien-Detailseite einsehbar.
            </p>
            <p className="mt-3 text-xs text-[var(--faint)]">Automatisch berechnet · Keine Anlageberatung</p>
          </div>
        )}

        {tab === "Vertiefen" && (
          <div className="mt-6 space-y-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {vertiefenItems.map((v) => (
                <div key={v.title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                  <p className="text-sm text-[var(--text)]">{v.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)]">{v.text}</p>
                </div>
              ))}
            </div>

            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Literaturempfehlungen</p>
              <div className="divide-y divide-[var(--border)] rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
                {literaturItems.map((b) => (
                  <div key={b.title} className="px-5 py-4">
                    <p className="text-sm text-[var(--text)]">{b.title}</p>
                    <p className="text-xs text-[var(--muted)]">{b.author}</p>
                    <p className="mt-1 text-xs text-[var(--faint)]">{b.note}</p>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-[11px] text-[var(--faint)]">
                Auswahl ohne Kooperation oder Provision — dient nur der Orientierung.
              </p>
            </div>
          </div>
        )}

        <AskQuestionBox />
      </main>
    </div>
  );
}

// Bewusst klein und unauffällig gehalten — keine "KI-Chat"-Sprache, keine
// echte Antwortlogik dahinter, nur ein UI-Baustein für später.
function AskQuestionBox() {
  const [question, setQuestion] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <div className="mt-10 border-t border-[var(--border)] pt-6">
      <p className="text-xs text-[var(--faint)]">Frage nicht gefunden?</p>
      {sent ? (
        <p className="mt-2 text-sm text-[var(--muted)]">Danke — deine Frage wurde vermerkt.</p>
      ) : (
        <div className="mt-2 flex max-w-md items-center gap-2">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Frag nach…"
            className="w-full rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text)] placeholder:text-[var(--faint)] focus:outline-none"
          />
          <button
            onClick={() => question.trim() && setSent(true)}
            className="flex-shrink-0 rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--muted)] hover:border-[var(--gold)]/50 hover:text-[var(--gold-soft)]"
          >
            Senden
          </button>
        </div>
      )}
    </div>
  );
}

function SectorsPage({ onBack }) {
  const bySector = SECTORS.map((sector) => {
    const items = sampleStocks.filter((s) => s.sector === sector);
    const halal = items.filter((s) => s.status === "Halal").length;
    return { sector, total: items.length, halal };
  });
  return (
    <div className="font-body">
      <header className="mx-auto flex max-w-4xl items-center gap-3 px-6 py-6 text-sm text-[var(--muted)]">
        <span onClick={onBack} className="cursor-pointer hover:text-[var(--text)]">Amanah</span>
        <span>/</span>
        <span className="text-[var(--text)]">Sektoren</span>
      </header>
      <main className="mx-auto max-w-4xl px-6 pb-24">
        <h1 className="font-display text-2xl text-[var(--text)]">Sektor-Übersicht</h1>
        <p className="mt-1 text-sm text-[var(--muted)]">Wie viele geprüfte Titel je Branche konform sind.</p>
        <div className="mt-6 grid gap-3">
          {bySector.map((b) => (
            <div key={b.sector} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-[var(--text)]">{b.sector}</span>
                <span className="text-[var(--muted)]">{b.halal} / {b.total} Halal</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--track)]">
                <div className="h-full rounded-full bg-[var(--emerald)]" style={{ width: `${b.total ? (b.halal / b.total) * 100 : 0}%` }} />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

/* ---------- Vergleichsseite ---------- */

function ComparePage({ tickers, onBack }) {
  const items = sampleStocks.filter((s) => tickers.includes(s.ticker));
  const rows = [
    { label: "Status", get: (s) => <StatusPill status={s.status} /> },
    { label: "Score", get: (s) => s.score },
    { label: "Kurs", get: (s) => s.price },
    { label: "Verschuldung", get: (s) => s.debt },
    { label: "Sektor", get: (s) => s.sector },
  ];
  return (
    <div className="font-body">
      <header className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-6 text-sm text-[var(--muted)]">
        <span onClick={onBack} className="cursor-pointer hover:text-[var(--text)]">Amanah</span>
        <span>/</span>
        <span className="text-[var(--text)]">Vergleichen</span>
      </header>
      <main className="mx-auto max-w-5xl px-6 pb-24">
        <h1 className="font-display text-2xl text-[var(--text)]">Aktien vergleichen</h1>
        {items.length === 0 ? (
          <p className="mt-4 text-sm text-[var(--muted)]">Wähle im Screener bis zu 3 Aktien zum Vergleichen aus.</p>
        ) : (
          <div className="mt-6 overflow-x-auto rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="px-5 py-3 text-left text-xs uppercase tracking-[0.15em] text-[var(--muted)]"> </th>
                  {items.map((s) => (
                    <th key={s.ticker} className="px-5 py-3 text-left font-[IBM_Plex_Mono] text-[var(--text)]">{s.ticker}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="border-b border-[var(--border)] last:border-0">
                    <td className="px-5 py-3 text-xs text-[var(--muted)]">{r.label}</td>
                    {items.map((s) => (
                      <td key={s.ticker} className="px-5 py-3 text-[var(--text-soft)]">{r.get(s)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}

/* ---------- Sidebar-Navigation ---------- */

const NAV_GROUPS = [
  {
    key: "screener",
    label: "Screener",
    page: "home",
    anchor: "screener",
    children: [
      { label: "Alle Aktien", page: "home", anchor: "screener" },
      { type: "heading", label: "Status" },
      { type: "filter", label: "Halal", filter: { type: "status", value: "Halal" } },
      { type: "filter", label: "Grenzwertig", filter: { type: "status", value: "Grenzwertig" } },
      { type: "filter", label: "Nicht Halal", filter: { type: "status", value: "Nicht Halal" } },
      { type: "heading", label: "Sektor" },
      ...SECTORS.map((sec) => ({ type: "filter", label: sec, filter: { type: "sector", value: sec } })),
      { label: "Sektor-Explorer", page: "sectors" },
      { label: "Vergleichen", page: "compare" },
    ],
  },
  {
    key: "portfolio",
    label: "Portfolio",
    page: "home",
    anchor: "portfolio",
    children: [
      { label: "Übersicht", page: "home", anchor: "portfolio" },
      { label: "Reinheits-Rechner", page: "home", anchor: "rechner" },
    ],
  },
  {
    key: "berichte",
    label: "Berichte",
    page: "reports",
    children: [
      { label: "Marktbericht", page: "home", anchor: "bericht" },
      { label: "PDF-Berichte", page: "reports" },
    ],
  },
];

function NavIcon({ open }) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" className={"transition-transform " + (open ? "rotate-90" : "")}>
      <path d="M3 1L7 5L3 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Sidebar({ page, activeAnchor, activeFilter, onGo, watchlistCount, compareCount, collapsed, onToggleCollapse }) {
  const [openGroups, setOpenGroups] = useState({ screener: true });

  const toggleGroup = (key) => setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  const openGroup = (key) => setOpenGroups((prev) => (prev[key] ? prev : { ...prev, [key]: true }));

  const isActive = (item) =>
    item.page === page && (!item.anchor || item.anchor === activeAnchor);
  const isFilterActive = (item) =>
    activeFilter && item.filter && activeFilter.type === item.filter.type && activeFilter.value === item.filter.value;

  return (
    <aside
      style={{ width: collapsed ? "4rem" : "15rem", transition: "width 200ms ease" }}
      className="fixed left-0 top-0 z-30 flex h-screen flex-shrink-0 flex-col overflow-hidden border-r border-[var(--border)] bg-[var(--bg-deep)]"
    >
      <div className={"flex items-center py-6 " + (collapsed ? "justify-center px-0" : "justify-between px-5")}>
        <div className="flex items-center gap-3 overflow-hidden">
          <ComplianceStar score={100} size={30} label="" />
          {!collapsed && <span className="font-display whitespace-nowrap text-base tracking-wide">Amanah</span>}
        </div>
        {!collapsed && (
          <button
            onClick={onToggleCollapse}
            aria-label="Sidebar einklappen"
            className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md text-[var(--faint)] hover:bg-[var(--surface)] hover:text-[var(--text)]"
          >
            <MenuIcon />
          </button>
        )}
      </div>

      {collapsed && (
        <button
          onClick={onToggleCollapse}
          aria-label="Sidebar ausklappen"
          className="mx-auto mb-2 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md text-[var(--faint)] hover:bg-[var(--surface)] hover:text-[var(--text)]"
        >
          <MenuIcon />
        </button>
      )}

      {collapsed ? (
        <div className="mt-2 flex flex-col items-center gap-1">
          {[
            { label: "Start", page: "home" },
            { label: "Screener", page: "home", anchor: "screener" },
            { label: "Portfolio", page: "home", anchor: "portfolio" },
            { label: "Berichte", page: "reports" },
            { label: "Watchlist", page: "watchlist", badge: watchlistCount },
            { label: "Akademie", page: "faq" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => onGo(item.page, item.anchor)}
              title={item.label}
              className={
                "relative flex h-9 w-9 items-center justify-center rounded-lg text-xs font-[IBM_Plex_Mono] " +
                (isActive(item) ? "bg-[var(--gold)]/15 text-[var(--gold-soft)]" : "text-[var(--text-soft)] hover:bg-[var(--surface)]")
              }
            >
              {item.label.slice(0, 2)}
              {item.badge > 0 && (
                <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full bg-[var(--gold)] text-[8px] leading-[14px] text-[var(--bg)]">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      ) : (
      <nav className="flex-1 overflow-y-auto px-3 pb-6">
        <button
          onClick={() => onGo("home")}
          className={
            "mb-1 flex w-full items-center rounded-lg px-3 py-2 text-left text-sm " +
            (page === "home" && !activeAnchor ? "bg-[var(--gold)]/15 text-[var(--gold-soft)]" : "text-[var(--text-soft)] hover:bg-[var(--surface)]")
          }
        >
          Start
        </button>

        {NAV_GROUPS.map((group) => (
          <div key={group.key} className="mb-1" onMouseEnter={() => openGroup(group.key)}>
            <div className="flex items-center">
              <button
                onClick={() => onGo(group.page, group.anchor)}
                className={
                  "flex-1 rounded-lg px-3 py-2 text-left text-sm " +
                  (isActive(group) ? "bg-[var(--gold)]/15 text-[var(--gold-soft)]" : "text-[var(--text-soft)] hover:bg-[var(--surface)]")
                }
              >
                {group.label}
              </button>
              <button
                onClick={() => toggleGroup(group.key)}
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center text-[var(--faint)] hover:text-[var(--muted)]"
                aria-label={`${group.label} aufklappen`}
              >
                <NavIcon open={!!openGroups[group.key]} />
              </button>
            </div>
            {openGroups[group.key] && (
              <div className="ml-3 space-y-0.5 border-l border-[var(--border)] pl-3">
                {group.children.map((child, i) =>
                  child.type === "heading" ? (
                    <p key={i} className="px-3 pt-2 text-[10px] uppercase tracking-[0.15em] text-[var(--faint)]">
                      {child.label}
                    </p>
                  ) : (
                    <button
                      key={child.label}
                      onClick={() =>
                        child.type === "filter" ? onGo("home", "screener", child.filter) : onGo(child.page, child.anchor)
                      }
                      className={
                        "block w-full truncate rounded-lg px-3 py-1.5 text-left text-[13px] " +
                        (child.type === "filter"
                          ? isFilterActive(child) ? "text-[var(--gold-soft)]" : "text-[var(--muted)] hover:text-[var(--text)]"
                          : isActive(child) ? "text-[var(--gold-soft)]" : "text-[var(--muted)] hover:text-[var(--text)]")
                      }
                    >
                      {child.type === "filter" && "· "}
                      {child.label}
                    </button>
                  )
                )}
              </div>
            )}
          </div>
        ))}

        <button
          onClick={() => onGo("watchlist")}
          className={
            "mb-1 flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm " +
            (page === "watchlist" ? "bg-[var(--gold)]/15 text-[var(--gold-soft)]" : "text-[var(--text-soft)] hover:bg-[var(--surface)]")
          }
        >
          Watchlist
          {watchlistCount > 0 && (
            <span className="rounded-full bg-[var(--gold)] px-1.5 py-0.5 text-[10px] font-medium text-[var(--bg)]">
              {watchlistCount}
            </span>
          )}
        </button>

        <button
          onClick={() => onGo("faq")}
          className={
            "mb-1 flex w-full items-center rounded-lg px-3 py-2 text-left text-sm " +
            (page === "faq" ? "bg-[var(--gold)]/15 text-[var(--gold-soft)]" : "text-[var(--text-soft)] hover:bg-[var(--surface)]")
          }
        >
          Akademie
        </button>

        {compareCount > 0 && (
          <button
            onClick={() => onGo("compare")}
            className={
              "mt-1 flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm " +
              (page === "compare" ? "bg-[var(--gold)]/15 text-[var(--gold-soft)]" : "text-[var(--emerald-soft)] hover:bg-[var(--surface)]")
            }
          >
            Vergleich <span className="text-xs">({compareCount})</span>
          </button>
        )}
      </nav>
      )}

      {!collapsed && (
        <div className="border-t border-[var(--border)] px-5 py-4 text-[10px] text-[var(--faint)]">
          Keine Anlageberatung
        </div>
      )}
    </aside>
  );
}

function MenuIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

/* ---------- Root ---------- */

export default function AmanahPrototype() {
  const [page, setPage] = useState("home"); // home | detail | watchlist | reports | faq | sectors | compare
  const [selectedTicker, setSelectedTicker] = useState("NVDA");
  const [watchlist, setWatchlist] = useState(["NVDA"]);
  const [compareTickers, setCompareTickers] = useState([]);
  const [activeAnchor, setActiveAnchor] = useState(null);
  const [pendingAnchor, setPendingAnchor] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);
  const [presetFilter, setPresetFilter] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  function toggleWatchlist(ticker) {
    setWatchlist((prev) => (prev.includes(ticker) ? prev.filter((t) => t !== ticker) : [...prev, ticker]));
  }
  function toggleCompare(ticker) {
    setCompareTickers((prev) =>
      prev.includes(ticker) ? prev.filter((t) => t !== ticker) : prev.length >= 3 ? prev : [...prev, ticker]
    );
  }
  function openStock(ticker) {
    setSelectedTicker(ticker);
    setPage("detail");
    setActiveAnchor(null);
  }

  // Sidebar-Klick: zur Seite navigieren, optional zu einem Abschnitt scrollen
  // und/oder einen Status-/Sektor-Filter im Screener vorbelegen
  function goTo(targetPage, anchor, filter) {
    if (targetPage === "home" && anchor) {
      if (page === "home") {
        document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
      } else {
        setPendingAnchor(anchor);
        setPage("home");
      }
      setActiveAnchor(anchor);
    } else {
      setPage(targetPage);
      setActiveAnchor(null);
    }
    if (filter) {
      setActiveFilter(filter);
      setPresetFilter({ ...filter, ts: Date.now() });
    }
  }

  React.useEffect(() => {
    if (page === "home" && pendingAnchor) {
      const el = document.getElementById(pendingAnchor);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setPendingAnchor(null);
    }
  }, [page, pendingAnchor]);

  return (
    <div className="min-h-screen w-full bg-[var(--bg)] text-[var(--text)] antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

        /* Amanah Dark Theme — einziges Theme */
        :root {
          --bg: #0E1613;
          --bg-deep: #0B100E;
          --surface: #121B17;
          --track: #1B2621;
          --border: #26332C;
          --text: #F2EFE9;
          --text-soft: #C9CFC9;
          --muted: #8B978F;
          --faint: #5B6560;
          --gold: #C9A66B;
          --gold-soft: #E4C68A;
          --emerald: #3E7C59;
          --emerald-soft: #8FC9A6;
          --red: #7C3E3E;
          --red-soft: #D68F8F;
          --amber: #8A6A2E;
          --amber-soft: #E0B368;
          --lattice-dot: rgba(201,166,107,0.14);
        }

        .font-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .font-body { font-family: 'Inter', sans-serif; }
        .bg-lattice {
          background-image: radial-gradient(circle at 1px 1px, var(--lattice-dot) 1px, transparent 0);
          background-size: 28px 28px;
        }
      `}</style>

      <Sidebar
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed((c) => !c)}
        page={page}
        activeAnchor={activeAnchor}
        activeFilter={activeFilter}
        onGo={goTo}
        watchlistCount={watchlist.length}
        compareCount={compareTickers.length}
      />

      <div
        style={{ marginLeft: sidebarCollapsed ? "4rem" : "15rem", transition: "margin-left 200ms ease" }}
      >
        {page === "home" && (
          <HomePage
            onOpenStock={openStock}
            onNavigate={(p) => goTo(p)}
            watchlist={watchlist}
            onToggleWatchlist={toggleWatchlist}
            compareTickers={compareTickers}
            onToggleCompare={toggleCompare}
            presetFilter={presetFilter}
          />
        )}
        {page === "detail" && (
          <StockDetailPage
            ticker={selectedTicker}
            onBack={() => goTo("home")}
            watchlist={watchlist}
            onToggleWatchlist={toggleWatchlist}
            onOpenStock={openStock}
          />
        )}
        {page === "watchlist" && (
          <WatchlistPage
            watchlist={watchlist}
            onBack={() => goTo("home")}
            onOpenStock={openStock}
            onToggleWatchlist={toggleWatchlist}
          />
        )}
        {page === "reports" && <ReportsPage onBack={() => goTo("home")} />}
        {page === "faq" && <AkademiePage onBack={() => goTo("home")} />}
        {page === "sectors" && <SectorsPage onBack={() => goTo("home")} />}
        {page === "compare" && <ComparePage tickers={compareTickers} onBack={() => goTo("home")} />}
      </div>

      {/* Floating Vergleichs-Leiste */}
      {compareTickers.length > 0 && page !== "compare" && (
        <div className="fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-4 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 shadow-xl">
          <span className="text-xs text-[var(--muted)]">{compareTickers.length} zum Vergleich ausgewählt</span>
          <button
            onClick={() => goTo("compare")}
            className="rounded-full bg-[var(--gold)] px-4 py-1.5 text-xs font-medium text-[var(--bg)] hover:opacity-90"
          >
            Vergleichen ansehen
          </button>
        </div>
      )}
    </div>
  );
}
