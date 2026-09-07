// api/price-history.js
// Vercel Serverless Function — läuft NICHT im Browser, der API-Key bleibt geheim.
//
// Setup:
// 1. Kostenlosen Account bei twelvedata.com anlegen, API-Key kopieren
// 2. In Vercel: Project Settings -> Environment Variables -> TWELVE_DATA_API_KEY setzen
// 3. Lokal zum Testen: eine .env-Datei mit TWELVE_DATA_API_KEY=dein_key anlegen (NICHT committen!)
//
// Da alle 503 Titel aus eurer Screening-CSV regulär in den USA gelistete
// Aktien sind (NYSE/NASDAQ), reicht der Ticker direkt als Symbol — anders als
// bei Xetra-Notierungen braucht es hier KEINE ISIN-Zuordnung. Kurse kommen
// entsprechend in USD zurück (siehe App.jsx, dort wird jetzt $ statt €
// angezeigt).

const RANGE_TO_PARAMS = {
  "1W": { interval: "1day", outputsize: 7 },
  "1M": { interval: "1day", outputsize: 30 },
  "3M": { interval: "1day", outputsize: 90 },
  "6M": { interval: "1day", outputsize: 180 },
  "1Y": { interval: "1day", outputsize: 365 },
  YTD: { interval: "1day", outputsize: 366 }, // wird unten auf Jahresbeginn zugeschnitten
};

export default async function handler(req, res) {
  const { symbol, range } = req.query;

  if (!symbol || !RANGE_TO_PARAMS[range]) {
    return res.status(400).json({ error: "symbol und range (1W/1M/3M/6M/1Y/YTD) erforderlich" });
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

    let points = (data.values || [])
      .map((v) => ({ date: v.datetime, price: parseFloat(v.close) }))
      .reverse();

    if (range === "YTD") {
      const jan1 = new Date(new Date().getFullYear(), 0, 1).toISOString().slice(0, 10);
      points = points.filter((p) => p.date >= jan1);
    }

    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate"); // 5 Min. Cache
    return res.status(200).json(points);
  } catch (err) {
    return res.status(500).json({ error: "Abruf fehlgeschlagen", detail: String(err) });
  }
}
