# Amanah

Ein Prototyp für eine Halal-Investing-Plattform: datenbasierte Sharia-Screening-Analysen für Aktien und ETFs, gedacht für Privatanleger mit kleinerem Budget.

## Was schon funktioniert

- **Screener** – Suche mit Live-Vorschlägen, Filter nach Status (Halal / Grenzwertig / Nicht Halal), Sektor und Verschuldungsquote, live gefilterte Ergebnisliste
- **Aktien-Detailseite** – Geschäftsmodell-Screen mit Tooltips, Finanz-Ratios im Vergleich zum AAOIFI-Grenzwert, Kursverlauf, Einschätzung je Aktie, ähnliche konforme Alternativen
- **Portfolio-Reinheit** – aggregierte Übersicht über den Halal-Anteil der eigenen Holdings
- **Reinheits-Rechner** – schätzt den Spendenanteil auf Dividenden
- **Watchlist** – aktienübergreifend merkbar, mit Zähler in der Sidebar
- **Vergleichsfunktion** – bis zu 3 Aktien nebeneinander vergleichen
- **Sektor-Explorer** – Übersicht, wie viele Titel je Branche konform sind
- **PDF-Berichte & Wissen/FAQ** – Platzhalter-Seiten für wöchentliche Reports und Erklärungen zu den Screening-Kriterien
- **Sidebar-Navigation** – ein-/ausklappbar, mit aufklappbaren Gruppen und direkten Filter-Shortcuts

## Tech-Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## Setup

```bash
npm install
npm run dev
```

Die App läuft danach lokal unter `http://localhost:5173`.

## Status

Dies ist ein **Prototyp** mit statischen Beispieldaten — es gibt noch kein Backend, keine echten Kursdaten und keine Nutzerkonten. Aktien, Kurse und Kennzahlen im Code dienen ausschließlich der Veranschaulichung.

## Hinweis

Keine Anlageberatung.
