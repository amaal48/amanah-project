// src/utils/icsExport.js
//
// Generiert .ics-Dateien (iCalendar-Format, RFC 5545) rein clientseitig —
// kein Backend nötig. Kompatibel mit Apple Kalender, Google Kalender,
// Outlook u.a. (alle unterstützen den Import einzelner .ics-Dateien).
//
// WICHTIG: Das hier erzeugt einen EINMALIGEN Snapshot-Export, keinen
// live-synchronisierenden Kalender-Feed (das wäre ein eigenes Thema:
// ein öffentlicher, stabiler .ics-URL-Endpunkt zum Abonnieren statt
// Herunterladen — bräuchte ein Backend, das ist hier bewusst nicht drin).

function escapeICSText(str) {
  return String(str)
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

// ICS verlangt Zeilenumbrüche nach spätestens 75 Oktetten ("Folding") —
// einfache Umsetzung, reicht für unsere kurzen Felder.
function foldLine(line) {
  if (line.length <= 75) return line;
  let result = "";
  let rest = line;
  while (rest.length > 75) {
    result += rest.slice(0, 75) + "\r\n ";
    rest = rest.slice(75);
  }
  return result + rest;
}

function formatDateStamp(date) {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function formatDateOnly(iso) {
  return iso.replace(/-/g, "");
}

function addOneDayISO(iso) {
  const d = new Date(iso + "T00:00:00");
  d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
}

/**
 * @param {Array<{ticker, name, date, type, label}>} events - Termine im bestehenden Amanah-Schema
 * @param {string} calendarName - Titel, den Kalender-Apps beim Import anzeigen
 * @returns {string} vollständiger .ics-Dateiinhalt
 */
export function generateICS(events, calendarName = "Amanah Termine") {
  const now = formatDateStamp(new Date());

  const veventBlocks = events.map((e) => {
    const uid = `${e.ticker}-${e.date}-${e.type}@amanah.app`;
    const summary = escapeICSText(`${e.ticker} · ${e.label}`);
    const description = escapeICSText(
      `${e.name} — ${e.label}. Demo-Termin aus dem Amanah-Prototyp, kein garantiertes echtes Datum.`
    );
    return [
      "BEGIN:VEVENT",
      foldLine(`UID:${uid}`),
      `DTSTAMP:${now}`,
      `DTSTART;VALUE=DATE:${formatDateOnly(e.date)}`,
      `DTEND;VALUE=DATE:${formatDateOnly(addOneDayISO(e.date))}`,
      foldLine(`SUMMARY:${summary}`),
      foldLine(`DESCRIPTION:${description}`),
      "END:VEVENT",
    ].join("\r\n");
  });

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Amanah//Termin-Kalender//DE",
    "CALSCALE:GREGORIAN",
    foldLine(`X-WR-CALNAME:${escapeICSText(calendarName)}`),
    ...veventBlocks,
    "END:VCALENDAR",
  ].join("\r\n");
}

/**
 * Löst den Browser-Download einer .ics-Datei aus.
 */
export function downloadICS(filename, icsContent) {
  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename.endsWith(".ics") ? filename : `${filename}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
