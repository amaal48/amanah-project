// Automatisch aus halal_screening_results_alle.csv generiert.
// 503 Unternehmen — Quelle: euer eigener Screening-Lauf (yfinance-Skript).
// Demo-Kurse (price/change) sind NICHT aus der CSV, sondern deterministisch erzeugte
// Platzhalter, da die CSV keine Kursdaten enthält — siehe price-history.js für die
// echte Kursanbindung. Währung: USD ($), da alle Titel US-notiert sind (NYSE/NASDAQ).

export const ALL_STOCKS = [
  {
    "ticker": "A",
    "name": "Agilent Technologies, Inc.",
    "sector": "Gesundheit",
    "industry": "Diagnostics & Research",
    "price": "361,45 $",
    "change": "-1,9%",
    "up": false,
    "debt": "9.1%",
    "score": 93,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Diagnostics & Research",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 9.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Agilent Technologies, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Diagnostics & Research) ist zulässig, Verschuldung (9.1%) und Cash-Quote (4.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "AAPL",
    "name": "Apple Inc.",
    "sector": "Technologie",
    "industry": "Consumer Electronics",
    "price": "410,10 $",
    "change": "-1,6%",
    "up": false,
    "debt": "1.9%",
    "score": 98,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Consumer Electronics",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 1.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Apple Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Consumer Electronics) ist zulässig, Verschuldung (1.9%) und Cash-Quote (1.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "ABBV",
    "name": "AbbVie Inc.",
    "sector": "Gesundheit",
    "industry": "Drug Manufacturers - General",
    "price": "103,28 $",
    "change": "-0,8%",
    "up": false,
    "debt": "16.4%",
    "score": 90,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Drug Manufacturers - General",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 16.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "AbbVie Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Drug Manufacturers - General) ist zulässig, Verschuldung (16.4%) und Cash-Quote (2.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "ABNB",
    "name": "Airbnb, Inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Travel Services",
    "price": "238,27 $",
    "change": "-0,4%",
    "up": false,
    "debt": "2.8%",
    "score": 94,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Travel Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 2.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 13.3,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Airbnb, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Travel Services) ist zulässig, Verschuldung (2.8%) und Cash-Quote (13.3%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "ABT",
    "name": "Abbott Laboratories",
    "sector": "Gesundheit",
    "industry": "Medical Devices",
    "price": "33,51 $",
    "change": "-1,6%",
    "up": false,
    "debt": "17.8%",
    "score": 88,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Medical Devices",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 17.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Abbott Laboratories erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Devices) ist zulässig, Verschuldung (17.8%) und Cash-Quote (3.0%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "ACGL",
    "name": "Arch Capital Group Ltd.",
    "sector": "Finanzdienstleistungen",
    "industry": "Insurance - Diversified",
    "price": "114,37 $",
    "change": "-0,7%",
    "up": false,
    "debt": "0.0%",
    "score": 14,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Insurance - Diversified",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Arch Capital Group Ltd. zählt zur ausgeschlossenen Branche Insurance - Diversified und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "ACN",
    "name": "Accenture plc",
    "sector": "Technologie",
    "industry": "Information Technology Services",
    "price": "162,75 $",
    "change": "+1,1%",
    "up": true,
    "debt": "8.3%",
    "score": 92,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Information Technology Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 8.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 10.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Accenture plc erfüllt aktuell alle geprüften Kriterien: Die Branche (Information Technology Services) ist zulässig, Verschuldung (8.3%) und Cash-Quote (10.0%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "ADBE",
    "name": "Adobe Inc.",
    "sector": "Technologie",
    "industry": "Software - Application",
    "price": "239,46 $",
    "change": "+2,1%",
    "up": true,
    "debt": "7.1%",
    "score": 94,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Application",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 7.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 5.7,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Adobe Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (7.1%) und Cash-Quote (5.7%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "ADI",
    "name": "Analog Devices, Inc.",
    "sector": "Technologie",
    "industry": "Semiconductors",
    "price": "400,57 $",
    "change": "-1,2%",
    "up": false,
    "debt": "4.9%",
    "score": 96,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Semiconductors",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 4.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.9,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Analog Devices, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (4.9%) und Cash-Quote (1.9%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "ADM",
    "name": "Archer-Daniels-Midland Company",
    "sector": "Konsumgüter (Basis)",
    "industry": "Farm Products",
    "price": "117,28 $",
    "change": "+1,2%",
    "up": true,
    "debt": "27.9%",
    "score": 83,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Farm Products",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 27.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Archer-Daniels-Midland Company erfüllt aktuell alle geprüften Kriterien: Die Branche (Farm Products) ist zulässig, Verschuldung (27.9%) und Cash-Quote (1.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "ADP",
    "name": "Automatic Data Processing, Inc.",
    "sector": "Technologie",
    "industry": "Software - Application",
    "price": "170,59 $",
    "change": "-2,1%",
    "up": false,
    "debt": "5.1%",
    "score": 96,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Application",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 5.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Automatic Data Processing, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (5.1%) und Cash-Quote (4.0%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "ADSK",
    "name": "Autodesk, Inc.",
    "sector": "Technologie",
    "industry": "Software - Application",
    "price": "254,18 $",
    "change": "-0,7%",
    "up": false,
    "debt": "5.5%",
    "score": 95,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Application",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 5.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 5.9,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Autodesk, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (5.5%) und Cash-Quote (5.9%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "AEE",
    "name": "Ameren Corporation",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Electric",
    "price": "388,96 $",
    "change": "+2,3%",
    "up": true,
    "debt": "71.9%",
    "score": 42,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Electric",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 71.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 71.9% (Limit 30%)",
    "insight": "Ameren Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 71.9% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "AEP",
    "name": "American Electric Power Company",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Electric",
    "price": "199,18 $",
    "change": "+2,3%",
    "up": true,
    "debt": "76.9%",
    "score": 41,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Electric",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 76.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.9,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 76.9% (Limit 30%)",
    "insight": "American Electric Power Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 76.9% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "AES",
    "name": "The AES Corporation",
    "sector": "Versorger",
    "industry": "Utilities - Diversified",
    "price": "360,55 $",
    "change": "+0,8%",
    "up": true,
    "debt": "303.8%",
    "score": 15,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Diversified",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 303.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 15.8,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 303.8% (Limit 30%)",
    "insight": "The AES Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 303.8% (Limit 30%)). Die Branche (Utilities - Diversified) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "AFL",
    "name": "AFLAC Incorporated",
    "sector": "Finanzdienstleistungen",
    "industry": "Insurance - Life",
    "price": "52,33 $",
    "change": "+2,5%",
    "up": true,
    "debt": "0.0%",
    "score": 6,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Insurance - Life",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "AFLAC Incorporated zählt zur ausgeschlossenen Branche Insurance - Life und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "AIG",
    "name": "American International Group, I",
    "sector": "Finanzdienstleistungen",
    "industry": "Insurance - Diversified",
    "price": "285,83 $",
    "change": "+1,5%",
    "up": true,
    "debt": "0.0%",
    "score": 14,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Insurance - Diversified",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "American International Group, I zählt zur ausgeschlossenen Branche Insurance - Diversified und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "AIZ",
    "name": "Assurant, Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Insurance - Property & Casualty",
    "price": "57,79 $",
    "change": "+1,0%",
    "up": true,
    "debt": "0.0%",
    "score": 13,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Insurance - Property & Casualty",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Assurant, Inc. zählt zur ausgeschlossenen Branche Insurance - Property & Casualty und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "AJG",
    "name": "Arthur J. Gallagher & Co.",
    "sector": "Finanzdienstleistungen",
    "industry": "Insurance Brokers",
    "price": "149,34 $",
    "change": "+1,2%",
    "up": true,
    "debt": "0.0%",
    "score": 5,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Insurance Brokers",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Arthur J. Gallagher & Co. zählt zur ausgeschlossenen Branche Insurance Brokers und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "AKAM",
    "name": "Akamai Technologies, Inc.",
    "sector": "Technologie",
    "industry": "Software - Infrastructure",
    "price": "390,85 $",
    "change": "+2,3%",
    "up": true,
    "debt": "35.0%",
    "score": 54,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Infrastructure",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 35.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 5.6,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 35.0% (Limit 30%)",
    "insight": "Akamai Technologies, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 35.0% (Limit 30%)). Die Branche (Software - Infrastructure) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "ALB",
    "name": "Albemarle Corporation",
    "sector": "Grundstoffe",
    "industry": "Specialty Chemicals",
    "price": "406,57 $",
    "change": "-1,8%",
    "up": false,
    "debt": "14.5%",
    "score": 89,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Chemicals",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 14.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 7.9,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Albemarle Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Chemicals) ist zulässig, Verschuldung (14.5%) und Cash-Quote (7.9%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "ALGN",
    "name": "Align Technology, Inc.",
    "sector": "Gesundheit",
    "industry": "Medical Instruments & Supplies",
    "price": "116,76 $",
    "change": "+0,8%",
    "up": true,
    "debt": "0.7%",
    "score": 97,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Medical Instruments & Supplies",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 9.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Align Technology, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Instruments & Supplies) ist zulässig, Verschuldung (0.7%) und Cash-Quote (9.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "ALL",
    "name": "Allstate Corporation (The)",
    "sector": "Finanzdienstleistungen",
    "industry": "Insurance - Property & Casualty",
    "price": "391,89 $",
    "change": "+3,0%",
    "up": true,
    "debt": "0.0%",
    "score": 12,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Insurance - Property & Casualty",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Allstate Corporation (The) zählt zur ausgeschlossenen Branche Insurance - Property & Casualty und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "ALLE",
    "name": "Allegion plc",
    "sector": "Industrie",
    "industry": "Security & Protection Services",
    "price": "288,75 $",
    "change": "+2,2%",
    "up": true,
    "debt": "16.6%",
    "score": 89,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Security & Protection Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 16.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Allegion plc erfüllt aktuell alle geprüften Kriterien: Die Branche (Security & Protection Services) ist zulässig, Verschuldung (16.6%) und Cash-Quote (2.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "AMAT",
    "name": "Applied Materials, Inc.",
    "sector": "Technologie",
    "industry": "Semiconductor Equipment & Materials",
    "price": "221,31 $",
    "change": "-0,2%",
    "up": false,
    "debt": "1.8%",
    "score": 98,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Semiconductor Equipment & Materials",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 1.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Applied Materials, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductor Equipment & Materials) ist zulässig, Verschuldung (1.8%) und Cash-Quote (2.0%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "AMCR",
    "name": "Amcor plc",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Packaging & Containers",
    "price": "321,52 $",
    "change": "-0,5%",
    "up": false,
    "debt": "80.8%",
    "score": 40,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Packaging & Containers",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 80.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 7.6,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 80.8% (Limit 30%)",
    "insight": "Amcor plc überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 80.8% (Limit 30%)). Die Branche (Packaging & Containers) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "AMD",
    "name": "Advanced Micro Devices, Inc.",
    "sector": "Technologie",
    "industry": "Semiconductors",
    "price": "340,90 $",
    "change": "+2,0%",
    "up": true,
    "debt": "0.5%",
    "score": 99,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Semiconductors",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Advanced Micro Devices, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (0.5%) und Cash-Quote (1.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "AME",
    "name": "AMETEK, Inc.",
    "sector": "Industrie",
    "industry": "Specialty Industrial Machinery",
    "price": "18,24 $",
    "change": "-2,7%",
    "up": false,
    "debt": "4.4%",
    "score": 97,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Industrial Machinery",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 4.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.9,
        "max": 30
      }
    ],
    "note": null,
    "insight": "AMETEK, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (4.4%) und Cash-Quote (0.9%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "AMGN",
    "name": "Amgen Inc.",
    "sector": "Gesundheit",
    "industry": "Drug Manufacturers - General",
    "price": "193,88 $",
    "change": "+2,7%",
    "up": true,
    "debt": "27.6%",
    "score": 82,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Drug Manufacturers - General",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 27.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 5.8,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Amgen Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Drug Manufacturers - General) ist zulässig, Verschuldung (27.6%) und Cash-Quote (5.8%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "AMP",
    "name": "Ameriprise Financial, Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Asset Management",
    "price": "210,91 $",
    "change": "+2,8%",
    "up": true,
    "debt": "0.0%",
    "score": 7,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Asset Management",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Ameriprise Financial, Inc. zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "AMT",
    "name": "American Tower Corporation (REI",
    "sector": "Immobilien",
    "industry": "REIT - Specialty",
    "price": "351,68 $",
    "change": "+3,0%",
    "up": true,
    "debt": "55.7%",
    "score": 47,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Specialty",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 55.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.2,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 55.7% (Limit 30%)",
    "insight": "American Tower Corporation (REI überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 55.7% (Limit 30%)). Die Branche (REIT - Specialty) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "AMZN",
    "name": "Amazon.com, Inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Internet Retail",
    "price": "406,53 $",
    "change": "-2,4%",
    "up": false,
    "debt": "7.6%",
    "score": 94,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Internet Retail",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 7.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Amazon.com, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Internet Retail) ist zulässig, Verschuldung (7.6%) und Cash-Quote (4.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "ANET",
    "name": "Arista Networks, Inc.",
    "sector": "Technologie",
    "industry": "Computer Hardware",
    "price": "90,72 $",
    "change": "-2,3%",
    "up": false,
    "debt": "0.0%",
    "score": 98,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Computer Hardware",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 5.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Arista Networks, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Computer Hardware) ist zulässig, Verschuldung (0.0%) und Cash-Quote (5.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "AON",
    "name": "Aon plc",
    "sector": "Finanzdienstleistungen",
    "industry": "Insurance Brokers",
    "price": "173,58 $",
    "change": "-1,4%",
    "up": false,
    "debt": "0.0%",
    "score": 7,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Insurance Brokers",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Aon plc zählt zur ausgeschlossenen Branche Insurance Brokers und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "AOS",
    "name": "A.O. Smith Corporation",
    "sector": "Industrie",
    "industry": "Specialty Industrial Machinery",
    "price": "142,64 $",
    "change": "+0,2%",
    "up": true,
    "debt": "8.3%",
    "score": 94,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Industrial Machinery",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 8.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "A.O. Smith Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (8.3%) und Cash-Quote (2.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "APA",
    "name": "APA Corporation",
    "sector": "Energie",
    "industry": "Oil & Gas E&P",
    "price": "369,35 $",
    "change": "-0,2%",
    "up": false,
    "debt": "34.4%",
    "score": 54,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Oil & Gas E&P",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 34.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.2,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 34.4% (Limit 30%)",
    "insight": "APA Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 34.4% (Limit 30%)). Die Branche (Oil & Gas E&P) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "APD",
    "name": "Air Products and Chemicals, Inc",
    "sector": "Grundstoffe",
    "industry": "Specialty Chemicals",
    "price": "21,26 $",
    "change": "+1,5%",
    "up": true,
    "debt": "27.8%",
    "score": 83,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Chemicals",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 27.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.5,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Air Products and Chemicals, Inc erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Chemicals) ist zulässig, Verschuldung (27.8%) und Cash-Quote (1.5%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "APH",
    "name": "Amphenol Corporation",
    "sector": "Technologie",
    "industry": "Electronic Components",
    "price": "238,05 $",
    "change": "-1,6%",
    "up": false,
    "debt": "9.5%",
    "score": 93,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Electronic Components",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 9.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.7,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Amphenol Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Electronic Components) ist zulässig, Verschuldung (9.5%) und Cash-Quote (2.7%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "APO",
    "name": "Apollo Global Management, Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Asset Management",
    "price": "238,40 $",
    "change": "-2,7%",
    "up": false,
    "debt": "0.0%",
    "score": 9,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Asset Management",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Apollo Global Management, Inc. zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "APP",
    "name": "Applovin Corporation",
    "sector": "Kommunikation",
    "industry": "Advertising Agencies",
    "price": "266,54 $",
    "change": "+0,5%",
    "up": true,
    "debt": "2.9%",
    "score": 98,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Advertising Agencies",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 2.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Applovin Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Advertising Agencies) ist zulässig, Verschuldung (2.9%) und Cash-Quote (2.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "APTV",
    "name": "Aptiv PLC",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Auto Parts",
    "price": "353,13 $",
    "change": "+2,3%",
    "up": true,
    "debt": "82.7%",
    "score": 39,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Auto Parts",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 82.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 26.6,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 82.7% (Limit 30%)",
    "insight": "Aptiv PLC überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 82.7% (Limit 30%)). Die Branche (Auto Parts) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "ARE",
    "name": "Alexandria Real Estate Equities",
    "sector": "Immobilien",
    "industry": "REIT - Office",
    "price": "389,21 $",
    "change": "+1,4%",
    "up": true,
    "debt": "143.6%",
    "score": 21,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Office",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 143.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.7,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 143.6% (Limit 30%)",
    "insight": "Alexandria Real Estate Equities überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 143.6% (Limit 30%)). Die Branche (REIT - Office) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "ARES",
    "name": "Ares Management Corporation",
    "sector": "Finanzdienstleistungen",
    "industry": "Asset Management",
    "price": "414,74 $",
    "change": "+0,8%",
    "up": true,
    "debt": "0.0%",
    "score": 14,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Asset Management",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Ares Management Corporation zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "ATO",
    "name": "Atmos Energy Corporation",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Gas",
    "price": "110,34 $",
    "change": "+0,5%",
    "up": true,
    "debt": "33.4%",
    "score": 54,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Gas",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 33.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.4,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 33.4% (Limit 30%)",
    "insight": "Atmos Energy Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 33.4% (Limit 30%)). Die Branche (Utilities - Regulated Gas) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "AVB",
    "name": "AvalonBay Communities, Inc.",
    "sector": "Immobilien",
    "industry": "REIT - Residential",
    "price": "33,60 $",
    "change": "-1,1%",
    "up": false,
    "debt": "34.0%",
    "score": 54,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Residential",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 34.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.3,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 34.0% (Limit 30%)",
    "insight": "AvalonBay Communities, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 34.0% (Limit 30%)). Die Branche (REIT - Residential) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "AVGO",
    "name": "Broadcom Inc.",
    "sector": "Technologie",
    "industry": "Semiconductors",
    "price": "21,88 $",
    "change": "+2,7%",
    "up": true,
    "debt": "3.5%",
    "score": 98,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Semiconductors",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 3.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Broadcom Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (3.5%) und Cash-Quote (1.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "AVY",
    "name": "Avery Dennison Corporation",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Packaging & Containers",
    "price": "186,55 $",
    "change": "+2,8%",
    "up": true,
    "debt": "28.3%",
    "score": 82,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Packaging & Containers",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 28.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.8,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Avery Dennison Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Packaging & Containers) ist zulässig, Verschuldung (28.3%) und Cash-Quote (1.8%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "AWK",
    "name": "American Water Works Company, I",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Water",
    "price": "210,90 $",
    "change": "+1,1%",
    "up": true,
    "debt": "60.3%",
    "score": 46,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Water",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 60.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.9,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 60.3% (Limit 30%)",
    "insight": "American Water Works Company, I überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 60.3% (Limit 30%)). Die Branche (Utilities - Regulated Water) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "AXON",
    "name": "Axon Enterprise, Inc.",
    "sector": "Industrie",
    "industry": "Aerospace & Defense",
    "price": "386,38 $",
    "change": "+1,1%",
    "up": true,
    "debt": "0.0%",
    "score": 5,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Aerospace & Defense",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Axon Enterprise, Inc. zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "AXP",
    "name": "American Express Company",
    "sector": "Finanzdienstleistungen",
    "industry": "Credit Services",
    "price": "201,64 $",
    "change": "+0,9%",
    "up": true,
    "debt": "0.0%",
    "score": 8,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Credit Services",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "American Express Company zählt zur ausgeschlossenen Branche Credit Services und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "AZO",
    "name": "AutoZone, Inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Auto Parts",
    "price": "328,76 $",
    "change": "-1,5%",
    "up": false,
    "debt": "26.6%",
    "score": 84,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Auto Parts",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 26.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.5,
        "max": 30
      }
    ],
    "note": null,
    "insight": "AutoZone, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Auto Parts) ist zulässig, Verschuldung (26.6%) und Cash-Quote (0.5%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "BA",
    "name": "Boeing Company (The)",
    "sector": "Industrie",
    "industry": "Aerospace & Defense",
    "price": "369,74 $",
    "change": "-1,9%",
    "up": false,
    "debt": "0.0%",
    "score": 6,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Aerospace & Defense",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Boeing Company (The) zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "BAC",
    "name": "Bank of America Corporation",
    "sector": "Finanzdienstleistungen",
    "industry": "Banks - Diversified",
    "price": "386,92 $",
    "change": "-1,7%",
    "up": false,
    "debt": "0.0%",
    "score": 13,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Banks - Diversified",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Bank of America Corporation zählt zur ausgeschlossenen Branche Banks - Diversified und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "BALL",
    "name": "Ball Corporation",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Packaging & Containers",
    "price": "312,75 $",
    "change": "+2,0%",
    "up": true,
    "debt": "47.3%",
    "score": 50,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Packaging & Containers",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 47.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.2,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 47.3% (Limit 30%)",
    "insight": "Ball Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 47.3% (Limit 30%)). Die Branche (Packaging & Containers) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "BAX",
    "name": "Baxter International Inc.",
    "sector": "Gesundheit",
    "industry": "Medical Instruments & Supplies",
    "price": "364,97 $",
    "change": "+1,4%",
    "up": true,
    "debt": "71.5%",
    "score": 43,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Medical Instruments & Supplies",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 71.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 15.9,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 71.5% (Limit 30%)",
    "insight": "Baxter International Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 71.5% (Limit 30%)). Die Branche (Medical Instruments & Supplies) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "BBY",
    "name": "Best Buy Co., Inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Specialty Retail",
    "price": "172,43 $",
    "change": "-0,1%",
    "up": false,
    "debt": "22.7%",
    "score": 83,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Retail",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 22.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 10.5,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Best Buy Co., Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Retail) ist zulässig, Verschuldung (22.7%) und Cash-Quote (10.5%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "BDX",
    "name": "Becton, Dickinson and Company",
    "sector": "Gesundheit",
    "industry": "Medical Instruments & Supplies",
    "price": "394,47 $",
    "change": "+2,5%",
    "up": true,
    "debt": "37.9%",
    "score": 53,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Medical Instruments & Supplies",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 37.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.8,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 37.9% (Limit 30%)",
    "insight": "Becton, Dickinson and Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 37.9% (Limit 30%)). Die Branche (Medical Instruments & Supplies) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "BEN",
    "name": "Franklin Resources, Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Asset Management",
    "price": "266,88 $",
    "change": "-1,7%",
    "up": false,
    "debt": "0.0%",
    "score": 8,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Asset Management",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Franklin Resources, Inc. zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "BF-B",
    "name": "Brown Forman Inc",
    "sector": "Konsumgüter (Basis)",
    "industry": "Beverages - Wineries & Distilleries",
    "price": "339,48 $",
    "change": "+1,8%",
    "up": true,
    "debt": "0.0%",
    "score": 12,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Beverages - Wineries & Distilleries",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Brown Forman Inc zählt zur ausgeschlossenen Branche Beverages - Wineries & Distilleries und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "BG",
    "name": "Bunge Limited",
    "sector": "Konsumgüter (Basis)",
    "industry": "Farm Products",
    "price": "204,80 $",
    "change": "-0,0%",
    "up": false,
    "debt": "83.6%",
    "score": 39,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Farm Products",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 83.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.9,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 83.6% (Limit 30%)",
    "insight": "Bunge Limited überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 83.6% (Limit 30%)). Die Branche (Farm Products) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "BIIB",
    "name": "Biogen Inc.",
    "sector": "Gesundheit",
    "industry": "Drug Manufacturers - General",
    "price": "279,14 $",
    "change": "-2,3%",
    "up": false,
    "debt": "27.9%",
    "score": 82,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Drug Manufacturers - General",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 27.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.3,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Biogen Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Drug Manufacturers - General) ist zulässig, Verschuldung (27.9%) und Cash-Quote (4.3%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "BKNG",
    "name": "Booking Holdings Inc. Common St",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Travel Services",
    "price": "42,85 $",
    "change": "+1,4%",
    "up": true,
    "debt": "12.8%",
    "score": 89,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Travel Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 12.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 10.7,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Booking Holdings Inc. Common St erfüllt aktuell alle geprüften Kriterien: Die Branche (Travel Services) ist zulässig, Verschuldung (12.8%) und Cash-Quote (10.7%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "BKR",
    "name": "Baker Hughes Company",
    "sector": "Energie",
    "industry": "Oil & Gas Equipment & Services",
    "price": "322,29 $",
    "change": "-1,8%",
    "up": false,
    "debt": "27.1%",
    "score": 75,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Oil & Gas Equipment & Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 27.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 28.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Baker Hughes Company erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas Equipment & Services) ist zulässig, Verschuldung (27.1%) und Cash-Quote (28.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "BLDR",
    "name": "Builders FirstSource, Inc.",
    "sector": "Industrie",
    "industry": "Building Products & Equipment",
    "price": "60,68 $",
    "change": "+2,8%",
    "up": true,
    "debt": "73.3%",
    "score": 42,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Building Products & Equipment",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 73.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.9,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 73.3% (Limit 30%)",
    "insight": "Builders FirstSource, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 73.3% (Limit 30%)). Die Branche (Building Products & Equipment) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "BLK",
    "name": "BlackRock, Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Asset Management",
    "price": "414,75 $",
    "change": "+0,8%",
    "up": true,
    "debt": "0.0%",
    "score": 12,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Asset Management",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "BlackRock, Inc. zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "BMY",
    "name": "Bristol-Myers Squibb Company",
    "sector": "Gesundheit",
    "industry": "Drug Manufacturers - General",
    "price": "92,85 $",
    "change": "+2,3%",
    "up": true,
    "debt": "33.8%",
    "score": 54,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Drug Manufacturers - General",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 33.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 8.3,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 33.8% (Limit 30%)",
    "insight": "Bristol-Myers Squibb Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 33.8% (Limit 30%)). Die Branche (Drug Manufacturers - General) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "BNY",
    "name": "The Bank of New York Mellon Cor",
    "sector": "Finanzdienstleistungen",
    "industry": "Banks - Diversified",
    "price": "58,75 $",
    "change": "-0,6%",
    "up": false,
    "debt": "0.0%",
    "score": 8,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Banks - Diversified",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "The Bank of New York Mellon Cor zählt zur ausgeschlossenen Branche Banks - Diversified und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "BR",
    "name": "Broadridge Financial Solutions,",
    "sector": "Technologie",
    "industry": "Information Technology Services",
    "price": "256,47 $",
    "change": "-2,9%",
    "up": false,
    "debt": "19.1%",
    "score": 88,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Information Technology Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 19.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.7,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Broadridge Financial Solutions, erfüllt aktuell alle geprüften Kriterien: Die Branche (Information Technology Services) ist zulässig, Verschuldung (19.1%) und Cash-Quote (1.7%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "BRK-B",
    "name": "Berkshire Hathaway Inc. New",
    "sector": "Finanzdienstleistungen",
    "industry": "Insurance - Diversified",
    "price": "417,45 $",
    "change": "-2,2%",
    "up": false,
    "debt": "0.0%",
    "score": 9,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Insurance - Diversified",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Berkshire Hathaway Inc. New zählt zur ausgeschlossenen Branche Insurance - Diversified und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "BRO",
    "name": "Brown & Brown, Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Insurance Brokers",
    "price": "372,70 $",
    "change": "+1,4%",
    "up": true,
    "debt": "0.0%",
    "score": 12,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Insurance Brokers",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Brown & Brown, Inc. zählt zur ausgeschlossenen Branche Insurance Brokers und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "BSX",
    "name": "Boston Scientific Corporation",
    "sector": "Gesundheit",
    "industry": "Medical Devices",
    "price": "24,98 $",
    "change": "-2,0%",
    "up": false,
    "debt": "15.9%",
    "score": 90,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Medical Devices",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 15.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Boston Scientific Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Devices) ist zulässig, Verschuldung (15.9%) und Cash-Quote (2.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "BX",
    "name": "Blackstone Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Asset Management",
    "price": "80,46 $",
    "change": "-0,9%",
    "up": false,
    "debt": "0.0%",
    "score": 9,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Asset Management",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Blackstone Inc. zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "BXP",
    "name": "BXP, Inc.",
    "sector": "Immobilien",
    "industry": "REIT - Office",
    "price": "102,69 $",
    "change": "-0,3%",
    "up": false,
    "debt": "130.8%",
    "score": 25,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Office",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 130.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.0,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 130.8% (Limit 30%)",
    "insight": "BXP, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 130.8% (Limit 30%)). Die Branche (REIT - Office) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "C",
    "name": "Citigroup, Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Banks - Diversified",
    "price": "61,75 $",
    "change": "-0,2%",
    "up": false,
    "debt": "0.0%",
    "score": 12,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Banks - Diversified",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Citigroup, Inc. zählt zur ausgeschlossenen Branche Banks - Diversified und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "CAH",
    "name": "Cardinal Health, Inc.",
    "sector": "Gesundheit",
    "industry": "Medical Distribution",
    "price": "405,81 $",
    "change": "+0,4%",
    "up": true,
    "debt": "16.5%",
    "score": 88,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Medical Distribution",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 16.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 7.3,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Cardinal Health, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Distribution) ist zulässig, Verschuldung (16.5%) und Cash-Quote (7.3%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CARR",
    "name": "Carrier Global Corporation",
    "sector": "Industrie",
    "industry": "Building Products & Equipment",
    "price": "92,52 $",
    "change": "-1,8%",
    "up": false,
    "debt": "24.1%",
    "score": 85,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Building Products & Equipment",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 24.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Carrier Global Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Building Products & Equipment) ist zulässig, Verschuldung (24.1%) und Cash-Quote (2.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CASY",
    "name": "Caseys General Stores, Inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Specialty Retail",
    "price": "334,25 $",
    "change": "-0,4%",
    "up": false,
    "debt": "9.0%",
    "score": 94,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Retail",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 9.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Caseys General Stores, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Retail) ist zulässig, Verschuldung (9.0%) und Cash-Quote (1.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CAT",
    "name": "Caterpillar, Inc.",
    "sector": "Industrie",
    "industry": "Farm & Heavy Construction Machinery",
    "price": "260,98 $",
    "change": "-2,9%",
    "up": false,
    "debt": "11.5%",
    "score": 93,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Farm & Heavy Construction Machinery",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 11.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.9,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Caterpillar, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Farm & Heavy Construction Machinery) ist zulässig, Verschuldung (11.5%) und Cash-Quote (0.9%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CB",
    "name": "Chubb Limited",
    "sector": "Finanzdienstleistungen",
    "industry": "Insurance - Property & Casualty",
    "price": "232,26 $",
    "change": "-0,7%",
    "up": false,
    "debt": "0.0%",
    "score": 8,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Insurance - Property & Casualty",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Chubb Limited zählt zur ausgeschlossenen Branche Insurance - Property & Casualty und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "CBOE",
    "name": "Cboe Global Markets, Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Financial Data & Stock Exchanges",
    "price": "218,60 $",
    "change": "-2,4%",
    "up": false,
    "debt": "0.0%",
    "score": 6,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Financial Data & Stock Exchanges",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Cboe Global Markets, Inc. zählt zur ausgeschlossenen Branche Financial Data & Stock Exchanges und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "CBRE",
    "name": "CBRE Group Inc",
    "sector": "Immobilien",
    "industry": "Real Estate Services",
    "price": "42,94 $",
    "change": "-0,6%",
    "up": false,
    "debt": "25.4%",
    "score": 84,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Real Estate Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 25.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.5,
        "max": 30
      }
    ],
    "note": null,
    "insight": "CBRE Group Inc erfüllt aktuell alle geprüften Kriterien: Die Branche (Real Estate Services) ist zulässig, Verschuldung (25.4%) und Cash-Quote (3.5%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CCI",
    "name": "Crown Castle Inc.",
    "sector": "Immobilien",
    "industry": "REIT - Specialty",
    "price": "80,70 $",
    "change": "-0,3%",
    "up": false,
    "debt": "70.2%",
    "score": 43,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Specialty",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 70.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.1,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 70.2% (Limit 30%)",
    "insight": "Crown Castle Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 70.2% (Limit 30%)). Die Branche (REIT - Specialty) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "CCL",
    "name": "Carnival Corporation Ltd.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Travel Services",
    "price": "414,03 $",
    "change": "-3,0%",
    "up": false,
    "debt": "68.7%",
    "score": 43,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Travel Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 68.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 5.9,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 68.7% (Limit 30%)",
    "insight": "Carnival Corporation Ltd. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 68.7% (Limit 30%)). Die Branche (Travel Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "CDNS",
    "name": "Cadence Design Systems, Inc.",
    "sector": "Technologie",
    "industry": "Software - Application",
    "price": "224,81 $",
    "change": "-2,0%",
    "up": false,
    "debt": "2.8%",
    "score": 98,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Application",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 2.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Cadence Design Systems, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (2.8%) und Cash-Quote (1.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CDW",
    "name": "CDW Corporation",
    "sector": "Technologie",
    "industry": "Information Technology Services",
    "price": "120,95 $",
    "change": "-2,3%",
    "up": false,
    "debt": "32.5%",
    "score": 54,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Information Technology Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 32.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.1,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 32.5% (Limit 30%)",
    "insight": "CDW Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 32.5% (Limit 30%)). Die Branche (Information Technology Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "CEG",
    "name": "Constellation Energy Corporatio",
    "sector": "Versorger",
    "industry": "Utilities - Independent Power Producers",
    "price": "416,30 $",
    "change": "+0,2%",
    "up": true,
    "debt": "23.9%",
    "score": 85,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Independent Power Producers",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 23.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.9,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Constellation Energy Corporatio erfüllt aktuell alle geprüften Kriterien: Die Branche (Utilities - Independent Power Producers) ist zulässig, Verschuldung (23.9%) und Cash-Quote (0.9%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CF",
    "name": "CF Industries Holdings, Inc.",
    "sector": "Grundstoffe",
    "industry": "Agricultural Inputs",
    "price": "96,67 $",
    "change": "-1,8%",
    "up": false,
    "debt": "18.8%",
    "score": 86,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Agricultural Inputs",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 18.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 10.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "CF Industries Holdings, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Agricultural Inputs) ist zulässig, Verschuldung (18.8%) und Cash-Quote (10.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CFG",
    "name": "Citizens Financial Group, Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Banks - Regional",
    "price": "100,84 $",
    "change": "-0,9%",
    "up": false,
    "debt": "0.0%",
    "score": 13,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Banks - Regional",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Citizens Financial Group, Inc. zählt zur ausgeschlossenen Branche Banks - Regional und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "CHD",
    "name": "Church & Dwight Company, Inc.",
    "sector": "Konsumgüter (Basis)",
    "industry": "Household & Personal Products",
    "price": "33,38 $",
    "change": "+2,9%",
    "up": true,
    "debt": "10.4%",
    "score": 93,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Household & Personal Products",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 10.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Church & Dwight Company, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Household & Personal Products) ist zulässig, Verschuldung (10.4%) und Cash-Quote (1.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CHRW",
    "name": "C.H. Robinson Worldwide, Inc.",
    "sector": "Industrie",
    "industry": "Integrated Freight & Logistics",
    "price": "100,72 $",
    "change": "+1,1%",
    "up": true,
    "debt": "11.3%",
    "score": 93,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Integrated Freight & Logistics",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 11.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.9,
        "max": 30
      }
    ],
    "note": null,
    "insight": "C.H. Robinson Worldwide, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Integrated Freight & Logistics) ist zulässig, Verschuldung (11.3%) und Cash-Quote (0.9%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CHTR",
    "name": "Charter Communications, Inc.",
    "sector": "Kommunikation",
    "industry": "Telecom Services",
    "price": "339,10 $",
    "change": "-2,6%",
    "up": false,
    "debt": "494.9%",
    "score": 15,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Telecom Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 494.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.6,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 494.9% (Limit 30%)",
    "insight": "Charter Communications, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 494.9% (Limit 30%)). Die Branche (Telecom Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "CI",
    "name": "The Cigna Group",
    "sector": "Gesundheit",
    "industry": "Healthcare Plans",
    "price": "184,07 $",
    "change": "+1,6%",
    "up": true,
    "debt": "43.2%",
    "score": 51,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Healthcare Plans",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 43.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 9.8,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 43.2% (Limit 30%)",
    "insight": "The Cigna Group überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 43.2% (Limit 30%)). Die Branche (Healthcare Plans) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "CIEN",
    "name": "Ciena Corporation",
    "sector": "Technologie",
    "industry": "Communication Equipment",
    "price": "90,77 $",
    "change": "+2,2%",
    "up": true,
    "debt": "3.0%",
    "score": 98,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Communication Equipment",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 3.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.3,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Ciena Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Communication Equipment) ist zulässig, Verschuldung (3.0%) und Cash-Quote (2.3%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CINF",
    "name": "Cincinnati Financial Corporatio",
    "sector": "Finanzdienstleistungen",
    "industry": "Insurance - Property & Casualty",
    "price": "196,18 $",
    "change": "-0,7%",
    "up": false,
    "debt": "0.0%",
    "score": 13,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Insurance - Property & Casualty",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Cincinnati Financial Corporatio zählt zur ausgeschlossenen Branche Insurance - Property & Casualty und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "CL",
    "name": "Colgate-Palmolive Company",
    "sector": "Konsumgüter (Basis)",
    "industry": "Household & Personal Products",
    "price": "97,20 $",
    "change": "+0,0%",
    "up": true,
    "debt": "10.9%",
    "score": 93,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Household & Personal Products",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 10.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.9,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Colgate-Palmolive Company erfüllt aktuell alle geprüften Kriterien: Die Branche (Household & Personal Products) ist zulässig, Verschuldung (10.9%) und Cash-Quote (1.9%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CLX",
    "name": "Clorox Company (The)",
    "sector": "Konsumgüter (Basis)",
    "industry": "Household & Personal Products",
    "price": "405,57 $",
    "change": "+1,2%",
    "up": true,
    "debt": "38.8%",
    "score": 52,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Household & Personal Products",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 38.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 10.3,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 38.8% (Limit 30%)",
    "insight": "Clorox Company (The) überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 38.8% (Limit 30%)). Die Branche (Household & Personal Products) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "CMCSA",
    "name": "Comcast Corporation",
    "sector": "Kommunikation",
    "industry": "Telecom Services",
    "price": "333,58 $",
    "change": "+2,4%",
    "up": true,
    "debt": "106.3%",
    "score": 32,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Telecom Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 106.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 9.0,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 106.3% (Limit 30%)",
    "insight": "Comcast Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 106.3% (Limit 30%)). Die Branche (Telecom Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "CME",
    "name": "CME Group Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Financial Data & Stock Exchanges",
    "price": "81,85 $",
    "change": "+2,7%",
    "up": true,
    "debt": "0.0%",
    "score": 8,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Financial Data & Stock Exchanges",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "CME Group Inc. zählt zur ausgeschlossenen Branche Financial Data & Stock Exchanges und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "CMG",
    "name": "Chipotle Mexican Grill, Inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Restaurants",
    "price": "96,49 $",
    "change": "+2,8%",
    "up": true,
    "debt": "11.5%",
    "score": 93,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Restaurants",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 11.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Chipotle Mexican Grill, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Restaurants) ist zulässig, Verschuldung (11.5%) und Cash-Quote (1.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CMI",
    "name": "Cummins Inc.",
    "sector": "Industrie",
    "industry": "Specialty Industrial Machinery",
    "price": "404,13 $",
    "change": "+2,4%",
    "up": true,
    "debt": "9.4%",
    "score": 93,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Industrial Machinery",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 9.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Cummins Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (9.4%) und Cash-Quote (3.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CMS",
    "name": "CMS Energy Corporation",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Electric",
    "price": "310,75 $",
    "change": "-1,2%",
    "up": false,
    "debt": "86.8%",
    "score": 38,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Electric",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 86.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.1,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 86.8% (Limit 30%)",
    "insight": "CMS Energy Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 86.8% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "CNC",
    "name": "Centene Corporation",
    "sector": "Gesundheit",
    "industry": "Healthcare Plans",
    "price": "296,17 $",
    "change": "-1,8%",
    "up": false,
    "debt": "52.4%",
    "score": 31,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Healthcare Plans",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 52.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 88.0,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 52.4% (Limit 30%); Cash-Quote zu hoch: 88.0% (Limit 30%)",
    "insight": "Centene Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 52.4% (Limit 30%); Cash-Quote zu hoch: 88.0% (Limit 30%)). Die Branche (Healthcare Plans) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "CNP",
    "name": "CenterPoint Energy, Inc (Holdin",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Electric",
    "price": "158,74 $",
    "change": "+0,8%",
    "up": true,
    "debt": "89.0%",
    "score": 37,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Electric",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 89.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.6,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 89.0% (Limit 30%)",
    "insight": "CenterPoint Energy, Inc (Holdin überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 89.0% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "COF",
    "name": "Capital One Financial Corporati",
    "sector": "Finanzdienstleistungen",
    "industry": "Credit Services",
    "price": "209,09 $",
    "change": "+0,3%",
    "up": true,
    "debt": "0.0%",
    "score": 11,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Credit Services",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Capital One Financial Corporati zählt zur ausgeschlossenen Branche Credit Services und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "COHR",
    "name": "Coherent Corp.",
    "sector": "Technologie",
    "industry": "Scientific & Technical Instruments",
    "price": "416,52 $",
    "change": "+1,6%",
    "up": true,
    "debt": "6.7%",
    "score": 95,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Scientific & Technical Instruments",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 6.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.7,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Coherent Corp. erfüllt aktuell alle geprüften Kriterien: Die Branche (Scientific & Technical Instruments) ist zulässig, Verschuldung (6.7%) und Cash-Quote (4.7%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "COIN",
    "name": "Coinbase Global, Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Financial Data & Stock Exchanges",
    "price": "401,83 $",
    "change": "-1,0%",
    "up": false,
    "debt": "0.0%",
    "score": 12,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Financial Data & Stock Exchanges",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Coinbase Global, Inc. zählt zur ausgeschlossenen Branche Financial Data & Stock Exchanges und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "COO",
    "name": "The Cooper Companies, Inc.",
    "sector": "Gesundheit",
    "industry": "Medical Instruments & Supplies",
    "price": "41,23 $",
    "change": "-1,1%",
    "up": false,
    "debt": "19.3%",
    "score": 88,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Medical Instruments & Supplies",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 19.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "The Cooper Companies, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Instruments & Supplies) ist zulässig, Verschuldung (19.3%) und Cash-Quote (1.0%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "COP",
    "name": "ConocoPhillips",
    "sector": "Energie",
    "industry": "Oil & Gas E&P",
    "price": "27,01 $",
    "change": "+1,1%",
    "up": true,
    "debt": "15.9%",
    "score": 89,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Oil & Gas E&P",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 15.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.3,
        "max": 30
      }
    ],
    "note": null,
    "insight": "ConocoPhillips erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas E&P) ist zulässig, Verschuldung (15.9%) und Cash-Quote (4.3%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "COR",
    "name": "Cencora, Inc.",
    "sector": "Gesundheit",
    "industry": "Medical Distribution",
    "price": "328,40 $",
    "change": "-0,4%",
    "up": false,
    "debt": "24.9%",
    "score": 84,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Medical Distribution",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 24.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Cencora, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Distribution) ist zulässig, Verschuldung (24.9%) und Cash-Quote (3.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "COST",
    "name": "Costco Wholesale Corporation",
    "sector": "Konsumgüter (Basis)",
    "industry": "Discount Stores",
    "price": "73,40 $",
    "change": "+2,3%",
    "up": true,
    "debt": "2.4%",
    "score": 98,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Discount Stores",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 2.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Costco Wholesale Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Discount Stores) ist zulässig, Verschuldung (2.4%) und Cash-Quote (2.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CPAY",
    "name": "Corpay, Inc.",
    "sector": "Technologie",
    "industry": "Software - Infrastructure",
    "price": "369,62 $",
    "change": "+0,4%",
    "up": true,
    "debt": "42.0%",
    "score": 51,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Infrastructure",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 42.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 10.2,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 42.0% (Limit 30%)",
    "insight": "Corpay, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 42.0% (Limit 30%)). Die Branche (Software - Infrastructure) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "CPRT",
    "name": "Copart, Inc.",
    "sector": "Industrie",
    "industry": "Specialty Business Services",
    "price": "409,81 $",
    "change": "+0,4%",
    "up": true,
    "debt": "0.3%",
    "score": 95,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Business Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 15.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Copart, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Business Services) ist zulässig, Verschuldung (0.3%) und Cash-Quote (15.0%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CPT",
    "name": "Camden Property Trust",
    "sector": "Immobilien",
    "industry": "REIT - Residential",
    "price": "288,08 $",
    "change": "-3,0%",
    "up": false,
    "debt": "44.4%",
    "score": 51,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Residential",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 44.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.4,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 44.4% (Limit 30%)",
    "insight": "Camden Property Trust überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 44.4% (Limit 30%)). Die Branche (REIT - Residential) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "CRH",
    "name": "CRH PLC",
    "sector": "Grundstoffe",
    "industry": "Building Materials",
    "price": "264,30 $",
    "change": "-3,0%",
    "up": false,
    "debt": "31.3%",
    "score": 55,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Building Materials",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 31.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.8,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 31.3% (Limit 30%)",
    "insight": "CRH PLC überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 31.3% (Limit 30%)). Die Branche (Building Materials) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "CRL",
    "name": "Charles River Laboratories Inte",
    "sector": "Gesundheit",
    "industry": "Diagnostics & Research",
    "price": "237,50 $",
    "change": "-0,2%",
    "up": false,
    "debt": "27.4%",
    "score": 83,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Diagnostics & Research",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 27.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.7,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Charles River Laboratories Inte erfüllt aktuell alle geprüften Kriterien: Die Branche (Diagnostics & Research) ist zulässig, Verschuldung (27.4%) und Cash-Quote (1.7%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CRM",
    "name": "Salesforce, Inc.",
    "sector": "Technologie",
    "industry": "Software - Application",
    "price": "81,11 $",
    "change": "-0,6%",
    "up": false,
    "debt": "28.2%",
    "score": 81,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Application",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 28.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 7.9,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Salesforce, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (28.2%) und Cash-Quote (7.9%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CRWD",
    "name": "CrowdStrike Holdings, Inc.",
    "sector": "Technologie",
    "industry": "Software - Infrastructure",
    "price": "326,02 $",
    "change": "+1,6%",
    "up": true,
    "debt": "0.4%",
    "score": 99,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Infrastructure",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.3,
        "max": 30
      }
    ],
    "note": null,
    "insight": "CrowdStrike Holdings, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Infrastructure) ist zulässig, Verschuldung (0.4%) und Cash-Quote (2.3%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CSCO",
    "name": "Cisco Systems, Inc.",
    "sector": "Technologie",
    "industry": "Communication Equipment",
    "price": "197,69 $",
    "change": "-0,2%",
    "up": false,
    "debt": "7.2%",
    "score": 95,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Communication Equipment",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 7.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Cisco Systems, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Communication Equipment) ist zulässig, Verschuldung (7.2%) und Cash-Quote (3.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CSGP",
    "name": "CoStar Group, Inc.",
    "sector": "Immobilien",
    "industry": "Real Estate Services",
    "price": "53,41 $",
    "change": "+0,1%",
    "up": true,
    "debt": "9.9%",
    "score": 91,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Real Estate Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 9.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 10.9,
        "max": 30
      }
    ],
    "note": null,
    "insight": "CoStar Group, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Real Estate Services) ist zulässig, Verschuldung (9.9%) und Cash-Quote (10.9%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CSX",
    "name": "CSX Corporation",
    "sector": "Industrie",
    "industry": "Railroads",
    "price": "29,60 $",
    "change": "-1,1%",
    "up": false,
    "debt": "20.8%",
    "score": 87,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Railroads",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 20.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.5,
        "max": 30
      }
    ],
    "note": null,
    "insight": "CSX Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Railroads) ist zulässig, Verschuldung (20.8%) und Cash-Quote (1.5%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CTAS",
    "name": "Cintas Corporation",
    "sector": "Industrie",
    "industry": "Specialty Business Services",
    "price": "270,11 $",
    "change": "-0,7%",
    "up": false,
    "debt": "3.3%",
    "score": 98,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Business Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 3.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Cintas Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Business Services) ist zulässig, Verschuldung (3.3%) und Cash-Quote (0.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CTSH",
    "name": "Cognizant Technology Solutions",
    "sector": "Technologie",
    "industry": "Information Technology Services",
    "price": "27,80 $",
    "change": "+1,8%",
    "up": true,
    "debt": "8.0%",
    "score": 94,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Information Technology Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 8.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Cognizant Technology Solutions erfüllt aktuell alle geprüften Kriterien: Die Branche (Information Technology Services) ist zulässig, Verschuldung (8.0%) und Cash-Quote (4.0%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CTVA",
    "name": "Corteva, Inc.",
    "sector": "Grundstoffe",
    "industry": "Agricultural Inputs",
    "price": "339,48 $",
    "change": "-1,6%",
    "up": false,
    "debt": "9.3%",
    "score": 93,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Agricultural Inputs",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 9.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.5,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Corteva, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Agricultural Inputs) ist zulässig, Verschuldung (9.3%) und Cash-Quote (4.5%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CVNA",
    "name": "Carvana Co.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Auto & Truck Dealerships",
    "price": "308,38 $",
    "change": "-2,4%",
    "up": false,
    "debt": "6.1%",
    "score": 95,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Auto & Truck Dealerships",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 6.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Carvana Co. erfüllt aktuell alle geprüften Kriterien: Die Branche (Auto & Truck Dealerships) ist zulässig, Verschuldung (6.1%) und Cash-Quote (3.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "CVS",
    "name": "CVS Health Corporation",
    "sector": "Gesundheit",
    "industry": "Healthcare Plans",
    "price": "209,94 $",
    "change": "+1,3%",
    "up": true,
    "debt": "58.8%",
    "score": 46,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Healthcare Plans",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 58.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 8.9,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 58.8% (Limit 30%)",
    "insight": "CVS Health Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 58.8% (Limit 30%)). Die Branche (Healthcare Plans) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "CVX",
    "name": "Chevron Corporation",
    "sector": "Energie",
    "industry": "Oil & Gas Integrated",
    "price": "225,10 $",
    "change": "+1,7%",
    "up": true,
    "debt": "0.0%",
    "score": 99,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Oil & Gas Integrated",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Chevron Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas Integrated) ist zulässig, Verschuldung (0.0%) und Cash-Quote (0.0%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "D",
    "name": "Dominion Energy, Inc.",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Electric",
    "price": "36,45 $",
    "change": "-2,6%",
    "up": false,
    "debt": "87.8%",
    "score": 38,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Electric",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 87.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.5,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 87.8% (Limit 30%)",
    "insight": "Dominion Energy, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 87.8% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "DAL",
    "name": "Delta Air Lines, Inc.",
    "sector": "Industrie",
    "industry": "Airlines",
    "price": "302,48 $",
    "change": "+0,2%",
    "up": true,
    "debt": "36.7%",
    "score": 53,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Airlines",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 36.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 8.1,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 36.7% (Limit 30%)",
    "insight": "Delta Air Lines, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 36.7% (Limit 30%)). Die Branche (Airlines) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "DASH",
    "name": "DoorDash, Inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Internet Retail",
    "price": "325,92 $",
    "change": "-2,4%",
    "up": false,
    "debt": "3.8%",
    "score": 96,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Internet Retail",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 3.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 6.5,
        "max": 30
      }
    ],
    "note": null,
    "insight": "DoorDash, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Internet Retail) ist zulässig, Verschuldung (3.8%) und Cash-Quote (6.5%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "DD",
    "name": "DuPont de Nemours, Inc.",
    "sector": "Grundstoffe",
    "industry": "Specialty Chemicals",
    "price": "263,69 $",
    "change": "+1,5%",
    "up": true,
    "debt": "17.4%",
    "score": 88,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Chemicals",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 17.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.8,
        "max": 30
      }
    ],
    "note": null,
    "insight": "DuPont de Nemours, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Chemicals) ist zulässig, Verschuldung (17.4%) und Cash-Quote (3.8%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "DDOG",
    "name": "Datadog, Inc.",
    "sector": "Technologie",
    "industry": "Software - Application",
    "price": "162,20 $",
    "change": "-1,3%",
    "up": false,
    "debt": "1.3%",
    "score": 98,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Application",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 1.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 5.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Datadog, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (1.3%) und Cash-Quote (5.0%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "DE",
    "name": "Deere & Company",
    "sector": "Industrie",
    "industry": "Farm & Heavy Construction Machinery",
    "price": "132,43 $",
    "change": "+1,3%",
    "up": true,
    "debt": "30.3%",
    "score": 55,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Farm & Heavy Construction Machinery",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 30.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 5.5,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 30.3% (Limit 30%)",
    "insight": "Deere & Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 30.3% (Limit 30%)). Die Branche (Farm & Heavy Construction Machinery) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "DECK",
    "name": "Deckers Outdoor Corporation",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Footwear & Accessories",
    "price": "25,26 $",
    "change": "+1,2%",
    "up": true,
    "debt": "3.6%",
    "score": 94,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Footwear & Accessories",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 3.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 12.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Deckers Outdoor Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Footwear & Accessories) ist zulässig, Verschuldung (3.6%) und Cash-Quote (12.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "DELL",
    "name": "Dell Technologies Inc.",
    "sector": "Technologie",
    "industry": "Computer Hardware",
    "price": "70,00 $",
    "change": "+2,1%",
    "up": true,
    "debt": "12.2%",
    "score": 91,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Computer Hardware",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 12.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Dell Technologies Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Computer Hardware) ist zulässig, Verschuldung (12.2%) und Cash-Quote (4.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "DG",
    "name": "Dollar General Corporation",
    "sector": "Konsumgüter (Basis)",
    "industry": "Discount Stores",
    "price": "300,65 $",
    "change": "-2,6%",
    "up": false,
    "debt": "56.4%",
    "score": 47,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Discount Stores",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 56.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.8,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 56.4% (Limit 30%)",
    "insight": "Dollar General Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 56.4% (Limit 30%)). Die Branche (Discount Stores) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "DGX",
    "name": "Quest Diagnostics Incorporated",
    "sector": "Gesundheit",
    "industry": "Diagnostics & Research",
    "price": "308,90 $",
    "change": "-0,0%",
    "up": false,
    "debt": "24.9%",
    "score": 84,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Diagnostics & Research",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 24.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Quest Diagnostics Incorporated erfüllt aktuell alle geprüften Kriterien: Die Branche (Diagnostics & Research) ist zulässig, Verschuldung (24.9%) und Cash-Quote (2.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "DHI",
    "name": "D.R. Horton, Inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Residential Construction",
    "price": "295,44 $",
    "change": "-1,4%",
    "up": false,
    "debt": "18.0%",
    "score": 88,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Residential Construction",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 18.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 5.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "D.R. Horton, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Residential Construction) ist zulässig, Verschuldung (18.0%) und Cash-Quote (5.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "DHR",
    "name": "Danaher Corporation",
    "sector": "Gesundheit",
    "industry": "Diagnostics & Research",
    "price": "230,94 $",
    "change": "-0,0%",
    "up": false,
    "debt": "20.3%",
    "score": 87,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Diagnostics & Research",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 20.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Danaher Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Diagnostics & Research) ist zulässig, Verschuldung (20.3%) und Cash-Quote (3.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "DIS",
    "name": "Walt Disney Company (The)",
    "sector": "Kommunikation",
    "industry": "Entertainment",
    "price": "120,87 $",
    "change": "+1,1%",
    "up": true,
    "debt": "28.4%",
    "score": 82,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Entertainment",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 28.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Walt Disney Company (The) erfüllt aktuell alle geprüften Kriterien: Die Branche (Entertainment) ist zulässig, Verschuldung (28.4%) und Cash-Quote (3.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "DLR",
    "name": "Digital Realty Trust, Inc.",
    "sector": "Immobilien",
    "industry": "REIT - Specialty",
    "price": "368,53 $",
    "change": "-2,6%",
    "up": false,
    "debt": "28.0%",
    "score": 82,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Specialty",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 28.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Digital Realty Trust, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (REIT - Specialty) ist zulässig, Verschuldung (28.0%) und Cash-Quote (2.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "DLTR",
    "name": "Dollar Tree, Inc.",
    "sector": "Konsumgüter (Basis)",
    "industry": "Discount Stores",
    "price": "261,84 $",
    "change": "-0,2%",
    "up": false,
    "debt": "31.1%",
    "score": 55,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Discount Stores",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 31.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.1,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 31.1% (Limit 30%)",
    "insight": "Dollar Tree, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 31.1% (Limit 30%)). Die Branche (Discount Stores) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "DOC",
    "name": "Healthpeak Properties, Inc.",
    "sector": "Immobilien",
    "industry": "REIT - Healthcare Facilities",
    "price": "303,72 $",
    "change": "+0,7%",
    "up": true,
    "debt": "71.2%",
    "score": 43,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Healthcare Facilities",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 71.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 7.8,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 71.2% (Limit 30%)",
    "insight": "Healthpeak Properties, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 71.2% (Limit 30%)). Die Branche (REIT - Healthcare Facilities) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "DOV",
    "name": "Dover Corporation",
    "sector": "Industrie",
    "industry": "Specialty Industrial Machinery",
    "price": "211,23 $",
    "change": "-1,1%",
    "up": false,
    "debt": "11.8%",
    "score": 91,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Industrial Machinery",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 11.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 6.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Dover Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (11.8%) und Cash-Quote (6.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "DOW",
    "name": "Dow Inc.",
    "sector": "Grundstoffe",
    "industry": "Chemicals",
    "price": "262,24 $",
    "change": "+0,7%",
    "up": true,
    "debt": "88.8%",
    "score": 37,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Chemicals",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 88.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 19.4,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 88.8% (Limit 30%)",
    "insight": "Dow Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 88.8% (Limit 30%)). Die Branche (Chemicals) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "DPZ",
    "name": "Domino's Pizza Inc",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Restaurants",
    "price": "133,25 $",
    "change": "+2,3%",
    "up": true,
    "debt": "44.6%",
    "score": 51,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Restaurants",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 44.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.4,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 44.6% (Limit 30%)",
    "insight": "Domino's Pizza Inc überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 44.6% (Limit 30%)). Die Branche (Restaurants) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "DRI",
    "name": "Darden Restaurants, Inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Restaurants",
    "price": "78,61 $",
    "change": "-0,1%",
    "up": false,
    "debt": "34.5%",
    "score": 54,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Restaurants",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 34.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.9,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 34.5% (Limit 30%)",
    "insight": "Darden Restaurants, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 34.5% (Limit 30%)). Die Branche (Restaurants) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "DTE",
    "name": "DTE Energy Company",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Electric",
    "price": "241,46 $",
    "change": "+1,5%",
    "up": true,
    "debt": "94.3%",
    "score": 36,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Electric",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 94.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.1,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 94.3% (Limit 30%)",
    "insight": "DTE Energy Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 94.3% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "DUK",
    "name": "Duke Energy Corporation (Holdin",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Electric",
    "price": "110,57 $",
    "change": "+2,2%",
    "up": true,
    "debt": "93.3%",
    "score": 36,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Electric",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 93.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.2,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 93.3% (Limit 30%)",
    "insight": "Duke Energy Corporation (Holdin überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 93.3% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "DVA",
    "name": "DaVita Inc.",
    "sector": "Gesundheit",
    "industry": "Medical Care Facilities",
    "price": "131,76 $",
    "change": "-0,8%",
    "up": false,
    "debt": "85.8%",
    "score": 38,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Medical Care Facilities",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 85.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.3,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 85.8% (Limit 30%)",
    "insight": "DaVita Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 85.8% (Limit 30%)). Die Branche (Medical Care Facilities) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "DVN",
    "name": "Devon Energy Corporation",
    "sector": "Energie",
    "industry": "Oil & Gas E&P",
    "price": "174,55 $",
    "change": "+1,4%",
    "up": true,
    "debt": "16.7%",
    "score": 89,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Oil & Gas E&P",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 16.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Devon Energy Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas E&P) ist zulässig, Verschuldung (16.7%) und Cash-Quote (3.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "DXCM",
    "name": "DexCom, Inc.",
    "sector": "Gesundheit",
    "industry": "Medical Devices",
    "price": "200,60 $",
    "change": "+2,8%",
    "up": true,
    "debt": "4.4%",
    "score": 96,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Medical Devices",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 4.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 6.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "DexCom, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Devices) ist zulässig, Verschuldung (4.4%) und Cash-Quote (6.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "EA",
    "name": "Electronic Arts Inc.",
    "sector": "Kommunikation",
    "industry": "Electronic Gaming & Multimedia",
    "price": "354,16 $",
    "change": "+1,3%",
    "up": true,
    "debt": "3.5%",
    "score": 96,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Electronic Gaming & Multimedia",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 3.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 5.7,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Electronic Arts Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Electronic Gaming & Multimedia) ist zulässig, Verschuldung (3.5%) und Cash-Quote (5.7%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "EBAY",
    "name": "eBay Inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Internet Retail",
    "price": "255,97 $",
    "change": "+1,0%",
    "up": true,
    "debt": "14.2%",
    "score": 89,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Internet Retail",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 14.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 7.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "eBay Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Internet Retail) ist zulässig, Verschuldung (14.2%) und Cash-Quote (7.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "ECHO",
    "name": "EchoStar Corporation",
    "sector": "Kommunikation",
    "industry": "Telecom Services",
    "price": "382,25 $",
    "change": "+2,5%",
    "up": true,
    "debt": "120.0%",
    "score": 28,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Telecom Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 120.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 6.2,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 120.0% (Limit 30%)",
    "insight": "EchoStar Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 120.0% (Limit 30%)). Die Branche (Telecom Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "ECL",
    "name": "Ecolab Inc.",
    "sector": "Grundstoffe",
    "industry": "Specialty Chemicals",
    "price": "157,92 $",
    "change": "+1,0%",
    "up": true,
    "debt": "17.6%",
    "score": 87,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Chemicals",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 17.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 6.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Ecolab Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Chemicals) ist zulässig, Verschuldung (17.6%) und Cash-Quote (6.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "ED",
    "name": "Consolidated Edison, Inc.",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Electric",
    "price": "353,26 $",
    "change": "-2,8%",
    "up": false,
    "debt": "67.7%",
    "score": 44,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Electric",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 67.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.4,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 67.7% (Limit 30%)",
    "insight": "Consolidated Edison, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 67.7% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "EFX",
    "name": "Equifax, Inc.",
    "sector": "Industrie",
    "industry": "Consulting Services",
    "price": "416,58 $",
    "change": "+2,2%",
    "up": true,
    "debt": "27.0%",
    "score": 84,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Consulting Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 27.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.8,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Equifax, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Consulting Services) ist zulässig, Verschuldung (27.0%) und Cash-Quote (0.8%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "EG",
    "name": "Everest Group, Ltd.",
    "sector": "Finanzdienstleistungen",
    "industry": "Insurance - Reinsurance",
    "price": "280,76 $",
    "change": "+1,7%",
    "up": true,
    "debt": "0.0%",
    "score": 5,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Insurance - Reinsurance",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Everest Group, Ltd. zählt zur ausgeschlossenen Branche Insurance - Reinsurance und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "EIX",
    "name": "Edison International",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Electric",
    "price": "398,63 $",
    "change": "-0,3%",
    "up": false,
    "debt": "154.2%",
    "score": 18,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Electric",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 154.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.9,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 154.2% (Limit 30%)",
    "insight": "Edison International überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 154.2% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "EL",
    "name": "Estee Lauder Companies, Inc. (T",
    "sector": "Konsumgüter (Basis)",
    "industry": "Household & Personal Products",
    "price": "148,05 $",
    "change": "-0,1%",
    "up": false,
    "debt": "30.6%",
    "score": 55,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Household & Personal Products",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 30.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 10.3,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 30.6% (Limit 30%)",
    "insight": "Estee Lauder Companies, Inc. (T überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 30.6% (Limit 30%)). Die Branche (Household & Personal Products) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "ELV",
    "name": "Elevance Health, Inc.",
    "sector": "Gesundheit",
    "industry": "Healthcare Plans",
    "price": "180,90 $",
    "change": "-0,0%",
    "up": false,
    "debt": "38.1%",
    "score": 48,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Healthcare Plans",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 38.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 46.0,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 38.1% (Limit 30%); Cash-Quote zu hoch: 46.0% (Limit 30%)",
    "insight": "Elevance Health, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 38.1% (Limit 30%); Cash-Quote zu hoch: 46.0% (Limit 30%)). Die Branche (Healthcare Plans) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "EME",
    "name": "EMCOR Group, Inc.",
    "sector": "Industrie",
    "industry": "Engineering & Construction",
    "price": "129,42 $",
    "change": "+2,3%",
    "up": true,
    "debt": "1.6%",
    "score": 98,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Engineering & Construction",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 1.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "EMCOR Group, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Engineering & Construction) ist zulässig, Verschuldung (1.6%) und Cash-Quote (2.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "EMR",
    "name": "Emerson Electric Company",
    "sector": "Industrie",
    "industry": "Specialty Industrial Machinery",
    "price": "391,11 $",
    "change": "+2,3%",
    "up": true,
    "debt": "16.8%",
    "score": 89,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Industrial Machinery",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 16.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Emerson Electric Company erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (16.8%) und Cash-Quote (2.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "EOG",
    "name": "EOG Resources, Inc.",
    "sector": "Energie",
    "industry": "Oil & Gas E&P",
    "price": "51,85 $",
    "change": "+1,3%",
    "up": true,
    "debt": "10.5%",
    "score": 92,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Oil & Gas E&P",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 10.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.9,
        "max": 30
      }
    ],
    "note": null,
    "insight": "EOG Resources, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas E&P) ist zulässig, Verschuldung (10.5%) und Cash-Quote (4.9%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "EQIX",
    "name": "Equinix, Inc.",
    "sector": "Immobilien",
    "industry": "REIT - Specialty",
    "price": "386,06 $",
    "change": "+1,0%",
    "up": true,
    "debt": "23.2%",
    "score": 86,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Specialty",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 23.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Equinix, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (REIT - Specialty) ist zulässig, Verschuldung (23.2%) und Cash-Quote (1.0%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "EQR",
    "name": "Equity Residential",
    "sector": "Immobilien",
    "industry": "REIT - Residential",
    "price": "404,81 $",
    "change": "-1,5%",
    "up": false,
    "debt": "33.4%",
    "score": 54,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Residential",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 33.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.1,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 33.4% (Limit 30%)",
    "insight": "Equity Residential überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 33.4% (Limit 30%)). Die Branche (REIT - Residential) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "EQT",
    "name": "EQT Corporation",
    "sector": "Energie",
    "industry": "Oil & Gas E&P",
    "price": "33,68 $",
    "change": "+0,4%",
    "up": true,
    "debt": "17.0%",
    "score": 90,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Oil & Gas E&P",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 17.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.3,
        "max": 30
      }
    ],
    "note": null,
    "insight": "EQT Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas E&P) ist zulässig, Verschuldung (17.0%) und Cash-Quote (0.3%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "ERIE",
    "name": "Erie Indemnity Company",
    "sector": "Finanzdienstleistungen",
    "industry": "Insurance Brokers",
    "price": "128,62 $",
    "change": "-2,3%",
    "up": false,
    "debt": "0.0%",
    "score": 8,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Insurance Brokers",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Erie Indemnity Company zählt zur ausgeschlossenen Branche Insurance Brokers und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "ES",
    "name": "Eversource Energy (D/B/A)",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Electric",
    "price": "79,57 $",
    "change": "-2,8%",
    "up": false,
    "debt": "112.7%",
    "score": 30,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Electric",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 112.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.0,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 112.7% (Limit 30%)",
    "insight": "Eversource Energy (D/B/A) überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 112.7% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "ESS",
    "name": "Essex Property Trust, Inc.",
    "sector": "Immobilien",
    "industry": "REIT - Residential",
    "price": "94,30 $",
    "change": "-2,4%",
    "up": false,
    "debt": "34.5%",
    "score": 54,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Residential",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 34.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.3,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 34.5% (Limit 30%)",
    "insight": "Essex Property Trust, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 34.5% (Limit 30%)). Die Branche (REIT - Residential) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "ETN",
    "name": "Eaton Corporation, PLC",
    "sector": "Industrie",
    "industry": "Specialty Industrial Machinery",
    "price": "397,12 $",
    "change": "-2,3%",
    "up": false,
    "debt": "13.2%",
    "score": 92,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Industrial Machinery",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 13.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Eaton Corporation, PLC erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (13.2%) und Cash-Quote (0.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "ETR",
    "name": "Entergy Corporation",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Electric",
    "price": "173,41 $",
    "change": "+0,9%",
    "up": true,
    "debt": "69.0%",
    "score": 43,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Electric",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 69.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 7.7,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 69.0% (Limit 30%)",
    "insight": "Entergy Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 69.0% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "EVRG",
    "name": "Evergy, Inc.",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Electric",
    "price": "237,65 $",
    "change": "+1,2%",
    "up": true,
    "debt": "83.0%",
    "score": 39,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Electric",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 83.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.1,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 83.0% (Limit 30%)",
    "insight": "Evergy, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 83.0% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "EW",
    "name": "Edwards Lifesciences Corporatio",
    "sector": "Gesundheit",
    "industry": "Medical Devices",
    "price": "294,14 $",
    "change": "-1,3%",
    "up": false,
    "debt": "1.4%",
    "score": 97,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Medical Devices",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 1.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 7.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Edwards Lifesciences Corporatio erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Devices) ist zulässig, Verschuldung (1.4%) und Cash-Quote (7.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "EXC",
    "name": "Exelon Corporation",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Electric",
    "price": "270,85 $",
    "change": "-1,4%",
    "up": false,
    "debt": "111.6%",
    "score": 31,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Electric",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 111.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.8,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 111.6% (Limit 30%)",
    "insight": "Exelon Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 111.6% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "EXE",
    "name": "Expand Energy Corporation",
    "sector": "Energie",
    "industry": "Oil & Gas E&P",
    "price": "21,01 $",
    "change": "-0,9%",
    "up": false,
    "debt": "16.6%",
    "score": 89,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Oil & Gas E&P",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 16.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.9,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Expand Energy Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas E&P) ist zulässig, Verschuldung (16.6%) und Cash-Quote (2.9%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "EXPD",
    "name": "Expeditors International of Was",
    "sector": "Industrie",
    "industry": "Integrated Freight & Logistics",
    "price": "187,08 $",
    "change": "-0,8%",
    "up": false,
    "debt": "2.6%",
    "score": 97,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Integrated Freight & Logistics",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 2.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 6.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Expeditors International of Was erfüllt aktuell alle geprüften Kriterien: Die Branche (Integrated Freight & Logistics) ist zulässig, Verschuldung (2.6%) und Cash-Quote (6.0%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "EXPE",
    "name": "Expedia Group, Inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Travel Services",
    "price": "61,76 $",
    "change": "-2,5%",
    "up": false,
    "debt": "13.3%",
    "score": 87,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Travel Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 13.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 16.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Expedia Group, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Travel Services) ist zulässig, Verschuldung (13.3%) und Cash-Quote (16.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "EXR",
    "name": "Extra Space Storage Inc",
    "sector": "Immobilien",
    "industry": "REIT - Industrial",
    "price": "127,81 $",
    "change": "-2,2%",
    "up": false,
    "debt": "44.1%",
    "score": 51,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Industrial",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 44.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.1,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 44.1% (Limit 30%)",
    "insight": "Extra Space Storage Inc überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 44.1% (Limit 30%)). Die Branche (REIT - Industrial) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "F",
    "name": "Ford Motor Company",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Auto Manufacturers",
    "price": "279,30 $",
    "change": "+0,0%",
    "up": true,
    "debt": "279.0%",
    "score": 15,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Auto Manufacturers",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 279.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 37.8,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 279.0% (Limit 30%); Cash-Quote zu hoch: 37.8% (Limit 30%)",
    "insight": "Ford Motor Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 279.0% (Limit 30%); Cash-Quote zu hoch: 37.8% (Limit 30%)). Die Branche (Auto Manufacturers) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "FANG",
    "name": "Diamondback Energy, Inc.",
    "sector": "Energie",
    "industry": "Oil & Gas E&P",
    "price": "198,73 $",
    "change": "-1,2%",
    "up": false,
    "debt": "24.3%",
    "score": 85,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Oil & Gas E&P",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 24.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.3,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Diamondback Energy, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas E&P) ist zulässig, Verschuldung (24.3%) und Cash-Quote (0.3%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "FAST",
    "name": "Fastenal Company",
    "sector": "Industrie",
    "industry": "Industrial Distribution",
    "price": "228,04 $",
    "change": "-0,1%",
    "up": false,
    "debt": "0.8%",
    "score": 99,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Industrial Distribution",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Fastenal Company erfüllt aktuell alle geprüften Kriterien: Die Branche (Industrial Distribution) ist zulässig, Verschuldung (0.8%) und Cash-Quote (0.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "FCX",
    "name": "Freeport-McMoRan, Inc.",
    "sector": "Grundstoffe",
    "industry": "Copper",
    "price": "214,40 $",
    "change": "-0,1%",
    "up": false,
    "debt": "11.5%",
    "score": 92,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Copper",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 11.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.5,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Freeport-McMoRan, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Copper) ist zulässig, Verschuldung (11.5%) und Cash-Quote (4.5%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "FDS",
    "name": "FactSet Research Systems Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Financial Data & Stock Exchanges",
    "price": "317,96 $",
    "change": "+0,4%",
    "up": true,
    "debt": "0.0%",
    "score": 6,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Financial Data & Stock Exchanges",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "FactSet Research Systems Inc. zählt zur ausgeschlossenen Branche Financial Data & Stock Exchanges und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "FDX",
    "name": "FedEx Corporation",
    "sector": "Industrie",
    "industry": "Integrated Freight & Logistics",
    "price": "326,79 $",
    "change": "-0,0%",
    "up": false,
    "debt": "59.0%",
    "score": 46,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Integrated Freight & Logistics",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 59.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 18.6,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 59.0% (Limit 30%)",
    "insight": "FedEx Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 59.0% (Limit 30%)). Die Branche (Integrated Freight & Logistics) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "FDXF",
    "name": "FedEx Freight Holding Company,",
    "sector": "Industrie",
    "industry": "Integrated Freight & Logistics",
    "price": "108,25 $",
    "change": "-1,0%",
    "up": false,
    "debt": "25.6%",
    "score": 84,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Integrated Freight & Logistics",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 25.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.5,
        "max": 30
      }
    ],
    "note": null,
    "insight": "FedEx Freight Holding Company, erfüllt aktuell alle geprüften Kriterien: Die Branche (Integrated Freight & Logistics) ist zulässig, Verschuldung (25.6%) und Cash-Quote (0.5%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "FE",
    "name": "FirstEnergy Corp.",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Electric",
    "price": "117,44 $",
    "change": "+1,5%",
    "up": true,
    "debt": "103.7%",
    "score": 33,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Electric",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 103.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.2,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 103.7% (Limit 30%)",
    "insight": "FirstEnergy Corp. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 103.7% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "FFIV",
    "name": "F5, Inc.",
    "sector": "Technologie",
    "industry": "Software - Infrastructure",
    "price": "92,54 $",
    "change": "-0,1%",
    "up": false,
    "debt": "1.0%",
    "score": 97,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Infrastructure",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 1.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 7.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "F5, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Infrastructure) ist zulässig, Verschuldung (1.0%) und Cash-Quote (7.0%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "FICO",
    "name": "Fair Isaac Corporation",
    "sector": "Technologie",
    "industry": "Software - Application",
    "price": "140,82 $",
    "change": "+0,8%",
    "up": true,
    "debt": "23.1%",
    "score": 86,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Application",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 23.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Fair Isaac Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (23.1%) und Cash-Quote (1.0%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "FIS",
    "name": "Fidelity National Information S",
    "sector": "Technologie",
    "industry": "Information Technology Services",
    "price": "198,74 $",
    "change": "-1,8%",
    "up": false,
    "debt": "91.4%",
    "score": 37,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Information Technology Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 91.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.3,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 91.4% (Limit 30%)",
    "insight": "Fidelity National Information S überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 91.4% (Limit 30%)). Die Branche (Information Technology Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "FISV",
    "name": "Fiserv, Inc.",
    "sector": "Sonstige",
    "industry": "",
    "price": "53,91 $",
    "change": "-1,3%",
    "up": false,
    "debt": "0.0%",
    "score": 99,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Sonstige",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Fiserv, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Sonstige) ist zulässig, Verschuldung (0.0%) und Cash-Quote (0.0%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "FITB",
    "name": "Fifth Third Bancorp",
    "sector": "Finanzdienstleistungen",
    "industry": "Banks - Regional",
    "price": "209,07 $",
    "change": "+0,9%",
    "up": true,
    "debt": "0.0%",
    "score": 8,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Banks - Regional",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Fifth Third Bancorp zählt zur ausgeschlossenen Branche Banks - Regional und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "FIX",
    "name": "Comfort Systems USA, Inc.",
    "sector": "Industrie",
    "industry": "Engineering & Construction",
    "price": "220,58 $",
    "change": "-1,8%",
    "up": false,
    "debt": "0.5%",
    "score": 99,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Engineering & Construction",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Comfort Systems USA, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Engineering & Construction) ist zulässig, Verschuldung (0.5%) und Cash-Quote (0.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "FLEX",
    "name": "Flex Ltd.",
    "sector": "Technologie",
    "industry": "Electronic Components",
    "price": "56,19 $",
    "change": "-1,0%",
    "up": false,
    "debt": "14.2%",
    "score": 89,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Electronic Components",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 14.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 6.8,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Flex Ltd. erfüllt aktuell alle geprüften Kriterien: Die Branche (Electronic Components) ist zulässig, Verschuldung (14.2%) und Cash-Quote (6.8%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "FOX",
    "name": "Fox Corporation",
    "sector": "Kommunikation",
    "industry": "Entertainment",
    "price": "226,52 $",
    "change": "+0,2%",
    "up": true,
    "debt": "34.7%",
    "score": 54,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Entertainment",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 34.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 16.5,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 34.7% (Limit 30%)",
    "insight": "Fox Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 34.7% (Limit 30%)). Die Branche (Entertainment) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "FOXA",
    "name": "Fox Corporation",
    "sector": "Kommunikation",
    "industry": "Entertainment",
    "price": "395,83 $",
    "change": "-2,7%",
    "up": false,
    "debt": "31.0%",
    "score": 55,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Entertainment",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 31.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 14.7,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 31.0% (Limit 30%)",
    "insight": "Fox Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 31.0% (Limit 30%)). Die Branche (Entertainment) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "FRT",
    "name": "Federal Realty Investment Trust",
    "sector": "Immobilien",
    "industry": "REIT - Retail",
    "price": "75,00 $",
    "change": "+2,9%",
    "up": true,
    "debt": "45.0%",
    "score": 50,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Retail",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 45.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.1,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 45.0% (Limit 30%)",
    "insight": "Federal Realty Investment Trust überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 45.0% (Limit 30%)). Die Branche (REIT - Retail) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "FSLR",
    "name": "First Solar, Inc.",
    "sector": "Technologie",
    "industry": "Solar",
    "price": "126,46 $",
    "change": "-1,2%",
    "up": false,
    "debt": "0.9%",
    "score": 97,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Solar",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 7.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "First Solar, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Solar) ist zulässig, Verschuldung (0.9%) und Cash-Quote (7.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "FTNT",
    "name": "Fortinet, Inc.",
    "sector": "Technologie",
    "industry": "Software - Infrastructure",
    "price": "66,61 $",
    "change": "-0,9%",
    "up": false,
    "debt": "0.5%",
    "score": 99,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Infrastructure",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Fortinet, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Infrastructure) ist zulässig, Verschuldung (0.5%) und Cash-Quote (3.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "FTV",
    "name": "Fortive Corporation",
    "sector": "Technologie",
    "industry": "Scientific & Technical Instruments",
    "price": "21,68 $",
    "change": "+2,4%",
    "up": true,
    "debt": "19.9%",
    "score": 87,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Scientific & Technical Instruments",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 19.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Fortive Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Scientific & Technical Instruments) ist zulässig, Verschuldung (19.9%) und Cash-Quote (2.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "GD",
    "name": "General Dynamics Corporation",
    "sector": "Industrie",
    "industry": "Aerospace & Defense",
    "price": "36,71 $",
    "change": "-0,9%",
    "up": false,
    "debt": "0.0%",
    "score": 14,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Aerospace & Defense",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "General Dynamics Corporation zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "GDDY",
    "name": "GoDaddy Inc.",
    "sector": "Technologie",
    "industry": "Software - Infrastructure",
    "price": "233,66 $",
    "change": "+1,2%",
    "up": true,
    "debt": "35.1%",
    "score": 53,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Infrastructure",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 35.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 10.5,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 35.1% (Limit 30%)",
    "insight": "GoDaddy Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 35.1% (Limit 30%)). Die Branche (Software - Infrastructure) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "GE",
    "name": "GE Aerospace",
    "sector": "Industrie",
    "industry": "Aerospace & Defense",
    "price": "204,01 $",
    "change": "-1,3%",
    "up": false,
    "debt": "0.0%",
    "score": 5,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Aerospace & Defense",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "GE Aerospace zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "GEHC",
    "name": "GE HealthCare Technologies Inc.",
    "sector": "Gesundheit",
    "industry": "Medical Devices",
    "price": "204,73 $",
    "change": "-0,6%",
    "up": false,
    "debt": "34.1%",
    "score": 54,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Medical Devices",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 34.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 6.7,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 34.1% (Limit 30%)",
    "insight": "GE HealthCare Technologies Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 34.1% (Limit 30%)). Die Branche (Medical Devices) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "GEN",
    "name": "Gen Digital Inc.",
    "sector": "Technologie",
    "industry": "Software - Infrastructure",
    "price": "233,42 $",
    "change": "+1,5%",
    "up": true,
    "debt": "50.3%",
    "score": 49,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Infrastructure",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 50.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.4,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 50.3% (Limit 30%)",
    "insight": "Gen Digital Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 50.3% (Limit 30%)). Die Branche (Software - Infrastructure) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "GEV",
    "name": "GE Vernova Inc.",
    "sector": "Industrie",
    "industry": "Specialty Industrial Machinery",
    "price": "41,08 $",
    "change": "-0,8%",
    "up": false,
    "debt": "1.4%",
    "score": 98,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Industrial Machinery",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 1.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.8,
        "max": 30
      }
    ],
    "note": null,
    "insight": "GE Vernova Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (1.4%) und Cash-Quote (4.8%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "GILD",
    "name": "Gilead Sciences, Inc.",
    "sector": "Gesundheit",
    "industry": "Drug Manufacturers - General",
    "price": "201,99 $",
    "change": "-0,7%",
    "up": false,
    "debt": "13.7%",
    "score": 90,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Drug Manufacturers - General",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 13.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 6.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Gilead Sciences, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Drug Manufacturers - General) ist zulässig, Verschuldung (13.7%) und Cash-Quote (6.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "GIS",
    "name": "General Mills, Inc.",
    "sector": "Konsumgüter (Basis)",
    "industry": "Packaged Foods",
    "price": "347,15 $",
    "change": "-0,6%",
    "up": false,
    "debt": "0.0%",
    "score": 99,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Packaged Foods",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "General Mills, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Packaged Foods) ist zulässig, Verschuldung (0.0%) und Cash-Quote (2.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "GL",
    "name": "Globe Life Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Insurance - Life",
    "price": "415,07 $",
    "change": "+1,4%",
    "up": true,
    "debt": "0.0%",
    "score": 12,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Insurance - Life",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Globe Life Inc. zählt zur ausgeschlossenen Branche Insurance - Life und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "GLW",
    "name": "Corning Incorporated",
    "sector": "Technologie",
    "industry": "Electronic Components",
    "price": "203,55 $",
    "change": "+0,9%",
    "up": true,
    "debt": "7.9%",
    "score": 95,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Electronic Components",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 7.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Corning Incorporated erfüllt aktuell alle geprüften Kriterien: Die Branche (Electronic Components) ist zulässig, Verschuldung (7.9%) und Cash-Quote (2.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "GM",
    "name": "General Motors Company",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Auto Manufacturers",
    "price": "271,84 $",
    "change": "-1,3%",
    "up": false,
    "debt": "160.2%",
    "score": 16,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Auto Manufacturers",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 160.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 30.8,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 160.2% (Limit 30%); Cash-Quote zu hoch: 30.8% (Limit 30%)",
    "insight": "General Motors Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 160.2% (Limit 30%); Cash-Quote zu hoch: 30.8% (Limit 30%)). Die Branche (Auto Manufacturers) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "GNRC",
    "name": "Generac Holdlings Inc.",
    "sector": "Industrie",
    "industry": "Specialty Industrial Machinery",
    "price": "358,65 $",
    "change": "+1,9%",
    "up": true,
    "debt": "12.9%",
    "score": 92,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Industrial Machinery",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 12.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.3,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Generac Holdlings Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (12.9%) und Cash-Quote (2.3%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "GOOG",
    "name": "Alphabet Inc.",
    "sector": "Kommunikation",
    "industry": "Internet Content & Information",
    "price": "134,45 $",
    "change": "-0,4%",
    "up": false,
    "debt": "2.8%",
    "score": 97,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Internet Content & Information",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 2.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 5.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Alphabet Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Internet Content & Information) ist zulässig, Verschuldung (2.8%) und Cash-Quote (5.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "GOOGL",
    "name": "Alphabet Inc.",
    "sector": "Kommunikation",
    "industry": "Internet Content & Information",
    "price": "70,91 $",
    "change": "-1,7%",
    "up": false,
    "debt": "2.8%",
    "score": 97,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Internet Content & Information",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 2.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 5.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Alphabet Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Internet Content & Information) ist zulässig, Verschuldung (2.8%) und Cash-Quote (5.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "GPC",
    "name": "Genuine Parts Company",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Auto Parts",
    "price": "73,97 $",
    "change": "-0,1%",
    "up": false,
    "debt": "38.8%",
    "score": 52,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Auto Parts",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 38.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.3,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 38.8% (Limit 30%)",
    "insight": "Genuine Parts Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 38.8% (Limit 30%)). Die Branche (Auto Parts) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "GPN",
    "name": "Global Payments Inc.",
    "sector": "Industrie",
    "industry": "Specialty Business Services",
    "price": "64,93 $",
    "change": "-0,9%",
    "up": false,
    "debt": "102.6%",
    "score": 33,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Business Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 102.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 25.5,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 102.6% (Limit 30%)",
    "insight": "Global Payments Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 102.6% (Limit 30%)). Die Branche (Specialty Business Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "GRMN",
    "name": "Garmin Ltd.",
    "sector": "Technologie",
    "industry": "Scientific & Technical Instruments",
    "price": "328,97 $",
    "change": "-1,7%",
    "up": false,
    "debt": "0.4%",
    "score": 98,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Scientific & Technical Instruments",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.7,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Garmin Ltd. erfüllt aktuell alle geprüften Kriterien: Die Branche (Scientific & Technical Instruments) ist zulässig, Verschuldung (0.4%) und Cash-Quote (4.7%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "GS",
    "name": "Goldman Sachs Group, Inc. (The)",
    "sector": "Finanzdienstleistungen",
    "industry": "Capital Markets",
    "price": "403,38 $",
    "change": "+2,3%",
    "up": true,
    "debt": "0.0%",
    "score": 9,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Capital Markets",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Goldman Sachs Group, Inc. (The) zählt zur ausgeschlossenen Branche Capital Markets und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "GWW",
    "name": "W.W. Grainger, Inc.",
    "sector": "Industrie",
    "industry": "Industrial Distribution",
    "price": "275,42 $",
    "change": "+2,9%",
    "up": true,
    "debt": "4.3%",
    "score": 97,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Industrial Distribution",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 4.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "W.W. Grainger, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Industrial Distribution) ist zulässig, Verschuldung (4.3%) und Cash-Quote (1.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "HAL",
    "name": "Halliburton Company",
    "sector": "Energie",
    "industry": "Oil & Gas Equipment & Services",
    "price": "243,45 $",
    "change": "+2,1%",
    "up": true,
    "debt": "30.4%",
    "score": 55,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Oil & Gas Equipment & Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 30.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 7.6,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 30.4% (Limit 30%)",
    "insight": "Halliburton Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 30.4% (Limit 30%)). Die Branche (Oil & Gas Equipment & Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "HAS",
    "name": "Hasbro, Inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Leisure",
    "price": "236,85 $",
    "change": "-0,9%",
    "up": false,
    "debt": "29.3%",
    "score": 79,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Leisure",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 29.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 10.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Hasbro, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Leisure) ist zulässig, Verschuldung (29.3%) und Cash-Quote (10.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "HBAN",
    "name": "Huntington Bancshares Incorpora",
    "sector": "Finanzdienstleistungen",
    "industry": "Banks - Regional",
    "price": "384,87 $",
    "change": "-0,0%",
    "up": false,
    "debt": "0.0%",
    "score": 6,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Banks - Regional",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Huntington Bancshares Incorpora zählt zur ausgeschlossenen Branche Banks - Regional und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "HCA",
    "name": "HCA Healthcare, Inc.",
    "sector": "Gesundheit",
    "industry": "Medical Care Facilities",
    "price": "214,59 $",
    "change": "+0,2%",
    "up": true,
    "debt": "57.7%",
    "score": 47,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Medical Care Facilities",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 57.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.3,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 57.7% (Limit 30%)",
    "insight": "HCA Healthcare, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 57.7% (Limit 30%)). Die Branche (Medical Care Facilities) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "HD",
    "name": "Home Depot, Inc. (The)",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Home Improvement Retail",
    "price": "44,31 $",
    "change": "+0,2%",
    "up": true,
    "debt": "19.3%",
    "score": 88,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Home Improvement Retail",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 19.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.5,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Home Depot, Inc. (The) erfüllt aktuell alle geprüften Kriterien: Die Branche (Home Improvement Retail) ist zulässig, Verschuldung (19.3%) und Cash-Quote (0.5%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "HIG",
    "name": "The Hartford Insurance Group, I",
    "sector": "Finanzdienstleistungen",
    "industry": "Insurance - Diversified",
    "price": "123,14 $",
    "change": "+2,3%",
    "up": true,
    "debt": "0.0%",
    "score": 11,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Insurance - Diversified",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "The Hartford Insurance Group, I zählt zur ausgeschlossenen Branche Insurance - Diversified und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "HII",
    "name": "Huntington Ingalls Industries,",
    "sector": "Industrie",
    "industry": "Aerospace & Defense",
    "price": "138,70 $",
    "change": "+1,9%",
    "up": true,
    "debt": "0.0%",
    "score": 13,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Aerospace & Defense",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Huntington Ingalls Industries, zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "HLT",
    "name": "Hilton Worldwide Holdings Inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Lodging",
    "price": "409,20 $",
    "change": "-2,8%",
    "up": false,
    "debt": "19.4%",
    "score": 88,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Lodging",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 19.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Hilton Worldwide Holdings Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Lodging) ist zulässig, Verschuldung (19.4%) und Cash-Quote (1.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "HON",
    "name": "Honeywell International Inc.",
    "sector": "Industrie",
    "industry": "Conglomerates",
    "price": "126,23 $",
    "change": "+0,5%",
    "up": true,
    "debt": "45.4%",
    "score": 50,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Conglomerates",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 45.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 11.9,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 45.4% (Limit 30%)",
    "insight": "Honeywell International Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 45.4% (Limit 30%)). Die Branche (Conglomerates) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "HONA",
    "name": "Honeywell Aerospace Inc.",
    "sector": "Industrie",
    "industry": "Aerospace & Defense",
    "price": "414,90 $",
    "change": "-0,9%",
    "up": false,
    "debt": "0.0%",
    "score": 9,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Aerospace & Defense",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Honeywell Aerospace Inc. zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "HOOD",
    "name": "Robinhood Markets, Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Capital Markets",
    "price": "406,77 $",
    "change": "-1,8%",
    "up": false,
    "debt": "0.0%",
    "score": 13,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Capital Markets",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Robinhood Markets, Inc. zählt zur ausgeschlossenen Branche Capital Markets und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "HPE",
    "name": "Hewlett Packard Enterprise Comp",
    "sector": "Technologie",
    "industry": "Communication Equipment",
    "price": "225,36 $",
    "change": "-1,1%",
    "up": false,
    "debt": "33.6%",
    "score": 54,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Communication Equipment",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 33.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 8.3,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 33.6% (Limit 30%)",
    "insight": "Hewlett Packard Enterprise Comp überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 33.6% (Limit 30%)). Die Branche (Communication Equipment) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "HPQ",
    "name": "HP Inc.",
    "sector": "Technologie",
    "industry": "Computer Hardware",
    "price": "134,44 $",
    "change": "-2,7%",
    "up": false,
    "debt": "43.6%",
    "score": 51,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Computer Hardware",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 43.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 14.8,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 43.6% (Limit 30%)",
    "insight": "HP Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 43.6% (Limit 30%)). Die Branche (Computer Hardware) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "HRL",
    "name": "Hormel Foods Corporation",
    "sector": "Konsumgüter (Basis)",
    "industry": "Packaged Foods",
    "price": "372,10 $",
    "change": "+2,4%",
    "up": true,
    "debt": "1.8%",
    "score": 98,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Packaged Foods",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 1.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Hormel Foods Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Packaged Foods) ist zulässig, Verschuldung (1.8%) und Cash-Quote (4.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "HSIC",
    "name": "Henry Schein, Inc.",
    "sector": "Gesundheit",
    "industry": "Medical Distribution",
    "price": "382,42 $",
    "change": "+1,9%",
    "up": true,
    "debt": "38.4%",
    "score": 52,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Medical Distribution",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 38.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.4,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 38.4% (Limit 30%)",
    "insight": "Henry Schein, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 38.4% (Limit 30%)). Die Branche (Medical Distribution) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "HST",
    "name": "Host Hotels & Resorts, Inc.",
    "sector": "Immobilien",
    "industry": "REIT - Hotel & Motel",
    "price": "318,74 $",
    "change": "-0,0%",
    "up": false,
    "debt": "32.4%",
    "score": 54,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Hotel & Motel",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 32.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 9.8,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 32.4% (Limit 30%)",
    "insight": "Host Hotels & Resorts, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 32.4% (Limit 30%)). Die Branche (REIT - Hotel & Motel) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "HSY",
    "name": "The Hershey Company",
    "sector": "Konsumgüter (Basis)",
    "industry": "Confectioners",
    "price": "150,32 $",
    "change": "+2,5%",
    "up": true,
    "debt": "0.0%",
    "score": 9,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Confectioners",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "The Hershey Company zählt zur ausgeschlossenen Branche Confectioners und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "HUBB",
    "name": "Hubbell Inc",
    "sector": "Industrie",
    "industry": "Electrical Equipment & Parts",
    "price": "326,54 $",
    "change": "-2,1%",
    "up": false,
    "debt": "22.3%",
    "score": 86,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Electrical Equipment & Parts",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 22.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Hubbell Inc erfüllt aktuell alle geprüften Kriterien: Die Branche (Electrical Equipment & Parts) ist zulässig, Verschuldung (22.3%) und Cash-Quote (1.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "HUM",
    "name": "Humana Inc.",
    "sector": "Gesundheit",
    "industry": "Healthcare Plans",
    "price": "133,43 $",
    "change": "+2,6%",
    "up": true,
    "debt": "33.7%",
    "score": 47,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Healthcare Plans",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 33.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 54.6,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 33.7% (Limit 30%); Cash-Quote zu hoch: 54.6% (Limit 30%)",
    "insight": "Humana Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 33.7% (Limit 30%); Cash-Quote zu hoch: 54.6% (Limit 30%)). Die Branche (Healthcare Plans) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "HWM",
    "name": "Howmet Aerospace Inc.",
    "sector": "Industrie",
    "industry": "Aerospace & Defense",
    "price": "339,42 $",
    "change": "+1,5%",
    "up": true,
    "debt": "0.0%",
    "score": 11,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Aerospace & Defense",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Howmet Aerospace Inc. zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "IBKR",
    "name": "Interactive Brokers Group, Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Capital Markets",
    "price": "378,51 $",
    "change": "-0,7%",
    "up": false,
    "debt": "0.0%",
    "score": 11,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Capital Markets",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Interactive Brokers Group, Inc. zählt zur ausgeschlossenen Branche Capital Markets und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "IBM",
    "name": "International Business Machines",
    "sector": "Technologie",
    "industry": "Information Technology Services",
    "price": "263,56 $",
    "change": "-2,2%",
    "up": false,
    "debt": "31.0%",
    "score": 55,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Information Technology Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 31.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.9,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 31.0% (Limit 30%)",
    "insight": "International Business Machines überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 31.0% (Limit 30%)). Die Branche (Information Technology Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "ICE",
    "name": "Intercontinental Exchange Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Financial Data & Stock Exchanges",
    "price": "125,07 $",
    "change": "-2,0%",
    "up": false,
    "debt": "0.0%",
    "score": 14,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Financial Data & Stock Exchanges",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Intercontinental Exchange Inc. zählt zur ausgeschlossenen Branche Financial Data & Stock Exchanges und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "IDXX",
    "name": "IDEXX Laboratories, Inc.",
    "sector": "Gesundheit",
    "industry": "Diagnostics & Research",
    "price": "110,20 $",
    "change": "+2,7%",
    "up": true,
    "debt": "2.5%",
    "score": 98,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Diagnostics & Research",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 2.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.5,
        "max": 30
      }
    ],
    "note": null,
    "insight": "IDEXX Laboratories, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Diagnostics & Research) ist zulässig, Verschuldung (2.5%) und Cash-Quote (0.5%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "IEX",
    "name": "IDEX Corporation",
    "sector": "Industrie",
    "industry": "Specialty Industrial Machinery",
    "price": "415,68 $",
    "change": "-2,5%",
    "up": false,
    "debt": "11.1%",
    "score": 92,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Industrial Machinery",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 11.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.7,
        "max": 30
      }
    ],
    "note": null,
    "insight": "IDEX Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (11.1%) und Cash-Quote (3.7%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "IFF",
    "name": "International Flavors & Fragran",
    "sector": "Grundstoffe",
    "industry": "Specialty Chemicals",
    "price": "85,96 $",
    "change": "+1,3%",
    "up": true,
    "debt": "32.0%",
    "score": 54,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Chemicals",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 32.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.8,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 32.0% (Limit 30%)",
    "insight": "International Flavors & Fragran überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 32.0% (Limit 30%)). Die Branche (Specialty Chemicals) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "INCY",
    "name": "Incyte Corporation",
    "sector": "Gesundheit",
    "industry": "Biotechnology",
    "price": "390,20 $",
    "change": "-0,4%",
    "up": false,
    "debt": "0.2%",
    "score": 94,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Biotechnology",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 18.7,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Incyte Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Biotechnology) ist zulässig, Verschuldung (0.2%) und Cash-Quote (18.7%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "INTC",
    "name": "Intel Corporation",
    "sector": "Technologie",
    "industry": "Semiconductors",
    "price": "274,96 $",
    "change": "-0,9%",
    "up": false,
    "debt": "11.1%",
    "score": 91,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Semiconductors",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 11.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 6.5,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Intel Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (11.1%) und Cash-Quote (6.5%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "INTU",
    "name": "Intuit Inc.",
    "sector": "Technologie",
    "industry": "Software - Application",
    "price": "323,66 $",
    "change": "+3,0%",
    "up": true,
    "debt": "8.0%",
    "score": 93,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Application",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 8.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 7.8,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Intuit Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (8.0%) und Cash-Quote (7.8%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "INVH",
    "name": "Invitation Homes Inc.",
    "sector": "Immobilien",
    "industry": "REIT - Residential",
    "price": "172,49 $",
    "change": "-0,4%",
    "up": false,
    "debt": "48.6%",
    "score": 49,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Residential",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 48.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.6,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 48.6% (Limit 30%)",
    "insight": "Invitation Homes Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 48.6% (Limit 30%)). Die Branche (REIT - Residential) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "IP",
    "name": "International Paper Company",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Packaging & Containers",
    "price": "403,54 $",
    "change": "+0,6%",
    "up": true,
    "debt": "44.8%",
    "score": 51,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Packaging & Containers",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 44.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.4,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 44.8% (Limit 30%)",
    "insight": "International Paper Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 44.8% (Limit 30%)). Die Branche (Packaging & Containers) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "IQV",
    "name": "IQVIA Holdings, Inc.",
    "sector": "Gesundheit",
    "industry": "Diagnostics & Research",
    "price": "339,94 $",
    "change": "+1,6%",
    "up": true,
    "debt": "42.0%",
    "score": 51,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Diagnostics & Research",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 42.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 5.4,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 42.0% (Limit 30%)",
    "insight": "IQVIA Holdings, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 42.0% (Limit 30%)). Die Branche (Diagnostics & Research) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "IR",
    "name": "Ingersoll Rand Inc.",
    "sector": "Industrie",
    "industry": "Specialty Industrial Machinery",
    "price": "263,16 $",
    "change": "+2,9%",
    "up": true,
    "debt": "14.6%",
    "score": 90,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Industrial Machinery",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 14.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Ingersoll Rand Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (14.6%) und Cash-Quote (3.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "IRM",
    "name": "Iron Mountain Incorporated (Del",
    "sector": "Immobilien",
    "industry": "REIT - Specialty",
    "price": "340,31 $",
    "change": "-1,5%",
    "up": false,
    "debt": "54.2%",
    "score": 48,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Specialty",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 54.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.7,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 54.2% (Limit 30%)",
    "insight": "Iron Mountain Incorporated (Del überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 54.2% (Limit 30%)). Die Branche (REIT - Specialty) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "ISRG",
    "name": "Intuitive Surgical, Inc.",
    "sector": "Gesundheit",
    "industry": "Medical Instruments & Supplies",
    "price": "30,77 $",
    "change": "+1,7%",
    "up": true,
    "debt": "0.0%",
    "score": 99,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Medical Instruments & Supplies",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Intuitive Surgical, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Instruments & Supplies) ist zulässig, Verschuldung (0.0%) und Cash-Quote (4.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "IT",
    "name": "Gartner, Inc.",
    "sector": "Technologie",
    "industry": "Information Technology Services",
    "price": "411,72 $",
    "change": "-0,5%",
    "up": false,
    "debt": "33.2%",
    "score": 54,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Information Technology Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 33.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 16.5,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 33.2% (Limit 30%)",
    "insight": "Gartner, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 33.2% (Limit 30%)). Die Branche (Information Technology Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "ITW",
    "name": "Illinois Tool Works Inc.",
    "sector": "Industrie",
    "industry": "Specialty Industrial Machinery",
    "price": "223,63 $",
    "change": "-0,5%",
    "up": false,
    "debt": "11.7%",
    "score": 93,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Industrial Machinery",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 11.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Illinois Tool Works Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (11.7%) und Cash-Quote (1.0%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "IVZ",
    "name": "Invesco Ltd",
    "sector": "Finanzdienstleistungen",
    "industry": "Asset Management",
    "price": "381,50 $",
    "change": "+1,5%",
    "up": true,
    "debt": "0.0%",
    "score": 14,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Asset Management",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Invesco Ltd zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "J",
    "name": "Jacobs Solutions Inc.",
    "sector": "Industrie",
    "industry": "Engineering & Construction",
    "price": "362,37 $",
    "change": "-0,7%",
    "up": false,
    "debt": "28.6%",
    "score": 80,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Engineering & Construction",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 28.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 8.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Jacobs Solutions Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Engineering & Construction) ist zulässig, Verschuldung (28.6%) und Cash-Quote (8.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "JBHT",
    "name": "J.B. Hunt Transport Services, I",
    "sector": "Industrie",
    "industry": "Integrated Freight & Logistics",
    "price": "39,27 $",
    "change": "-2,2%",
    "up": false,
    "debt": "5.5%",
    "score": 97,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Integrated Freight & Logistics",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 5.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "J.B. Hunt Transport Services, I erfüllt aktuell alle geprüften Kriterien: Die Branche (Integrated Freight & Logistics) ist zulässig, Verschuldung (5.5%) und Cash-Quote (0.0%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "JBL",
    "name": "Jabil Inc.",
    "sector": "Technologie",
    "industry": "Electronic Components",
    "price": "153,44 $",
    "change": "-1,7%",
    "up": false,
    "debt": "11.9%",
    "score": 92,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Electronic Components",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 11.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Jabil Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Electronic Components) ist zulässig, Verschuldung (11.9%) und Cash-Quote (4.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "JCI",
    "name": "Johnson Controls International",
    "sector": "Industrie",
    "industry": "Building Products & Equipment",
    "price": "260,05 $",
    "change": "+1,9%",
    "up": true,
    "debt": "10.7%",
    "score": 93,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Building Products & Equipment",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 10.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.7,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Johnson Controls International erfüllt aktuell alle geprüften Kriterien: Die Branche (Building Products & Equipment) ist zulässig, Verschuldung (10.7%) und Cash-Quote (0.7%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "JKHY",
    "name": "Jack Henry & Associates, Inc.",
    "sector": "Technologie",
    "industry": "Information Technology Services",
    "price": "295,76 $",
    "change": "-1,6%",
    "up": false,
    "debt": "1.2%",
    "score": 99,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Information Technology Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 1.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Jack Henry & Associates, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Information Technology Services) ist zulässig, Verschuldung (1.2%) und Cash-Quote (0.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "JNJ",
    "name": "Johnson & Johnson",
    "sector": "Gesundheit",
    "industry": "Drug Manufacturers - General",
    "price": "249,23 $",
    "change": "-2,3%",
    "up": false,
    "debt": "7.9%",
    "score": 94,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Drug Manufacturers - General",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 7.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Johnson & Johnson erfüllt aktuell alle geprüften Kriterien: Die Branche (Drug Manufacturers - General) ist zulässig, Verschuldung (7.9%) und Cash-Quote (3.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "JPM",
    "name": "JP Morgan Chase & Co.",
    "sector": "Finanzdienstleistungen",
    "industry": "Banks - Diversified",
    "price": "25,43 $",
    "change": "-1,1%",
    "up": false,
    "debt": "0.0%",
    "score": 6,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Banks - Diversified",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "JP Morgan Chase & Co. zählt zur ausgeschlossenen Branche Banks - Diversified und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "KDP",
    "name": "Keurig Dr Pepper Inc.",
    "sector": "Konsumgüter (Basis)",
    "industry": "Beverages - Non-Alcoholic",
    "price": "78,73 $",
    "change": "-1,8%",
    "up": false,
    "debt": "68.2%",
    "score": 44,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Beverages - Non-Alcoholic",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 68.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.1,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 68.2% (Limit 30%)",
    "insight": "Keurig Dr Pepper Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 68.2% (Limit 30%)). Die Branche (Beverages - Non-Alcoholic) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "KEY",
    "name": "KeyCorp",
    "sector": "Finanzdienstleistungen",
    "industry": "Banks - Regional",
    "price": "31,92 $",
    "change": "-2,7%",
    "up": false,
    "debt": "0.0%",
    "score": 8,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Banks - Regional",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "KeyCorp zählt zur ausgeschlossenen Branche Banks - Regional und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "KEYS",
    "name": "Keysight Technologies Inc.",
    "sector": "Technologie",
    "industry": "Scientific & Technical Instruments",
    "price": "142,19 $",
    "change": "-2,7%",
    "up": false,
    "debt": "5.1%",
    "score": 96,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Scientific & Technical Instruments",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 5.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Keysight Technologies Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Scientific & Technical Instruments) ist zulässig, Verschuldung (5.1%) und Cash-Quote (4.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "KHC",
    "name": "The Kraft Heinz Company",
    "sector": "Konsumgüter (Basis)",
    "industry": "Packaged Foods",
    "price": "319,75 $",
    "change": "+2,1%",
    "up": true,
    "debt": "68.9%",
    "score": 43,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Packaged Foods",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 68.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 13.3,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 68.9% (Limit 30%)",
    "insight": "The Kraft Heinz Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 68.9% (Limit 30%)). Die Branche (Packaged Foods) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "KIM",
    "name": "Kimco Realty Corporation (HC)",
    "sector": "Immobilien",
    "industry": "REIT - Retail",
    "price": "23,10 $",
    "change": "+1,1%",
    "up": true,
    "debt": "48.4%",
    "score": 49,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Retail",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 48.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.0,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 48.4% (Limit 30%)",
    "insight": "Kimco Realty Corporation (HC) überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 48.4% (Limit 30%)). Die Branche (REIT - Retail) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "KKR",
    "name": "KKR & Co. Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Asset Management",
    "price": "223,63 $",
    "change": "+1,8%",
    "up": true,
    "debt": "0.0%",
    "score": 7,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Asset Management",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "KKR & Co. Inc. zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "KLAC",
    "name": "KLA Corporation",
    "sector": "Technologie",
    "industry": "Semiconductor Equipment & Materials",
    "price": "380,29 $",
    "change": "+1,6%",
    "up": true,
    "debt": "2.5%",
    "score": 98,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Semiconductor Equipment & Materials",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 2.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "KLA Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductor Equipment & Materials) ist zulässig, Verschuldung (2.5%) und Cash-Quote (2.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "KMB",
    "name": "Kimberly-Clark Corporation",
    "sector": "Konsumgüter (Basis)",
    "industry": "Household & Personal Products",
    "price": "350,75 $",
    "change": "+0,2%",
    "up": true,
    "debt": "19.6%",
    "score": 88,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Household & Personal Products",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 19.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.5,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Kimberly-Clark Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Household & Personal Products) ist zulässig, Verschuldung (19.6%) und Cash-Quote (1.5%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "KMI",
    "name": "Kinder Morgan, Inc.",
    "sector": "Energie",
    "industry": "Oil & Gas Midstream",
    "price": "27,99 $",
    "change": "+0,7%",
    "up": true,
    "debt": "45.3%",
    "score": 50,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Oil & Gas Midstream",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 45.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.1,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 45.3% (Limit 30%)",
    "insight": "Kinder Morgan, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 45.3% (Limit 30%)). Die Branche (Oil & Gas Midstream) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "KO",
    "name": "Coca-Cola Company (The)",
    "sector": "Konsumgüter (Basis)",
    "industry": "Beverages - Non-Alcoholic",
    "price": "22,10 $",
    "change": "+2,7%",
    "up": true,
    "debt": "11.7%",
    "score": 92,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Beverages - Non-Alcoholic",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 11.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.3,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Coca-Cola Company (The) erfüllt aktuell alle geprüften Kriterien: Die Branche (Beverages - Non-Alcoholic) ist zulässig, Verschuldung (11.7%) und Cash-Quote (4.3%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "KR",
    "name": "Kroger Company (The)",
    "sector": "Konsumgüter (Basis)",
    "industry": "Grocery Stores",
    "price": "312,47 $",
    "change": "+1,1%",
    "up": true,
    "debt": "68.4%",
    "score": 43,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Grocery Stores",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 68.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 8.1,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 68.4% (Limit 30%)",
    "insight": "Kroger Company (The) überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 68.4% (Limit 30%)). Die Branche (Grocery Stores) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "KVUE",
    "name": "Kenvue Inc.",
    "sector": "Konsumgüter (Basis)",
    "industry": "Household & Personal Products",
    "price": "132,44 $",
    "change": "+2,2%",
    "up": true,
    "debt": "23.8%",
    "score": 85,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Household & Personal Products",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 23.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.9,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Kenvue Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Household & Personal Products) ist zulässig, Verschuldung (23.8%) und Cash-Quote (2.9%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "L",
    "name": "Loews Corporation",
    "sector": "Finanzdienstleistungen",
    "industry": "Insurance - Property & Casualty",
    "price": "137,75 $",
    "change": "+2,7%",
    "up": true,
    "debt": "0.0%",
    "score": 11,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Insurance - Property & Casualty",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Loews Corporation zählt zur ausgeschlossenen Branche Insurance - Property & Casualty und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "LDOS",
    "name": "Leidos Holdings, Inc.",
    "sector": "Technologie",
    "industry": "Information Technology Services",
    "price": "350,69 $",
    "change": "+2,5%",
    "up": true,
    "debt": "47.8%",
    "score": 50,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Information Technology Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 47.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.1,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 47.8% (Limit 30%)",
    "insight": "Leidos Holdings, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 47.8% (Limit 30%)). Die Branche (Information Technology Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "LEN",
    "name": "Lennar Corporation",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Residential Construction",
    "price": "41,91 $",
    "change": "-1,0%",
    "up": false,
    "debt": "31.5%",
    "score": 55,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Residential Construction",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 31.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 9.3,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 31.5% (Limit 30%)",
    "insight": "Lennar Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 31.5% (Limit 30%)). Die Branche (Residential Construction) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "LH",
    "name": "Labcorp Holdings Inc.",
    "sector": "Gesundheit",
    "industry": "Diagnostics & Research",
    "price": "34,00 $",
    "change": "+2,4%",
    "up": true,
    "debt": "27.0%",
    "score": 84,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Diagnostics & Research",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 27.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Labcorp Holdings Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Diagnostics & Research) ist zulässig, Verschuldung (27.0%) und Cash-Quote (0.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "LHX",
    "name": "L3Harris Technologies, Inc.",
    "sector": "Industrie",
    "industry": "Aerospace & Defense",
    "price": "145,66 $",
    "change": "-2,8%",
    "up": false,
    "debt": "0.0%",
    "score": 11,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Aerospace & Defense",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "L3Harris Technologies, Inc. zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "LII",
    "name": "Lennox International, Inc.",
    "sector": "Industrie",
    "industry": "Building Products & Equipment",
    "price": "18,23 $",
    "change": "+0,7%",
    "up": true,
    "debt": "14.1%",
    "score": 91,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Building Products & Equipment",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 14.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Lennox International, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Building Products & Equipment) ist zulässig, Verschuldung (14.1%) und Cash-Quote (0.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "LIN",
    "name": "Linde plc",
    "sector": "Grundstoffe",
    "industry": "Specialty Chemicals",
    "price": "217,38 $",
    "change": "-0,5%",
    "up": false,
    "debt": "11.9%",
    "score": 92,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Chemicals",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 11.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.8,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Linde plc erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Chemicals) ist zulässig, Verschuldung (11.9%) und Cash-Quote (1.8%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "LITE",
    "name": "Lumentum Holdings Inc.",
    "sector": "Technologie",
    "industry": "Communication Equipment",
    "price": "43,60 $",
    "change": "+0,1%",
    "up": true,
    "debt": "6.0%",
    "score": 95,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Communication Equipment",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 6.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 5.7,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Lumentum Holdings Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Communication Equipment) ist zulässig, Verschuldung (6.0%) und Cash-Quote (5.7%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "LLY",
    "name": "Eli Lilly and Company",
    "sector": "Gesundheit",
    "industry": "Drug Manufacturers - General",
    "price": "106,91 $",
    "change": "+2,3%",
    "up": true,
    "debt": "4.2%",
    "score": 97,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Drug Manufacturers - General",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 4.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.5,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Eli Lilly and Company erfüllt aktuell alle geprüften Kriterien: Die Branche (Drug Manufacturers - General) ist zulässig, Verschuldung (4.2%) und Cash-Quote (0.5%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "LMT",
    "name": "Lockheed Martin Corporation",
    "sector": "Industrie",
    "industry": "Aerospace & Defense",
    "price": "135,88 $",
    "change": "-0,5%",
    "up": false,
    "debt": "0.0%",
    "score": 12,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Aerospace & Defense",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Lockheed Martin Corporation zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "LNT",
    "name": "Alliant Energy Corporation",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Electric",
    "price": "252,38 $",
    "change": "+1,3%",
    "up": true,
    "debt": "66.3%",
    "score": 44,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Electric",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 66.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.1,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 66.3% (Limit 30%)",
    "insight": "Alliant Energy Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 66.3% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "LOW",
    "name": "Lowe's Companies, Inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Home Improvement Retail",
    "price": "25,76 $",
    "change": "+2,7%",
    "up": true,
    "debt": "36.5%",
    "score": 53,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Home Improvement Retail",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 36.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.7,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 36.5% (Limit 30%)",
    "insight": "Lowe's Companies, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 36.5% (Limit 30%)). Die Branche (Home Improvement Retail) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "LRCX",
    "name": "Lam Research Corporation",
    "sector": "Technologie",
    "industry": "Semiconductor Equipment & Materials",
    "price": "269,35 $",
    "change": "+1,5%",
    "up": true,
    "debt": "1.0%",
    "score": 99,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Semiconductor Equipment & Materials",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 1.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.5,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Lam Research Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductor Equipment & Materials) ist zulässig, Verschuldung (1.0%) und Cash-Quote (1.5%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "LULU",
    "name": "lululemon athletica inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Apparel Retail",
    "price": "132,39 $",
    "change": "+2,5%",
    "up": true,
    "debt": "15.8%",
    "score": 87,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Apparel Retail",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 15.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 11.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "lululemon athletica inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Apparel Retail) ist zulässig, Verschuldung (15.8%) und Cash-Quote (11.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "LUV",
    "name": "Southwest Airlines Company",
    "sector": "Industrie",
    "industry": "Airlines",
    "price": "277,39 $",
    "change": "-1,1%",
    "up": false,
    "debt": "31.3%",
    "score": 55,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Airlines",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 31.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 17.2,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 31.3% (Limit 30%)",
    "insight": "Southwest Airlines Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 31.3% (Limit 30%)). Die Branche (Airlines) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "LVS",
    "name": "Las Vegas Sands Corp.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Resorts & Casinos",
    "price": "228,20 $",
    "change": "-1,0%",
    "up": false,
    "debt": "0.0%",
    "score": 10,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Resorts & Casinos",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Las Vegas Sands Corp. zählt zur ausgeschlossenen Branche Resorts & Casinos und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "LYB",
    "name": "LyondellBasell Industries NV",
    "sector": "Grundstoffe",
    "industry": "Specialty Chemicals",
    "price": "206,46 $",
    "change": "+1,1%",
    "up": true,
    "debt": "71.5%",
    "score": 43,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Chemicals",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 71.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 13.2,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 71.5% (Limit 30%)",
    "insight": "LyondellBasell Industries NV überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 71.5% (Limit 30%)). Die Branche (Specialty Chemicals) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "LYV",
    "name": "Live Nation Entertainment, Inc.",
    "sector": "Kommunikation",
    "industry": "Entertainment",
    "price": "205,72 $",
    "change": "+3,0%",
    "up": true,
    "debt": "27.8%",
    "score": 77,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Entertainment",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 27.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 22.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Live Nation Entertainment, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Entertainment) ist zulässig, Verschuldung (27.8%) und Cash-Quote (22.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "MA",
    "name": "Mastercard Incorporated",
    "sector": "Finanzdienstleistungen",
    "industry": "Credit Services",
    "price": "355,80 $",
    "change": "+1,5%",
    "up": true,
    "debt": "0.0%",
    "score": 7,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Credit Services",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Mastercard Incorporated zählt zur ausgeschlossenen Branche Credit Services und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "MAA",
    "name": "Mid-America Apartment Communiti",
    "sector": "Immobilien",
    "industry": "REIT - Residential",
    "price": "96,30 $",
    "change": "+1,0%",
    "up": true,
    "debt": "36.2%",
    "score": 53,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Residential",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 36.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.3,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 36.2% (Limit 30%)",
    "insight": "Mid-America Apartment Communiti überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 36.2% (Limit 30%)). Die Branche (REIT - Residential) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "MAR",
    "name": "Marriott International",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Lodging",
    "price": "405,07 $",
    "change": "-1,7%",
    "up": false,
    "debt": "17.7%",
    "score": 89,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Lodging",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 17.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.5,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Marriott International erfüllt aktuell alle geprüften Kriterien: Die Branche (Lodging) ist zulässig, Verschuldung (17.7%) und Cash-Quote (0.5%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "MAS",
    "name": "Masco Corporation",
    "sector": "Industrie",
    "industry": "Building Products & Equipment",
    "price": "339,41 $",
    "change": "+1,5%",
    "up": true,
    "debt": "24.8%",
    "score": 84,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Building Products & Equipment",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 24.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.9,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Masco Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Building Products & Equipment) ist zulässig, Verschuldung (24.8%) und Cash-Quote (3.9%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "MCD",
    "name": "McDonald's Corporation",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Restaurants",
    "price": "184,15 $",
    "change": "+2,5%",
    "up": true,
    "debt": "28.5%",
    "score": 83,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Restaurants",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 28.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "McDonald's Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Restaurants) ist zulässig, Verschuldung (28.5%) und Cash-Quote (0.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "MCHP",
    "name": "Microchip Technology Incorporat",
    "sector": "Technologie",
    "industry": "Semiconductors",
    "price": "177,45 $",
    "change": "+1,2%",
    "up": true,
    "debt": "14.0%",
    "score": 91,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Semiconductors",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 14.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Microchip Technology Incorporat erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (14.0%) und Cash-Quote (0.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "MCK",
    "name": "McKesson Corporation",
    "sector": "Gesundheit",
    "industry": "Medical Distribution",
    "price": "43,21 $",
    "change": "-1,1%",
    "up": false,
    "debt": "8.8%",
    "score": 94,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Medical Distribution",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 8.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "McKesson Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Distribution) ist zulässig, Verschuldung (8.8%) und Cash-Quote (4.0%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "MCO",
    "name": "Moody's Corporation",
    "sector": "Finanzdienstleistungen",
    "industry": "Financial Data & Stock Exchanges",
    "price": "82,90 $",
    "change": "+0,8%",
    "up": true,
    "debt": "0.0%",
    "score": 8,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Financial Data & Stock Exchanges",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Moody's Corporation zählt zur ausgeschlossenen Branche Financial Data & Stock Exchanges und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "MDLZ",
    "name": "Mondelez International, Inc.",
    "sector": "Konsumgüter (Basis)",
    "industry": "Confectioners",
    "price": "106,16 $",
    "change": "-0,4%",
    "up": false,
    "debt": "0.0%",
    "score": 6,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Confectioners",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Mondelez International, Inc. zählt zur ausgeschlossenen Branche Confectioners und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "MDT",
    "name": "Medtronic plc.",
    "sector": "Gesundheit",
    "industry": "Medical Devices",
    "price": "134,43 $",
    "change": "+1,3%",
    "up": true,
    "debt": "26.7%",
    "score": 81,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Medical Devices",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 26.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 8.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Medtronic plc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Devices) ist zulässig, Verschuldung (26.7%) und Cash-Quote (8.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "MET",
    "name": "MetLife, Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Insurance - Life",
    "price": "85,30 $",
    "change": "+1,5%",
    "up": true,
    "debt": "0.0%",
    "score": 5,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Insurance - Life",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "MetLife, Inc. zählt zur ausgeschlossenen Branche Insurance - Life und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "META",
    "name": "Meta Platforms, Inc.",
    "sector": "Kommunikation",
    "industry": "Internet Content & Information",
    "price": "240,99 $",
    "change": "-0,9%",
    "up": false,
    "debt": "7.9%",
    "score": 93,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Internet Content & Information",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 7.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 6.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Meta Platforms, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Internet Content & Information) ist zulässig, Verschuldung (7.9%) und Cash-Quote (6.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "MGM",
    "name": "MGM Resorts International",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Resorts & Casinos",
    "price": "192,28 $",
    "change": "-2,1%",
    "up": false,
    "debt": "0.0%",
    "score": 10,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Resorts & Casinos",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "MGM Resorts International zählt zur ausgeschlossenen Branche Resorts & Casinos und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "MKC",
    "name": "McCormick & Company, Incorporat",
    "sector": "Konsumgüter (Basis)",
    "industry": "Packaged Foods",
    "price": "298,70 $",
    "change": "-2,3%",
    "up": false,
    "debt": "36.1%",
    "score": 53,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Packaged Foods",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 36.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.4,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 36.1% (Limit 30%)",
    "insight": "McCormick & Company, Incorporat überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 36.1% (Limit 30%)). Die Branche (Packaged Foods) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "MLM",
    "name": "Martin Marietta Materials, Inc.",
    "sector": "Grundstoffe",
    "industry": "Building Materials",
    "price": "147,87 $",
    "change": "+0,4%",
    "up": true,
    "debt": "20.1%",
    "score": 88,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Building Materials",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 20.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Martin Marietta Materials, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Building Materials) ist zulässig, Verschuldung (20.1%) und Cash-Quote (0.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "MMM",
    "name": "3M Company",
    "sector": "Industrie",
    "industry": "Conglomerates",
    "price": "186,02 $",
    "change": "+2,1%",
    "up": true,
    "debt": "14.5%",
    "score": 90,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Conglomerates",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 14.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 5.8,
        "max": 30
      }
    ],
    "note": null,
    "insight": "3M Company erfüllt aktuell alle geprüften Kriterien: Die Branche (Conglomerates) ist zulässig, Verschuldung (14.5%) und Cash-Quote (5.8%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "MNST",
    "name": "Monster Beverage Corporation",
    "sector": "Konsumgüter (Basis)",
    "industry": "Beverages - Non-Alcoholic",
    "price": "213,96 $",
    "change": "-1,3%",
    "up": false,
    "debt": "0.1%",
    "score": 99,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Beverages - Non-Alcoholic",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Monster Beverage Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Beverages - Non-Alcoholic) ist zulässig, Verschuldung (0.1%) und Cash-Quote (3.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "MO",
    "name": "Altria Group, Inc.",
    "sector": "Konsumgüter (Basis)",
    "industry": "Tobacco",
    "price": "178,01 $",
    "change": "-0,4%",
    "up": false,
    "debt": "0.0%",
    "score": 11,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Tobacco",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Altria Group, Inc. zählt zur ausgeschlossenen Branche Tobacco und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "MOS",
    "name": "Mosaic Company (The)",
    "sector": "Grundstoffe",
    "industry": "Agricultural Inputs",
    "price": "377,64 $",
    "change": "+0,1%",
    "up": true,
    "debt": "82.0%",
    "score": 39,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Agricultural Inputs",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 82.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.0,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 82.0% (Limit 30%)",
    "insight": "Mosaic Company (The) überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 82.0% (Limit 30%)). Die Branche (Agricultural Inputs) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "MPC",
    "name": "Marathon Petroleum Corporation",
    "sector": "Energie",
    "industry": "Oil & Gas Refining & Marketing",
    "price": "83,92 $",
    "change": "-0,2%",
    "up": false,
    "debt": "37.2%",
    "score": 53,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Oil & Gas Refining & Marketing",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 37.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.3,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 37.2% (Limit 30%)",
    "insight": "Marathon Petroleum Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 37.2% (Limit 30%)). Die Branche (Oil & Gas Refining & Marketing) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "MPWR",
    "name": "Monolithic Power Systems, Inc.",
    "sector": "Technologie",
    "industry": "Semiconductors",
    "price": "263,85 $",
    "change": "-1,0%",
    "up": false,
    "debt": "0.0%",
    "score": 99,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Semiconductors",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Monolithic Power Systems, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (0.0%) und Cash-Quote (2.0%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "MRK",
    "name": "Merck & Company, Inc.",
    "sector": "Gesundheit",
    "industry": "Drug Manufacturers - General",
    "price": "138,83 $",
    "change": "+1,1%",
    "up": true,
    "debt": "15.3%",
    "score": 90,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Drug Manufacturers - General",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 15.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.8,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Merck & Company, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Drug Manufacturers - General) ist zulässig, Verschuldung (15.3%) und Cash-Quote (1.8%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "MRNA",
    "name": "Moderna, Inc.",
    "sector": "Gesundheit",
    "industry": "Biotechnology",
    "price": "180,52 $",
    "change": "-2,9%",
    "up": false,
    "debt": "6.0%",
    "score": 89,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Biotechnology",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 6.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 23.9,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Moderna, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Biotechnology) ist zulässig, Verschuldung (6.0%) und Cash-Quote (23.9%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "MRSH",
    "name": "Marsh",
    "sector": "Finanzdienstleistungen",
    "industry": "Insurance Brokers",
    "price": "308,29 $",
    "change": "+0,8%",
    "up": true,
    "debt": "0.0%",
    "score": 9,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Insurance Brokers",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Marsh zählt zur ausgeschlossenen Branche Insurance Brokers und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "MRVL",
    "name": "Marvell Technology, Inc.",
    "sector": "Technologie",
    "industry": "Semiconductors",
    "price": "101,71 $",
    "change": "-1,6%",
    "up": false,
    "debt": "3.1%",
    "score": 97,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Semiconductors",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 3.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.3,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Marvell Technology, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (3.1%) und Cash-Quote (2.3%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "MS",
    "name": "Morgan Stanley",
    "sector": "Finanzdienstleistungen",
    "industry": "Capital Markets",
    "price": "276,05 $",
    "change": "+1,0%",
    "up": true,
    "debt": "0.0%",
    "score": 5,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Capital Markets",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Morgan Stanley zählt zur ausgeschlossenen Branche Capital Markets und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "MSCI",
    "name": "MSCI Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Financial Data & Stock Exchanges",
    "price": "155,00 $",
    "change": "-2,0%",
    "up": false,
    "debt": "0.0%",
    "score": 5,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Financial Data & Stock Exchanges",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "MSCI Inc. zählt zur ausgeschlossenen Branche Financial Data & Stock Exchanges und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "MSFT",
    "name": "Microsoft Corporation",
    "sector": "Technologie",
    "industry": "Software - Infrastructure",
    "price": "78,50 $",
    "change": "+2,8%",
    "up": true,
    "debt": "3.7%",
    "score": 97,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Infrastructure",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 3.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Microsoft Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Infrastructure) ist zulässig, Verschuldung (3.7%) und Cash-Quote (2.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "MSI",
    "name": "Motorola Solutions, Inc.",
    "sector": "Technologie",
    "industry": "Communication Equipment",
    "price": "185,69 $",
    "change": "-1,9%",
    "up": false,
    "debt": "13.3%",
    "score": 92,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Communication Equipment",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 13.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Motorola Solutions, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Communication Equipment) ist zulässig, Verschuldung (13.3%) und Cash-Quote (1.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "MTB",
    "name": "M&T Bank Corporation",
    "sector": "Finanzdienstleistungen",
    "industry": "Banks - Regional",
    "price": "319,01 $",
    "change": "+0,8%",
    "up": true,
    "debt": "0.0%",
    "score": 12,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Banks - Regional",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "M&T Bank Corporation zählt zur ausgeschlossenen Branche Banks - Regional und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "MTD",
    "name": "Mettler-Toledo International, I",
    "sector": "Gesundheit",
    "industry": "Diagnostics & Research",
    "price": "80,34 $",
    "change": "-2,4%",
    "up": false,
    "debt": "7.4%",
    "score": 96,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Diagnostics & Research",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 7.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Mettler-Toledo International, I erfüllt aktuell alle geprüften Kriterien: Die Branche (Diagnostics & Research) ist zulässig, Verschuldung (7.4%) und Cash-Quote (0.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "MU",
    "name": "Micron Technology, Inc.",
    "sector": "Technologie",
    "industry": "Semiconductors",
    "price": "387,06 $",
    "change": "-2,0%",
    "up": false,
    "debt": "0.7%",
    "score": 99,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Semiconductors",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.8,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Micron Technology, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (0.7%) und Cash-Quote (2.8%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "NCLH",
    "name": "Norwegian Cruise Line Holdings",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Travel Services",
    "price": "275,79 $",
    "change": "+2,4%",
    "up": true,
    "debt": "191.1%",
    "score": 15,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Travel Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 191.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.6,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 191.1% (Limit 30%)",
    "insight": "Norwegian Cruise Line Holdings überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 191.1% (Limit 30%)). Die Branche (Travel Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "NDAQ",
    "name": "Nasdaq, Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Financial Data & Stock Exchanges",
    "price": "29,98 $",
    "change": "+0,7%",
    "up": true,
    "debt": "0.0%",
    "score": 7,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Financial Data & Stock Exchanges",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Nasdaq, Inc. zählt zur ausgeschlossenen Branche Financial Data & Stock Exchanges und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "NDSN",
    "name": "Nordson Corporation",
    "sector": "Industrie",
    "industry": "Specialty Industrial Machinery",
    "price": "224,58 $",
    "change": "+1,1%",
    "up": true,
    "debt": "11.9%",
    "score": 93,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Industrial Machinery",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 11.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Nordson Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (11.9%) und Cash-Quote (0.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "NEE",
    "name": "NextEra Energy, Inc.",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Electric",
    "price": "225,92 $",
    "change": "+1,0%",
    "up": true,
    "debt": "60.8%",
    "score": 46,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Electric",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 60.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.6,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 60.8% (Limit 30%)",
    "insight": "NextEra Energy, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 60.8% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "NEM",
    "name": "Newmont Corporation",
    "sector": "Grundstoffe",
    "industry": "Gold",
    "price": "281,84 $",
    "change": "+1,3%",
    "up": true,
    "debt": "5.7%",
    "score": 94,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Gold",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 5.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 9.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Newmont Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Gold) ist zulässig, Verschuldung (5.7%) und Cash-Quote (9.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "NFLX",
    "name": "Netflix, Inc.",
    "sector": "Kommunikation",
    "industry": "Entertainment",
    "price": "310,87 $",
    "change": "-2,0%",
    "up": false,
    "debt": "5.6%",
    "score": 96,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Entertainment",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 5.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Netflix, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Entertainment) ist zulässig, Verschuldung (5.6%) und Cash-Quote (3.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "NI",
    "name": "NiSource Inc",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Gas",
    "price": "164,31 $",
    "change": "+1,6%",
    "up": true,
    "debt": "78.9%",
    "score": 40,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Gas",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 78.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.3,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 78.9% (Limit 30%)",
    "insight": "NiSource Inc überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 78.9% (Limit 30%)). Die Branche (Utilities - Regulated Gas) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "NKE",
    "name": "Nike, Inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Footwear & Accessories",
    "price": "339,31 $",
    "change": "-1,1%",
    "up": false,
    "debt": "17.8%",
    "score": 85,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Footwear & Accessories",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 17.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 14.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Nike, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Footwear & Accessories) ist zulässig, Verschuldung (17.8%) und Cash-Quote (14.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "NOC",
    "name": "Northrop Grumman Corporation",
    "sector": "Industrie",
    "industry": "Aerospace & Defense",
    "price": "33,50 $",
    "change": "+2,9%",
    "up": true,
    "debt": "0.0%",
    "score": 9,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Aerospace & Defense",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Northrop Grumman Corporation zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "NOW",
    "name": "ServiceNow, Inc.",
    "sector": "Technologie",
    "industry": "Software - Application",
    "price": "77,57 $",
    "change": "-2,8%",
    "up": false,
    "debt": "7.4%",
    "score": 94,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Application",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 7.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "ServiceNow, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (7.4%) und Cash-Quote (4.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "NRG",
    "name": "NRG Energy, Inc.",
    "sector": "Versorger",
    "industry": "Utilities - Independent Power Producers",
    "price": "59,47 $",
    "change": "+2,1%",
    "up": true,
    "debt": "82.4%",
    "score": 39,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Independent Power Producers",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 82.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.6,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 82.4% (Limit 30%)",
    "insight": "NRG Energy, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 82.4% (Limit 30%)). Die Branche (Utilities - Independent Power Producers) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "NSC",
    "name": "Norfolk Southern Corporation",
    "sector": "Industrie",
    "industry": "Railroads",
    "price": "156,00 $",
    "change": "-0,4%",
    "up": false,
    "debt": "22.8%",
    "score": 86,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Railroads",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 22.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Norfolk Southern Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Railroads) ist zulässig, Verschuldung (22.8%) und Cash-Quote (1.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "NTAP",
    "name": "NetApp, Inc.",
    "sector": "Technologie",
    "industry": "Software - Infrastructure",
    "price": "248,61 $",
    "change": "+2,8%",
    "up": true,
    "debt": "7.8%",
    "score": 92,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Infrastructure",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 7.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 10.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "NetApp, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Infrastructure) ist zulässig, Verschuldung (7.8%) und Cash-Quote (10.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "NTRS",
    "name": "Northern Trust Corporation",
    "sector": "Finanzdienstleistungen",
    "industry": "Asset Management",
    "price": "113,01 $",
    "change": "-0,3%",
    "up": false,
    "debt": "0.0%",
    "score": 12,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Asset Management",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Northern Trust Corporation zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "NUE",
    "name": "Nucor Corporation",
    "sector": "Grundstoffe",
    "industry": "Steel",
    "price": "348,55 $",
    "change": "+0,8%",
    "up": true,
    "debt": "12.1%",
    "score": 91,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Steel",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 12.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Nucor Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Steel) ist zulässig, Verschuldung (12.1%) und Cash-Quote (4.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "NVDA",
    "name": "NVIDIA Corporation",
    "sector": "Technologie",
    "industry": "Semiconductors",
    "price": "221,04 $",
    "change": "-1,4%",
    "up": false,
    "debt": "0.3%",
    "score": 99,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Semiconductors",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "NVIDIA Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (0.3%) und Cash-Quote (1.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "NVR",
    "name": "NVR, Inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Residential Construction",
    "price": "257,49 $",
    "change": "+1,5%",
    "up": true,
    "debt": "6.4%",
    "score": 94,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Residential Construction",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 6.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 6.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "NVR, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Residential Construction) ist zulässig, Verschuldung (6.4%) und Cash-Quote (6.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "NWS",
    "name": "News Corporation",
    "sector": "Kommunikation",
    "industry": "Entertainment",
    "price": "323,76 $",
    "change": "+1,0%",
    "up": true,
    "debt": "17.3%",
    "score": 86,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Entertainment",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 17.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 12.9,
        "max": 30
      }
    ],
    "note": null,
    "insight": "News Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Entertainment) ist zulässig, Verschuldung (17.3%) und Cash-Quote (12.9%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "NWSA",
    "name": "News Corporation",
    "sector": "Kommunikation",
    "industry": "Entertainment",
    "price": "68,61 $",
    "change": "-0,6%",
    "up": false,
    "debt": "19.6%",
    "score": 84,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Entertainment",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 19.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 14.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "News Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Entertainment) ist zulässig, Verschuldung (19.6%) und Cash-Quote (14.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "NXPI",
    "name": "NXP Semiconductors N.V.",
    "sector": "Technologie",
    "industry": "Semiconductors",
    "price": "211,96 $",
    "change": "+2,1%",
    "up": true,
    "debt": "19.0%",
    "score": 87,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Semiconductors",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 19.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 5.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "NXP Semiconductors N.V. erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (19.0%) und Cash-Quote (5.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "O",
    "name": "Realty Income Corporation",
    "sector": "Immobilien",
    "industry": "REIT - Retail",
    "price": "117,02 $",
    "change": "+2,9%",
    "up": true,
    "debt": "50.9%",
    "score": 49,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Retail",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 50.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.7,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 50.9% (Limit 30%)",
    "insight": "Realty Income Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 50.9% (Limit 30%)). Die Branche (REIT - Retail) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "ODFL",
    "name": "Old Dominion Freight Line, Inc.",
    "sector": "Industrie",
    "industry": "Trucking",
    "price": "313,27 $",
    "change": "+1,8%",
    "up": true,
    "debt": "0.0%",
    "score": 99,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Trucking",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Old Dominion Freight Line, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Trucking) ist zulässig, Verschuldung (0.0%) und Cash-Quote (0.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "OKE",
    "name": "ONEOK, Inc.",
    "sector": "Energie",
    "industry": "Oil & Gas Midstream",
    "price": "60,25 $",
    "change": "+2,2%",
    "up": true,
    "debt": "58.8%",
    "score": 46,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Oil & Gas Midstream",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 58.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.3,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 58.8% (Limit 30%)",
    "insight": "ONEOK, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 58.8% (Limit 30%)). Die Branche (Oil & Gas Midstream) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "OMC",
    "name": "Omnicom Group Inc.",
    "sector": "Kommunikation",
    "industry": "Advertising Agencies",
    "price": "292,44 $",
    "change": "-2,7%",
    "up": false,
    "debt": "50.9%",
    "score": 49,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Advertising Agencies",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 50.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 14.9,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 50.9% (Limit 30%)",
    "insight": "Omnicom Group Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 50.9% (Limit 30%)). Die Branche (Advertising Agencies) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "ON",
    "name": "ON Semiconductor Corporation",
    "sector": "Technologie",
    "industry": "Semiconductors",
    "price": "289,32 $",
    "change": "-1,4%",
    "up": false,
    "debt": "10.2%",
    "score": 92,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Semiconductors",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 10.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 7.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "ON Semiconductor Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (10.2%) und Cash-Quote (7.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "ORCL",
    "name": "Oracle Corporation",
    "sector": "Technologie",
    "industry": "Software - Infrastructure",
    "price": "196,37 $",
    "change": "+1,1%",
    "up": true,
    "debt": "44.8%",
    "score": 51,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Infrastructure",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 44.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 8.5,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 44.8% (Limit 30%)",
    "insight": "Oracle Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 44.8% (Limit 30%)). Die Branche (Software - Infrastructure) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "ORLY",
    "name": "O'Reilly Automotive, Inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Auto Parts",
    "price": "365,68 $",
    "change": "+1,2%",
    "up": true,
    "debt": "13.1%",
    "score": 92,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Auto Parts",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 13.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "O'Reilly Automotive, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Auto Parts) ist zulässig, Verschuldung (13.1%) und Cash-Quote (0.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "OTIS",
    "name": "Otis Worldwide Corporation",
    "sector": "Industrie",
    "industry": "Specialty Industrial Machinery",
    "price": "69,31 $",
    "change": "+2,9%",
    "up": true,
    "debt": "32.3%",
    "score": 54,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Industrial Machinery",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 32.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.0,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 32.3% (Limit 30%)",
    "insight": "Otis Worldwide Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 32.3% (Limit 30%)). Die Branche (Specialty Industrial Machinery) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "OXY",
    "name": "Occidental Petroleum Corporatio",
    "sector": "Energie",
    "industry": "Oil & Gas E&P",
    "price": "155,47 $",
    "change": "+1,5%",
    "up": true,
    "debt": "29.3%",
    "score": 80,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Oil & Gas E&P",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 29.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 6.7,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Occidental Petroleum Corporatio erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas E&P) ist zulässig, Verschuldung (29.3%) und Cash-Quote (6.7%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "PANW",
    "name": "Palo Alto Networks, Inc.",
    "sector": "Technologie",
    "industry": "Software - Infrastructure",
    "price": "402,47 $",
    "change": "-2,6%",
    "up": false,
    "debt": "0.8%",
    "score": 99,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Infrastructure",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Palo Alto Networks, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Infrastructure) ist zulässig, Verschuldung (0.8%) und Cash-Quote (1.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "PAYX",
    "name": "Paychex, Inc.",
    "sector": "Technologie",
    "industry": "Software - Application",
    "price": "357,18 $",
    "change": "+0,9%",
    "up": true,
    "debt": "11.1%",
    "score": 92,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Application",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 11.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.8,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Paychex, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (11.1%) und Cash-Quote (2.8%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "PCAR",
    "name": "PACCAR Inc.",
    "sector": "Industrie",
    "industry": "Farm & Heavy Construction Machinery",
    "price": "64,81 $",
    "change": "-1,5%",
    "up": false,
    "debt": "21.2%",
    "score": 84,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Farm & Heavy Construction Machinery",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 21.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 12.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "PACCAR Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Farm & Heavy Construction Machinery) ist zulässig, Verschuldung (21.2%) und Cash-Quote (12.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "PCG",
    "name": "Pacific Gas & Electric Co.",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Electric",
    "price": "152,21 $",
    "change": "+0,5%",
    "up": true,
    "debt": "169.0%",
    "score": 15,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Electric",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 169.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.5,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 169.0% (Limit 30%)",
    "insight": "Pacific Gas & Electric Co. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 169.0% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "PEG",
    "name": "Public Service Enterprise Group",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Electric",
    "price": "310,46 $",
    "change": "-0,4%",
    "up": false,
    "debt": "63.9%",
    "score": 45,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Electric",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 63.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.1,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 63.9% (Limit 30%)",
    "insight": "Public Service Enterprise Group überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 63.9% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "PEP",
    "name": "Pepsico, Inc.",
    "sector": "Konsumgüter (Basis)",
    "industry": "Beverages - Non-Alcoholic",
    "price": "172,81 $",
    "change": "+1,4%",
    "up": true,
    "debt": "27.9%",
    "score": 82,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Beverages - Non-Alcoholic",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 27.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 5.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Pepsico, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Beverages - Non-Alcoholic) ist zulässig, Verschuldung (27.9%) und Cash-Quote (5.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "PFE",
    "name": "Pfizer, Inc.",
    "sector": "Gesundheit",
    "industry": "Drug Manufacturers - General",
    "price": "150,60 $",
    "change": "-2,4%",
    "up": false,
    "debt": "45.4%",
    "score": 50,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Drug Manufacturers - General",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 45.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 9.2,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 45.4% (Limit 30%)",
    "insight": "Pfizer, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 45.4% (Limit 30%)). Die Branche (Drug Manufacturers - General) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "PFG",
    "name": "Principal Financial Group Inc",
    "sector": "Finanzdienstleistungen",
    "industry": "Asset Management",
    "price": "389,56 $",
    "change": "+2,4%",
    "up": true,
    "debt": "0.0%",
    "score": 6,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Asset Management",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Principal Financial Group Inc zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "PG",
    "name": "Procter & Gamble Company (The)",
    "sector": "Konsumgüter (Basis)",
    "industry": "Household & Personal Products",
    "price": "296,33 $",
    "change": "-3,0%",
    "up": false,
    "debt": "10.1%",
    "score": 93,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Household & Personal Products",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 10.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Procter & Gamble Company (The) erfüllt aktuell alle geprüften Kriterien: Die Branche (Household & Personal Products) ist zulässig, Verschuldung (10.1%) und Cash-Quote (3.0%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "PGR",
    "name": "Progressive Corporation (The)",
    "sector": "Finanzdienstleistungen",
    "industry": "Insurance - Property & Casualty",
    "price": "186,00 $",
    "change": "+2,7%",
    "up": true,
    "debt": "0.0%",
    "score": 8,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Insurance - Property & Casualty",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Progressive Corporation (The) zählt zur ausgeschlossenen Branche Insurance - Property & Casualty und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "PH",
    "name": "Parker-Hannifin Corporation",
    "sector": "Industrie",
    "industry": "Specialty Industrial Machinery",
    "price": "401,42 $",
    "change": "-1,7%",
    "up": false,
    "debt": "7.8%",
    "score": 95,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Industrial Machinery",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 7.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Parker-Hannifin Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (7.8%) und Cash-Quote (0.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "PHM",
    "name": "PulteGroup, Inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Residential Construction",
    "price": "149,46 $",
    "change": "+2,6%",
    "up": true,
    "debt": "10.3%",
    "score": 92,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Residential Construction",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 10.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 5.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "PulteGroup, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Residential Construction) ist zulässig, Verschuldung (10.3%) und Cash-Quote (5.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "PKG",
    "name": "Packaging Corporation of Americ",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Packaging & Containers",
    "price": "50,56 $",
    "change": "+0,8%",
    "up": true,
    "debt": "19.9%",
    "score": 87,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Packaging & Containers",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 19.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.5,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Packaging Corporation of Americ erfüllt aktuell alle geprüften Kriterien: Die Branche (Packaging & Containers) ist zulässig, Verschuldung (19.9%) und Cash-Quote (2.5%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "PLD",
    "name": "Prologis, Inc.",
    "sector": "Immobilien",
    "industry": "REIT - Industrial",
    "price": "228,54 $",
    "change": "-1,8%",
    "up": false,
    "debt": "26.9%",
    "score": 83,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Industrial",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 26.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.3,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Prologis, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (REIT - Industrial) ist zulässig, Verschuldung (26.9%) und Cash-Quote (1.3%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "PLTR",
    "name": "Palantir Technologies Inc.",
    "sector": "Technologie",
    "industry": "Software - Infrastructure",
    "price": "371,77 $",
    "change": "+1,5%",
    "up": true,
    "debt": "0.1%",
    "score": 99,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Infrastructure",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.7,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Palantir Technologies Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Infrastructure) ist zulässig, Verschuldung (0.1%) und Cash-Quote (2.7%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "PM",
    "name": "Philip Morris International Inc",
    "sector": "Konsumgüter (Basis)",
    "industry": "Tobacco",
    "price": "188,41 $",
    "change": "+1,1%",
    "up": true,
    "debt": "0.0%",
    "score": 12,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Tobacco",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Philip Morris International Inc zählt zur ausgeschlossenen Branche Tobacco und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "PNC",
    "name": "PNC Financial Services Group, I",
    "sector": "Finanzdienstleistungen",
    "industry": "Banks - Regional",
    "price": "359,42 $",
    "change": "-0,5%",
    "up": false,
    "debt": "0.0%",
    "score": 10,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Banks - Regional",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "PNC Financial Services Group, I zählt zur ausgeschlossenen Branche Banks - Regional und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "PNR",
    "name": "Pentair plc.",
    "sector": "Industrie",
    "industry": "Specialty Industrial Machinery",
    "price": "117,24 $",
    "change": "+2,9%",
    "up": true,
    "debt": "16.7%",
    "score": 90,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Industrial Machinery",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 16.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.9,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Pentair plc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (16.7%) und Cash-Quote (0.9%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "PNW",
    "name": "Pinnacle West Capital Corporati",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Electric",
    "price": "42,69 $",
    "change": "+1,1%",
    "up": true,
    "debt": "123.7%",
    "score": 27,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Electric",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 123.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.1,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 123.7% (Limit 30%)",
    "insight": "Pinnacle West Capital Corporati überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 123.7% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "PODD",
    "name": "Insulet Corporation",
    "sector": "Gesundheit",
    "industry": "Medical Devices",
    "price": "108,28 $",
    "change": "-3,0%",
    "up": false,
    "debt": "8.9%",
    "score": 93,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Medical Devices",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 8.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Insulet Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Devices) ist zulässig, Verschuldung (8.9%) und Cash-Quote (4.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "PPG",
    "name": "PPG Industries, Inc.",
    "sector": "Grundstoffe",
    "industry": "Specialty Chemicals",
    "price": "341,94 $",
    "change": "-0,4%",
    "up": false,
    "debt": "30.4%",
    "score": 55,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Chemicals",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 30.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 6.5,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 30.4% (Limit 30%)",
    "insight": "PPG Industries, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 30.4% (Limit 30%)). Die Branche (Specialty Chemicals) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "PPL",
    "name": "PPL Corporation",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Electric",
    "price": "249,94 $",
    "change": "-0,7%",
    "up": false,
    "debt": "76.6%",
    "score": 41,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Electric",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 76.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.7,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 76.6% (Limit 30%)",
    "insight": "PPL Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 76.6% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "PRU",
    "name": "Prudential Financial, Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Insurance - Life",
    "price": "35,46 $",
    "change": "-1,4%",
    "up": false,
    "debt": "0.0%",
    "score": 12,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Insurance - Life",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Prudential Financial, Inc. zählt zur ausgeschlossenen Branche Insurance - Life und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "PSA",
    "name": "Public Storage",
    "sector": "Immobilien",
    "industry": "REIT - Industrial",
    "price": "386,71 $",
    "change": "+1,4%",
    "up": true,
    "debt": "16.8%",
    "score": 90,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Industrial",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 16.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Public Storage erfüllt aktuell alle geprüften Kriterien: Die Branche (REIT - Industrial) ist zulässig, Verschuldung (16.8%) und Cash-Quote (0.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "PSKY",
    "name": "Paramount Skydance Corporation",
    "sector": "Kommunikation",
    "industry": "Entertainment",
    "price": "78,31 $",
    "change": "-2,4%",
    "up": false,
    "debt": "186.3%",
    "score": 15,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Entertainment",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 186.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 21.8,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 186.3% (Limit 30%)",
    "insight": "Paramount Skydance Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 186.3% (Limit 30%)). Die Branche (Entertainment) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "PSX",
    "name": "Phillips 66",
    "sector": "Energie",
    "industry": "Oil & Gas Refining & Marketing",
    "price": "155,90 $",
    "change": "+1,8%",
    "up": true,
    "debt": "32.0%",
    "score": 54,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Oil & Gas Refining & Marketing",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 32.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 6.1,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 32.0% (Limit 30%)",
    "insight": "Phillips 66 überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 32.0% (Limit 30%)). Die Branche (Oil & Gas Refining & Marketing) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "PTC",
    "name": "PTC Inc.",
    "sector": "Technologie",
    "industry": "Software - Application",
    "price": "124,24 $",
    "change": "+2,5%",
    "up": true,
    "debt": "10.1%",
    "score": 93,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Application",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 10.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "PTC Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (10.1%) und Cash-Quote (2.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "PWR",
    "name": "Quanta Services, Inc.",
    "sector": "Industrie",
    "industry": "Engineering & Construction",
    "price": "368,53 $",
    "change": "-2,6%",
    "up": false,
    "debt": "6.6%",
    "score": 96,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Engineering & Construction",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 6.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.5,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Quanta Services, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Engineering & Construction) ist zulässig, Verschuldung (6.6%) und Cash-Quote (0.5%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "PYPL",
    "name": "PayPal Holdings, Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Credit Services",
    "price": "221,35 $",
    "change": "-1,7%",
    "up": false,
    "debt": "0.0%",
    "score": 10,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Credit Services",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "PayPal Holdings, Inc. zählt zur ausgeschlossenen Branche Credit Services und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "Q",
    "name": "Qnity Electronics, Inc.",
    "sector": "Technologie",
    "industry": "Semiconductor Equipment & Materials",
    "price": "154,78 $",
    "change": "-2,0%",
    "up": false,
    "debt": "16.5%",
    "score": 89,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Semiconductor Equipment & Materials",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 16.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Qnity Electronics, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductor Equipment & Materials) ist zulässig, Verschuldung (16.5%) und Cash-Quote (3.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "QCOM",
    "name": "QUALCOMM Incorporated",
    "sector": "Technologie",
    "industry": "Semiconductors",
    "price": "379,41 $",
    "change": "+1,5%",
    "up": true,
    "debt": "9.9%",
    "score": 92,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Semiconductors",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 9.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 5.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "QUALCOMM Incorporated erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (9.9%) und Cash-Quote (5.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "RCL",
    "name": "Royal Caribbean Cruises Ltd.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Travel Services",
    "price": "400,62 $",
    "change": "+0,2%",
    "up": true,
    "debt": "27.6%",
    "score": 83,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Travel Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 27.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Royal Caribbean Cruises Ltd. erfüllt aktuell alle geprüften Kriterien: Die Branche (Travel Services) ist zulässig, Verschuldung (27.6%) und Cash-Quote (1.0%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "REG",
    "name": "Regency Centers Corporation",
    "sector": "Immobilien",
    "industry": "REIT - Retail",
    "price": "28,33 $",
    "change": "-1,2%",
    "up": false,
    "debt": "34.3%",
    "score": 54,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Retail",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 34.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.3,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 34.3% (Limit 30%)",
    "insight": "Regency Centers Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 34.3% (Limit 30%)). Die Branche (REIT - Retail) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "REGN",
    "name": "Regeneron Pharmaceuticals, Inc.",
    "sector": "Gesundheit",
    "industry": "Biotechnology",
    "price": "172,37 $",
    "change": "-1,5%",
    "up": false,
    "debt": "3.4%",
    "score": 95,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Biotechnology",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 3.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 10.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Regeneron Pharmaceuticals, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Biotechnology) ist zulässig, Verschuldung (3.4%) und Cash-Quote (10.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "RF",
    "name": "Regions Financial Corporation",
    "sector": "Finanzdienstleistungen",
    "industry": "Banks - Regional",
    "price": "345,38 $",
    "change": "-1,7%",
    "up": false,
    "debt": "0.0%",
    "score": 7,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Banks - Regional",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Regions Financial Corporation zählt zur ausgeschlossenen Branche Banks - Regional und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "RJF",
    "name": "Raymond James Financial, Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Asset Management",
    "price": "145,08 $",
    "change": "+0,6%",
    "up": true,
    "debt": "0.0%",
    "score": 11,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Asset Management",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Raymond James Financial, Inc. zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "RL",
    "name": "Ralph Lauren Corporation",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Apparel Manufacturing",
    "price": "268,99 $",
    "change": "+0,3%",
    "up": true,
    "debt": "13.3%",
    "score": 89,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Apparel Manufacturing",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 13.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 9.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Ralph Lauren Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Apparel Manufacturing) ist zulässig, Verschuldung (13.3%) und Cash-Quote (9.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "RMD",
    "name": "ResMed Inc.",
    "sector": "Gesundheit",
    "industry": "Medical Instruments & Supplies",
    "price": "91,10 $",
    "change": "-2,9%",
    "up": false,
    "debt": "2.8%",
    "score": 97,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Medical Instruments & Supplies",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 2.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 5.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "ResMed Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Instruments & Supplies) ist zulässig, Verschuldung (2.8%) und Cash-Quote (5.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "ROK",
    "name": "Rockwell Automation, Inc.",
    "sector": "Industrie",
    "industry": "Specialty Industrial Machinery",
    "price": "161,23 $",
    "change": "+1,7%",
    "up": true,
    "debt": "7.6%",
    "score": 95,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Industrial Machinery",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 7.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.8,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Rockwell Automation, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (7.6%) und Cash-Quote (0.8%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "ROL",
    "name": "Rollins, Inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Personal Services",
    "price": "406,23 $",
    "change": "-3,0%",
    "up": false,
    "debt": "6.1%",
    "score": 96,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Personal Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 6.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Rollins, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Personal Services) ist zulässig, Verschuldung (6.1%) und Cash-Quote (0.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "ROP",
    "name": "Roper Technologies, Inc.",
    "sector": "Technologie",
    "industry": "Software - Application",
    "price": "357,80 $",
    "change": "-2,5%",
    "up": false,
    "debt": "29.2%",
    "score": 82,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Application",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 29.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.9,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Roper Technologies, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (29.2%) und Cash-Quote (0.9%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "ROST",
    "name": "Ross Stores, Inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Apparel Retail",
    "price": "387,73 $",
    "change": "-1,6%",
    "up": false,
    "debt": "5.9%",
    "score": 95,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Apparel Retail",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 5.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 5.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Ross Stores, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Apparel Retail) ist zulässig, Verschuldung (5.9%) und Cash-Quote (5.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "RSG",
    "name": "Republic Services, Inc.",
    "sector": "Industrie",
    "industry": "Waste Management",
    "price": "365,98 $",
    "change": "+2,4%",
    "up": true,
    "debt": "21.7%",
    "score": 87,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Waste Management",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 21.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Republic Services, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Waste Management) ist zulässig, Verschuldung (21.7%) und Cash-Quote (0.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "RTX",
    "name": "RTX Corporation",
    "sector": "Industrie",
    "industry": "Aerospace & Defense",
    "price": "215,01 $",
    "change": "+2,0%",
    "up": true,
    "debt": "0.0%",
    "score": 9,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Aerospace & Defense",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "RTX Corporation zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "RVTY",
    "name": "Revvity, Inc.",
    "sector": "Gesundheit",
    "industry": "Diagnostics & Research",
    "price": "33,42 $",
    "change": "-1,1%",
    "up": false,
    "debt": "26.7%",
    "score": 82,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Diagnostics & Research",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 26.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 6.9,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Revvity, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Diagnostics & Research) ist zulässig, Verschuldung (26.7%) und Cash-Quote (6.9%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "SBAC",
    "name": "SBA Communications Corporation",
    "sector": "Immobilien",
    "industry": "REIT - Specialty",
    "price": "315,63 $",
    "change": "-0,5%",
    "up": false,
    "debt": "80.3%",
    "score": 40,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Specialty",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 80.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.4,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 80.3% (Limit 30%)",
    "insight": "SBA Communications Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 80.3% (Limit 30%)). Die Branche (REIT - Specialty) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "SBUX",
    "name": "Starbucks Corporation",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Restaurants",
    "price": "398,46 $",
    "change": "-1,5%",
    "up": false,
    "debt": "18.7%",
    "score": 88,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Restaurants",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 18.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Starbucks Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Restaurants) ist zulässig, Verschuldung (18.7%) und Cash-Quote (3.0%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "SCHW",
    "name": "Charles Schwab Corporation (The",
    "sector": "Finanzdienstleistungen",
    "industry": "Capital Markets",
    "price": "270,12 $",
    "change": "-2,7%",
    "up": false,
    "debt": "0.0%",
    "score": 14,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Capital Markets",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Charles Schwab Corporation (The zählt zur ausgeschlossenen Branche Capital Markets und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "SHW",
    "name": "Sherwin-Williams Company (The)",
    "sector": "Grundstoffe",
    "industry": "Specialty Chemicals",
    "price": "217,61 $",
    "change": "-0,5%",
    "up": false,
    "debt": "18.2%",
    "score": 89,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Chemicals",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 18.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Sherwin-Williams Company (The) erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Chemicals) ist zulässig, Verschuldung (18.2%) und Cash-Quote (0.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "SJM",
    "name": "The J.M. Smucker Company",
    "sector": "Konsumgüter (Basis)",
    "industry": "Packaged Foods",
    "price": "255,23 $",
    "change": "+2,0%",
    "up": true,
    "debt": "55.9%",
    "score": 47,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Packaged Foods",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 55.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.5,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 55.9% (Limit 30%)",
    "insight": "The J.M. Smucker Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 55.9% (Limit 30%)). Die Branche (Packaged Foods) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "SLB",
    "name": "SLB Limited",
    "sector": "Energie",
    "industry": "Oil & Gas Equipment & Services",
    "price": "229,83 $",
    "change": "+1,5%",
    "up": true,
    "debt": "17.4%",
    "score": 88,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Oil & Gas Equipment & Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 17.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 5.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "SLB Limited erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas Equipment & Services) ist zulässig, Verschuldung (17.4%) und Cash-Quote (5.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "SMCI",
    "name": "Super Micro Computer, Inc.",
    "sector": "Technologie",
    "industry": "Computer Hardware",
    "price": "367,96 $",
    "change": "+0,4%",
    "up": true,
    "debt": "49.8%",
    "score": 49,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Computer Hardware",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 49.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 7.1,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 49.8% (Limit 30%)",
    "insight": "Super Micro Computer, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 49.8% (Limit 30%)). Die Branche (Computer Hardware) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "SNA",
    "name": "Snap-On Incorporated",
    "sector": "Industrie",
    "industry": "Tools & Accessories",
    "price": "106,36 $",
    "change": "-1,8%",
    "up": false,
    "debt": "6.2%",
    "score": 94,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Tools & Accessories",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 6.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 7.7,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Snap-On Incorporated erfüllt aktuell alle geprüften Kriterien: Die Branche (Tools & Accessories) ist zulässig, Verschuldung (6.2%) und Cash-Quote (7.7%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "SNDK",
    "name": "Sandisk Corporation",
    "sector": "Technologie",
    "industry": "Computer Hardware",
    "price": "66,70 $",
    "change": "+0,2%",
    "up": true,
    "debt": "0.1%",
    "score": 99,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Computer Hardware",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Sandisk Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Computer Hardware) ist zulässig, Verschuldung (0.1%) und Cash-Quote (2.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "SNPS",
    "name": "Synopsys, Inc.",
    "sector": "Technologie",
    "industry": "Software - Infrastructure",
    "price": "177,48 $",
    "change": "-0,5%",
    "up": false,
    "debt": "14.6%",
    "score": 90,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Infrastructure",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 14.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.3,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Synopsys, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Infrastructure) ist zulässig, Verschuldung (14.6%) und Cash-Quote (3.3%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "SO",
    "name": "Southern Company (The)",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Electric",
    "price": "196,00 $",
    "change": "+0,4%",
    "up": true,
    "debt": "70.9%",
    "score": 43,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Electric",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 70.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.7,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 70.9% (Limit 30%)",
    "insight": "Southern Company (The) überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 70.9% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "SOLV",
    "name": "Solventum Corporation",
    "sector": "Gesundheit",
    "industry": "Medical Instruments & Supplies",
    "price": "207,11 $",
    "change": "-1,1%",
    "up": false,
    "debt": "35.8%",
    "score": 53,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Medical Instruments & Supplies",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 35.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.8,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 35.8% (Limit 30%)",
    "insight": "Solventum Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 35.8% (Limit 30%)). Die Branche (Medical Instruments & Supplies) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "SPG",
    "name": "Simon Property Group, Inc.",
    "sector": "Immobilien",
    "industry": "REIT - Retail",
    "price": "305,10 $",
    "change": "-1,4%",
    "up": false,
    "debt": "33.3%",
    "score": 54,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Retail",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 33.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.6,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 33.3% (Limit 30%)",
    "insight": "Simon Property Group, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 33.3% (Limit 30%)). Die Branche (REIT - Retail) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "SPGI",
    "name": "S&P Global Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Financial Data & Stock Exchanges",
    "price": "76,00 $",
    "change": "+2,7%",
    "up": true,
    "debt": "0.0%",
    "score": 12,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Financial Data & Stock Exchanges",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "S&P Global Inc. zählt zur ausgeschlossenen Branche Financial Data & Stock Exchanges und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "SRE",
    "name": "DBA Sempra",
    "sector": "Versorger",
    "industry": "Utilities - Diversified",
    "price": "139,31 $",
    "change": "+0,0%",
    "up": true,
    "debt": "62.9%",
    "score": 45,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Diversified",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 62.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.4,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 62.9% (Limit 30%)",
    "insight": "DBA Sempra überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 62.9% (Limit 30%)). Die Branche (Utilities - Diversified) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "STE",
    "name": "STERIS plc (Ireland)",
    "sector": "Gesundheit",
    "industry": "Medical Devices",
    "price": "295,95 $",
    "change": "+2,4%",
    "up": true,
    "debt": "9.4%",
    "score": 94,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Medical Devices",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 9.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "STERIS plc (Ireland) erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Devices) ist zulässig, Verschuldung (9.4%) und Cash-Quote (2.0%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "STLD",
    "name": "Steel Dynamics, Inc.",
    "sector": "Grundstoffe",
    "industry": "Steel",
    "price": "91,97 $",
    "change": "+2,4%",
    "up": true,
    "debt": "12.2%",
    "score": 92,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Steel",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 12.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Steel Dynamics, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Steel) ist zulässig, Verschuldung (12.2%) und Cash-Quote (1.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "STT",
    "name": "State Street Corporation",
    "sector": "Finanzdienstleistungen",
    "industry": "Asset Management",
    "price": "216,95 $",
    "change": "+2,9%",
    "up": true,
    "debt": "0.0%",
    "score": 6,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Asset Management",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "State Street Corporation zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "STX",
    "name": "Seagate Technology Holdings PLC",
    "sector": "Technologie",
    "industry": "Computer Hardware",
    "price": "215,65 $",
    "change": "-0,5%",
    "up": false,
    "debt": "1.8%",
    "score": 99,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Computer Hardware",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 1.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.9,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Seagate Technology Holdings PLC erfüllt aktuell alle geprüften Kriterien: Die Branche (Computer Hardware) ist zulässig, Verschuldung (1.8%) und Cash-Quote (0.9%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "STZ",
    "name": "Constellation Brands, Inc.",
    "sector": "Konsumgüter (Basis)",
    "industry": "Beverages - Brewers",
    "price": "194,43 $",
    "change": "+1,6%",
    "up": true,
    "debt": "0.0%",
    "score": 12,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Beverages - Brewers",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Constellation Brands, Inc. zählt zur ausgeschlossenen Branche Beverages - Brewers und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "SW",
    "name": "Smurfit WestRock plc",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Packaging & Containers",
    "price": "62,07 $",
    "change": "+2,4%",
    "up": true,
    "debt": "58.7%",
    "score": 46,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Packaging & Containers",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 58.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.8,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 58.7% (Limit 30%)",
    "insight": "Smurfit WestRock plc überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 58.7% (Limit 30%)). Die Branche (Packaging & Containers) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "SWK",
    "name": "Stanley Black & Decker, Inc.",
    "sector": "Industrie",
    "industry": "Tools & Accessories",
    "price": "331,99 $",
    "change": "+0,4%",
    "up": true,
    "debt": "36.5%",
    "score": 53,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Tools & Accessories",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 36.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.1,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 36.5% (Limit 30%)",
    "insight": "Stanley Black & Decker, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 36.5% (Limit 30%)). Die Branche (Tools & Accessories) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "SWKS",
    "name": "Skyworks Solutions, Inc.",
    "sector": "Technologie",
    "industry": "Semiconductors",
    "price": "351,85 $",
    "change": "-1,0%",
    "up": false,
    "debt": "7.3%",
    "score": 93,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Semiconductors",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 7.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 8.5,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Skyworks Solutions, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (7.3%) und Cash-Quote (8.5%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "SYF",
    "name": "Synchrony Financial",
    "sector": "Finanzdienstleistungen",
    "industry": "Credit Services",
    "price": "241,95 $",
    "change": "+2,7%",
    "up": true,
    "debt": "0.0%",
    "score": 7,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Credit Services",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Synchrony Financial zählt zur ausgeschlossenen Branche Credit Services und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "SYK",
    "name": "Stryker Corporation",
    "sector": "Gesundheit",
    "industry": "Medical Devices",
    "price": "210,17 $",
    "change": "+1,0%",
    "up": true,
    "debt": "11.4%",
    "score": 92,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Medical Devices",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 11.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.8,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Stryker Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Devices) ist zulässig, Verschuldung (11.4%) und Cash-Quote (2.8%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "SYY",
    "name": "Sysco Corporation",
    "sector": "Konsumgüter (Basis)",
    "industry": "Food Distribution",
    "price": "309,62 $",
    "change": "-1,6%",
    "up": false,
    "debt": "37.7%",
    "score": 53,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Food Distribution",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 37.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.7,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 37.7% (Limit 30%)",
    "insight": "Sysco Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 37.7% (Limit 30%)). Die Branche (Food Distribution) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "T",
    "name": "AT&T Inc.",
    "sector": "Kommunikation",
    "industry": "Telecom Services",
    "price": "86,03 $",
    "change": "+0,1%",
    "up": true,
    "debt": "104.0%",
    "score": 33,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Telecom Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 104.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 11.0,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 104.0% (Limit 30%)",
    "insight": "AT&T Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 104.0% (Limit 30%)). Die Branche (Telecom Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "TAP",
    "name": "Molson Coors Beverage Company",
    "sector": "Konsumgüter (Basis)",
    "industry": "Beverages - Brewers",
    "price": "53,58 $",
    "change": "+2,1%",
    "up": true,
    "debt": "0.0%",
    "score": 14,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Beverages - Brewers",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Molson Coors Beverage Company zählt zur ausgeschlossenen Branche Beverages - Brewers und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "TDG",
    "name": "Transdigm Group Incorporated",
    "sector": "Industrie",
    "industry": "Aerospace & Defense",
    "price": "271,40 $",
    "change": "+0,1%",
    "up": true,
    "debt": "0.0%",
    "score": 8,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Aerospace & Defense",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Transdigm Group Incorporated zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "TDY",
    "name": "Teledyne Technologies Incorpora",
    "sector": "Technologie",
    "industry": "Scientific & Technical Instruments",
    "price": "376,60 $",
    "change": "+1,1%",
    "up": true,
    "debt": "6.7%",
    "score": 96,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Scientific & Technical Instruments",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 6.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Teledyne Technologies Incorpora erfüllt aktuell alle geprüften Kriterien: Die Branche (Scientific & Technical Instruments) ist zulässig, Verschuldung (6.7%) und Cash-Quote (1.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "TECH",
    "name": "Bio-Techne Corp",
    "sector": "Gesundheit",
    "industry": "Biotechnology",
    "price": "288,12 $",
    "change": "-1,0%",
    "up": false,
    "debt": "2.6%",
    "score": 98,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Biotechnology",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 2.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.9,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Bio-Techne Corp erfüllt aktuell alle geprüften Kriterien: Die Branche (Biotechnology) ist zulässig, Verschuldung (2.6%) und Cash-Quote (1.9%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "TEL",
    "name": "TE Connectivity plc",
    "sector": "Technologie",
    "industry": "Electronic Components",
    "price": "180,86 $",
    "change": "-2,0%",
    "up": false,
    "debt": "9.8%",
    "score": 93,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Electronic Components",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 9.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "TE Connectivity plc erfüllt aktuell alle geprüften Kriterien: Die Branche (Electronic Components) ist zulässig, Verschuldung (9.8%) und Cash-Quote (2.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "TER",
    "name": "Teradyne, Inc.",
    "sector": "Technologie",
    "industry": "Semiconductor Equipment & Materials",
    "price": "188,32 $",
    "change": "-1,5%",
    "up": false,
    "debt": "0.2%",
    "score": 99,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Semiconductor Equipment & Materials",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Teradyne, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductor Equipment & Materials) ist zulässig, Verschuldung (0.2%) und Cash-Quote (0.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "TFC",
    "name": "Truist Financial Corporation",
    "sector": "Finanzdienstleistungen",
    "industry": "Banks - Regional",
    "price": "404,34 $",
    "change": "+1,0%",
    "up": true,
    "debt": "0.0%",
    "score": 6,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Banks - Regional",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Truist Financial Corporation zählt zur ausgeschlossenen Branche Banks - Regional und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "TGT",
    "name": "Target Corporation",
    "sector": "Konsumgüter (Basis)",
    "industry": "Discount Stores",
    "price": "184,25 $",
    "change": "+1,0%",
    "up": true,
    "debt": "29.4%",
    "score": 81,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Discount Stores",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 29.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 5.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Target Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Discount Stores) ist zulässig, Verschuldung (29.4%) und Cash-Quote (5.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "TJX",
    "name": "TJX Companies, Inc. (The)",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Apparel Retail",
    "price": "273,64 $",
    "change": "-1,9%",
    "up": false,
    "debt": "8.2%",
    "score": 94,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Apparel Retail",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 8.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "TJX Companies, Inc. (The) erfüllt aktuell alle geprüften Kriterien: Die Branche (Apparel Retail) ist zulässig, Verschuldung (8.2%) und Cash-Quote (3.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "TKO",
    "name": "TKO Group Holdings, Inc.",
    "sector": "Kommunikation",
    "industry": "Entertainment",
    "price": "286,56 $",
    "change": "-0,6%",
    "up": false,
    "debt": "14.3%",
    "score": 91,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Entertainment",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 14.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.3,
        "max": 30
      }
    ],
    "note": null,
    "insight": "TKO Group Holdings, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Entertainment) ist zulässig, Verschuldung (14.3%) und Cash-Quote (2.3%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "TMO",
    "name": "Thermo Fisher Scientific Inc",
    "sector": "Gesundheit",
    "industry": "Diagnostics & Research",
    "price": "175,85 $",
    "change": "+1,3%",
    "up": true,
    "debt": "19.9%",
    "score": 87,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Diagnostics & Research",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 19.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.9,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Thermo Fisher Scientific Inc erfüllt aktuell alle geprüften Kriterien: Die Branche (Diagnostics & Research) ist zulässig, Verschuldung (19.9%) und Cash-Quote (1.9%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "TMUS",
    "name": "T-Mobile US, Inc.",
    "sector": "Kommunikation",
    "industry": "Telecom Services",
    "price": "114,21 $",
    "change": "+0,7%",
    "up": true,
    "debt": "65.0%",
    "score": 44,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Telecom Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 65.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.5,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 65.0% (Limit 30%)",
    "insight": "T-Mobile US, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 65.0% (Limit 30%)). Die Branche (Telecom Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "TPL",
    "name": "Texas Pacific Land Corporation",
    "sector": "Energie",
    "industry": "Oil & Gas E&P",
    "price": "93,74 $",
    "change": "-0,8%",
    "up": false,
    "debt": "0.1%",
    "score": 99,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Oil & Gas E&P",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.9,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Texas Pacific Land Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas E&P) ist zulässig, Verschuldung (0.1%) und Cash-Quote (0.9%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "TPR",
    "name": "Tapestry, Inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Luxury Goods",
    "price": "341,93 $",
    "change": "+1,0%",
    "up": true,
    "debt": "12.7%",
    "score": 91,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Luxury Goods",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 12.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.5,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Tapestry, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Luxury Goods) ist zulässig, Verschuldung (12.7%) und Cash-Quote (3.5%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "TRGP",
    "name": "Targa Resources, Inc.",
    "sector": "Energie",
    "industry": "Oil & Gas Midstream",
    "price": "289,47 $",
    "change": "-0,8%",
    "up": false,
    "debt": "33.0%",
    "score": 54,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Oil & Gas Midstream",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 33.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.2,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 33.0% (Limit 30%)",
    "insight": "Targa Resources, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 33.0% (Limit 30%)). Die Branche (Oil & Gas Midstream) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "TRMB",
    "name": "Trimble Inc.",
    "sector": "Technologie",
    "industry": "Scientific & Technical Instruments",
    "price": "127,92 $",
    "change": "+1,3%",
    "up": true,
    "debt": "10.7%",
    "score": 93,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Scientific & Technical Instruments",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 10.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.8,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Trimble Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Scientific & Technical Instruments) ist zulässig, Verschuldung (10.7%) und Cash-Quote (1.8%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "TROW",
    "name": "T. Rowe Price Group, Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Asset Management",
    "price": "232,78 $",
    "change": "-0,9%",
    "up": false,
    "debt": "0.0%",
    "score": 7,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Asset Management",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "T. Rowe Price Group, Inc. zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "TRV",
    "name": "The Travelers Companies, Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Insurance - Property & Casualty",
    "price": "357,36 $",
    "change": "-1,9%",
    "up": false,
    "debt": "0.0%",
    "score": 7,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Insurance - Property & Casualty",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "The Travelers Companies, Inc. zählt zur ausgeschlossenen Branche Insurance - Property & Casualty und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "TSCO",
    "name": "Tractor Supply Company",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Specialty Retail",
    "price": "198,89 $",
    "change": "-1,4%",
    "up": false,
    "debt": "40.6%",
    "score": 52,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Retail",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 40.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.4,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 40.6% (Limit 30%)",
    "insight": "Tractor Supply Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 40.6% (Limit 30%)). Die Branche (Specialty Retail) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "TSLA",
    "name": "Tesla, Inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Auto Manufacturers",
    "price": "336,63 $",
    "change": "+1,7%",
    "up": true,
    "debt": "1.3%",
    "score": 98,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Auto Manufacturers",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 1.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.5,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Tesla, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Auto Manufacturers) ist zulässig, Verschuldung (1.3%) und Cash-Quote (3.5%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "TSN",
    "name": "Tyson Foods, Inc.",
    "sector": "Konsumgüter (Basis)",
    "industry": "Farm Products",
    "price": "378,19 $",
    "change": "+0,7%",
    "up": true,
    "debt": "39.6%",
    "score": 52,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Farm Products",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 39.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.4,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 39.6% (Limit 30%)",
    "insight": "Tyson Foods, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 39.6% (Limit 30%)). Die Branche (Farm Products) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "TT",
    "name": "Trane Technologies plc",
    "sector": "Industrie",
    "industry": "Building Products & Equipment",
    "price": "321,31 $",
    "change": "-0,8%",
    "up": false,
    "debt": "4.6%",
    "score": 97,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Building Products & Equipment",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 4.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.3,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Trane Technologies plc erfüllt aktuell alle geprüften Kriterien: Die Branche (Building Products & Equipment) ist zulässig, Verschuldung (4.6%) und Cash-Quote (1.3%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "TTD",
    "name": "The Trade Desk, Inc.",
    "sector": "Kommunikation",
    "industry": "Advertising Agencies",
    "price": "100,15 $",
    "change": "-0,7%",
    "up": false,
    "debt": "5.0%",
    "score": 92,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Advertising Agencies",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 5.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 16.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "The Trade Desk, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Advertising Agencies) ist zulässig, Verschuldung (5.0%) und Cash-Quote (16.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "TTWO",
    "name": "Take-Two Interactive Software,",
    "sector": "Kommunikation",
    "industry": "Electronic Gaming & Multimedia",
    "price": "379,59 $",
    "change": "+2,1%",
    "up": true,
    "debt": "6.5%",
    "score": 95,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Electronic Gaming & Multimedia",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 6.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Take-Two Interactive Software, erfüllt aktuell alle geprüften Kriterien: Die Branche (Electronic Gaming & Multimedia) ist zulässig, Verschuldung (6.5%) und Cash-Quote (4.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "TXN",
    "name": "Texas Instruments Incorporated",
    "sector": "Technologie",
    "industry": "Semiconductors",
    "price": "119,82 $",
    "change": "+0,1%",
    "up": true,
    "debt": "5.6%",
    "score": 96,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Semiconductors",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 5.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.8,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Texas Instruments Incorporated erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (5.6%) und Cash-Quote (2.8%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "TXT",
    "name": "Textron Inc.",
    "sector": "Industrie",
    "industry": "Aerospace & Defense",
    "price": "380,35 $",
    "change": "-2,4%",
    "up": false,
    "debt": "0.0%",
    "score": 11,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Aerospace & Defense",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Textron Inc. zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "TYL",
    "name": "Tyler Technologies, Inc.",
    "sector": "Technologie",
    "industry": "Software - Application",
    "price": "303,09 $",
    "change": "-1,7%",
    "up": false,
    "debt": "11.5%",
    "score": 91,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Application",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 11.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 7.7,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Tyler Technologies, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (11.5%) und Cash-Quote (7.7%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "UAL",
    "name": "United Airlines Holdings, Inc.",
    "sector": "Industrie",
    "industry": "Airlines",
    "price": "84,03 $",
    "change": "+0,1%",
    "up": true,
    "debt": "85.5%",
    "score": 35,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Airlines",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 85.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 42.2,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 85.5% (Limit 30%); Cash-Quote zu hoch: 42.2% (Limit 30%)",
    "insight": "United Airlines Holdings, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 85.5% (Limit 30%); Cash-Quote zu hoch: 42.2% (Limit 30%)). Die Branche (Airlines) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "UBER",
    "name": "Uber Technologies, Inc.",
    "sector": "Technologie",
    "industry": "Software - Application",
    "price": "317,95 $",
    "change": "-1,6%",
    "up": false,
    "debt": "8.7%",
    "score": 93,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Application",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 8.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.3,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Uber Technologies, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (8.7%) und Cash-Quote (4.3%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "UDR",
    "name": "UDR, Inc.",
    "sector": "Immobilien",
    "industry": "REIT - Residential",
    "price": "205,91 $",
    "change": "+1,3%",
    "up": true,
    "debt": "42.4%",
    "score": 51,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Residential",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 42.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 42.4% (Limit 30%)",
    "insight": "UDR, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 42.4% (Limit 30%)). Die Branche (REIT - Residential) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "UHS",
    "name": "Universal Health Services, Inc.",
    "sector": "Gesundheit",
    "industry": "Medical Care Facilities",
    "price": "355,23 $",
    "change": "+1,5%",
    "up": true,
    "debt": "51.6%",
    "score": 49,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Medical Care Facilities",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 51.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.4,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 51.6% (Limit 30%)",
    "insight": "Universal Health Services, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 51.6% (Limit 30%)). Die Branche (Medical Care Facilities) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "ULTA",
    "name": "Ulta Beauty, Inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Specialty Retail",
    "price": "380,43 $",
    "change": "-0,9%",
    "up": false,
    "debt": "10.4%",
    "score": 93,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Retail",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 10.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Ulta Beauty, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Retail) ist zulässig, Verschuldung (10.4%) und Cash-Quote (1.0%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "UNH",
    "name": "UnitedHealth Group Incorporated",
    "sector": "Gesundheit",
    "industry": "Healthcare Plans",
    "price": "101,89 $",
    "change": "-1,3%",
    "up": false,
    "debt": "19.5%",
    "score": 86,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Healthcare Plans",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 19.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 8.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "UnitedHealth Group Incorporated erfüllt aktuell alle geprüften Kriterien: Die Branche (Healthcare Plans) ist zulässig, Verschuldung (19.5%) und Cash-Quote (8.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "UNP",
    "name": "Union Pacific Corporation",
    "sector": "Industrie",
    "industry": "Railroads",
    "price": "278,87 $",
    "change": "+0,3%",
    "up": true,
    "debt": "18.0%",
    "score": 89,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Railroads",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 18.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Union Pacific Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Railroads) ist zulässig, Verschuldung (18.0%) und Cash-Quote (1.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "UPS",
    "name": "United Parcel Service, Inc.",
    "sector": "Industrie",
    "industry": "Integrated Freight & Logistics",
    "price": "386,26 $",
    "change": "+0,5%",
    "up": true,
    "debt": "32.4%",
    "score": 54,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Integrated Freight & Logistics",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 32.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 5.3,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 32.4% (Limit 30%)",
    "insight": "United Parcel Service, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 32.4% (Limit 30%)). Die Branche (Integrated Freight & Logistics) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "URI",
    "name": "United Rentals, Inc.",
    "sector": "Industrie",
    "industry": "Rental & Leasing Services",
    "price": "363,86 $",
    "change": "-1,3%",
    "up": false,
    "debt": "22.9%",
    "score": 86,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Rental & Leasing Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 22.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "United Rentals, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Rental & Leasing Services) ist zulässig, Verschuldung (22.9%) und Cash-Quote (0.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "USB",
    "name": "U.S. Bancorp",
    "sector": "Finanzdienstleistungen",
    "industry": "Banks - Regional",
    "price": "256,23 $",
    "change": "-2,7%",
    "up": false,
    "debt": "0.0%",
    "score": 9,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Banks - Regional",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "U.S. Bancorp zählt zur ausgeschlossenen Branche Banks - Regional und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "V",
    "name": "Visa Inc.",
    "sector": "Finanzdienstleistungen",
    "industry": "Credit Services",
    "price": "329,82 $",
    "change": "+2,4%",
    "up": true,
    "debt": "0.0%",
    "score": 11,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Credit Services",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Visa Inc. zählt zur ausgeschlossenen Branche Credit Services und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "VEEV",
    "name": "Veeva Systems Inc.",
    "sector": "Gesundheit",
    "industry": "Health Information Services",
    "price": "291,37 $",
    "change": "-0,5%",
    "up": false,
    "debt": "0.3%",
    "score": 93,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Health Information Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 22.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Veeva Systems Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Health Information Services) ist zulässig, Verschuldung (0.3%) und Cash-Quote (22.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "VICI",
    "name": "VICI Properties Inc.",
    "sector": "Immobilien",
    "industry": "REIT - Diversified",
    "price": "32,20 $",
    "change": "-1,0%",
    "up": false,
    "debt": "61.5%",
    "score": 46,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Diversified",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 61.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.0,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 61.5% (Limit 30%)",
    "insight": "VICI Properties Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 61.5% (Limit 30%)). Die Branche (REIT - Diversified) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "VLO",
    "name": "Valero Energy Corporation",
    "sector": "Energie",
    "industry": "Oil & Gas Refining & Marketing",
    "price": "254,30 $",
    "change": "+1,0%",
    "up": true,
    "debt": "12.6%",
    "score": 90,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Oil & Gas Refining & Marketing",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 12.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 8.7,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Valero Energy Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas Refining & Marketing) ist zulässig, Verschuldung (12.6%) und Cash-Quote (8.7%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "VLTO",
    "name": "Veralto Corp",
    "sector": "Industrie",
    "industry": "Pollution & Treatment Controls",
    "price": "149,80 $",
    "change": "-0,2%",
    "up": false,
    "debt": "15.7%",
    "score": 88,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Pollution & Treatment Controls",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 15.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 9.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Veralto Corp erfüllt aktuell alle geprüften Kriterien: Die Branche (Pollution & Treatment Controls) ist zulässig, Verschuldung (15.7%) und Cash-Quote (9.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "VMC",
    "name": "Vulcan Materials Company (Holdi",
    "sector": "Grundstoffe",
    "industry": "Building Materials",
    "price": "405,53 $",
    "change": "+2,1%",
    "up": true,
    "debt": "14.2%",
    "score": 91,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Building Materials",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 14.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Vulcan Materials Company (Holdi erfüllt aktuell alle geprüften Kriterien: Die Branche (Building Materials) ist zulässig, Verschuldung (14.2%) und Cash-Quote (0.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "VRSK",
    "name": "Verisk Analytics, Inc.",
    "sector": "Industrie",
    "industry": "Consulting Services",
    "price": "291,14 $",
    "change": "+2,3%",
    "up": true,
    "debt": "18.1%",
    "score": 88,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Consulting Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 18.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Verisk Analytics, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Consulting Services) ist zulässig, Verschuldung (18.1%) und Cash-Quote (2.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "VRSN",
    "name": "VeriSign, Inc.",
    "sector": "Technologie",
    "industry": "Software - Infrastructure",
    "price": "168,66 $",
    "change": "+1,7%",
    "up": true,
    "debt": "8.9%",
    "score": 93,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Infrastructure",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 8.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.9,
        "max": 30
      }
    ],
    "note": null,
    "insight": "VeriSign, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Infrastructure) ist zulässig, Verschuldung (8.9%) und Cash-Quote (3.9%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "VRT",
    "name": "Vertiv Holdings, LLC",
    "sector": "Industrie",
    "industry": "Electrical Equipment & Parts",
    "price": "107,98 $",
    "change": "+2,4%",
    "up": true,
    "debt": "3.6%",
    "score": 97,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Electrical Equipment & Parts",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 3.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 3.3,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Vertiv Holdings, LLC erfüllt aktuell alle geprüften Kriterien: Die Branche (Electrical Equipment & Parts) ist zulässig, Verschuldung (3.6%) und Cash-Quote (3.3%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "VRTX",
    "name": "Vertex Pharmaceuticals Incorpor",
    "sector": "Gesundheit",
    "industry": "Biotechnology",
    "price": "247,27 $",
    "change": "-1,4%",
    "up": false,
    "debt": "1.6%",
    "score": 97,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Biotechnology",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 1.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 6.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Vertex Pharmaceuticals Incorpor erfüllt aktuell alle geprüften Kriterien: Die Branche (Biotechnology) ist zulässig, Verschuldung (1.6%) und Cash-Quote (6.0%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "VST",
    "name": "Vistra Corp.",
    "sector": "Versorger",
    "industry": "Utilities - Independent Power Producers",
    "price": "63,07 $",
    "change": "-0,3%",
    "up": false,
    "debt": "41.2%",
    "score": 52,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Independent Power Producers",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 41.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.3,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 41.2% (Limit 30%)",
    "insight": "Vistra Corp. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 41.2% (Limit 30%)). Die Branche (Utilities - Independent Power Producers) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "VTR",
    "name": "Ventas, Inc.",
    "sector": "Immobilien",
    "industry": "REIT - Healthcare Facilities",
    "price": "249,48 $",
    "change": "-2,2%",
    "up": false,
    "debt": "26.9%",
    "score": 84,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Healthcare Facilities",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 26.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Ventas, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (REIT - Healthcare Facilities) ist zulässig, Verschuldung (26.9%) und Cash-Quote (0.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "VTRS",
    "name": "Viatris Inc.",
    "sector": "Gesundheit",
    "industry": "Drug Manufacturers - Specialty & Generic",
    "price": "137,93 $",
    "change": "-2,7%",
    "up": false,
    "debt": "71.4%",
    "score": 43,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Drug Manufacturers - Specialty & Generic",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 71.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 11.7,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 71.4% (Limit 30%)",
    "insight": "Viatris Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 71.4% (Limit 30%)). Die Branche (Drug Manufacturers - Specialty & Generic) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "VZ",
    "name": "Verizon Communications Inc.",
    "sector": "Kommunikation",
    "industry": "Telecom Services",
    "price": "412,09 $",
    "change": "-1,0%",
    "up": false,
    "debt": "96.4%",
    "score": 35,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Telecom Services",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 96.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.9,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 96.4% (Limit 30%)",
    "insight": "Verizon Communications Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 96.4% (Limit 30%)). Die Branche (Telecom Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "WAB",
    "name": "Westinghouse Air Brake Technolo",
    "sector": "Industrie",
    "industry": "Railroads",
    "price": "360,89 $",
    "change": "-0,3%",
    "up": false,
    "debt": "14.1%",
    "score": 91,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Railroads",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 14.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.3,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Westinghouse Air Brake Technolo erfüllt aktuell alle geprüften Kriterien: Die Branche (Railroads) ist zulässig, Verschuldung (14.1%) und Cash-Quote (1.3%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "WAT",
    "name": "Waters Corporation",
    "sector": "Gesundheit",
    "industry": "Diagnostics & Research",
    "price": "179,87 $",
    "change": "-2,7%",
    "up": false,
    "debt": "15.1%",
    "score": 91,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Diagnostics & Research",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 15.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Waters Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Diagnostics & Research) ist zulässig, Verschuldung (15.1%) und Cash-Quote (1.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "WBD",
    "name": "Warner Bros. Discovery, Inc. -",
    "sector": "Kommunikation",
    "industry": "Entertainment",
    "price": "97,23 $",
    "change": "+1,7%",
    "up": true,
    "debt": "49.2%",
    "score": 49,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Entertainment",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 49.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 5.0,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 49.2% (Limit 30%)",
    "insight": "Warner Bros. Discovery, Inc. - überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 49.2% (Limit 30%)). Die Branche (Entertainment) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "WDAY",
    "name": "Workday, Inc.",
    "sector": "Technologie",
    "industry": "Software - Application",
    "price": "337,00 $",
    "change": "+1,7%",
    "up": true,
    "debt": "9.6%",
    "score": 91,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Application",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 9.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 11.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Workday, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (9.6%) und Cash-Quote (11.0%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "WDC",
    "name": "Western Digital Corporation",
    "sector": "Technologie",
    "industry": "Computer Hardware",
    "price": "365,65 $",
    "change": "+2,4%",
    "up": true,
    "debt": "0.9%",
    "score": 99,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Computer Hardware",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.9,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.7,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Western Digital Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Computer Hardware) ist zulässig, Verschuldung (0.9%) und Cash-Quote (1.7%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "WEC",
    "name": "WEC Energy Group, Inc.",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Electric",
    "price": "307,41 $",
    "change": "-0,2%",
    "up": false,
    "debt": "64.5%",
    "score": 45,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Electric",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 64.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.1,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 64.5% (Limit 30%)",
    "insight": "WEC Energy Group, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 64.5% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "WELL",
    "name": "Welltower Inc.",
    "sector": "Immobilien",
    "industry": "REIT - Healthcare Facilities",
    "price": "349,96 $",
    "change": "+1,3%",
    "up": true,
    "debt": "11.7%",
    "score": 93,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Healthcare Facilities",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 11.7,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Welltower Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (REIT - Healthcare Facilities) ist zulässig, Verschuldung (11.7%) und Cash-Quote (1.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "WFC",
    "name": "Wells Fargo & Company",
    "sector": "Finanzdienstleistungen",
    "industry": "Banks - Diversified",
    "price": "411,37 $",
    "change": "-0,8%",
    "up": false,
    "debt": "0.0%",
    "score": 9,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Banks - Diversified",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Wells Fargo & Company zählt zur ausgeschlossenen Branche Banks - Diversified und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "WM",
    "name": "Waste Management, Inc.",
    "sector": "Industrie",
    "industry": "Waste Management",
    "price": "411,41 $",
    "change": "+2,6%",
    "up": true,
    "debt": "25.8%",
    "score": 84,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Waste Management",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 25.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Waste Management, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Waste Management) ist zulässig, Verschuldung (25.8%) und Cash-Quote (0.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "WMB",
    "name": "Williams Companies, Inc. (The)",
    "sector": "Energie",
    "industry": "Oil & Gas Midstream",
    "price": "272,08 $",
    "change": "-1,6%",
    "up": false,
    "debt": "34.6%",
    "score": 54,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Oil & Gas Midstream",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 34.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.1,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 34.6% (Limit 30%)",
    "insight": "Williams Companies, Inc. (The) überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 34.6% (Limit 30%)). Die Branche (Oil & Gas Midstream) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "WMT",
    "name": "Walmart Inc.",
    "sector": "Konsumgüter (Basis)",
    "industry": "Discount Stores",
    "price": "157,92 $",
    "change": "-2,7%",
    "up": false,
    "debt": "8.5%",
    "score": 95,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Discount Stores",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 8.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.2,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Walmart Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Discount Stores) ist zulässig, Verschuldung (8.5%) und Cash-Quote (1.2%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "WRB",
    "name": "W.R. Berkley Corporation",
    "sector": "Finanzdienstleistungen",
    "industry": "Insurance - Property & Casualty",
    "price": "403,99 $",
    "change": "+2,7%",
    "up": true,
    "debt": "0.0%",
    "score": 10,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Insurance - Property & Casualty",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "W.R. Berkley Corporation zählt zur ausgeschlossenen Branche Insurance - Property & Casualty und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "WSM",
    "name": "Williams-Sonoma, Inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Specialty Retail",
    "price": "281,50 $",
    "change": "-2,2%",
    "up": false,
    "debt": "5.5%",
    "score": 96,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Retail",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 5.5,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.4,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Williams-Sonoma, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Retail) ist zulässig, Verschuldung (5.5%) und Cash-Quote (2.4%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "WST",
    "name": "West Pharmaceutical Services, I",
    "sector": "Gesundheit",
    "industry": "Medical Instruments & Supplies",
    "price": "27,70 $",
    "change": "+1,5%",
    "up": true,
    "debt": "1.3%",
    "score": 99,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Medical Instruments & Supplies",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 1.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.8,
        "max": 30
      }
    ],
    "note": null,
    "insight": "West Pharmaceutical Services, I erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Instruments & Supplies) ist zulässig, Verschuldung (1.3%) und Cash-Quote (1.8%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "WTW",
    "name": "Willis Towers Watson Public Lim",
    "sector": "Finanzdienstleistungen",
    "industry": "Insurance Brokers",
    "price": "96,51 $",
    "change": "+0,2%",
    "up": true,
    "debt": "0.0%",
    "score": 13,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Insurance Brokers",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Willis Towers Watson Public Lim zählt zur ausgeschlossenen Branche Insurance Brokers und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "WY",
    "name": "Weyerhaeuser Company",
    "sector": "Immobilien",
    "industry": "REIT - Specialty",
    "price": "279,55 $",
    "change": "+1,5%",
    "up": true,
    "debt": "30.1%",
    "score": 55,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: REIT - Specialty",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 30.1,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.9,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 30.1% (Limit 30%)",
    "insight": "Weyerhaeuser Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 30.1% (Limit 30%)). Die Branche (REIT - Specialty) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "WYNN",
    "name": "Wynn Resorts, Limited",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Resorts & Casinos",
    "price": "411,20 $",
    "change": "-1,7%",
    "up": false,
    "debt": "0.0%",
    "score": 7,
    "status": "Nicht Halal",
    "purification": null,
    "business": [
      {
        "label": "Ausgeschlossene Branche: Resorts & Casinos",
        "pass": false
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Wynn Resorts, Limited zählt zur ausgeschlossenen Branche Resorts & Casinos und ist damit unabhängig von den Finanzkennzahlen nicht konform."
  },
  {
    "ticker": "XEL",
    "name": "Xcel Energy Inc.",
    "sector": "Versorger",
    "industry": "Utilities - Regulated Electric",
    "price": "240,13 $",
    "change": "+1,0%",
    "up": true,
    "debt": "85.3%",
    "score": 38,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Utilities - Regulated Electric",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 85.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.1,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 85.3% (Limit 30%)",
    "insight": "Xcel Energy Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 85.3% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "XOM",
    "name": "ExxonMobil Holdings Corporation",
    "sector": "Energie",
    "industry": "Oil & Gas Integrated",
    "price": "272,95 $",
    "change": "-1,1%",
    "up": false,
    "debt": "7.4%",
    "score": 95,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Oil & Gas Integrated",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 7.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.3,
        "max": 30
      }
    ],
    "note": null,
    "insight": "ExxonMobil Holdings Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas Integrated) ist zulässig, Verschuldung (7.4%) und Cash-Quote (1.3%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "XYL",
    "name": "Xylem Inc.",
    "sector": "Industrie",
    "industry": "Specialty Industrial Machinery",
    "price": "221,03 $",
    "change": "+1,1%",
    "up": true,
    "debt": "11.2%",
    "score": 92,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Specialty Industrial Machinery",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 11.2,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 4.7,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Xylem Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (11.2%) und Cash-Quote (4.7%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "XYZ",
    "name": "Block, Inc.",
    "sector": "Technologie",
    "industry": "Software - Infrastructure",
    "price": "223,42 $",
    "change": "-1,4%",
    "up": false,
    "debt": "16.8%",
    "score": 85,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Software - Infrastructure",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 16.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 15.1,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Block, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Infrastructure) ist zulässig, Verschuldung (16.8%) und Cash-Quote (15.1%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "YUM",
    "name": "Yum! Brands, Inc.",
    "sector": "Konsumgüter (zyklisch)",
    "industry": "Restaurants",
    "price": "65,54 $",
    "change": "-1,9%",
    "up": false,
    "debt": "29.3%",
    "score": 82,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Restaurants",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 29.3,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 1.6,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Yum! Brands, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Restaurants) ist zulässig, Verschuldung (29.3%) und Cash-Quote (1.6%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "ZBH",
    "name": "Zimmer Biomet Holdings, Inc.",
    "sector": "Gesundheit",
    "industry": "Medical Devices",
    "price": "329,58 $",
    "change": "+1,8%",
    "up": true,
    "debt": "41.8%",
    "score": 51,
    "status": "Grenzwertig",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Medical Devices",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 41.8,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 2.6,
        "max": 30
      }
    ],
    "note": "Verschuldungsgrad zu hoch: 41.8% (Limit 30%)",
    "insight": "Zimmer Biomet Holdings, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 41.8% (Limit 30%)). Die Branche (Medical Devices) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen."
  },
  {
    "ticker": "ZBRA",
    "name": "Zebra Technologies Corporation",
    "sector": "Technologie",
    "industry": "Communication Equipment",
    "price": "254,06 $",
    "change": "+0,1%",
    "up": true,
    "debt": "20.4%",
    "score": 88,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Communication Equipment",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 20.4,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 0.8,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Zebra Technologies Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Communication Equipment) ist zulässig, Verschuldung (20.4%) und Cash-Quote (0.8%) liegen unter dem 30%-Grenzwert."
  },
  {
    "ticker": "ZTS",
    "name": "Zoetis Inc.",
    "sector": "Gesundheit",
    "industry": "Drug Manufacturers - Specialty & Generic",
    "price": "172,12 $",
    "change": "-2,4%",
    "up": false,
    "debt": "28.6%",
    "score": 81,
    "status": "Halal",
    "purification": null,
    "business": [
      {
        "label": "Branche zulässig: Drug Manufacturers - Specialty & Generic",
        "pass": true
      }
    ],
    "financials": [
      {
        "label": "Verschuldung / Marktkapitalisierung",
        "value": 28.6,
        "max": 30
      },
      {
        "label": "Cash & liquide Mittel / Marktkapitalisierung",
        "value": 6.0,
        "max": 30
      }
    ],
    "note": null,
    "insight": "Zoetis Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Drug Manufacturers - Specialty & Generic) ist zulässig, Verschuldung (28.6%) und Cash-Quote (6.0%) liegen unter dem 30%-Grenzwert."
  }
];
