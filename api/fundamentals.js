// api/fundamentals.js
// Vercel Serverless Function — läuft NICHT im Browser, der API-Key bleibt geheim.
//
// Zweck: automatisiert die Bilanzkennzahlen abrufen, die euer Python-Screening-
// Skript bisher manuell aus yfinance zog (debt_ratio, cash_ratio), damit die
// statische CSV langfristig durch eine Live-Anbindung ersetzt werden kann.
//
// Setup:
// 1. Kostenlosen Account bei financialmodelingprep.com (FMP) anlegen, API-Key kopieren
//    (Free Tier: 250 Requests/Tag — reicht zum Testen, für 500+ Titel im
//    Produktivbetrieb braucht ihr einen bezahlten Plan oder ein Caching-Regime,
//    das nicht bei jedem Seitenaufruf neu abruft)
// 2. In Vercel: Project Settings -> Environment Variables -> FMP_API_KEY setzen
// 3. Lokal zum Testen: .env-Datei mit FMP_API_KEY=dein_key (NICHT committen!)
//
// WICHTIG: Die Berechnungslogik unten (debt_ratio, cash_ratio) ist absichtlich
// identisch zu eurem Python-Screening-Skript gehalten (30%-Grenzwerte). Wenn
// ihr die Formel dort änderst, muss sie HIER genauso geändert werden, sonst
// weichen Live-Werte und CSV-Basis-Werte auseinander.

const DEBT_RATIO_LIMIT = 30;
const CASH_RATIO_LIMIT = 30;

// Grobe Branchen-Ausschlussliste — sollte langfristig durch dieselbe Logik
// ersetzt werden, die euer Python-Skript für "reasons" nutzt (hier nur als
// Platzhalter, damit die Struktur steht).
const EXCLUDED_INDUSTRY_KEYWORDS = [
  "bank", "insurance", "brewer", "distiller", "gambling", "casino",
  "tobacco", "defense", "aerospace & defense",
];

function isExcludedIndustry(industry) {
  if (!industry) return false;
  const lower = industry.toLowerCase();
  return EXCLUDED_INDUSTRY_KEYWORDS.some((kw) => lower.includes(kw));
}

export default async function handler(req, res) {
  const { symbol } = req.query;

  if (!symbol) {
    return res.status(400).json({ error: "symbol erforderlich" });
  }

  const apiKey = process.env.FMP_API_KEY;

  try {
    // 1. Profil (Branche, Marktkapitalisierung)
    const profileUrl = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`;
    const profileRes = await fetch(profileUrl);
    const profileData = await profileRes.json();
    const profile = profileData?.[0];

    if (!profile) {
      return res.status(404).json({ error: `Kein Profil für ${symbol} gefunden` });
    }

    // 2. Bilanz (aktuellstes Quartal) für Verschuldung und Cash-Quote
    const balanceUrl = `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${symbol}?period=quarter&limit=1&apikey=${apiKey}`;
    const balanceRes = await fetch(balanceUrl);
    const balanceData = await balanceRes.json();
    const balance = balanceData?.[0];

    if (!balance) {
      return res.status(404).json({ error: `Keine Bilanzdaten für ${symbol} gefunden` });
    }

    const marketCap = profile.mktCap || 0;
    const totalDebt = balance.totalDebt || 0;
    const cashAndEquivalents = balance.cashAndShortTermInvestments || 0;

    const debtRatio = marketCap > 0 ? Number(((totalDebt / marketCap) * 100).toFixed(1)) : null;
    const cashRatio = marketCap > 0 ? Number(((cashAndEquivalents / marketCap) * 100).toFixed(1)) : null;

    const excludedIndustry = isExcludedIndustry(profile.industry);
    let verdict = "KONFORM";
    const reasons = [];

    if (excludedIndustry) {
      verdict = "NICHT KONFORM";
      reasons.push(`Ausgeschlossene Branche: ${profile.industry}`);
    } else if (debtRatio != null && debtRatio > DEBT_RATIO_LIMIT) {
      verdict = "PRUEFEN / GRENZWERTIG";
      reasons.push(`Verschuldungsgrad zu hoch: ${debtRatio}% (Limit ${DEBT_RATIO_LIMIT}%)`);
    } else if (cashRatio != null && cashRatio > CASH_RATIO_LIMIT) {
      verdict = "PRUEFEN / GRENZWERTIG";
      reasons.push(`Cash-Quote zu hoch: ${cashRatio}% (Limit ${CASH_RATIO_LIMIT}%)`);
    }

    res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate"); // 24h Cache — Fundamentaldaten ändern sich selten untertägig
    return res.status(200).json({
      ticker: symbol,
      name: profile.companyName,
      sector: profile.sector,
      industry: profile.industry,
      marketCap,
      debtRatio,
      cashRatio,
      verdict,
      reasons,
      fetchedAt: new Date().toISOString(),
    });
  } catch (err) {
    return res.status(500).json({ error: "Abruf fehlgeschlagen", detail: String(err) });
  }
}
