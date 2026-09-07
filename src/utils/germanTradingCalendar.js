// src/utils/germanTradingCalendar.js
//
// Helper-Modul für Handelstage/-zeiten der wichtigsten deutschen Handelsplätze.
//
// WICHTIG: Öffnungszeiten und Feiertagsregeln (insb. verkürzte Handelstage an
// 24./31.12., Christi Himmelfahrt, Pfingstmontag) ändern sich gelegentlich.
// Die Werte unten sind zum Zeitpunkt der Recherche korrekt, sollten vor
// Produktivbetrieb aber gegen den offiziellen Handelskalender der Deutsche
// Börse / Tradegate / LS Exchange verifiziert werden — dieses Modul ersetzt
// keine offizielle Kalenderquelle.
//
// Zeitzone: Alle Vergleiche laufen auf Basis der System-/Browserzeit. Für
// produktiven Einsatz über Zeitzonen hinweg empfiehlt sich eine
// TZ-sichere Bibliothek (z.B. date-fns-tz oder luxon) statt der nativen
// Date-Objekte hier.

function easterSunday(year) {
  // Gaußsche Osterformel (Meeus/Jones/Butcher-Algorithmus)
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31); // 3 = März, 4 = April
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(Date.UTC(year, month - 1, day));
}

function addDays(date, days) {
  const d = new Date(date);
  d.setUTCDate(d.getUTCDate() + days);
  return d;
}

function toISODate(date) {
  return date.toISOString().slice(0, 10);
}

/**
 * Volle Börsenfeiertage (Xetra/Frankfurt geschlossen). Gilt als
 * Basis-Kalender für alle Handelsplätze — einzelne Plätze (z.B. L&S)
 * können davon abweichen, siehe TRADING_VENUES.
 */
export function getGermanTradingHolidays(year) {
  const easter = easterSunday(year);
  const goodFriday = addDays(easter, -2);
  const easterMonday = addDays(easter, 1);

  return new Set([
    `${year}-01-01`, // Neujahr
    toISODate(goodFriday), // Karfreitag
    toISODate(easterMonday), // Ostermontag
    `${year}-05-01`, // Tag der Arbeit
    `${year}-12-24`, // Heiligabend — oft verkürzter Handel statt voller Schließung, siehe Hinweis oben
    `${year}-12-25`, // 1. Weihnachtsfeiertag
    `${year}-12-26`, // 2. Weihnachtsfeiertag
    `${year}-12-31`, // Silvester — oft verkürzter Handel statt voller Schließung, siehe Hinweis oben
  ]);
}

export function isWeekend(date) {
  const day = date.getUTCDay();
  return day === 0 || day === 6;
}

/**
 * Handelsplatz-Profile. `tradesWeekends` und `holidayExempt` erlauben es,
 * plattformspezifische Abweichungen abzubilden (z.B. L&S handelt auch am
 * Wochenende, mit deutlich geringerer Liquidität).
 */
export const TRADING_VENUES = {
  XETRA: { label: "Xetra", open: "09:00", close: "17:30", tradesWeekends: false },
  FRANKFURT: { label: "Börse Frankfurt (Parkett/elektronisch)", open: "08:00", close: "22:00", tradesWeekends: false },
  TRADEGATE: { label: "Tradegate Exchange", open: "08:00", close: "22:00", tradesWeekends: false },
  LS: { label: "Lang & Schwarz (LS Exchange)", open: "07:30", close: "23:00", tradesWeekends: true },
};

function parseTimeToMinutes(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

/**
 * Ist an diesem Datum grundsätzlich ein Handelstag für den gegebenen
 * Handelsplatz (unabhängig von der Uhrzeit)?
 */
export function isTradingDay(date, venueKey = "XETRA") {
  const venue = TRADING_VENUES[venueKey];
  if (!venue) throw new Error(`Unbekannter Handelsplatz: ${venueKey}`);

  if (isWeekend(date) && !venue.tradesWeekends) return false;

  const holidays = getGermanTradingHolidays(date.getUTCFullYear());
  if (holidays.has(toISODate(date))) return false;

  return true;
}

/**
 * Ist der gegebene Handelsplatz JETZT (oder zum übergebenen Datum) geöffnet?
 * Prüft Handelstag UND Uhrzeit innerhalb der Öffnungszeiten.
 */
export function isVenueOpen(venueKey = "XETRA", date = new Date()) {
  const venue = TRADING_VENUES[venueKey];
  if (!venue) throw new Error(`Unbekannter Handelsplatz: ${venueKey}`);
  if (!isTradingDay(date, venueKey)) return false;

  const minutesNow = date.getHours() * 60 + date.getMinutes();
  return minutesNow >= parseTimeToMinutes(venue.open) && minutesNow < parseTimeToMinutes(venue.close);
}

/**
 * Gibt den nächsten Handelstag für den gegebenen Handelsplatz zurück
 * (z.B. um "nächster möglicher Ausführungstag" für einen Sparplan anzuzeigen).
 */
export function getNextTradingDay(venueKey = "XETRA", from = new Date()) {
  let d = addDays(from, 1);
  let guard = 0;
  while (!isTradingDay(d, venueKey) && guard < 30) {
    d = addDays(d, 1);
    guard += 1;
  }
  return d;
}

/**
 * Praktischer Zusammenfassungs-Helper fürs UI, z.B. ein "Markt-Status"-Badge
 * im Header: { open: boolean, venue: string, nextOpen?: Date }
 */
export function getMarketStatus(venueKey = "XETRA", date = new Date()) {
  const open = isVenueOpen(venueKey, date);
  return {
    venue: TRADING_VENUES[venueKey].label,
    open,
    nextTradingDay: open ? null : getNextTradingDay(venueKey, date),
  };
}
