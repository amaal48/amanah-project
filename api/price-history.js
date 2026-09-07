// api/price-history.js
// Vercel Serverless Function — läuft NICHT im Browser, der API-Key bleibt geheim.
//
// Setup:
// 1. Kostenlosen Account bei twelvedata.com anlegen, API-Key kopieren
// 2. In Vercel: Project Settings -> Environment Variables -> TWELVE_DATA_API_KEY setzen
// 3. Lokal zum Testen: eine .env-Datei mit TWELVE_DATA_API_KEY=dein_key anlegen (NICHT committen!)
//
// Da alle 503 Titel aus eurer Screening-CSV regulär in den USA gelistete
// Aktien sind (NYSE/NASDAQ), reicht der Ticker direkt als Symbol.
//
// Range-Keys passend zum Frontend (Trade-Republic/Scalable-Stil):
// 1D = 1 Tag (intraday), 1W, 1M, 1Y, 5Y, MAX.

const RANGE_TO_PARAMS = {
  "1D": { interval: "15min", outputsize: 32 }, // ca. ein Handelstag in 15-Min-Kerzen
  "1W": { interval: "1day", outputsize: 7 },
  "1M": { interval: "1day", outputsize: 30 },
  "1Y": { interval: "1day", outputsize: 365 },
  "5Y": { interval: "1week", outputsize: 260 }, // 5 Jahre in Wochenkerzen (weniger Datenpunkte)
  MAX: { interval: "1month", outputsize: 240 }, // ~20 Jahre in Monatskerzen
};

export default async function handler(req, res) {
  const { symbol, range } = req.query;

  if (!symbol || !RANGE_TO_PARAMS[range]) {
    return res.status(400).json({ error: "symbol und range (1D/1W/1M/1Y/5Y/MAX) erforderlich" });
  }

  const { interval, outputsize } = RANGE_TO_PARAMS[range];
  const apiKey = process.env.TWELVE_DATA_API_KEY;

  try {
    const url = `https://api.twelvedata.com/time_series?symbol=${encodeURIComponent(symbol)}&interval=${interval}&outputsize=${outputsize}&apikey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === "error") {
      return res.status(502).json({ error: data.message || "Twelve Data Fehler" });
    }

    const points = (data.values || [])
      .map((v) => ({ date: v.datetime, price: parseFloat(v.close) }))
      .reverse();

    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate"); // 5 Min. Cache
    return res.status(200).json(points);
  } catch (err) {
    return res.status(500).json({ error: "Abruf fehlgeschlagen", detail: String(err) });
  }
}
