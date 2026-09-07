// Automatisch aus halal_screening_results_alle.csv generiert.
// 503 Unternehmen — Quelle: euer eigener Screening-Lauf (yfinance-Skript).
// Demo-Kurse (price/change) sind NICHT aus der CSV, sondern deterministisch erzeugte
// Platzhalter, da die CSV keine Kursdaten enthält — siehe price-history.js für die
// echte Kursanbindung. Währung: USD ($), da alle Titel US-notiert sind (NYSE/NASDAQ).
// 'profile' ist ein automatisch generierter, rein faktischer Ein-Satz-Platzhalter
// (Branche/Sektor) — KEINE echte Unternehmensbeschreibung.
// 'events' (HV/Earnings/Dividende) sind ebenfalls DEMO-TERMINE, deterministisch aus
// dem Ticker erzeugt — KEINE echten Termine.
// 'eckdaten.week52Range' und 'eckdaten.dividendYield' sind ebenfalls deterministische
// DEMO-WERTE (aus dem Demo-Kurs abgeleitet), NICHT aus der CSV — die enthält keine
// 52-Wochen- oder Dividendendaten. Für ein fertiges Produkt: über die Kurs-API
// (siehe price-history.js) mit abrufen, die meisten Anbieter liefern beides mit.

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
    "insight": "Agilent Technologies, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Diagnostics & Research) ist zulässig, Verschuldung (9.1%) und Cash-Quote (4.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "39.1 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Diagnostics & Research",
      "peRatio": "27.8",
      "evEbitda": "20.3",
      "epsGrowth": "0.6%",
      "freeCashFlow": "931 Mio. $",
      "week52Range": "314,46 – 466,27 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Agilent Technologies, Inc. ist im Bereich Diagnostics & Research innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2026-11-28",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-11"
      },
      "timeline": [
        {
          "date": "2026-08-11",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-06",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-28",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Apple Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Consumer Electronics) ist zulässig, Verschuldung (1.9%) und Cash-Quote (1.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "4.54 Bio. $",
      "sector": "Technologie",
      "industry": "Consumer Electronics",
      "peRatio": "35.5",
      "evEbitda": "27.0",
      "epsGrowth": "0.3%",
      "freeCashFlow": "107.7 Mrd. $",
      "week52Range": "246,06 – 434,71 $",
      "dividendYield": "2,0%"
    },
    "profile": "Apple Inc. ist im Bereich Consumer Electronics innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-05",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-24"
      },
      "timeline": [
        {
          "date": "2026-08-24",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-07",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-05",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "AbbVie Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Drug Manufacturers - General) ist zulässig, Verschuldung (16.4%) und Cash-Quote (2.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "443.4 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Drug Manufacturers - General",
      "peRatio": "70.9",
      "evEbitda": "16.5",
      "epsGrowth": "2.9%",
      "freeCashFlow": "–",
      "week52Range": "96,05 – 123,94 $",
      "dividendYield": "0,8%"
    },
    "profile": "AbbVie Inc. ist im Bereich Drug Manufacturers - General innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-03-09",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-28"
      },
      "timeline": [
        {
          "date": "2026-09-08",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-28",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-03-09",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Airbnb, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Travel Services) ist zulässig, Verschuldung (2.8%) und Cash-Quote (13.3%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "89.9 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Travel Services",
      "peRatio": "37.4",
      "evEbitda": "30.7",
      "epsGrowth": "0.1%",
      "freeCashFlow": "3.2 Mrd. $",
      "week52Range": "152,49 – 283,54 $",
      "dividendYield": "1,3%"
    },
    "profile": "Airbnb, Inc. ist im Bereich Travel Services innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-05-06",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-24"
      },
      "timeline": [
        {
          "date": "2026-09-24",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-27",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-06",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Abbott Laboratories erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Devices) ist zulässig, Verschuldung (17.8%) und Cash-Quote (3.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "184.1 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Medical Devices",
      "peRatio": "34.2",
      "evEbitda": "18.0",
      "epsGrowth": "-0.5%",
      "freeCashFlow": "7.2 Mrd. $",
      "week52Range": "25,47 – 35,52 $",
      "dividendYield": "0,8%"
    },
    "profile": "Abbott Laboratories ist im Bereich Medical Devices innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-01-27",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-08"
      },
      "timeline": [
        {
          "date": "2026-09-22",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-08",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-27",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Arch Capital Group Ltd. zählt zur ausgeschlossenen Branche Insurance - Diversified und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "34.3 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Insurance - Diversified",
      "peRatio": "7.9",
      "evEbitda": "6.3",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "5.3 Mrd. $",
      "week52Range": "78,92 – 138,39 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Arch Capital Group Ltd. ist im Bereich Insurance - Diversified innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-04-08",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-29"
      },
      "timeline": [
        {
          "date": "2026-08-27",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-08-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-08",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Accenture plc erfüllt aktuell alle geprüften Kriterien: Die Branche (Information Technology Services) ist zulässig, Verschuldung (8.3%) und Cash-Quote (10.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "101.5 Mrd. $",
      "sector": "Technologie",
      "industry": "Information Technology Services",
      "peRatio": "13.2",
      "evEbitda": "7.8",
      "epsGrowth": "0.1%",
      "freeCashFlow": "12.1 Mrd. $",
      "week52Range": "152,99 – 201,81 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Accenture plc ist im Bereich Information Technology Services innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-02-20",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-29"
      },
      "timeline": [
        {
          "date": "2026-09-28",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-02-20",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Adobe Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (7.1%) und Cash-Quote (5.7%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "99.5 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Application",
      "peRatio": "14.3",
      "evEbitda": "10.4",
      "epsGrowth": "0.1%",
      "freeCashFlow": "9.2 Mrd. $",
      "week52Range": "146,07 – 323,27 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Adobe Inc. ist im Bereich Software - Application innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-05",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-08"
      },
      "timeline": [
        {
          "date": "2026-08-30",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-08",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-05",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Analog Devices, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (4.9%) und Cash-Quote (1.9%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "179.0 Mrd. $",
      "sector": "Technologie",
      "industry": "Semiconductors",
      "peRatio": "54.7",
      "evEbitda": "30.0",
      "epsGrowth": "1.1%",
      "freeCashFlow": "3.9 Mrd. $",
      "week52Range": "288,41 – 476,68 $",
      "dividendYield": "2,8%"
    },
    "profile": "Analog Devices, Inc. ist im Bereich Semiconductors innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-10-26",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-28"
      },
      "timeline": [
        {
          "date": "2026-08-28",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-28",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-26",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Archer-Daniels-Midland Company erfüllt aktuell alle geprüften Kriterien: Die Branche (Farm Products) ist zulässig, Verschuldung (27.9%) und Cash-Quote (1.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "38.2 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Farm Products",
      "peRatio": "35.4",
      "evEbitda": "19.1",
      "epsGrowth": "0.0%",
      "freeCashFlow": "1.6 Mrd. $",
      "week52Range": "93,82 – 123,14 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Archer-Daniels-Midland Company ist im Bereich Farm Products innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2026-08-20",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-13"
      },
      "timeline": [
        {
          "date": "2026-08-20",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-14",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Automatic Data Processing, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (5.1%) und Cash-Quote (4.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "106.0 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Application",
      "peRatio": "24.3",
      "evEbitda": "16.8",
      "epsGrowth": "0.1%",
      "freeCashFlow": "5.3 Mrd. $",
      "week52Range": "119,41 – 230,30 $",
      "dividendYield": "3,2%"
    },
    "profile": "Automatic Data Processing, Inc. ist im Bereich Software - Application innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-10-12",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-10"
      },
      "timeline": [
        {
          "date": "2026-09-01",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-10",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-12",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Autodesk, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (5.5%) und Cash-Quote (5.9%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "49.5 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Application",
      "peRatio": "34.2",
      "evEbitda": "23.0",
      "epsGrowth": "2.3%",
      "freeCashFlow": "3.1 Mrd. $",
      "week52Range": "185,55 – 294,85 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Autodesk, Inc. ist im Bereich Software - Application innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-02-12",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-07"
      },
      "timeline": [
        {
          "date": "2026-09-21",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-07",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-02-12",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Ameren Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 71.9% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "30.3 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Electric",
      "peRatio": "19.3",
      "evEbitda": "13.3",
      "epsGrowth": "0.1%",
      "freeCashFlow": "-1.8 Mrd. $",
      "week52Range": "326,73 – 513,43 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Ameren Corporation ist im Bereich Utilities - Regulated Electric innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2027-01-31",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-18"
      },
      "timeline": [
        {
          "date": "2026-08-18",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-28",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-31",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "American Electric Power Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 76.9% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "69.6 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Electric",
      "peRatio": "22.2",
      "evEbitda": "13.7",
      "epsGrowth": "-0.4%",
      "freeCashFlow": "-6.0 Mrd. $",
      "week52Range": "159,34 – 268,89 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "American Electric Power Company ist im Bereich Utilities - Regulated Electric innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2026-12-09",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-27"
      },
      "timeline": [
        {
          "date": "2026-08-27",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-04",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-12-09",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "The AES Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 303.8% (Limit 30%)). Die Branche (Utilities - Diversified) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "10.5 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Diversified",
      "peRatio": "7.6",
      "evEbitda": "12.9",
      "epsGrowth": "9.5%",
      "freeCashFlow": "-3.0 Mrd. $",
      "week52Range": "234,36 – 490,35 $",
      "dividendYield": "2,7%"
    },
    "profile": "The AES Corporation ist im Bereich Utilities - Diversified innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2026-12-26",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-13"
      },
      "timeline": [
        {
          "date": "2026-08-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-12-26",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "AFLAC Incorporated zählt zur ausgeschlossenen Branche Insurance - Life und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "64.9 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Insurance - Life",
      "peRatio": "14.6",
      "evEbitda": "12.1",
      "epsGrowth": "38.6%",
      "freeCashFlow": "4.9 Mrd. $",
      "week52Range": "44,48 – 60,70 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "AFLAC Incorporated ist im Bereich Insurance - Life innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-10-06",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-21"
      },
      "timeline": [
        {
          "date": "2026-08-21",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-02",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-06",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "American International Group, I zählt zur ausgeschlossenen Branche Insurance - Diversified und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "41.7 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Insurance - Diversified",
      "peRatio": "13.8",
      "evEbitda": "5.0",
      "epsGrowth": "0.2%",
      "freeCashFlow": "9.5 Mrd. $",
      "week52Range": "254,39 – 363,00 $",
      "dividendYield": "0,6%"
    },
    "profile": "American International Group, I ist im Bereich Insurance - Diversified innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-11-26",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-22"
      },
      "timeline": [
        {
          "date": "2026-08-22",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-31",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-26",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Assurant, Inc. zählt zur ausgeschlossenen Branche Insurance - Property & Casualty und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "13.8 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Insurance - Property & Casualty",
      "peRatio": "14.3",
      "evEbitda": "8.6",
      "epsGrowth": "0.9%",
      "freeCashFlow": "2.0 Mrd. $",
      "week52Range": "38,14 – 82,64 $",
      "dividendYield": "3,6%"
    },
    "profile": "Assurant, Inc. ist im Bereich Insurance - Property & Casualty innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-10-07",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-23"
      },
      "timeline": [
        {
          "date": "2026-09-13",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-23",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-07",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Arthur J. Gallagher & Co. zählt zur ausgeschlossenen Branche Insurance Brokers und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "64.1 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Insurance Brokers",
      "peRatio": "41.3",
      "evEbitda": "17.8",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "–",
      "week52Range": "92,59 – 167,26 $",
      "dividendYield": "1,4%"
    },
    "profile": "Arthur J. Gallagher & Co. ist im Bereich Insurance Brokers innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-01-17",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-25"
      },
      "timeline": [
        {
          "date": "2026-09-25",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-04",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-17",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Akamai Technologies, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 35.0% (Limit 30%)). Die Branche (Software - Infrastructure) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "16.7 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Infrastructure",
      "peRatio": "38.9",
      "evEbitda": "18.9",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "701 Mio. $",
      "week52Range": "371,31 – 488,56 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Akamai Technologies, Inc. ist im Bereich Software - Infrastructure innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-12-18",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-06"
      },
      "timeline": [
        {
          "date": "2026-09-10",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-06",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-12-18",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Albemarle Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Chemicals) ist zulässig, Verschuldung (14.5%) und Cash-Quote (7.9%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "13.9 Mrd. $",
      "sector": "Grundstoffe",
      "industry": "Specialty Chemicals",
      "peRatio": "–",
      "evEbitda": "16.2",
      "epsGrowth": "–",
      "freeCashFlow": "717 Mio. $",
      "week52Range": "317,12 – 512,28 $",
      "dividendYield": "2,2%"
    },
    "profile": "Albemarle Corporation ist im Bereich Specialty Chemicals innerhalb des Sektors Grundstoffe tätig.",
    "events": {
      "agm": {
        "date": "2026-12-17",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-20"
      },
      "timeline": [
        {
          "date": "2026-09-28",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-20",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-12-17",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Align Technology, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Instruments & Supplies) ist zulässig, Verschuldung (0.7%) und Cash-Quote (9.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "12.1 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Medical Instruments & Supplies",
      "peRatio": "29.3",
      "evEbitda": "12.0",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "646 Mio. $",
      "week52Range": "81,73 – 165,80 $",
      "dividendYield": "0,8%"
    },
    "profile": "Align Technology, Inc. ist im Bereich Medical Instruments & Supplies innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-03-25",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-25"
      },
      "timeline": [
        {
          "date": "2026-09-25",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-25",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Allstate Corporation (The) zählt zur ausgeschlossenen Branche Insurance - Property & Casualty und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "68.0 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Insurance - Property & Casualty",
      "peRatio": "5.8",
      "evEbitda": "4.9",
      "epsGrowth": "3.4%",
      "freeCashFlow": "12.4 Mrd. $",
      "week52Range": "239,05 – 427,16 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Allstate Corporation (The) ist im Bereich Insurance - Property & Casualty innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-03-14",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-20"
      },
      "timeline": [
        {
          "date": "2026-08-27",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-20",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-03-14",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Allegion plc erfüllt aktuell alle geprüften Kriterien: Die Branche (Security & Protection Services) ist zulässig, Verschuldung (16.6%) und Cash-Quote (2.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "13.4 Mrd. $",
      "sector": "Industrie",
      "industry": "Security & Protection Services",
      "peRatio": "20.7",
      "evEbitda": "14.6",
      "epsGrowth": "0.2%",
      "freeCashFlow": "484 Mio. $",
      "week52Range": "256,99 – 384,04 $",
      "dividendYield": "2,4%"
    },
    "profile": "Allegion plc ist im Bereich Security & Protection Services innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-11-24",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-24"
      },
      "timeline": [
        {
          "date": "2026-08-28",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-24",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-24",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Applied Materials, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductor Equipment & Materials) ist zulässig, Verschuldung (1.8%) und Cash-Quote (2.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "403.1 Mrd. $",
      "sector": "Technologie",
      "industry": "Semiconductor Equipment & Materials",
      "peRatio": "47.8",
      "evEbitda": "43.4",
      "epsGrowth": "0.3%",
      "freeCashFlow": "3.0 Mrd. $",
      "week52Range": "172,62 – 272,21 $",
      "dividendYield": "2,1%"
    },
    "profile": "Applied Materials, Inc. ist im Bereich Semiconductor Equipment & Materials innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-02-21",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-17"
      },
      "timeline": [
        {
          "date": "2026-08-17",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-06",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-02-21",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Amcor plc überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 80.8% (Limit 30%)). Die Branche (Packaging & Containers) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "20.8 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Packaging & Containers",
      "peRatio": "36.2",
      "evEbitda": "11.2",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "150 Mio. $",
      "week52Range": "199,34 – 379,39 $",
      "dividendYield": "3,3%"
    },
    "profile": "Amcor plc ist im Bereich Packaging & Containers innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-05-16",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-03"
      },
      "timeline": [
        {
          "date": "2026-08-24",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-03",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-05-16",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Advanced Micro Devices, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (0.5%) und Cash-Quote (1.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "776.4 Mrd. $",
      "sector": "Technologie",
      "industry": "Semiconductors",
      "peRatio": "158.7",
      "evEbitda": "103.4",
      "epsGrowth": "0.9%",
      "freeCashFlow": "7.2 Mrd. $",
      "week52Range": "221,59 – 426,12 $",
      "dividendYield": "2,1%"
    },
    "profile": "Advanced Micro Devices, Inc. ist im Bereich Semiconductors innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-10-21",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-07"
      },
      "timeline": [
        {
          "date": "2026-08-25",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-07",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-21",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "AMETEK, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (4.4%) und Cash-Quote (0.9%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "55.4 Mrd. $",
      "sector": "Industrie",
      "industry": "Specialty Industrial Machinery",
      "peRatio": "36.5",
      "evEbitda": "23.7",
      "epsGrowth": "0.1%",
      "freeCashFlow": "1.4 Mrd. $",
      "week52Range": "12,59 – 22,44 $",
      "dividendYield": "4,4%"
    },
    "profile": "AMETEK, Inc. ist im Bereich Specialty Industrial Machinery innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-18",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-03"
      },
      "timeline": [
        {
          "date": "2026-10-02",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-03",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-18",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Amgen Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Drug Manufacturers - General) ist zulässig, Verschuldung (27.6%) und Cash-Quote (5.8%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "207.9 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Drug Manufacturers - General",
      "peRatio": "26.8",
      "evEbitda": "15.0",
      "epsGrowth": "0.0%",
      "freeCashFlow": "7.4 Mrd. $",
      "week52Range": "149,29 – 230,72 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Amgen Inc. ist im Bereich Drug Manufacturers - General innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-01-24",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-15"
      },
      "timeline": [
        {
          "date": "2026-08-15",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-26",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-24",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Ameriprise Financial, Inc. zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "48.3 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Asset Management",
      "peRatio": "13.6",
      "evEbitda": "–",
      "epsGrowth": "0.1%",
      "freeCashFlow": "–",
      "week52Range": "168,73 – 236,22 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Ameriprise Financial, Inc. ist im Bereich Asset Management innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-08-31",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-12"
      },
      "timeline": [
        {
          "date": "2026-08-31",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-12",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-25",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        }
      ]
    }
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
    "insight": "American Tower Corporation (REI überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 55.7% (Limit 30%)). Die Branche (REIT - Specialty) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "80.8 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Specialty",
      "peRatio": "27.9",
      "evEbitda": "18.5",
      "epsGrowth": "1.4%",
      "freeCashFlow": "2.9 Mrd. $",
      "week52Range": "260,24 – 506,42 $",
      "dividendYield": "3,5%"
    },
    "profile": "American Tower Corporation (REI ist im Bereich REIT - Specialty innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2026-09-04",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-28"
      },
      "timeline": [
        {
          "date": "2026-09-04",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-06",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-28",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Amazon.com, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Internet Retail) ist zulässig, Verschuldung (7.6%) und Cash-Quote (4.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "2.92 Bio. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Internet Retail",
      "peRatio": "21.8",
      "evEbitda": "17.9",
      "epsGrowth": "2.4%",
      "freeCashFlow": "22.7 Mrd. $",
      "week52Range": "386,20 – 447,18 $",
      "dividendYield": "1,6%"
    },
    "profile": "Amazon.com, Inc. ist im Bereich Internet Retail innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2026-09-12",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-10"
      },
      "timeline": [
        {
          "date": "2026-09-10",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-12",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-14",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        }
      ]
    }
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
    "insight": "Arista Networks, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Computer Hardware) ist zulässig, Verschuldung (0.0%) und Cash-Quote (5.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "227.1 Mrd. $",
      "sector": "Technologie",
      "industry": "Computer Hardware",
      "peRatio": "62.2",
      "evEbitda": "50.7",
      "epsGrowth": "0.2%",
      "freeCashFlow": "4.4 Mrd. $",
      "week52Range": "75,30 – 97,98 $",
      "dividendYield": "0,8%"
    },
    "profile": "Arista Networks, Inc. ist im Bereich Computer Hardware innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-03-02",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-19"
      },
      "timeline": [
        {
          "date": "2026-09-18",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-19",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-03-02",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Aon plc zählt zur ausgeschlossenen Branche Insurance Brokers und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "76.5 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Insurance Brokers",
      "peRatio": "19.9",
      "evEbitda": "15.5",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "3.2 Mrd. $",
      "week52Range": "116,30 – 201,35 $",
      "dividendYield": "1,9%"
    },
    "profile": "Aon plc ist im Bereich Insurance Brokers innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-01-22",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-22"
      },
      "timeline": [
        {
          "date": "2026-08-22",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-17",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-22",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "A.O. Smith Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (8.3%) und Cash-Quote (2.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "8.2 Mrd. $",
      "sector": "Industrie",
      "industry": "Specialty Industrial Machinery",
      "peRatio": "16.7",
      "evEbitda": "11.1",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "485 Mio. $",
      "week52Range": "135,51 – 186,86 $",
      "dividendYield": "2,4%"
    },
    "profile": "A.O. Smith Corporation ist im Bereich Specialty Industrial Machinery innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-12-19",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-08"
      },
      "timeline": [
        {
          "date": "2026-09-08",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-25",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-12-19",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "APA Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 34.4% (Limit 30%)). Die Branche (Oil & Gas E&P) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "13.2 Mrd. $",
      "sector": "Energie",
      "industry": "Oil & Gas E&P",
      "peRatio": "8.7",
      "evEbitda": "3.5",
      "epsGrowth": "0.3%",
      "freeCashFlow": "1.7 Mrd. $",
      "week52Range": "265,93 – 491,24 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "APA Corporation ist im Bereich Oil & Gas E&P innerhalb des Sektors Energie tätig.",
    "events": {
      "agm": {
        "date": "2026-11-19",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-15"
      },
      "timeline": [
        {
          "date": "2026-08-15",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-12",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-19",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Air Products and Chemicals, Inc erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Chemicals) ist zulässig, Verschuldung (27.8%) und Cash-Quote (1.5%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "65.7 Mrd. $",
      "sector": "Grundstoffe",
      "industry": "Specialty Chemicals",
      "peRatio": "–",
      "evEbitda": "83.2",
      "epsGrowth": "–",
      "freeCashFlow": "-3.8 Mrd. $",
      "week52Range": "18,71 – 25,72 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Air Products and Chemicals, Inc ist im Bereich Specialty Chemicals innerhalb des Sektors Grundstoffe tätig.",
    "events": {
      "agm": {
        "date": "2027-02-21",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-15"
      },
      "timeline": [
        {
          "date": "2026-08-15",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-19",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-02-21",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Amphenol Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Electronic Components) ist zulässig, Verschuldung (9.5%) und Cash-Quote (2.7%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "197.7 Mrd. $",
      "sector": "Technologie",
      "industry": "Electronic Components",
      "peRatio": "40.2",
      "evEbitda": "22.3",
      "epsGrowth": "0.6%",
      "freeCashFlow": "3.8 Mrd. $",
      "week52Range": "216,63 – 297,56 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Amphenol Corporation ist im Bereich Electronic Components innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-11-08",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-10"
      },
      "timeline": [
        {
          "date": "2026-08-23",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-10",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-08",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Apollo Global Management, Inc. zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "72.4 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Asset Management",
      "peRatio": "79.0",
      "evEbitda": "–",
      "epsGrowth": "–",
      "freeCashFlow": "–",
      "week52Range": "145,42 – 283,70 $",
      "dividendYield": "1,9%"
    },
    "profile": "Apollo Global Management, Inc. ist im Bereich Asset Management innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-09-19",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-29"
      },
      "timeline": [
        {
          "date": "2026-09-19",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-10",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Applovin Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Advertising Agencies) ist zulässig, Verschuldung (2.9%) und Cash-Quote (2.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "133.0 Mrd. $",
      "sector": "Kommunikation",
      "industry": "Advertising Agencies",
      "peRatio": "34.5",
      "evEbitda": "27.5",
      "epsGrowth": "1.1%",
      "freeCashFlow": "3.2 Mrd. $",
      "week52Range": "253,21 – 365,16 $",
      "dividendYield": "0,6%"
    },
    "profile": "Applovin Corporation ist im Bereich Advertising Agencies innerhalb des Sektors Kommunikation tätig.",
    "events": {
      "agm": {
        "date": "2026-11-30",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-12"
      },
      "timeline": [
        {
          "date": "2026-08-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-12",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-30",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Aptiv PLC überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 82.7% (Limit 30%)). Die Branche (Auto Parts) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "12.0 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Auto Parts",
      "peRatio": "33.6",
      "evEbitda": "6.0",
      "epsGrowth": "–",
      "freeCashFlow": "1.1 Mrd. $",
      "week52Range": "282,50 – 466,13 $",
      "dividendYield": "3,0%"
    },
    "profile": "Aptiv PLC ist im Bereich Auto Parts innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-03-25",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-04"
      },
      "timeline": [
        {
          "date": "2026-09-03",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-04",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-03-25",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Alexandria Real Estate Equities überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 143.6% (Limit 30%)). Die Branche (REIT - Office) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "9.0 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Office",
      "peRatio": "–",
      "evEbitda": "13.5",
      "epsGrowth": "–",
      "freeCashFlow": "1.4 Mrd. $",
      "week52Range": "315,26 – 541,00 $",
      "dividendYield": "1,6%"
    },
    "profile": "Alexandria Real Estate Equities ist im Bereich REIT - Office innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2026-09-19",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-13"
      },
      "timeline": [
        {
          "date": "2026-08-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-25",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-19",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Ares Management Corporation zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "42.3 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Asset Management",
      "peRatio": "59.3",
      "evEbitda": "33.7",
      "epsGrowth": "7.7%",
      "freeCashFlow": "1.8 Mrd. $",
      "week52Range": "389,86 – 489,39 $",
      "dividendYield": "1,6%"
    },
    "profile": "Ares Management Corporation ist im Bereich Asset Management innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-03-23",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-30"
      },
      "timeline": [
        {
          "date": "2026-09-30",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-07",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-23",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Atmos Energy Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 33.4% (Limit 30%)). Die Branche (Utilities - Regulated Gas) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "28.8 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Gas",
      "peRatio": "21.3",
      "evEbitda": "15.1",
      "epsGrowth": "0.1%",
      "freeCashFlow": "-2.2 Mrd. $",
      "week52Range": "90,48 – 158,89 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Atmos Energy Corporation ist im Bereich Utilities - Regulated Gas innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2026-12-05",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-06"
      },
      "timeline": [
        {
          "date": "2026-09-06",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-25",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-12-05",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "AvalonBay Communities, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 34.0% (Limit 30%)). Die Branche (REIT - Residential) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "26.5 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Residential",
      "peRatio": "25.5",
      "evEbitda": "19.0",
      "epsGrowth": "-0.4%",
      "freeCashFlow": "–",
      "week52Range": "26,21 – 46,37 $",
      "dividendYield": "2,3%"
    },
    "profile": "AvalonBay Communities, Inc. ist im Bereich REIT - Residential innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2026-08-21",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-13"
      },
      "timeline": [
        {
          "date": "2026-08-21",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-14",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        }
      ]
    }
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
    "insight": "Broadcom Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (3.5%) und Cash-Quote (1.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "1.85 Bio. $",
      "sector": "Technologie",
      "industry": "Semiconductors",
      "peRatio": "65.0",
      "evEbitda": "45.1",
      "epsGrowth": "0.9%",
      "freeCashFlow": "27.2 Mrd. $",
      "week52Range": "16,41 – 23,41 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Broadcom Inc. ist im Bereich Semiconductors innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-21",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-29"
      },
      "timeline": [
        {
          "date": "2026-09-17",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-21",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Avery Dennison Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Packaging & Containers) ist zulässig, Verschuldung (28.3%) und Cash-Quote (1.8%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "13.0 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Packaging & Containers",
      "peRatio": "18.5",
      "evEbitda": "11.0",
      "epsGrowth": "0.1%",
      "freeCashFlow": "957 Mio. $",
      "week52Range": "152,97 – 199,61 $",
      "dividendYield": "0,6%"
    },
    "profile": "Avery Dennison Corporation ist im Bereich Packaging & Containers innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-05-02",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-11"
      },
      "timeline": [
        {
          "date": "2026-08-11",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-02",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-02",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "American Water Works Company, I überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 60.3% (Limit 30%)). Die Branche (Utilities - Regulated Water) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "26.7 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Water",
      "peRatio": "23.3",
      "evEbitda": "14.6",
      "epsGrowth": "0.1%",
      "freeCashFlow": "-1.8 Mrd. $",
      "week52Range": "156,07 – 269,95 $",
      "dividendYield": "0,4%"
    },
    "profile": "American Water Works Company, I ist im Bereich Utilities - Regulated Water innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2026-10-30",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-11"
      },
      "timeline": [
        {
          "date": "2026-10-11",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-11",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-30",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Axon Enterprise, Inc. zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "42.5 Mrd. $",
      "sector": "Industrie",
      "industry": "Aerospace & Defense",
      "peRatio": "212.8",
      "evEbitda": "424.3",
      "epsGrowth": "0.9%",
      "freeCashFlow": "63 Mio. $",
      "week52Range": "278,19 – 413,43 $",
      "dividendYield": "0,7%"
    },
    "profile": "Axon Enterprise, Inc. ist im Bereich Aerospace & Defense innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-11-13",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-29"
      },
      "timeline": [
        {
          "date": "2026-08-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-05",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-13",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "American Express Company zählt zur ausgeschlossenen Branche Credit Services und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "227.1 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Credit Services",
      "peRatio": "20.4",
      "evEbitda": "–",
      "epsGrowth": "0.1%",
      "freeCashFlow": "–",
      "week52Range": "187,53 – 215,75 $",
      "dividendYield": "4,2%"
    },
    "profile": "American Express Company ist im Bereich Credit Services innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-11-15",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-25"
      },
      "timeline": [
        {
          "date": "2026-09-25",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-01",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-15",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "AutoZone, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Auto Parts) ist zulässig, Verschuldung (26.6%) und Cash-Quote (0.5%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "49.2 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Auto Parts",
      "peRatio": "20.7",
      "evEbitda": "14.6",
      "epsGrowth": "0.1%",
      "freeCashFlow": "904 Mio. $",
      "week52Range": "292,60 – 407,66 $",
      "dividendYield": "2,0%"
    },
    "profile": "AutoZone, Inc. ist im Bereich Auto Parts innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-01-22",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-10"
      },
      "timeline": [
        {
          "date": "2026-09-10",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-03",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-22",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Boeing Company (The) zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "170.7 Mrd. $",
      "sector": "Industrie",
      "industry": "Aerospace & Defense",
      "peRatio": "77.5",
      "evEbitda": "-68.9",
      "epsGrowth": "–",
      "freeCashFlow": "5.6 Mrd. $",
      "week52Range": "244,03 – 473,27 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Boeing Company (The) ist im Bereich Aerospace & Defense innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-10-01",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-23"
      },
      "timeline": [
        {
          "date": "2026-09-18",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-23",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-01",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Bank of America Corporation zählt zur ausgeschlossenen Branche Banks - Diversified und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "434.8 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Banks - Diversified",
      "peRatio": "14.3",
      "evEbitda": "–",
      "epsGrowth": "0.4%",
      "freeCashFlow": "–",
      "week52Range": "301,80 – 549,43 $",
      "dividendYield": "4,0%"
    },
    "profile": "Bank of America Corporation ist im Bereich Banks - Diversified innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-11-04",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-12"
      },
      "timeline": [
        {
          "date": "2026-08-12",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-02",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-04",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Ball Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 47.3% (Limit 30%)). Die Branche (Packaging & Containers) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "17.3 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Packaging & Containers",
      "peRatio": "18.9",
      "evEbitda": "12.1",
      "epsGrowth": "0.2%",
      "freeCashFlow": "404 Mio. $",
      "week52Range": "197,03 – 369,05 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Ball Corporation ist im Bereich Packaging & Containers innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2026-10-31",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-31"
      },
      "timeline": [
        {
          "date": "2026-08-31",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-18",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-31",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Baxter International Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 71.5% (Limit 30%)). Die Branche (Medical Instruments & Supplies) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "13.5 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Medical Instruments & Supplies",
      "peRatio": "–",
      "evEbitda": "11.2",
      "epsGrowth": "0.4%",
      "freeCashFlow": "1.0 Mrd. $",
      "week52Range": "310,22 – 470,81 $",
      "dividendYield": "2,7%"
    },
    "profile": "Baxter International Inc. ist im Bereich Medical Instruments & Supplies innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-02-24",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-28"
      },
      "timeline": [
        {
          "date": "2026-08-28",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-05",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-02-24",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Best Buy Co., Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Retail) ist zulässig, Verschuldung (22.7%) und Cash-Quote (10.5%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "18.2 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Specialty Retail",
      "peRatio": "16.0",
      "evEbitda": "7.8",
      "epsGrowth": "0.4%",
      "freeCashFlow": "1.1 Mrd. $",
      "week52Range": "125,87 – 224,16 $",
      "dividendYield": "0,5%"
    },
    "profile": "Best Buy Co., Inc. ist im Bereich Specialty Retail innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2026-12-03",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-04"
      },
      "timeline": [
        {
          "date": "2026-08-22",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-04",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-12-03",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Becton, Dickinson and Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 37.9% (Limit 30%)). Die Branche (Medical Instruments & Supplies) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "45.6 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Medical Instruments & Supplies",
      "peRatio": "28.9",
      "evEbitda": "10.1",
      "epsGrowth": "–",
      "freeCashFlow": "4.5 Mrd. $",
      "week52Range": "327,41 – 524,65 $",
      "dividendYield": "0,9%"
    },
    "profile": "Becton, Dickinson and Company ist im Bereich Medical Instruments & Supplies innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-01-03",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-05"
      },
      "timeline": [
        {
          "date": "2026-09-05",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-14",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-03",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Franklin Resources, Inc. zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "17.6 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Asset Management",
      "peRatio": "23.0",
      "evEbitda": "13.0",
      "epsGrowth": "1.1%",
      "freeCashFlow": "-3.2 Mrd. $",
      "week52Range": "237,52 – 288,23 $",
      "dividendYield": "0,5%"
    },
    "profile": "Franklin Resources, Inc. ist im Bereich Asset Management innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-05-01",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-23"
      },
      "timeline": [
        {
          "date": "2026-08-23",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-18",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-01",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Brown Forman Inc zählt zur ausgeschlossenen Branche Beverages - Wineries & Distilleries und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "13.2 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Beverages - Wineries & Distilleries",
      "peRatio": "18.8",
      "evEbitda": "13.1",
      "epsGrowth": "-0.6%",
      "freeCashFlow": "740 Mio. $",
      "week52Range": "312,32 – 356,45 $",
      "dividendYield": "1,2%"
    },
    "profile": "Brown Forman Inc ist im Bereich Beverages - Wineries & Distilleries innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2027-01-07",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-07"
      },
      "timeline": [
        {
          "date": "2026-09-07",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-09",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-07",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Bunge Limited überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 83.6% (Limit 30%)). Die Branche (Farm Products) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "20.4 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Farm Products",
      "peRatio": "22.9",
      "evEbitda": "12.2",
      "epsGrowth": "0.3%",
      "freeCashFlow": "-6.5 Mrd. $",
      "week52Range": "167,94 – 276,48 $",
      "dividendYield": "3,1%"
    },
    "profile": "Bunge Limited ist im Bereich Farm Products innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2026-12-08",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-11"
      },
      "timeline": [
        {
          "date": "2026-09-11",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-18",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-12-08",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Biogen Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Drug Manufacturers - General) ist zulässig, Verschuldung (27.9%) und Cash-Quote (4.3%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "30.0 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Drug Manufacturers - General",
      "peRatio": "36.1",
      "evEbitda": "11.0",
      "epsGrowth": "-0.8%",
      "freeCashFlow": "1.3 Mrd. $",
      "week52Range": "245,64 – 298,68 $",
      "dividendYield": "2,7%"
    },
    "profile": "Biogen Inc. ist im Bereich Drug Manufacturers - General innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2026-11-17",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-13"
      },
      "timeline": [
        {
          "date": "2026-09-12",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-17",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Booking Holdings Inc. Common St erfüllt aktuell alle geprüften Kriterien: Die Branche (Travel Services) ist zulässig, Verschuldung (12.8%) und Cash-Quote (10.7%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "149.5 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Travel Services",
      "peRatio": "25.4",
      "evEbitda": "14.7",
      "epsGrowth": "2.4%",
      "freeCashFlow": "7.1 Mrd. $",
      "week52Range": "25,71 – 57,85 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Booking Holdings Inc. Common St ist im Bereich Travel Services innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2026-09-29",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-24"
      },
      "timeline": [
        {
          "date": "2026-08-24",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-28",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-29",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Baker Hughes Company erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas Equipment & Services) ist zulässig, Verschuldung (27.1%) und Cash-Quote (28.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "60.0 Mrd. $",
      "sector": "Energie",
      "industry": "Oil & Gas Equipment & Services",
      "peRatio": "19.5",
      "evEbitda": "12.3",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "4.4 Mrd. $",
      "week52Range": "206,27 – 447,98 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Baker Hughes Company ist im Bereich Oil & Gas Equipment & Services innerhalb des Sektors Energie tätig.",
    "events": {
      "agm": {
        "date": "2027-03-05",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-18"
      },
      "timeline": [
        {
          "date": "2026-08-18",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-05",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Builders FirstSource, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 73.3% (Limit 30%)). Die Branche (Building Products & Equipment) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "7.1 Mrd. $",
      "sector": "Industrie",
      "industry": "Building Products & Equipment",
      "peRatio": "72.2",
      "evEbitda": "12.1",
      "epsGrowth": "–",
      "freeCashFlow": "465 Mio. $",
      "week52Range": "44,90 – 74,03 $",
      "dividendYield": "1,1%"
    },
    "profile": "Builders FirstSource, Inc. ist im Bereich Building Products & Equipment innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-11-23",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-11"
      },
      "timeline": [
        {
          "date": "2026-08-11",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-13",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-23",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "BlackRock, Inc. zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "177.3 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Asset Management",
      "peRatio": "26.1",
      "evEbitda": "16.0",
      "epsGrowth": "0.2%",
      "freeCashFlow": "–",
      "week52Range": "389,87 – 481,11 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "BlackRock, Inc. ist im Bereich Asset Management innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-08-17",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-14"
      },
      "timeline": [
        {
          "date": "2026-08-17",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-04",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-14",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Bristol-Myers Squibb Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 33.8% (Limit 30%)). Die Branche (Drug Manufacturers - General) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "133.4 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Drug Manufacturers - General",
      "peRatio": "14.4",
      "evEbitda": "8.8",
      "epsGrowth": "1.5%",
      "freeCashFlow": "8.1 Mrd. $",
      "week52Range": "67,78 – 134,63 $",
      "dividendYield": "0,4%"
    },
    "profile": "Bristol-Myers Squibb Company ist im Bereich Drug Manufacturers - General innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-05-03",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-20"
      },
      "timeline": [
        {
          "date": "2026-09-09",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-20",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-05-03",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "The Bank of New York Mellon Cor zählt zur ausgeschlossenen Branche Banks - Diversified und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "106.1 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Banks - Diversified",
      "peRatio": "18.2",
      "evEbitda": "–",
      "epsGrowth": "0.3%",
      "freeCashFlow": "–",
      "week52Range": "39,36 – 76,38 $",
      "dividendYield": "2,6%"
    },
    "profile": "The Bank of New York Mellon Cor ist im Bereich Banks - Diversified innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-01-08",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-28"
      },
      "timeline": [
        {
          "date": "2026-09-13",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-28",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-08",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Broadridge Financial Solutions, erfüllt aktuell alle geprüften Kriterien: Die Branche (Information Technology Services) ist zulässig, Verschuldung (19.1%) und Cash-Quote (1.7%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "17.8 Mrd. $",
      "sector": "Technologie",
      "industry": "Information Technology Services",
      "peRatio": "16.5",
      "evEbitda": "11.9",
      "epsGrowth": "0.2%",
      "freeCashFlow": "1.2 Mrd. $",
      "week52Range": "187,22 – 371,88 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Broadridge Financial Solutions, ist im Bereich Information Technology Services innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-09-01",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-23"
      },
      "timeline": [
        {
          "date": "2026-09-01",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-08",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-23",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Berkshire Hathaway Inc. New zählt zur ausgeschlossenen Branche Insurance - Diversified und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "1.10 Bio. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Insurance - Diversified",
      "peRatio": "15.2",
      "evEbitda": "-2.2",
      "epsGrowth": "1.2%",
      "freeCashFlow": "61.2 Mrd. $",
      "week52Range": "384,05 – 592,78 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Berkshire Hathaway Inc. New ist im Bereich Insurance - Diversified innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-04-05",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-13"
      },
      "timeline": [
        {
          "date": "2026-09-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-05",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Brown & Brown, Inc. zählt zur ausgeschlossenen Branche Insurance Brokers und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "23.6 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Insurance Brokers",
      "peRatio": "22.5",
      "evEbitda": "10.6",
      "epsGrowth": "0.1%",
      "freeCashFlow": "1.6 Mrd. $",
      "week52Range": "223,62 – 465,88 $",
      "dividendYield": "2,8%"
    },
    "profile": "Brown & Brown, Inc. ist im Bereich Insurance Brokers innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-01-08",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-31"
      },
      "timeline": [
        {
          "date": "2026-08-31",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-26",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-08",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Boston Scientific Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Devices) ist zulässig, Verschuldung (15.9%) und Cash-Quote (2.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "69.5 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Medical Devices",
      "peRatio": "18.9",
      "evEbitda": "13.8",
      "epsGrowth": "0.2%",
      "freeCashFlow": "–",
      "week52Range": "23,73 – 28,73 $",
      "dividendYield": "1,8%"
    },
    "profile": "Boston Scientific Corporation ist im Bereich Medical Devices innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-05-12",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-31"
      },
      "timeline": [
        {
          "date": "2026-08-31",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-08",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-12",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Blackstone Inc. zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "159.0 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Asset Management",
      "peRatio": "28.6",
      "evEbitda": "–",
      "epsGrowth": "0.6%",
      "freeCashFlow": "–",
      "week52Range": "74,02 – 95,75 $",
      "dividendYield": "3,3%"
    },
    "profile": "Blackstone Inc. ist im Bereich Asset Management innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-01-11",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-29"
      },
      "timeline": [
        {
          "date": "2026-08-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-11",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "BXP, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 130.8% (Limit 30%)). Die Branche (REIT - Office) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "12.5 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Office",
      "peRatio": "37.7",
      "evEbitda": "18.0",
      "epsGrowth": "-0.2%",
      "freeCashFlow": "–",
      "week52Range": "87,29 – 132,47 $",
      "dividendYield": "2,0%"
    },
    "profile": "BXP, Inc. ist im Bereich REIT - Office innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2027-03-13",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-01"
      },
      "timeline": [
        {
          "date": "2026-09-19",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-01",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-03-13",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Citigroup, Inc. zählt zur ausgeschlossenen Branche Banks - Diversified und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "222.2 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Banks - Diversified",
      "peRatio": "14.3",
      "evEbitda": "–",
      "epsGrowth": "0.6%",
      "freeCashFlow": "–",
      "week52Range": "53,72 – 77,19 $",
      "dividendYield": "3,3%"
    },
    "profile": "Citigroup, Inc. ist im Bereich Banks - Diversified innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-09-06",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-07"
      },
      "timeline": [
        {
          "date": "2026-09-06",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-06",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-07",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Cardinal Health, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Distribution) ist zulässig, Verschuldung (16.5%) und Cash-Quote (7.3%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "53.9 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Medical Distribution",
      "peRatio": "35.1",
      "evEbitda": "14.8",
      "epsGrowth": "-0.2%",
      "freeCashFlow": "4.8 Mrd. $",
      "week52Range": "324,65 – 507,26 $",
      "dividendYield": "1,7%"
    },
    "profile": "Cardinal Health, Inc. ist im Bereich Medical Distribution innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-02-10",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-05"
      },
      "timeline": [
        {
          "date": "2026-09-05",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-13",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-02-10",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Carrier Global Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Building Products & Equipment) ist zulässig, Verschuldung (24.1%) und Cash-Quote (2.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "51.3 Mrd. $",
      "sector": "Industrie",
      "industry": "Building Products & Equipment",
      "peRatio": "44.1",
      "evEbitda": "20.2",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "862 Mio. $",
      "week52Range": "69,39 – 112,87 $",
      "dividendYield": "0,7%"
    },
    "profile": "Carrier Global Corporation ist im Bereich Building Products & Equipment innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-02-10",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-24"
      },
      "timeline": [
        {
          "date": "2026-08-24",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-15",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-02-10",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Caseys General Stores, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Retail) ist zulässig, Verschuldung (9.0%) und Cash-Quote (1.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "32.2 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Specialty Retail",
      "peRatio": "45.5",
      "evEbitda": "23.2",
      "epsGrowth": "0.7%",
      "freeCashFlow": "551 Mio. $",
      "week52Range": "217,26 – 447,89 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Caseys General Stores, Inc. ist im Bereich Specialty Retail innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-05-21",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-14"
      },
      "timeline": [
        {
          "date": "2026-09-14",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-04",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-21",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Caterpillar, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Farm & Heavy Construction Machinery) ist zulässig, Verschuldung (11.5%) und Cash-Quote (0.9%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "375.3 Mrd. $",
      "sector": "Industrie",
      "industry": "Farm & Heavy Construction Machinery",
      "peRatio": "40.7",
      "evEbitda": "28.5",
      "epsGrowth": "0.3%",
      "freeCashFlow": "3.8 Mrd. $",
      "week52Range": "206,17 – 367,98 $",
      "dividendYield": "2,8%"
    },
    "profile": "Caterpillar, Inc. ist im Bereich Farm & Heavy Construction Machinery innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-03-18",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-22"
      },
      "timeline": [
        {
          "date": "2026-08-22",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-30",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-18",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Chubb Limited zählt zur ausgeschlossenen Branche Insurance - Property & Casualty und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "135.3 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Insurance - Property & Casualty",
      "peRatio": "12.4",
      "evEbitda": "10.6",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "10.5 Mrd. $",
      "week52Range": "178,84 – 306,58 $",
      "dividendYield": "3,1%"
    },
    "profile": "Chubb Limited ist im Bereich Insurance - Property & Casualty innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-12-11",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-19"
      },
      "timeline": [
        {
          "date": "2026-09-06",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-19",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-12-11",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Cboe Global Markets, Inc. zählt zur ausgeschlossenen Branche Financial Data & Stock Exchanges und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "32.5 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Financial Data & Stock Exchanges",
      "peRatio": "24.2",
      "evEbitda": "17.1",
      "epsGrowth": "0.5%",
      "freeCashFlow": "1.0 Mrd. $",
      "week52Range": "177,07 – 251,39 $",
      "dividendYield": "2,5%"
    },
    "profile": "Cboe Global Markets, Inc. ist im Bereich Financial Data & Stock Exchanges innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-11-06",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-14"
      },
      "timeline": [
        {
          "date": "2026-09-05",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-14",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-06",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "CBRE Group Inc erfüllt aktuell alle geprüften Kriterien: Die Branche (Real Estate Services) ist zulässig, Verschuldung (25.4%) und Cash-Quote (3.5%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "42.5 Mrd. $",
      "sector": "Immobilien",
      "industry": "Real Estate Services",
      "peRatio": "33.6",
      "evEbitda": "23.8",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "1.6 Mrd. $",
      "week52Range": "38,22 – 54,10 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "CBRE Group Inc ist im Bereich Real Estate Services innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2027-03-22",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-27"
      },
      "timeline": [
        {
          "date": "2026-08-27",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-14",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-22",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Crown Castle Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 70.2% (Limit 30%)). Die Branche (REIT - Specialty) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "33.3 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Specialty",
      "peRatio": "31.1",
      "evEbitda": "20.4",
      "epsGrowth": "-0.7%",
      "freeCashFlow": "1.0 Mrd. $",
      "week52Range": "50,03 – 88,77 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Crown Castle Inc. ist im Bereich REIT - Specialty innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2027-04-09",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-17"
      },
      "timeline": [
        {
          "date": "2026-08-21",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-17",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-09",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Carnival Corporation Ltd. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 68.7% (Limit 30%)). Die Branche (Travel Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "38.1 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Travel Services",
      "peRatio": "12.5",
      "evEbitda": "8.5",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "1.9 Mrd. $",
      "week52Range": "277,40 – 509,26 $",
      "dividendYield": "3,8%"
    },
    "profile": "Carnival Corporation Ltd. ist im Bereich Travel Services innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-01-05",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-25"
      },
      "timeline": [
        {
          "date": "2026-08-30",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-25",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-05",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Cadence Design Systems, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (2.8%) und Cash-Quote (1.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "93.8 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Application",
      "peRatio": "67.6",
      "evEbitda": "44.0",
      "epsGrowth": "1.3%",
      "freeCashFlow": "1.6 Mrd. $",
      "week52Range": "168,61 – 316,98 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Cadence Design Systems, Inc. ist im Bereich Software - Application innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-08-18",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-22"
      },
      "timeline": [
        {
          "date": "2026-08-18",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-08-22",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-31",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        }
      ]
    }
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
    "insight": "CDW Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 32.5% (Limit 30%)). Die Branche (Information Technology Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "18.9 Mrd. $",
      "sector": "Technologie",
      "industry": "Information Technology Services",
      "peRatio": "18.0",
      "evEbitda": "12.3",
      "epsGrowth": "0.1%",
      "freeCashFlow": "884 Mio. $",
      "week52Range": "97,97 – 149,98 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "CDW Corporation ist im Bereich Information Technology Services innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-12",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-09"
      },
      "timeline": [
        {
          "date": "2026-09-04",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-09",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-12",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Constellation Energy Corporatio erfüllt aktuell alle geprüften Kriterien: Die Branche (Utilities - Independent Power Producers) ist zulässig, Verschuldung (23.9%) und Cash-Quote (0.9%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "93.8 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Independent Power Producers",
      "peRatio": "22.8",
      "evEbitda": "14.7",
      "epsGrowth": "10.9%",
      "freeCashFlow": "-4.5 Mrd. $",
      "week52Range": "253,94 – 578,66 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Constellation Energy Corporatio ist im Bereich Utilities - Independent Power Producers innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2026-11-14",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-07"
      },
      "timeline": [
        {
          "date": "2026-09-16",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-07",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-14",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "CF Industries Holdings, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Agricultural Inputs) ist zulässig, Verschuldung (18.8%) und Cash-Quote (10.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "19.2 Mrd. $",
      "sector": "Grundstoffe",
      "industry": "Agricultural Inputs",
      "peRatio": "11.3",
      "evEbitda": "6.9",
      "epsGrowth": "1.2%",
      "freeCashFlow": "1.1 Mrd. $",
      "week52Range": "84,10 – 113,10 $",
      "dividendYield": "0,9%"
    },
    "profile": "CF Industries Holdings, Inc. ist im Bereich Agricultural Inputs innerhalb des Sektors Grundstoffe tätig.",
    "events": {
      "agm": {
        "date": "2027-01-14",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-06"
      },
      "timeline": [
        {
          "date": "2026-09-30",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-06",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-14",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Citizens Financial Group, Inc. zählt zur ausgeschlossenen Branche Banks - Regional und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "30.3 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Banks - Regional",
      "peRatio": "15.6",
      "evEbitda": "–",
      "epsGrowth": "0.4%",
      "freeCashFlow": "–",
      "week52Range": "89,75 – 138,15 $",
      "dividendYield": "0,9%"
    },
    "profile": "Citizens Financial Group, Inc. ist im Bereich Banks - Regional innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-11-03",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-27"
      },
      "timeline": [
        {
          "date": "2026-09-15",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-27",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-03",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Church & Dwight Company, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Household & Personal Products) ist zulässig, Verschuldung (10.4%) und Cash-Quote (1.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "23.4 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Household & Personal Products",
      "peRatio": "31.7",
      "evEbitda": "18.9",
      "epsGrowth": "0.1%",
      "freeCashFlow": "939 Mio. $",
      "week52Range": "31,71 – 47,73 $",
      "dividendYield": "2,4%"
    },
    "profile": "Church & Dwight Company, Inc. ist im Bereich Household & Personal Products innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2027-02-01",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-04"
      },
      "timeline": [
        {
          "date": "2026-09-04",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-07",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-02-01",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "C.H. Robinson Worldwide, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Integrated Freight & Logistics) ist zulässig, Verschuldung (11.3%) und Cash-Quote (0.9%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "17.4 Mrd. $",
      "sector": "Industrie",
      "industry": "Integrated Freight & Logistics",
      "peRatio": "28.2",
      "evEbitda": "20.8",
      "epsGrowth": "0.2%",
      "freeCashFlow": "485 Mio. $",
      "week52Range": "61,44 – 108,78 $",
      "dividendYield": "3,6%"
    },
    "profile": "C.H. Robinson Worldwide, Inc. ist im Bereich Integrated Freight & Logistics innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-06",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-13"
      },
      "timeline": [
        {
          "date": "2026-09-01",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-06",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Charter Communications, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 494.9% (Limit 30%)). Die Branche (Telecom Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "19.5 Mrd. $",
      "sector": "Kommunikation",
      "industry": "Telecom Services",
      "peRatio": "3.8",
      "evEbitda": "5.4",
      "epsGrowth": "0.2%",
      "freeCashFlow": "2.2 Mrd. $",
      "week52Range": "223,81 – 474,74 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Charter Communications, Inc. ist im Bereich Telecom Services innerhalb des Sektors Kommunikation tätig.",
    "events": {
      "agm": {
        "date": "2027-05-21",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-03"
      },
      "timeline": [
        {
          "date": "2026-10-03",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-07",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-21",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "The Cigna Group überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 43.2% (Limit 30%)). Die Branche (Healthcare Plans) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "73.7 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Healthcare Plans",
      "peRatio": "11.5",
      "evEbitda": "7.7",
      "epsGrowth": "0.1%",
      "freeCashFlow": "8.0 Mrd. $",
      "week52Range": "156,46 – 244,81 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "The Cigna Group ist im Bereich Healthcare Plans innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-04-17",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-22"
      },
      "timeline": [
        {
          "date": "2026-09-22",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-04-17",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Ciena Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Communication Equipment) ist zulässig, Verschuldung (3.0%) und Cash-Quote (2.3%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "53.4 Mrd. $",
      "sector": "Technologie",
      "industry": "Communication Equipment",
      "peRatio": "124.9",
      "evEbitda": "68.4",
      "epsGrowth": "23.8%",
      "freeCashFlow": "701 Mio. $",
      "week52Range": "79,88 – 106,20 $",
      "dividendYield": "1,6%"
    },
    "profile": "Ciena Corporation ist im Bereich Communication Equipment innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-09-13",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-26"
      },
      "timeline": [
        {
          "date": "2026-08-28",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-13",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-26",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Cincinnati Financial Corporatio zählt zur ausgeschlossenen Branche Insurance - Property & Casualty und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "27.3 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Insurance - Property & Casualty",
      "peRatio": "8.4",
      "evEbitda": "6.0",
      "epsGrowth": "0.9%",
      "freeCashFlow": "3.0 Mrd. $",
      "week52Range": "156,94 – 253,07 $",
      "dividendYield": "1,9%"
    },
    "profile": "Cincinnati Financial Corporatio ist im Bereich Insurance - Property & Casualty innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-05-10",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-11"
      },
      "timeline": [
        {
          "date": "2026-09-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-11",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-05-10",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Colgate-Palmolive Company erfüllt aktuell alle geprüften Kriterien: Die Branche (Household & Personal Products) ist zulässig, Verschuldung (10.9%) und Cash-Quote (1.9%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "73.1 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Household & Personal Products",
      "peRatio": "35.9",
      "evEbitda": "16.3",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "3.3 Mrd. $",
      "week52Range": "81,65 – 133,16 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Colgate-Palmolive Company ist im Bereich Household & Personal Products innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2026-12-06",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-03"
      },
      "timeline": [
        {
          "date": "2026-09-03",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-18",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-12-06",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Clorox Company (The) überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 38.8% (Limit 30%)). Die Branche (Household & Personal Products) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "11.6 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Household & Personal Products",
      "peRatio": "15.5",
      "evEbitda": "11.8",
      "epsGrowth": "0.0%",
      "freeCashFlow": "63 Mio. $",
      "week52Range": "279,84 – 571,85 $",
      "dividendYield": "3,9%"
    },
    "profile": "Clorox Company (The) ist im Bereich Household & Personal Products innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2027-03-23",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-11"
      },
      "timeline": [
        {
          "date": "2026-08-11",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-30",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-23",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Comcast Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 106.3% (Limit 30%)). Die Branche (Telecom Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "85.0 Mrd. $",
      "sector": "Kommunikation",
      "industry": "Telecom Services",
      "peRatio": "7.7",
      "evEbitda": "4.9",
      "epsGrowth": "-0.7%",
      "freeCashFlow": "12.7 Mrd. $",
      "week52Range": "216,83 – 393,62 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Comcast Corporation ist im Bereich Telecom Services innerhalb des Sektors Kommunikation tätig.",
    "events": {
      "agm": {
        "date": "2026-08-23",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-31"
      },
      "timeline": [
        {
          "date": "2026-08-23",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-08-23",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-08-31",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "CME Group Inc. zählt zur ausgeschlossenen Branche Financial Data & Stock Exchanges und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "96.3 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Financial Data & Stock Exchanges",
      "peRatio": "22.7",
      "evEbitda": "20.5",
      "epsGrowth": "0.0%",
      "freeCashFlow": "2.9 Mrd. $",
      "week52Range": "58,11 – 96,58 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "CME Group Inc. ist im Bereich Financial Data & Stock Exchanges innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-12-26",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-13"
      },
      "timeline": [
        {
          "date": "2026-08-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-16",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-12-26",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Chipotle Mexican Grill, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Restaurants) ist zulässig, Verschuldung (11.5%) und Cash-Quote (1.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "47.2 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Restaurants",
      "peRatio": "34.5",
      "evEbitda": "22.8",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "1.1 Mrd. $",
      "week52Range": "91,67 – 131,23 $",
      "dividendYield": "3,1%"
    },
    "profile": "Chipotle Mexican Grill, Inc. ist im Bereich Restaurants innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-03-19",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-25"
      },
      "timeline": [
        {
          "date": "2026-09-15",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-25",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-03-19",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Cummins Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (9.4%) und Cash-Quote (3.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "87.5 Mrd. $",
      "sector": "Industrie",
      "industry": "Specialty Industrial Machinery",
      "peRatio": "32.9",
      "evEbitda": "18.7",
      "epsGrowth": "-0.2%",
      "freeCashFlow": "1.7 Mrd. $",
      "week52Range": "258,64 – 484,96 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Cummins Inc. ist im Bereich Specialty Industrial Machinery innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-10-02",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-30"
      },
      "timeline": [
        {
          "date": "2026-08-30",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-04",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-02",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "CMS Energy Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 86.8% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "22.2 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Electric",
      "peRatio": "21.6",
      "evEbitda": "14.1",
      "epsGrowth": "-0.4%",
      "freeCashFlow": "-2.2 Mrd. $",
      "week52Range": "248,60 – 366,69 $",
      "dividendYield": "2,8%"
    },
    "profile": "CMS Energy Corporation ist im Bereich Utilities - Regulated Electric innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2026-10-12",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-16"
      },
      "timeline": [
        {
          "date": "2026-08-28",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-12",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-16",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Centene Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 52.4% (Limit 30%); Cash-Quote zu hoch: 88.0% (Limit 30%)). Die Branche (Healthcare Plans) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "30.7 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Healthcare Plans",
      "peRatio": "–",
      "evEbitda": "4.3",
      "epsGrowth": "–",
      "freeCashFlow": "9.6 Mrd. $",
      "week52Range": "260,63 – 310,98 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Centene Corporation ist im Bereich Healthcare Plans innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-04-14",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-25"
      },
      "timeline": [
        {
          "date": "2026-09-18",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-25",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-14",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "CenterPoint Energy, Inc (Holdin überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 89.0% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "27.7 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Electric",
      "peRatio": "25.0",
      "evEbitda": "13.5",
      "epsGrowth": "0.2%",
      "freeCashFlow": "-5.2 Mrd. $",
      "week52Range": "125,40 – 204,77 $",
      "dividendYield": "3,4%"
    },
    "profile": "CenterPoint Energy, Inc (Holdin ist im Bereich Utilities - Regulated Electric innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2027-04-11",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-30"
      },
      "timeline": [
        {
          "date": "2026-08-21",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-30",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-11",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Capital One Financial Corporati zählt zur ausgeschlossenen Branche Credit Services und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "128.2 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Credit Services",
      "peRatio": "11.5",
      "evEbitda": "–",
      "epsGrowth": "–",
      "freeCashFlow": "–",
      "week52Range": "127,54 – 250,91 $",
      "dividendYield": "3,9%"
    },
    "profile": "Capital One Financial Corporati ist im Bereich Credit Services innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-02-08",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-01"
      },
      "timeline": [
        {
          "date": "2026-09-17",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-01",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-02-08",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Coherent Corp. erfüllt aktuell alle geprüften Kriterien: Die Branche (Scientific & Technical Instruments) ist zulässig, Verschuldung (6.7%) und Cash-Quote (4.7%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "51.4 Mrd. $",
      "sector": "Technologie",
      "industry": "Scientific & Technical Instruments",
      "peRatio": "125.2",
      "evEbitda": "40.2",
      "epsGrowth": "–",
      "freeCashFlow": "-198 Mio. $",
      "week52Range": "358,21 – 553,97 $",
      "dividendYield": "3,3%"
    },
    "profile": "Coherent Corp. ist im Bereich Scientific & Technical Instruments innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-11-02",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-18"
      },
      "timeline": [
        {
          "date": "2026-09-18",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-12",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-02",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Coinbase Global, Inc. zählt zur ausgeschlossenen Branche Financial Data & Stock Exchanges und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "38.6 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Financial Data & Stock Exchanges",
      "peRatio": "–",
      "evEbitda": "52.1",
      "epsGrowth": "–",
      "freeCashFlow": "2.7 Mrd. $",
      "week52Range": "373,70 – 554,53 $",
      "dividendYield": "2,8%"
    },
    "profile": "Coinbase Global, Inc. ist im Bereich Financial Data & Stock Exchanges innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-05-24",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-14"
      },
      "timeline": [
        {
          "date": "2026-08-14",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-04",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-24",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "The Cooper Companies, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Instruments & Supplies) ist zulässig, Verschuldung (19.3%) und Cash-Quote (1.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "14.1 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Medical Instruments & Supplies",
      "peRatio": "61.3",
      "evEbitda": "18.8",
      "epsGrowth": "–",
      "freeCashFlow": "424 Mio. $",
      "week52Range": "27,21 – 58,55 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "The Cooper Companies, Inc. ist im Bereich Medical Instruments & Supplies innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2026-08-23",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-14"
      },
      "timeline": [
        {
          "date": "2026-08-23",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-08-31",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-14",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "ConocoPhillips erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas E&P) ist zulässig, Verschuldung (15.9%) und Cash-Quote (4.3%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "146.8 Mrd. $",
      "sector": "Energie",
      "industry": "Oil & Gas E&P",
      "peRatio": "20.4",
      "evEbitda": "7.0",
      "epsGrowth": "-0.2%",
      "freeCashFlow": "5.3 Mrd. $",
      "week52Range": "18,10 – 32,41 $",
      "dividendYield": "4,4%"
    },
    "profile": "ConocoPhillips ist im Bereich Oil & Gas E&P innerhalb des Sektors Energie tätig.",
    "events": {
      "agm": {
        "date": "2026-09-06",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-29"
      },
      "timeline": [
        {
          "date": "2026-08-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-06",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        }
      ]
    }
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
    "insight": "Cencora, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Distribution) ist zulässig, Verschuldung (24.9%) und Cash-Quote (3.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "60.6 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Medical Distribution",
      "peRatio": "23.9",
      "evEbitda": "13.9",
      "epsGrowth": "1.3%",
      "freeCashFlow": "-318 Mio. $",
      "week52Range": "223,31 – 390,80 $",
      "dividendYield": "3,2%"
    },
    "profile": "Cencora, Inc. ist im Bereich Medical Distribution innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2026-12-19",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-04"
      },
      "timeline": [
        {
          "date": "2026-08-25",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-04",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-12-19",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Costco Wholesale Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Discount Stores) ist zulässig, Verschuldung (2.4%) und Cash-Quote (2.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "422.1 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Discount Stores",
      "peRatio": "47.9",
      "evEbitda": "30.5",
      "epsGrowth": "0.5%",
      "freeCashFlow": "7.0 Mrd. $",
      "week52Range": "53,58 – 98,36 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Costco Wholesale Corporation ist im Bereich Discount Stores innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2026-08-16",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-17"
      },
      "timeline": [
        {
          "date": "2026-08-16",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-07",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-17",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Corpay, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 42.0% (Limit 30%)). Die Branche (Software - Infrastructure) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "25.0 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Infrastructure",
      "peRatio": "22.9",
      "evEbitda": "13.0",
      "epsGrowth": "0.5%",
      "freeCashFlow": "2.1 Mrd. $",
      "week52Range": "277,21 – 421,37 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Corpay, Inc. ist im Bereich Software - Infrastructure innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-10",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-24"
      },
      "timeline": [
        {
          "date": "2026-08-24",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-05",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-10",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Copart, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Business Services) ist zulässig, Verschuldung (0.3%) und Cash-Quote (15.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "28.1 Mrd. $",
      "sector": "Industrie",
      "industry": "Specialty Business Services",
      "peRatio": "18.1",
      "evEbitda": "11.7",
      "epsGrowth": "0.0%",
      "freeCashFlow": "1000 Mio. $",
      "week52Range": "377,03 – 536,85 $",
      "dividendYield": "3,1%"
    },
    "profile": "Copart, Inc. ist im Bereich Specialty Business Services innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-05-06",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-16"
      },
      "timeline": [
        {
          "date": "2026-09-16",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-12",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-06",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Camden Property Trust überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 44.4% (Limit 30%)). Die Branche (REIT - Residential) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "11.0 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Residential",
      "peRatio": "36.6",
      "evEbitda": "18.2",
      "epsGrowth": "-0.8%",
      "freeCashFlow": "140 Mio. $",
      "week52Range": "201,66 – 331,29 $",
      "dividendYield": "2,9%"
    },
    "profile": "Camden Property Trust ist im Bereich REIT - Residential innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2027-01-12",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-18"
      },
      "timeline": [
        {
          "date": "2026-09-19",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-18",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-12",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "CRH PLC überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 31.3% (Limit 30%)). Die Branche (Building Materials) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "63.2 Mrd. $",
      "sector": "Grundstoffe",
      "industry": "Building Materials",
      "peRatio": "16.8",
      "evEbitda": "10.5",
      "epsGrowth": "0.1%",
      "freeCashFlow": "2.0 Mrd. $",
      "week52Range": "169,15 – 317,16 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "CRH PLC ist im Bereich Building Materials innerhalb des Sektors Grundstoffe tätig.",
    "events": {
      "agm": {
        "date": "2026-10-27",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-27"
      },
      "timeline": [
        {
          "date": "2026-09-18",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-27",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-27",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Charles River Laboratories Inte erfüllt aktuell alle geprüften Kriterien: Die Branche (Diagnostics & Research) ist zulässig, Verschuldung (27.4%) und Cash-Quote (1.7%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "11.2 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Diagnostics & Research",
      "peRatio": "–",
      "evEbitda": "15.9",
      "epsGrowth": "–",
      "freeCashFlow": "510 Mio. $",
      "week52Range": "166,25 – 344,38 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Charles River Laboratories Inte ist im Bereich Diagnostics & Research innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2026-09-19",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-26"
      },
      "timeline": [
        {
          "date": "2026-08-30",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-19",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-26",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Salesforce, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (28.2%) und Cash-Quote (7.9%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "150.7 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Application",
      "peRatio": "21.3",
      "evEbitda": "14.1",
      "epsGrowth": "0.5%",
      "freeCashFlow": "16.6 Mrd. $",
      "week52Range": "65,70 – 85,98 $",
      "dividendYield": "3,8%"
    },
    "profile": "Salesforce, Inc. ist im Bereich Software - Application innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-10-31",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-28"
      },
      "timeline": [
        {
          "date": "2026-09-13",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-28",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-31",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "CrowdStrike Holdings, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Infrastructure) ist zulässig, Verschuldung (0.4%) und Cash-Quote (2.3%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "194.3 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Infrastructure",
      "peRatio": "–",
      "evEbitda": "3214.1",
      "epsGrowth": "–",
      "freeCashFlow": "1.9 Mrd. $",
      "week52Range": "221,69 – 352,10 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "CrowdStrike Holdings, Inc. ist im Bereich Software - Infrastructure innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-12-10",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-27"
      },
      "timeline": [
        {
          "date": "2026-10-12",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-27",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-12-10",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Cisco Systems, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Communication Equipment) ist zulässig, Verschuldung (7.2%) und Cash-Quote (3.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "457.2 Mrd. $",
      "sector": "Technologie",
      "industry": "Communication Equipment",
      "peRatio": "38.7",
      "evEbitda": "27.8",
      "epsGrowth": "0.4%",
      "freeCashFlow": "9.3 Mrd. $",
      "week52Range": "171,99 – 257,00 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Cisco Systems, Inc. ist im Bereich Communication Equipment innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-28",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-10"
      },
      "timeline": [
        {
          "date": "2026-09-19",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-10",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-28",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "CoStar Group, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Real Estate Services) ist zulässig, Verschuldung (9.9%) und Cash-Quote (10.9%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "11.7 Mrd. $",
      "sector": "Immobilien",
      "industry": "Real Estate Services",
      "peRatio": "159.8",
      "evEbitda": "29.3",
      "epsGrowth": "12.6%",
      "freeCashFlow": "413 Mio. $",
      "week52Range": "46,47 – 64,09 $",
      "dividendYield": "3,2%"
    },
    "profile": "CoStar Group, Inc. ist im Bereich Real Estate Services innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2026-09-09",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-13"
      },
      "timeline": [
        {
          "date": "2026-08-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-09",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-14",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        }
      ]
    }
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
    "insight": "CSX Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Railroads) ist zulässig, Verschuldung (20.8%) und Cash-Quote (1.5%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "93.4 Mrd. $",
      "sector": "Industrie",
      "industry": "Railroads",
      "peRatio": "29.3",
      "evEbitda": "16.3",
      "epsGrowth": "0.2%",
      "freeCashFlow": "2.0 Mrd. $",
      "week52Range": "20,72 – 35,22 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "CSX Corporation ist im Bereich Railroads innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-24",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-05"
      },
      "timeline": [
        {
          "date": "2026-10-05",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-05",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-24",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Cintas Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Business Services) ist zulässig, Verschuldung (3.3%) und Cash-Quote (0.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "81.9 Mrd. $",
      "sector": "Industrie",
      "industry": "Specialty Business Services",
      "peRatio": "41.7",
      "evEbitda": "28.1",
      "epsGrowth": "0.2%",
      "freeCashFlow": "1.5 Mrd. $",
      "week52Range": "218,79 – 378,15 $",
      "dividendYield": "2,6%"
    },
    "profile": "Cintas Corporation ist im Bereich Specialty Business Services innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-02-01",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-19"
      },
      "timeline": [
        {
          "date": "2026-08-19",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-17",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-02-01",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Cognizant Technology Solutions erfüllt aktuell alle geprüften Kriterien: Die Branche (Information Technology Services) ist zulässig, Verschuldung (8.0%) und Cash-Quote (4.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "26.2 Mrd. $",
      "sector": "Technologie",
      "industry": "Information Technology Services",
      "peRatio": "11.9",
      "evEbitda": "6.4",
      "epsGrowth": "0.0%",
      "freeCashFlow": "2.2 Mrd. $",
      "week52Range": "18,07 – 38,36 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Cognizant Technology Solutions ist im Bereich Information Technology Services innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-02-01",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-16"
      },
      "timeline": [
        {
          "date": "2026-09-26",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-16",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-02-01",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Corteva, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Agricultural Inputs) ist zulässig, Verschuldung (9.3%) und Cash-Quote (4.5%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "52.6 Mrd. $",
      "sector": "Grundstoffe",
      "industry": "Agricultural Inputs",
      "peRatio": "47.7",
      "evEbitda": "13.0",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "2.4 Mrd. $",
      "week52Range": "305,53 – 465,09 $",
      "dividendYield": "3,9%"
    },
    "profile": "Corteva, Inc. ist im Bereich Agricultural Inputs innerhalb des Sektors Grundstoffe tätig.",
    "events": {
      "agm": {
        "date": "2027-03-22",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-17"
      },
      "timeline": [
        {
          "date": "2026-08-27",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-17",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-03-22",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Carvana Co. erfüllt aktuell alle geprüften Kriterien: Die Branche (Auto & Truck Dealerships) ist zulässig, Verschuldung (6.1%) und Cash-Quote (3.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "92.8 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Auto & Truck Dealerships",
      "peRatio": "33.0",
      "evEbitda": "19.4",
      "epsGrowth": "0.6%",
      "freeCashFlow": "424 Mio. $",
      "week52Range": "283,71 – 376,22 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Carvana Co. ist im Bereich Auto & Truck Dealerships innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2026-12-11",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-25"
      },
      "timeline": [
        {
          "date": "2026-09-19",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-25",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-12-11",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "CVS Health Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 58.8% (Limit 30%)). Die Branche (Healthcare Plans) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "133.2 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Healthcare Plans",
      "peRatio": "45.8",
      "evEbitda": "13.0",
      "epsGrowth": "0.6%",
      "freeCashFlow": "5.2 Mrd. $",
      "week52Range": "172,15 – 254,03 $",
      "dividendYield": "3,6%"
    },
    "profile": "CVS Health Corporation ist im Bereich Healthcare Plans innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-01-05",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-02"
      },
      "timeline": [
        {
          "date": "2026-09-02",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-08",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-05",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Chevron Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas Integrated) ist zulässig, Verschuldung (0.0%) und Cash-Quote (0.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "392.0 Mrd. $",
      "sector": "Energie",
      "industry": "Oil & Gas Integrated",
      "peRatio": "18.9",
      "evEbitda": "–",
      "epsGrowth": "3.2%",
      "freeCashFlow": "–",
      "week52Range": "198,09 – 256,61 $",
      "dividendYield": "4,0%"
    },
    "profile": "Chevron Corporation ist im Bereich Oil & Gas Integrated innerhalb des Sektors Energie tätig.",
    "events": {
      "agm": {
        "date": "2026-09-06",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-31"
      },
      "timeline": [
        {
          "date": "2026-08-31",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-06",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-01",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        }
      ]
    }
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
    "insight": "Dominion Energy, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 87.8% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "60.8 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Electric",
      "peRatio": "23.9",
      "evEbitda": "15.8",
      "epsGrowth": "-0.6%",
      "freeCashFlow": "-9.6 Mrd. $",
      "week52Range": "30,25 – 39,00 $",
      "dividendYield": "1,1%"
    },
    "profile": "Dominion Energy, Inc. ist im Bereich Utilities - Regulated Electric innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2026-11-21",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-15"
      },
      "timeline": [
        {
          "date": "2026-09-15",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-16",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-21",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Delta Air Lines, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 36.7% (Limit 30%)). Die Branche (Airlines) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "57.5 Mrd. $",
      "sector": "Industrie",
      "industry": "Airlines",
      "peRatio": "14.5",
      "evEbitda": "9.8",
      "epsGrowth": "-0.3%",
      "freeCashFlow": "2.8 Mrd. $",
      "week52Range": "187,54 – 369,03 $",
      "dividendYield": "2,6%"
    },
    "profile": "Delta Air Lines, Inc. ist im Bereich Airlines innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-05-07",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-20"
      },
      "timeline": [
        {
          "date": "2026-09-20",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-24",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-07",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "DoorDash, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Internet Retail) ist zulässig, Verschuldung (3.8%) und Cash-Quote (6.5%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "85.5 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Internet Retail",
      "peRatio": "92.5",
      "evEbitda": "61.7",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "2.3 Mrd. $",
      "week52Range": "290,07 – 430,21 $",
      "dividendYield": "3,4%"
    },
    "profile": "DoorDash, Inc. ist im Bereich Internet Retail innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-05-30",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-20"
      },
      "timeline": [
        {
          "date": "2026-09-20",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-09",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-30",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "DuPont de Nemours, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Chemicals) ist zulässig, Verschuldung (17.4%) und Cash-Quote (3.8%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "18.5 Mrd. $",
      "sector": "Grundstoffe",
      "industry": "Specialty Chemicals",
      "peRatio": "120.2",
      "evEbitda": "13.8",
      "epsGrowth": "–",
      "freeCashFlow": "-125 Mio. $",
      "week52Range": "232,05 – 374,44 $",
      "dividendYield": "1,6%"
    },
    "profile": "DuPont de Nemours, Inc. ist im Bereich Specialty Chemicals innerhalb des Sektors Grundstoffe tätig.",
    "events": {
      "agm": {
        "date": "2026-11-01",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-25"
      },
      "timeline": [
        {
          "date": "2026-08-25",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-08",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-01",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Datadog, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (1.3%) und Cash-Quote (5.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "95.4 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Application",
      "peRatio": "669.9",
      "evEbitda": "2653.5",
      "epsGrowth": "1.0%",
      "freeCashFlow": "937 Mio. $",
      "week52Range": "107,05 – 230,32 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Datadog, Inc. ist im Bereich Software - Application innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-08-31",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-27"
      },
      "timeline": [
        {
          "date": "2026-08-27",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-31",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-19",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        }
      ]
    }
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
    "insight": "Deere & Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 30.3% (Limit 30%)). Die Branche (Farm & Heavy Construction Machinery) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "160.1 Mrd. $",
      "sector": "Industrie",
      "industry": "Farm & Heavy Construction Machinery",
      "peRatio": "33.6",
      "evEbitda": "23.2",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "1.1 Mrd. $",
      "week52Range": "111,24 – 168,19 $",
      "dividendYield": "0,4%"
    },
    "profile": "Deere & Company ist im Bereich Farm & Heavy Construction Machinery innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-02-13",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-29"
      },
      "timeline": [
        {
          "date": "2026-09-30",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-02-13",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Deckers Outdoor Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Footwear & Accessories) ist zulässig, Verschuldung (3.6%) und Cash-Quote (12.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "13.2 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Footwear & Accessories",
      "peRatio": "13.8",
      "evEbitda": "9.1",
      "epsGrowth": "0.0%",
      "freeCashFlow": "871 Mio. $",
      "week52Range": "19,20 – 32,84 $",
      "dividendYield": "2,4%"
    },
    "profile": "Deckers Outdoor Corporation ist im Bereich Footwear & Accessories innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2026-11-04",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-22"
      },
      "timeline": [
        {
          "date": "2026-09-22",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-26",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-04",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Dell Technologies Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Computer Hardware) ist zulässig, Verschuldung (12.2%) und Cash-Quote (4.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "261.9 Mrd. $",
      "sector": "Technologie",
      "industry": "Computer Hardware",
      "peRatio": "32.2",
      "evEbitda": "20.1",
      "epsGrowth": "2.8%",
      "freeCashFlow": "5.4 Mrd. $",
      "week52Range": "56,00 – 78,40 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Dell Technologies Inc. ist im Bereich Computer Hardware innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-08-19",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-19"
      },
      "timeline": [
        {
          "date": "2026-08-19",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-08",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-19",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Dollar General Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 56.4% (Limit 30%)). Die Branche (Discount Stores) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "28.0 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Discount Stores",
      "peRatio": "18.0",
      "evEbitda": "12.5",
      "epsGrowth": "0.1%",
      "freeCashFlow": "1.9 Mrd. $",
      "week52Range": "186,40 – 333,72 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Dollar General Corporation ist im Bereich Discount Stores innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2026-08-31",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-11"
      },
      "timeline": [
        {
          "date": "2026-08-11",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-30",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-08-31",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Quest Diagnostics Incorporated erfüllt aktuell alle geprüften Kriterien: Die Branche (Diagnostics & Research) ist zulässig, Verschuldung (24.9%) und Cash-Quote (2.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "25.7 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Diagnostics & Research",
      "peRatio": "24.8",
      "evEbitda": "14.1",
      "epsGrowth": "0.1%",
      "freeCashFlow": "910 Mio. $",
      "week52Range": "210,05 – 370,68 $",
      "dividendYield": "0,6%"
    },
    "profile": "Quest Diagnostics Incorporated ist im Bereich Diagnostics & Research innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2026-11-14",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-10"
      },
      "timeline": [
        {
          "date": "2026-10-10",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-11",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-14",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "D.R. Horton, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Residential Construction) ist zulässig, Verschuldung (18.0%) und Cash-Quote (5.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "40.0 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Residential Construction",
      "peRatio": "13.6",
      "evEbitda": "11.1",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "2.4 Mrd. $",
      "week52Range": "209,76 – 425,43 $",
      "dividendYield": "4,2%"
    },
    "profile": "D.R. Horton, Inc. ist im Bereich Residential Construction innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-03-09",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-22"
      },
      "timeline": [
        {
          "date": "2026-08-22",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-20",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-09",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Danaher Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Diagnostics & Research) ist zulässig, Verschuldung (20.3%) und Cash-Quote (3.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "137.1 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Diagnostics & Research",
      "peRatio": "34.7",
      "evEbitda": "20.0",
      "epsGrowth": "0.6%",
      "freeCashFlow": "4.3 Mrd. $",
      "week52Range": "154,73 – 300,22 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Danaher Corporation ist im Bereich Diagnostics & Research innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-04-02",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-27"
      },
      "timeline": [
        {
          "date": "2026-08-27",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-13",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-04-02",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Walt Disney Company (The) erfüllt aktuell alle geprüften Kriterien: Die Branche (Entertainment) ist zulässig, Verschuldung (28.4%) und Cash-Quote (3.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "167.0 Mrd. $",
      "sector": "Kommunikation",
      "industry": "Entertainment",
      "peRatio": "15.4",
      "evEbitda": "10.9",
      "epsGrowth": "-0.3%",
      "freeCashFlow": "3.8 Mrd. $",
      "week52Range": "96,70 – 174,05 $",
      "dividendYield": "2,1%"
    },
    "profile": "Walt Disney Company (The) ist im Bereich Entertainment innerhalb des Sektors Kommunikation tätig.",
    "events": {
      "agm": {
        "date": "2027-03-23",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-06"
      },
      "timeline": [
        {
          "date": "2026-09-06",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-23",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Digital Realty Trust, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (REIT - Specialty) ist zulässig, Verschuldung (28.0%) und Cash-Quote (2.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "70.9 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Specialty",
      "peRatio": "238.6",
      "evEbitda": "28.0",
      "epsGrowth": "-0.6%",
      "freeCashFlow": "–",
      "week52Range": "335,36 – 423,81 $",
      "dividendYield": "4,1%"
    },
    "profile": "Digital Realty Trust, Inc. ist im Bereich REIT - Specialty innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2026-12-16",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-04"
      },
      "timeline": [
        {
          "date": "2026-10-04",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-09",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-12-16",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Dollar Tree, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 31.1% (Limit 30%)). Die Branche (Discount Stores) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "24.4 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Discount Stores",
      "peRatio": "20.4",
      "evEbitda": "12.9",
      "epsGrowth": "0.1%",
      "freeCashFlow": "1.4 Mrd. $",
      "week52Range": "225,18 – 293,26 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Dollar Tree, Inc. ist im Bereich Discount Stores innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2026-08-31",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-28"
      },
      "timeline": [
        {
          "date": "2026-08-21",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-08-31",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-28",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Healthpeak Properties, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 71.2% (Limit 30%)). Die Branche (REIT - Healthcare Facilities) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "15.1 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Healthcare Facilities",
      "peRatio": "68.2",
      "evEbitda": "16.7",
      "epsGrowth": "3.6%",
      "freeCashFlow": "1.1 Mrd. $",
      "week52Range": "200,46 – 321,94 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Healthpeak Properties, Inc. ist im Bereich REIT - Healthcare Facilities innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2026-08-19",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-14"
      },
      "timeline": [
        {
          "date": "2026-08-19",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-08",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-14",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Dover Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (11.8%) und Cash-Quote (6.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "27.6 Mrd. $",
      "sector": "Industrie",
      "industry": "Specialty Industrial Machinery",
      "peRatio": "24.7",
      "evEbitda": "15.2",
      "epsGrowth": "0.1%",
      "freeCashFlow": "906 Mio. $",
      "week52Range": "168,98 – 257,70 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Dover Corporation ist im Bereich Specialty Industrial Machinery innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-02-03",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-26"
      },
      "timeline": [
        {
          "date": "2026-09-17",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-26",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-02-03",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Dow Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 88.8% (Limit 30%)). Die Branche (Chemicals) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "21.9 Mrd. $",
      "sector": "Grundstoffe",
      "industry": "Chemicals",
      "peRatio": "–",
      "evEbitda": "9.7",
      "epsGrowth": "–",
      "freeCashFlow": "238 Mio. $",
      "week52Range": "217,66 – 375,00 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Dow Inc. ist im Bereich Chemicals innerhalb des Sektors Grundstoffe tätig.",
    "events": {
      "agm": {
        "date": "2027-05-21",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-01"
      },
      "timeline": [
        {
          "date": "2026-09-01",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-03",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-21",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Domino's Pizza Inc überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 44.6% (Limit 30%)). Die Branche (Restaurants) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "11.5 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Restaurants",
      "peRatio": "19.7",
      "evEbitda": "16.1",
      "epsGrowth": "0.1%",
      "freeCashFlow": "531 Mio. $",
      "week52Range": "107,93 – 147,91 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Domino's Pizza Inc ist im Bereich Restaurants innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2026-11-28",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-29"
      },
      "timeline": [
        {
          "date": "2026-08-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-28",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Darden Restaurants, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 34.5% (Limit 30%)). Die Branche (Restaurants) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "23.3 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Restaurants",
      "peRatio": "19.5",
      "evEbitda": "14.7",
      "epsGrowth": "0.4%",
      "freeCashFlow": "791 Mio. $",
      "week52Range": "64,46 – 113,98 $",
      "dividendYield": "0,6%"
    },
    "profile": "Darden Restaurants, Inc. ist im Bereich Restaurants innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2026-09-30",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-24"
      },
      "timeline": [
        {
          "date": "2026-08-24",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-30",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-30",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        }
      ]
    }
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
    "insight": "DTE Energy Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 94.3% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "29.5 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Electric",
      "peRatio": "22.5",
      "evEbitda": "15.8",
      "epsGrowth": "0.2%",
      "freeCashFlow": "-2.6 Mrd. $",
      "week52Range": "198,00 – 289,75 $",
      "dividendYield": "4,1%"
    },
    "profile": "DTE Energy Company ist im Bereich Utilities - Regulated Electric innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2026-12-27",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-11"
      },
      "timeline": [
        {
          "date": "2026-08-23",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-11",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-12-27",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Duke Energy Corporation (Holdin überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 93.3% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "97.8 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Electric",
      "peRatio": "19.3",
      "evEbitda": "11.5",
      "epsGrowth": "0.1%",
      "freeCashFlow": "-2.2 Mrd. $",
      "week52Range": "79,61 – 141,53 $",
      "dividendYield": "2,8%"
    },
    "profile": "Duke Energy Corporation (Holdin ist im Bereich Utilities - Regulated Electric innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2027-03-01",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-04"
      },
      "timeline": [
        {
          "date": "2026-08-21",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-04",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-03-01",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "DaVita Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 85.8% (Limit 30%)). Die Branche (Medical Care Facilities) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "15.4 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Medical Care Facilities",
      "peRatio": "23.2",
      "evEbitda": "10.7",
      "epsGrowth": "0.4%",
      "freeCashFlow": "1000 Mio. $",
      "week52Range": "108,04 – 176,56 $",
      "dividendYield": "3,8%"
    },
    "profile": "DaVita Inc. ist im Bereich Medical Care Facilities innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2026-10-15",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-16"
      },
      "timeline": [
        {
          "date": "2026-08-16",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-12",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-15",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Devon Energy Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas E&P) ist zulässig, Verschuldung (16.7%) und Cash-Quote (3.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "52.1 Mrd. $",
      "sector": "Energie",
      "industry": "Oil & Gas E&P",
      "peRatio": "12.6",
      "evEbitda": "5.2",
      "epsGrowth": "-0.8%",
      "freeCashFlow": "1.6 Mrd. $",
      "week52Range": "108,22 – 218,19 $",
      "dividendYield": "2,8%"
    },
    "profile": "Devon Energy Corporation ist im Bereich Oil & Gas E&P innerhalb des Sektors Energie tätig.",
    "events": {
      "agm": {
        "date": "2026-09-01",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-13"
      },
      "timeline": [
        {
          "date": "2026-08-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-01",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-12",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        }
      ]
    }
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
    "insight": "DexCom, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Devices) ist zulässig, Verschuldung (4.4%) und Cash-Quote (6.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "31.5 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Medical Devices",
      "peRatio": "33.0",
      "evEbitda": "22.1",
      "epsGrowth": "0.4%",
      "freeCashFlow": "1.0 Mrd. $",
      "week52Range": "162,49 – 268,80 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "DexCom, Inc. ist im Bereich Medical Devices innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-03-26",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-28"
      },
      "timeline": [
        {
          "date": "2026-09-28",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-14",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-26",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Electronic Arts Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Electronic Gaming & Multimedia) ist zulässig, Verschuldung (3.5%) und Cash-Quote (5.7%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "52.6 Mrd. $",
      "sector": "Kommunikation",
      "industry": "Electronic Gaming & Multimedia",
      "peRatio": "60.0",
      "evEbitda": "34.7",
      "epsGrowth": "0.9%",
      "freeCashFlow": "2.2 Mrd. $",
      "week52Range": "219,58 – 506,45 $",
      "dividendYield": "2,8%"
    },
    "profile": "Electronic Arts Inc. ist im Bereich Electronic Gaming & Multimedia innerhalb des Sektors Kommunikation tätig.",
    "events": {
      "agm": {
        "date": "2027-04-05",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-13"
      },
      "timeline": [
        {
          "date": "2026-10-06",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-05",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "eBay Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Internet Retail) ist zulässig, Verschuldung (14.2%) und Cash-Quote (7.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "50.6 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Internet Retail",
      "peRatio": "26.3",
      "evEbitda": "18.1",
      "epsGrowth": "0.1%",
      "freeCashFlow": "1.2 Mrd. $",
      "week52Range": "235,49 – 317,40 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "eBay Inc. ist im Bereich Internet Retail innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2026-09-14",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-21"
      },
      "timeline": [
        {
          "date": "2026-08-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-14",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-21",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "EchoStar Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 120.0% (Limit 30%)). Die Branche (Telecom Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "24.4 Mrd. $",
      "sector": "Kommunikation",
      "industry": "Telecom Services",
      "peRatio": "–",
      "evEbitda": "32.8",
      "epsGrowth": "–",
      "freeCashFlow": "-458 Mio. $",
      "week52Range": "340,20 – 416,65 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "EchoStar Corporation ist im Bereich Telecom Services innerhalb des Sektors Kommunikation tätig.",
    "events": {
      "agm": {
        "date": "2026-10-29",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-08"
      },
      "timeline": [
        {
          "date": "2026-09-23",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-08",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-29",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Ecolab Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Chemicals) ist zulässig, Verschuldung (17.6%) und Cash-Quote (6.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "78.1 Mrd. $",
      "sector": "Grundstoffe",
      "industry": "Specialty Chemicals",
      "peRatio": "37.3",
      "evEbitda": "20.9",
      "epsGrowth": "0.0%",
      "freeCashFlow": "–",
      "week52Range": "113,70 – 175,29 $",
      "dividendYield": "1,2%"
    },
    "profile": "Ecolab Inc. ist im Bereich Specialty Chemicals innerhalb des Sektors Grundstoffe tätig.",
    "events": {
      "agm": {
        "date": "2026-10-22",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-14"
      },
      "timeline": [
        {
          "date": "2026-09-11",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-14",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-22",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Consolidated Edison, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 67.7% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "40.1 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Electric",
      "peRatio": "18.4",
      "evEbitda": "11.2",
      "epsGrowth": "0.1%",
      "freeCashFlow": "-833 Mio. $",
      "week52Range": "296,74 – 416,85 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Consolidated Edison, Inc. ist im Bereich Utilities - Regulated Electric innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2026-10-14",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-12"
      },
      "timeline": [
        {
          "date": "2026-09-12",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-14",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-14",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        }
      ]
    }
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
    "insight": "Equifax, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Consulting Services) ist zulässig, Verschuldung (27.0%) und Cash-Quote (0.8%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "20.3 Mrd. $",
      "sector": "Industrie",
      "industry": "Consulting Services",
      "peRatio": "30.3",
      "evEbitda": "13.4",
      "epsGrowth": "0.0%",
      "freeCashFlow": "948 Mio. $",
      "week52Range": "358,26 – 549,89 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Equifax, Inc. ist im Bereich Consulting Services innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-02-27",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-27"
      },
      "timeline": [
        {
          "date": "2026-09-04",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-27",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-02-27",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Everest Group, Ltd. zählt zur ausgeschlossenen Branche Insurance - Reinsurance und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "14.5 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Insurance - Reinsurance",
      "peRatio": "7.9",
      "evEbitda": "–",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "2.1 Mrd. $",
      "week52Range": "221,80 – 348,14 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Everest Group, Ltd. ist im Bereich Insurance - Reinsurance innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-01-23",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-19"
      },
      "timeline": [
        {
          "date": "2026-09-07",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-19",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-23",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Edison International überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 154.2% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "28.2 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Electric",
      "peRatio": "7.6",
      "evEbitda": "8.2",
      "epsGrowth": "0.6%",
      "freeCashFlow": "82 Mio. $",
      "week52Range": "247,15 – 550,11 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Edison International ist im Bereich Utilities - Regulated Electric innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2027-02-05",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-22"
      },
      "timeline": [
        {
          "date": "2026-08-21",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-08-22",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-02-05",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Estee Lauder Companies, Inc. (T überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 30.6% (Limit 30%)). Die Branche (Household & Personal Products) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "30.4 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Household & Personal Products",
      "peRatio": "–",
      "evEbitda": "15.5",
      "epsGrowth": "-0.5%",
      "freeCashFlow": "1.8 Mrd. $",
      "week52Range": "116,96 – 207,27 $",
      "dividendYield": "2,9%"
    },
    "profile": "Estee Lauder Companies, Inc. (T ist im Bereich Household & Personal Products innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2027-04-10",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-13"
      },
      "timeline": [
        {
          "date": "2026-09-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-26",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-04-10",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Elevance Health, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 38.1% (Limit 30%); Cash-Quote zu hoch: 46.0% (Limit 30%)). Die Branche (Healthcare Plans) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "81.5 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Healthcare Plans",
      "peRatio": "16.6",
      "evEbitda": "9.0",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "4.3 Mrd. $",
      "week52Range": "159,19 – 258,69 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Elevance Health, Inc. ist im Bereich Healthcare Plans innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2026-08-22",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-25"
      },
      "timeline": [
        {
          "date": "2026-08-22",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-08-30",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-25",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "EMCOR Group, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Engineering & Construction) ist zulässig, Verschuldung (1.6%) und Cash-Quote (2.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "35.2 Mrd. $",
      "sector": "Industrie",
      "industry": "Engineering & Construction",
      "peRatio": "24.8",
      "evEbitda": "17.5",
      "epsGrowth": "0.3%",
      "freeCashFlow": "978 Mio. $",
      "week52Range": "88,01 – 151,42 $",
      "dividendYield": "1,2%"
    },
    "profile": "EMCOR Group, Inc. ist im Bereich Engineering & Construction innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-04-27",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-23"
      },
      "timeline": [
        {
          "date": "2026-09-28",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-23",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-27",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Emerson Electric Company erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (16.8%) und Cash-Quote (2.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "83.9 Mrd. $",
      "sector": "Industrie",
      "industry": "Specialty Industrial Machinery",
      "peRatio": "34.8",
      "evEbitda": "16.4",
      "epsGrowth": "0.3%",
      "freeCashFlow": "3.3 Mrd. $",
      "week52Range": "316,80 – 457,60 $",
      "dividendYield": "0,6%"
    },
    "profile": "Emerson Electric Company ist im Bereich Specialty Industrial Machinery innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-09-20",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-16"
      },
      "timeline": [
        {
          "date": "2026-08-16",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-20",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "EOG Resources, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas E&P) ist zulässig, Verschuldung (10.5%) und Cash-Quote (4.9%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "79.2 Mrd. $",
      "sector": "Energie",
      "industry": "Oil & Gas E&P",
      "peRatio": "14.6",
      "evEbitda": "6.6",
      "epsGrowth": "0.4%",
      "freeCashFlow": "2.9 Mrd. $",
      "week52Range": "46,66 – 60,66 $",
      "dividendYield": "1,0%"
    },
    "profile": "EOG Resources, Inc. ist im Bereich Oil & Gas E&P innerhalb des Sektors Energie tätig.",
    "events": {
      "agm": {
        "date": "2026-08-26",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-18"
      },
      "timeline": [
        {
          "date": "2026-08-18",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-26",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-24",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        }
      ]
    }
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
    "insight": "Equinix, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (REIT - Specialty) ist zulässig, Verschuldung (23.2%) und Cash-Quote (1.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "100.6 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Specialty",
      "peRatio": "65.8",
      "evEbitda": "27.1",
      "epsGrowth": "0.3%",
      "freeCashFlow": "3.8 Mrd. $",
      "week52Range": "289,55 – 467,13 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Equinix, Inc. ist im Bereich REIT - Specialty innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2027-05-09",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-26"
      },
      "timeline": [
        {
          "date": "2026-08-26",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-08",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-09",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Equity Residential überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 33.4% (Limit 30%)). Die Branche (REIT - Residential) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "25.7 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Residential",
      "peRatio": "28.9",
      "evEbitda": "17.9",
      "epsGrowth": "-0.4%",
      "freeCashFlow": "1.4 Mrd. $",
      "week52Range": "283,37 – 481,72 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Equity Residential ist im Bereich REIT - Residential innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2026-12-28",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-02"
      },
      "timeline": [
        {
          "date": "2026-08-27",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-02",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-12-28",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "EQT Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas E&P) ist zulässig, Verschuldung (17.0%) und Cash-Quote (0.3%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "33.3 Mrd. $",
      "sector": "Energie",
      "industry": "Oil & Gas E&P",
      "peRatio": "12.4",
      "evEbitda": "6.1",
      "epsGrowth": "-0.7%",
      "freeCashFlow": "2.5 Mrd. $",
      "week52Range": "20,21 – 37,38 $",
      "dividendYield": "3,1%"
    },
    "profile": "EQT Corporation ist im Bereich Oil & Gas E&P innerhalb des Sektors Energie tätig.",
    "events": {
      "agm": {
        "date": "2027-05-15",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-30"
      },
      "timeline": [
        {
          "date": "2026-08-30",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-10",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-15",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Erie Indemnity Company zählt zur ausgeschlossenen Branche Insurance Brokers und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "12.7 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Insurance Brokers",
      "peRatio": "22.0",
      "evEbitda": "14.9",
      "epsGrowth": "0.0%",
      "freeCashFlow": "481 Mio. $",
      "week52Range": "93,89 – 141,48 $",
      "dividendYield": "1,1%"
    },
    "profile": "Erie Indemnity Company ist im Bereich Insurance Brokers innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-04-28",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-28"
      },
      "timeline": [
        {
          "date": "2026-09-04",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-28",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-28",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Eversource Energy (D/B/A) überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 112.7% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "26.9 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Electric",
      "peRatio": "15.3",
      "evEbitda": "11.6",
      "epsGrowth": "-0.9%",
      "freeCashFlow": "–",
      "week52Range": "60,47 – 89,12 $",
      "dividendYield": "0,5%"
    },
    "profile": "Eversource Energy (D/B/A) ist im Bereich Utilities - Regulated Electric innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2027-03-06",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-17"
      },
      "timeline": [
        {
          "date": "2026-10-09",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-17",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-03-06",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Essex Property Trust, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 34.5% (Limit 30%)). Die Branche (REIT - Residential) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "19.6 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Residential",
      "peRatio": "44.3",
      "evEbitda": "20.4",
      "epsGrowth": "-0.7%",
      "freeCashFlow": "1.0 Mrd. $",
      "week52Range": "80,16 – 123,53 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Essex Property Trust, Inc. ist im Bereich REIT - Residential innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2026-12-19",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-25"
      },
      "timeline": [
        {
          "date": "2026-08-25",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-30",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-12-19",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Eaton Corporation, PLC erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (13.2%) und Cash-Quote (0.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "161.2 Mrd. $",
      "sector": "Industrie",
      "industry": "Specialty Industrial Machinery",
      "peRatio": "40.7",
      "evEbitda": "27.4",
      "epsGrowth": "-0.2%",
      "freeCashFlow": "3.1 Mrd. $",
      "week52Range": "329,61 – 528,17 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Eaton Corporation, PLC ist im Bereich Specialty Industrial Machinery innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-05-30",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-11"
      },
      "timeline": [
        {
          "date": "2026-08-11",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-22",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-30",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Entergy Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 69.0% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "50.2 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Electric",
      "peRatio": "27.5",
      "evEbitda": "14.7",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "-4.4 Mrd. $",
      "week52Range": "161,27 – 182,08 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Entergy Corporation ist im Bereich Utilities - Regulated Electric innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2027-03-31",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-23"
      },
      "timeline": [
        {
          "date": "2026-08-27",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-23",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-03-31",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Evergy, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 83.0% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "19.1 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Electric",
      "peRatio": "22.1",
      "evEbitda": "12.6",
      "epsGrowth": "0.2%",
      "freeCashFlow": "-1.1 Mrd. $",
      "week52Range": "202,00 – 342,22 $",
      "dividendYield": "2,8%"
    },
    "profile": "Evergy, Inc. ist im Bereich Utilities - Regulated Electric innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2026-11-12",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-27"
      },
      "timeline": [
        {
          "date": "2026-09-14",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-27",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-12",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Edwards Lifesciences Corporatio erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Devices) ist zulässig, Verschuldung (1.4%) und Cash-Quote (7.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "49.6 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Medical Devices",
      "peRatio": "51.2",
      "evEbitda": "23.4",
      "epsGrowth": "-0.3%",
      "freeCashFlow": "–",
      "week52Range": "197,07 – 326,50 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Edwards Lifesciences Corporatio ist im Bereich Medical Devices innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-04-22",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-15"
      },
      "timeline": [
        {
          "date": "2026-08-15",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-13",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-04-22",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Exelon Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 111.6% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "47.2 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Electric",
      "peRatio": "16.8",
      "evEbitda": "11.7",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "-2.7 Mrd. $",
      "week52Range": "219,39 – 300,64 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Exelon Corporation ist im Bereich Utilities - Regulated Electric innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2026-11-14",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-06"
      },
      "timeline": [
        {
          "date": "2026-09-06",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-04",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-14",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Expand Energy Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas E&P) ist zulässig, Verschuldung (16.6%) und Cash-Quote (2.9%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "22.5 Mrd. $",
      "sector": "Energie",
      "industry": "Oil & Gas E&P",
      "peRatio": "8.1",
      "evEbitda": "3.7",
      "epsGrowth": "-0.5%",
      "freeCashFlow": "1.5 Mrd. $",
      "week52Range": "16,81 – 23,95 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Expand Energy Corporation ist im Bereich Oil & Gas E&P innerhalb des Sektors Energie tätig.",
    "events": {
      "agm": {
        "date": "2027-04-23",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-13"
      },
      "timeline": [
        {
          "date": "2026-10-09",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-23",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Expeditors International of Was erfüllt aktuell alle geprüften Kriterien: Die Branche (Integrated Freight & Logistics) ist zulässig, Verschuldung (2.6%) und Cash-Quote (6.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "22.0 Mrd. $",
      "sector": "Industrie",
      "industry": "Integrated Freight & Logistics",
      "peRatio": "27.1",
      "evEbitda": "18.6",
      "epsGrowth": "0.2%",
      "freeCashFlow": "783 Mio. $",
      "week52Range": "112,25 – 213,27 $",
      "dividendYield": "3,3%"
    },
    "profile": "Expeditors International of Was ist im Bereich Integrated Freight & Logistics innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-11-03",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-13"
      },
      "timeline": [
        {
          "date": "2026-08-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-21",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-03",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Expedia Group, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Travel Services) ist zulässig, Verschuldung (13.3%) und Cash-Quote (16.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "35.4 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Travel Services",
      "peRatio": "26.0",
      "evEbitda": "13.7",
      "epsGrowth": "–",
      "freeCashFlow": "3.5 Mrd. $",
      "week52Range": "47,56 – 88,32 $",
      "dividendYield": "1,1%"
    },
    "profile": "Expedia Group, Inc. ist im Bereich Travel Services innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-03-27",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-18"
      },
      "timeline": [
        {
          "date": "2026-09-10",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-18",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-03-27",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Extra Space Storage Inc überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 44.1% (Limit 30%)). Die Branche (REIT - Industrial) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "32.7 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Industrial",
      "peRatio": "32.7",
      "evEbitda": "19.9",
      "epsGrowth": "0.1%",
      "freeCashFlow": "–",
      "week52Range": "86,91 – 150,82 $",
      "dividendYield": "3,7%"
    },
    "profile": "Extra Space Storage Inc ist im Bereich REIT - Industrial innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2026-12-15",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-08"
      },
      "timeline": [
        {
          "date": "2026-10-08",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-12",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-12-15",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Ford Motor Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 279.0% (Limit 30%); Cash-Quote zu hoch: 37.8% (Limit 30%)). Die Branche (Auto Manufacturers) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "58.5 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Auto Manufacturers",
      "peRatio": "–",
      "evEbitda": "26.1",
      "epsGrowth": "–",
      "freeCashFlow": "-7.9 Mrd. $",
      "week52Range": "173,17 – 301,64 $",
      "dividendYield": "0,9%"
    },
    "profile": "Ford Motor Company ist im Bereich Auto Manufacturers innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-01-16",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-19"
      },
      "timeline": [
        {
          "date": "2026-09-27",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-19",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-16",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Diamondback Energy, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas E&P) ist zulässig, Verschuldung (24.3%) und Cash-Quote (0.3%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "57.1 Mrd. $",
      "sector": "Energie",
      "industry": "Oil & Gas E&P",
      "peRatio": "209.2",
      "evEbitda": "7.6",
      "epsGrowth": "-1.0%",
      "freeCashFlow": "1.4 Mrd. $",
      "week52Range": "155,01 – 274,25 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Diamondback Energy, Inc. ist im Bereich Oil & Gas E&P innerhalb des Sektors Energie tätig.",
    "events": {
      "agm": {
        "date": "2026-11-05",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-12"
      },
      "timeline": [
        {
          "date": "2026-09-12",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-28",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-05",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Fastenal Company erfüllt aktuell alle geprüften Kriterien: Die Branche (Industrial Distribution) ist zulässig, Verschuldung (0.8%) und Cash-Quote (0.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "54.7 Mrd. $",
      "sector": "Industrie",
      "industry": "Industrial Distribution",
      "peRatio": "40.8",
      "evEbitda": "28.1",
      "epsGrowth": "0.1%",
      "freeCashFlow": "916 Mio. $",
      "week52Range": "155,07 – 316,98 $",
      "dividendYield": "1,5%"
    },
    "profile": "Fastenal Company ist im Bereich Industrial Distribution innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-11-25",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-26"
      },
      "timeline": [
        {
          "date": "2026-09-09",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-26",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-25",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Freeport-McMoRan, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Copper) ist zulässig, Verschuldung (11.5%) und Cash-Quote (4.5%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "90.0 Mrd. $",
      "sector": "Grundstoffe",
      "industry": "Copper",
      "peRatio": "30.7",
      "evEbitda": "11.1",
      "epsGrowth": "0.3%",
      "freeCashFlow": "2.2 Mrd. $",
      "week52Range": "145,79 – 252,99 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Freeport-McMoRan, Inc. ist im Bereich Copper innerhalb des Sektors Grundstoffe tätig.",
    "events": {
      "agm": {
        "date": "2026-11-23",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-09"
      },
      "timeline": [
        {
          "date": "2026-10-09",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-09",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-23",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "FactSet Research Systems Inc. zählt zur ausgeschlossenen Branche Financial Data & Stock Exchanges und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "9.4 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Financial Data & Stock Exchanges",
      "peRatio": "17.3",
      "evEbitda": "11.4",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "621 Mio. $",
      "week52Range": "225,75 – 435,61 $",
      "dividendYield": "1,8%"
    },
    "profile": "FactSet Research Systems Inc. ist im Bereich Financial Data & Stock Exchanges innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-11-18",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-19"
      },
      "timeline": [
        {
          "date": "2026-08-24",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-19",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-18",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "FedEx Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 59.0% (Limit 30%)). Die Branche (Integrated Freight & Logistics) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "72.7 Mrd. $",
      "sector": "Industrie",
      "industry": "Integrated Freight & Logistics",
      "peRatio": "16.6",
      "evEbitda": "8.6",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "5.7 Mrd. $",
      "week52Range": "281,04 – 349,67 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "FedEx Corporation ist im Bereich Integrated Freight & Logistics innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-11-16",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-21"
      },
      "timeline": [
        {
          "date": "2026-08-21",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-21",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-16",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "FedEx Freight Holding Company, erfüllt aktuell alle geprüften Kriterien: Die Branche (Integrated Freight & Logistics) ist zulässig, Verschuldung (25.6%) und Cash-Quote (0.5%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "20.9 Mrd. $",
      "sector": "Industrie",
      "industry": "Integrated Freight & Logistics",
      "peRatio": "30.9",
      "evEbitda": "3.4",
      "epsGrowth": "–",
      "freeCashFlow": "–",
      "week52Range": "93,09 – 140,72 $",
      "dividendYield": "1,6%"
    },
    "profile": "FedEx Freight Holding Company, ist im Bereich Integrated Freight & Logistics innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-25",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-02"
      },
      "timeline": [
        {
          "date": "2026-09-04",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-02",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-25",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "FirstEnergy Corp. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 103.7% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "27.9 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Electric",
      "peRatio": "25.8",
      "evEbitda": "10.8",
      "epsGrowth": "0.1%",
      "freeCashFlow": "-2.0 Mrd. $",
      "week52Range": "88,08 – 128,01 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "FirstEnergy Corp. ist im Bereich Utilities - Regulated Electric innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2027-03-17",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-29"
      },
      "timeline": [
        {
          "date": "2026-09-16",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-03-17",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "F5, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Infrastructure) ist zulässig, Verschuldung (1.0%) und Cash-Quote (7.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "22.9 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Infrastructure",
      "peRatio": "32.1",
      "evEbitda": "23.2",
      "epsGrowth": "0.1%",
      "freeCashFlow": "752 Mio. $",
      "week52Range": "86,06 – 127,71 $",
      "dividendYield": "4,3%"
    },
    "profile": "F5, Inc. ist im Bereich Software - Infrastructure innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-07",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-01"
      },
      "timeline": [
        {
          "date": "2026-09-10",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-01",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-07",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Fair Isaac Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (23.1%) und Cash-Quote (1.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "24.3 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Application",
      "peRatio": "32.5",
      "evEbitda": "23.4",
      "epsGrowth": "0.4%",
      "freeCashFlow": "774 Mio. $",
      "week52Range": "91,53 – 202,78 $",
      "dividendYield": "4,2%"
    },
    "profile": "Fair Isaac Corporation ist im Bereich Software - Application innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-12-22",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-24"
      },
      "timeline": [
        {
          "date": "2026-08-24",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-01",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-12-22",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Fidelity National Information S überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 91.4% (Limit 30%)). Die Branche (Information Technology Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "23.1 Mrd. $",
      "sector": "Technologie",
      "industry": "Information Technology Services",
      "peRatio": "8.7",
      "evEbitda": "13.2",
      "epsGrowth": "30.4%",
      "freeCashFlow": "2.4 Mrd. $",
      "week52Range": "143,09 – 278,24 $",
      "dividendYield": "3,3%"
    },
    "profile": "Fidelity National Information S ist im Bereich Information Technology Services innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-09-12",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-14"
      },
      "timeline": [
        {
          "date": "2026-08-25",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-12",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-14",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Fiserv, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Sonstige) ist zulässig, Verschuldung (0.0%) und Cash-Quote (0.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "28.8 Mrd. $",
      "sector": "Sonstige",
      "industry": "",
      "peRatio": "9.1",
      "evEbitda": "–",
      "epsGrowth": "–",
      "freeCashFlow": "–",
      "week52Range": "38,28 – 76,55 $",
      "dividendYield": "1,2%"
    },
    "profile": "Fiserv, Inc. ist im Bereich  innerhalb des Sektors Sonstige tätig.",
    "events": {
      "agm": {
        "date": "2027-03-16",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-25"
      },
      "timeline": [
        {
          "date": "2026-08-25",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-25",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-16",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Fifth Third Bancorp zählt zur ausgeschlossenen Branche Banks - Regional und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "51.2 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Banks - Regional",
      "peRatio": "19.0",
      "evEbitda": "–",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "–",
      "week52Range": "163,07 – 301,06 $",
      "dividendYield": "2,5%"
    },
    "profile": "Fifth Third Bancorp ist im Bereich Banks - Regional innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-12-29",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-12"
      },
      "timeline": [
        {
          "date": "2026-08-12",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-12-29",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Comfort Systems USA, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Engineering & Construction) ist zulässig, Verschuldung (0.5%) und Cash-Quote (0.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "60.9 Mrd. $",
      "sector": "Industrie",
      "industry": "Engineering & Construction",
      "peRatio": "42.6",
      "evEbitda": "31.5",
      "epsGrowth": "0.4%",
      "freeCashFlow": "1.8 Mrd. $",
      "week52Range": "145,58 – 319,84 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Comfort Systems USA, Inc. ist im Bereich Engineering & Construction innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-03-24",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-08"
      },
      "timeline": [
        {
          "date": "2026-09-24",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-08",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-03-24",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Flex Ltd. erfüllt aktuell alle geprüften Kriterien: Die Branche (Electronic Components) ist zulässig, Verschuldung (14.2%) und Cash-Quote (6.8%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "41.7 Mrd. $",
      "sector": "Technologie",
      "industry": "Electronic Components",
      "peRatio": "43.9",
      "evEbitda": "21.5",
      "epsGrowth": "0.5%",
      "freeCashFlow": "621 Mio. $",
      "week52Range": "44,39 – 61,81 $",
      "dividendYield": "1,4%"
    },
    "profile": "Flex Ltd. ist im Bereich Electronic Components innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-05-11",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-13"
      },
      "timeline": [
        {
          "date": "2026-09-28",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-05-11",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Fox Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 34.7% (Limit 30%)). Die Branche (Entertainment) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "21.8 Mrd. $",
      "sector": "Kommunikation",
      "industry": "Entertainment",
      "peRatio": "13.7",
      "evEbitda": "7.3",
      "epsGrowth": "-0.5%",
      "freeCashFlow": "1.4 Mrd. $",
      "week52Range": "156,30 – 255,97 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Fox Corporation ist im Bereich Entertainment innerhalb des Sektors Kommunikation tätig.",
    "events": {
      "agm": {
        "date": "2027-05-30",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-04"
      },
      "timeline": [
        {
          "date": "2026-08-30",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-04",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-05-30",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Fox Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 31.0% (Limit 30%)). Die Branche (Entertainment) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "24.5 Mrd. $",
      "sector": "Kommunikation",
      "industry": "Entertainment",
      "peRatio": "15.3",
      "evEbitda": "8.1",
      "epsGrowth": "-0.5%",
      "freeCashFlow": "1.4 Mrd. $",
      "week52Range": "265,21 – 415,62 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Fox Corporation ist im Bereich Entertainment innerhalb des Sektors Kommunikation tätig.",
    "events": {
      "agm": {
        "date": "2026-10-12",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-13"
      },
      "timeline": [
        {
          "date": "2026-08-30",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-12",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Federal Realty Investment Trust überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 45.0% (Limit 30%)). Die Branche (REIT - Retail) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "10.8 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Retail",
      "peRatio": "25.1",
      "evEbitda": "19.0",
      "epsGrowth": "-0.5%",
      "freeCashFlow": "456 Mio. $",
      "week52Range": "45,00 – 108,00 $",
      "dividendYield": "3,3%"
    },
    "profile": "Federal Realty Investment Trust ist im Bereich REIT - Retail innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2027-03-15",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-17"
      },
      "timeline": [
        {
          "date": "2026-09-17",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-07",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-15",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "First Solar, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Solar) ist zulässig, Verschuldung (0.9%) und Cash-Quote (7.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "22.7 Mrd. $",
      "sector": "Technologie",
      "industry": "Solar",
      "peRatio": "21.6",
      "evEbitda": "8.9",
      "epsGrowth": "0.2%",
      "freeCashFlow": "1.6 Mrd. $",
      "week52Range": "115,08 – 159,34 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "First Solar, Inc. ist im Bereich Solar innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-10-10",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-23"
      },
      "timeline": [
        {
          "date": "2026-09-23",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-02",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-10",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Fortinet, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Infrastructure) ist zulässig, Verschuldung (0.5%) und Cash-Quote (3.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "118.8 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Infrastructure",
      "peRatio": "57.2",
      "evEbitda": "44.4",
      "epsGrowth": "0.4%",
      "freeCashFlow": "2.3 Mrd. $",
      "week52Range": "49,29 – 69,94 $",
      "dividendYield": "3,8%"
    },
    "profile": "Fortinet, Inc. ist im Bereich Software - Infrastructure innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-02-17",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-28"
      },
      "timeline": [
        {
          "date": "2026-09-18",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-28",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-02-17",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Fortive Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Scientific & Technical Instruments) ist zulässig, Verschuldung (19.9%) und Cash-Quote (2.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "18.1 Mrd. $",
      "sector": "Technologie",
      "industry": "Scientific & Technical Instruments",
      "peRatio": "31.3",
      "evEbitda": "17.1",
      "epsGrowth": "0.0%",
      "freeCashFlow": "939 Mio. $",
      "week52Range": "14,31 – 25,58 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Fortive Corporation ist im Bereich Scientific & Technical Instruments innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-04-29",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-23"
      },
      "timeline": [
        {
          "date": "2026-09-23",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-06",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-04-29",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "General Dynamics Corporation zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "103.7 Mrd. $",
      "sector": "Industrie",
      "industry": "Aerospace & Defense",
      "peRatio": "23.4",
      "evEbitda": "16.4",
      "epsGrowth": "0.1%",
      "freeCashFlow": "4.4 Mrd. $",
      "week52Range": "26,06 – 46,99 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "General Dynamics Corporation ist im Bereich Aerospace & Defense innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-05-18",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-29"
      },
      "timeline": [
        {
          "date": "2026-08-27",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-05-18",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "GoDaddy Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 35.1% (Limit 30%)). Die Branche (Software - Infrastructure) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "11.0 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Infrastructure",
      "peRatio": "12.3",
      "evEbitda": "9.6",
      "epsGrowth": "0.3%",
      "freeCashFlow": "1.2 Mrd. $",
      "week52Range": "170,57 – 331,80 $",
      "dividendYield": "2,2%"
    },
    "profile": "GoDaddy Inc. ist im Bereich Software - Infrastructure innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-03-02",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-22"
      },
      "timeline": [
        {
          "date": "2026-08-26",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-22",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-03-02",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "GE Aerospace zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "373.6 Mrd. $",
      "sector": "Industrie",
      "industry": "Aerospace & Defense",
      "peRatio": "42.4",
      "evEbitda": "33.5",
      "epsGrowth": "0.2%",
      "freeCashFlow": "6.6 Mrd. $",
      "week52Range": "159,13 – 293,77 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "GE Aerospace ist im Bereich Aerospace & Defense innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-30",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-26"
      },
      "timeline": [
        {
          "date": "2026-09-26",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-02",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-30",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "GE HealthCare Technologies Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 34.1% (Limit 30%)). Die Branche (Medical Devices) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "30.9 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Medical Devices",
      "peRatio": "15.7",
      "evEbitda": "11.0",
      "epsGrowth": "0.2%",
      "freeCashFlow": "1.6 Mrd. $",
      "week52Range": "163,78 – 292,76 $",
      "dividendYield": "4,2%"
    },
    "profile": "GE HealthCare Technologies Inc. ist im Bereich Medical Devices innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2026-11-19",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-18"
      },
      "timeline": [
        {
          "date": "2026-09-22",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-18",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-19",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Gen Digital Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 50.3% (Limit 30%)). Die Branche (Software - Infrastructure) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "16.4 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Infrastructure",
      "peRatio": "17.5",
      "evEbitda": "10.2",
      "epsGrowth": "2.7%",
      "freeCashFlow": "1.4 Mrd. $",
      "week52Range": "149,39 – 310,45 $",
      "dividendYield": "3,8%"
    },
    "profile": "Gen Digital Inc. ist im Bereich Software - Infrastructure innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-11-02",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-09"
      },
      "timeline": [
        {
          "date": "2026-10-09",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-11",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-02",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "GE Vernova Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (1.4%) und Cash-Quote (4.8%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "263.7 Mrd. $",
      "sector": "Industrie",
      "industry": "Specialty Industrial Machinery",
      "peRatio": "28.4",
      "evEbitda": "65.2",
      "epsGrowth": "0.3%",
      "freeCashFlow": "15.7 Mrd. $",
      "week52Range": "25,06 – 45,60 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "GE Vernova Inc. ist im Bereich Specialty Industrial Machinery innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-10-08",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-28"
      },
      "timeline": [
        {
          "date": "2026-09-24",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-08",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-28",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Gilead Sciences, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Drug Manufacturers - General) ist zulässig, Verschuldung (13.7%) und Cash-Quote (6.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "161.7 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Drug Manufacturers - General",
      "peRatio": "17.7",
      "evEbitda": "11.8",
      "epsGrowth": "0.5%",
      "freeCashFlow": "7.9 Mrd. $",
      "week52Range": "151,49 – 212,09 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Gilead Sciences, Inc. ist im Bereich Drug Manufacturers - General innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-03-17",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-20"
      },
      "timeline": [
        {
          "date": "2026-08-20",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-31",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-17",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "General Mills, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Packaged Foods) ist zulässig, Verschuldung (0.0%) und Cash-Quote (2.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "19.1 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Packaged Foods",
      "peRatio": "–",
      "evEbitda": "6.4",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "2.3 Mrd. $",
      "week52Range": "236,06 – 482,54 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "General Mills, Inc. ist im Bereich Packaged Foods innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2027-05-09",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-19"
      },
      "timeline": [
        {
          "date": "2026-08-19",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-25",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-09",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Globe Life Inc. zählt zur ausgeschlossenen Branche Insurance - Life und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "14.2 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Insurance - Life",
      "peRatio": "12.1",
      "evEbitda": "10.1",
      "epsGrowth": "0.2%",
      "freeCashFlow": "–",
      "week52Range": "311,30 – 502,23 $",
      "dividendYield": "4,1%"
    },
    "profile": "Globe Life Inc. ist im Bereich Insurance - Life innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-05-31",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-17"
      },
      "timeline": [
        {
          "date": "2026-08-22",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-17",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-05-31",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Corning Incorporated erfüllt aktuell alle geprüften Kriterien: Die Branche (Electronic Components) ist zulässig, Verschuldung (7.9%) und Cash-Quote (2.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "118.8 Mrd. $",
      "sector": "Technologie",
      "industry": "Electronic Components",
      "peRatio": "63.7",
      "evEbitda": "31.0",
      "epsGrowth": "0.2%",
      "freeCashFlow": "734 Mio. $",
      "week52Range": "138,41 – 268,69 $",
      "dividendYield": "3,9%"
    },
    "profile": "Corning Incorporated ist im Bereich Electronic Components innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-03-23",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-13"
      },
      "timeline": [
        {
          "date": "2026-10-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-13",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-23",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "General Motors Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 160.2% (Limit 30%); Cash-Quote zu hoch: 30.8% (Limit 30%)). Die Branche (Auto Manufacturers) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "80.4 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Auto Manufacturers",
      "peRatio": "39.7",
      "evEbitda": "11.2",
      "epsGrowth": "-0.3%",
      "freeCashFlow": "21.9 Mrd. $",
      "week52Range": "236,50 – 358,83 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "General Motors Company ist im Bereich Auto Manufacturers innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2026-08-30",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-23"
      },
      "timeline": [
        {
          "date": "2026-08-30",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-06",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-23",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Generac Holdlings Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (12.9%) und Cash-Quote (2.3%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "11.6 Mrd. $",
      "sector": "Industrie",
      "industry": "Specialty Industrial Machinery",
      "peRatio": "45.2",
      "evEbitda": "20.2",
      "epsGrowth": "0.9%",
      "freeCashFlow": "294 Mio. $",
      "week52Range": "340,72 – 437,55 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Generac Holdlings Inc. ist im Bereich Specialty Industrial Machinery innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-09-15",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-27"
      },
      "timeline": [
        {
          "date": "2026-08-24",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-15",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-27",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Alphabet Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Internet Content & Information) ist zulässig, Verschuldung (2.8%) und Cash-Quote (5.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "4.36 Bio. $",
      "sector": "Kommunikation",
      "industry": "Internet Content & Information",
      "peRatio": "17.9",
      "evEbitda": "24.6",
      "epsGrowth": "2.9%",
      "freeCashFlow": "22.7 Mrd. $",
      "week52Range": "90,08 – 155,96 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Alphabet Inc. ist im Bereich Internet Content & Information innerhalb des Sektors Kommunikation tätig.",
    "events": {
      "agm": {
        "date": "2027-02-08",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-08"
      },
      "timeline": [
        {
          "date": "2026-09-18",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-08",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-02-08",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Alphabet Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Internet Content & Information) ist zulässig, Verschuldung (2.8%) und Cash-Quote (5.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "4.36 Bio. $",
      "sector": "Kommunikation",
      "industry": "Internet Content & Information",
      "peRatio": "17.9",
      "evEbitda": "24.6",
      "epsGrowth": "2.9%",
      "freeCashFlow": "22.7 Mrd. $",
      "week52Range": "53,18 – 74,46 $",
      "dividendYield": "4,3%"
    },
    "profile": "Alphabet Inc. ist im Bereich Internet Content & Information innerhalb des Sektors Kommunikation tätig.",
    "events": {
      "agm": {
        "date": "2027-03-26",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-15"
      },
      "timeline": [
        {
          "date": "2026-09-04",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-15",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-03-26",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Genuine Parts Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 38.8% (Limit 30%)). Die Branche (Auto Parts) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "17.1 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Auto Parts",
      "peRatio": "497.5",
      "evEbitda": "11.3",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "917 Mio. $",
      "week52Range": "68,05 – 89,50 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Genuine Parts Company ist im Bereich Auto Parts innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-04-12",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-29"
      },
      "timeline": [
        {
          "date": "2026-08-21",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-08-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-12",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Global Payments Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 102.6% (Limit 30%)). Die Branche (Specialty Business Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "23.0 Mrd. $",
      "sector": "Industrie",
      "industry": "Specialty Business Services",
      "peRatio": "30.9",
      "evEbitda": "10.6",
      "epsGrowth": "–",
      "freeCashFlow": "7.1 Mrd. $",
      "week52Range": "61,03 – 69,48 $",
      "dividendYield": "2,2%"
    },
    "profile": "Global Payments Inc. ist im Bereich Specialty Business Services innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-03-13",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-24"
      },
      "timeline": [
        {
          "date": "2026-08-24",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-07",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-13",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Garmin Ltd. erfüllt aktuell alle geprüften Kriterien: Die Branche (Scientific & Technical Instruments) ist zulässig, Verschuldung (0.4%) und Cash-Quote (4.7%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "56.7 Mrd. $",
      "sector": "Technologie",
      "industry": "Scientific & Technical Instruments",
      "peRatio": "30.3",
      "evEbitda": "23.5",
      "epsGrowth": "0.4%",
      "freeCashFlow": "1.0 Mrd. $",
      "week52Range": "253,31 – 398,05 $",
      "dividendYield": "3,0%"
    },
    "profile": "Garmin Ltd. ist im Bereich Scientific & Technical Instruments innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-03",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-12"
      },
      "timeline": [
        {
          "date": "2026-08-12",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-14",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-03",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Goldman Sachs Group, Inc. (The) zählt zur ausgeschlossenen Branche Capital Markets und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "300.4 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Capital Markets",
      "peRatio": "15.7",
      "evEbitda": "–",
      "epsGrowth": "0.9%",
      "freeCashFlow": "–",
      "week52Range": "363,04 – 439,68 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Goldman Sachs Group, Inc. (The) ist im Bereich Capital Markets innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-05-19",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-31"
      },
      "timeline": [
        {
          "date": "2026-08-31",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-21",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-19",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "W.W. Grainger, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Industrial Distribution) ist zulässig, Verschuldung (4.3%) und Cash-Quote (1.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "65.3 Mrd. $",
      "sector": "Industrie",
      "industry": "Industrial Distribution",
      "peRatio": "37.2",
      "evEbitda": "22.0",
      "epsGrowth": "0.2%",
      "freeCashFlow": "1.2 Mrd. $",
      "week52Range": "206,56 – 358,05 $",
      "dividendYield": "2,8%"
    },
    "profile": "W.W. Grainger, Inc. ist im Bereich Industrial Distribution innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-02-02",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-14"
      },
      "timeline": [
        {
          "date": "2026-08-14",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-25",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-02-02",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Halliburton Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 30.4% (Limit 30%)). Die Branche (Oil & Gas Equipment & Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "26.9 Mrd. $",
      "sector": "Energie",
      "industry": "Oil & Gas Equipment & Services",
      "peRatio": "16.9",
      "evEbitda": "8.0",
      "epsGrowth": "0.2%",
      "freeCashFlow": "2.1 Mrd. $",
      "week52Range": "231,28 – 275,10 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Halliburton Company ist im Bereich Oil & Gas Equipment & Services innerhalb des Sektors Energie tätig.",
    "events": {
      "agm": {
        "date": "2027-02-17",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-04"
      },
      "timeline": [
        {
          "date": "2026-09-04",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-10",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-02-17",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Hasbro, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Leisure) ist zulässig, Verschuldung (29.3%) und Cash-Quote (10.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "13.2 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Leisure",
      "peRatio": "16.7",
      "evEbitda": "12.1",
      "epsGrowth": "–",
      "freeCashFlow": "688 Mio. $",
      "week52Range": "151,58 – 329,22 $",
      "dividendYield": "0,6%"
    },
    "profile": "Hasbro, Inc. ist im Bereich Leisure innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2026-11-10",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-08"
      },
      "timeline": [
        {
          "date": "2026-08-28",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-08",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-10",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Huntington Bancshares Incorpora zählt zur ausgeschlossenen Branche Banks - Regional und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "34.4 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Banks - Regional",
      "peRatio": "13.1",
      "evEbitda": "–",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "–",
      "week52Range": "250,17 – 427,21 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Huntington Bancshares Incorpora ist im Bereich Banks - Regional innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-10-25",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-15"
      },
      "timeline": [
        {
          "date": "2026-09-26",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-15",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-25",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "HCA Healthcare, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 57.7% (Limit 30%)). Die Branche (Medical Care Facilities) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "89.3 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Medical Care Facilities",
      "peRatio": "13.5",
      "evEbitda": "9.0",
      "epsGrowth": "0.1%",
      "freeCashFlow": "3.7 Mrd. $",
      "week52Range": "186,69 – 233,90 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "HCA Healthcare, Inc. ist im Bereich Medical Care Facilities innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-04-16",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-05"
      },
      "timeline": [
        {
          "date": "2026-09-06",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-05",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-16",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Home Depot, Inc. (The) erfüllt aktuell alle geprüften Kriterien: Die Branche (Home Improvement Retail) ist zulässig, Verschuldung (19.3%) und Cash-Quote (0.5%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "331.0 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Home Improvement Retail",
      "peRatio": "23.6",
      "evEbitda": "15.8",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "10.1 Mrd. $",
      "week52Range": "30,57 – 60,26 $",
      "dividendYield": "2,8%"
    },
    "profile": "Home Depot, Inc. (The) ist im Bereich Home Improvement Retail innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-03-10",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-17"
      },
      "timeline": [
        {
          "date": "2026-09-17",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-12",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-10",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "The Hartford Insurance Group, I zählt zur ausgeschlossenen Branche Insurance - Diversified und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "38.9 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Insurance - Diversified",
      "peRatio": "9.8",
      "evEbitda": "7.0",
      "epsGrowth": "0.4%",
      "freeCashFlow": "5.5 Mrd. $",
      "week52Range": "88,66 – 156,39 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "The Hartford Insurance Group, I ist im Bereich Insurance - Diversified innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-03-12",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-28"
      },
      "timeline": [
        {
          "date": "2026-08-28",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-14",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-12",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Huntington Ingalls Industries, zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "12.9 Mrd. $",
      "sector": "Industrie",
      "industry": "Aerospace & Defense",
      "peRatio": "19.5",
      "evEbitda": "13.5",
      "epsGrowth": "0.4%",
      "freeCashFlow": "-300 Mio. $",
      "week52Range": "102,64 – 199,73 $",
      "dividendYield": "0,5%"
    },
    "profile": "Huntington Ingalls Industries, ist im Bereich Aerospace & Defense innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-28",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-16"
      },
      "timeline": [
        {
          "date": "2026-09-16",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-08",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-28",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Hilton Worldwide Holdings Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Lodging) ist zulässig, Verschuldung (19.4%) und Cash-Quote (1.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "72.1 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Lodging",
      "peRatio": "47.2",
      "evEbitda": "27.6",
      "epsGrowth": "0.1%",
      "freeCashFlow": "1.4 Mrd. $",
      "week52Range": "306,90 – 511,50 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Hilton Worldwide Holdings Inc. ist im Bereich Lodging innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-03-30",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-06"
      },
      "timeline": [
        {
          "date": "2026-09-06",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-25",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-30",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Honeywell International Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 45.4% (Limit 30%)). Die Branche (Conglomerates) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "77.0 Mrd. $",
      "sector": "Industrie",
      "industry": "Conglomerates",
      "peRatio": "9.3",
      "evEbitda": "12.1",
      "epsGrowth": "2.6%",
      "freeCashFlow": "2.6 Mrd. $",
      "week52Range": "93,41 – 136,33 $",
      "dividendYield": "1,2%"
    },
    "profile": "Honeywell International Inc. ist im Bereich Conglomerates innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-03-10",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-17"
      },
      "timeline": [
        {
          "date": "2026-09-07",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-17",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-03-10",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Honeywell Aerospace Inc. zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "65.5 Mrd. $",
      "sector": "Industrie",
      "industry": "Aerospace & Defense",
      "peRatio": "43.4",
      "evEbitda": "–",
      "epsGrowth": "–",
      "freeCashFlow": "–",
      "week52Range": "377,56 – 456,39 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Honeywell Aerospace Inc. ist im Bereich Aerospace & Defense innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-02-24",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-28"
      },
      "timeline": [
        {
          "date": "2026-08-24",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-28",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-02-24",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Robinhood Markets, Inc. zählt zur ausgeschlossenen Branche Capital Markets und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "77.8 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Capital Markets",
      "peRatio": "38.3",
      "evEbitda": "–",
      "epsGrowth": "0.5%",
      "freeCashFlow": "–",
      "week52Range": "378,30 – 500,33 $",
      "dividendYield": "2,7%"
    },
    "profile": "Robinhood Markets, Inc. ist im Bereich Capital Markets innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-04-03",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-18"
      },
      "timeline": [
        {
          "date": "2026-08-18",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-05",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-04-03",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Hewlett Packard Enterprise Comp überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 33.6% (Limit 30%)). Die Branche (Communication Equipment) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "63.4 Mrd. $",
      "sector": "Technologie",
      "industry": "Communication Equipment",
      "peRatio": "44.8",
      "evEbitda": "14.1",
      "epsGrowth": "–",
      "freeCashFlow": "3.8 Mrd. $",
      "week52Range": "137,47 – 324,52 $",
      "dividendYield": "4,4%"
    },
    "profile": "Hewlett Packard Enterprise Comp ist im Bereich Communication Equipment innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-12-30",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-11"
      },
      "timeline": [
        {
          "date": "2026-09-24",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-11",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-12-30",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "HP Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 43.6% (Limit 30%)). Die Branche (Computer Hardware) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "24.9 Mrd. $",
      "sector": "Technologie",
      "industry": "Computer Hardware",
      "peRatio": "10.1",
      "evEbitda": "6.8",
      "epsGrowth": "0.2%",
      "freeCashFlow": "3.5 Mrd. $",
      "week52Range": "110,24 – 176,12 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "HP Inc. ist im Bereich Computer Hardware innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-12-11",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-08"
      },
      "timeline": [
        {
          "date": "2026-09-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-08",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-12-11",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Hormel Foods Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Packaged Foods) ist zulässig, Verschuldung (1.8%) und Cash-Quote (4.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "13.8 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Packaged Foods",
      "peRatio": "29.4",
      "evEbitda": "10.7",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "471 Mio. $",
      "week52Range": "297,68 – 517,22 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Hormel Foods Corporation ist im Bereich Packaged Foods innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2027-01-08",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-04"
      },
      "timeline": [
        {
          "date": "2026-08-24",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-04",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-08",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Henry Schein, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 38.4% (Limit 30%)). Die Branche (Medical Distribution) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "9.8 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Medical Distribution",
      "peRatio": "25.9",
      "evEbitda": "14.3",
      "epsGrowth": "0.0%",
      "freeCashFlow": "290 Mio. $",
      "week52Range": "302,11 – 508,62 $",
      "dividendYield": "2,7%"
    },
    "profile": "Henry Schein, Inc. ist im Bereich Medical Distribution innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2026-09-24",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-25"
      },
      "timeline": [
        {
          "date": "2026-09-24",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-27",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-25",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Host Hotels & Resorts, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 32.4% (Limit 30%)). Die Branche (REIT - Hotel & Motel) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "17.4 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Hotel & Motel",
      "peRatio": "17.1",
      "evEbitda": "12.8",
      "epsGrowth": "1.1%",
      "freeCashFlow": "1.2 Mrd. $",
      "week52Range": "203,99 – 449,42 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Host Hotels & Resorts, Inc. ist im Bereich REIT - Hotel & Motel innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2026-12-03",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-14"
      },
      "timeline": [
        {
          "date": "2026-08-14",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-03",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-12-03",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "The Hershey Company zählt zur ausgeschlossenen Branche Confectioners und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "35.2 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Confectioners",
      "peRatio": "23.9",
      "evEbitda": "14.8",
      "epsGrowth": "6.3%",
      "freeCashFlow": "1.7 Mrd. $",
      "week52Range": "136,79 – 193,91 $",
      "dividendYield": "0,3%"
    },
    "profile": "The Hershey Company ist im Bereich Confectioners innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2026-12-05",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-05"
      },
      "timeline": [
        {
          "date": "2026-08-31",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-05",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-12-05",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Hubbell Inc erfüllt aktuell alle geprüften Kriterien: Die Branche (Electrical Equipment & Parts) ist zulässig, Verschuldung (22.3%) und Cash-Quote (1.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "25.0 Mrd. $",
      "sector": "Industrie",
      "industry": "Electrical Equipment & Parts",
      "peRatio": "28.0",
      "evEbitda": "19.9",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "496 Mio. $",
      "week52Range": "306,95 – 466,95 $",
      "dividendYield": "1,6%"
    },
    "profile": "Hubbell Inc ist im Bereich Electrical Equipment & Parts innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-20",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-30"
      },
      "timeline": [
        {
          "date": "2026-08-30",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-01",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-20",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Humana Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 33.7% (Limit 30%); Cash-Quote zu hoch: 54.6% (Limit 30%)). Die Branche (Healthcare Plans) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "43.7 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Healthcare Plans",
      "peRatio": "34.4",
      "evEbitda": "9.6",
      "epsGrowth": "0.3%",
      "freeCashFlow": "1.9 Mrd. $",
      "week52Range": "106,74 – 190,80 $",
      "dividendYield": "0,9%"
    },
    "profile": "Humana Inc. ist im Bereich Healthcare Plans innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2026-09-11",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-13"
      },
      "timeline": [
        {
          "date": "2026-09-11",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-23",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Howmet Aerospace Inc. zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "112.9 Mrd. $",
      "sector": "Industrie",
      "industry": "Aerospace & Defense",
      "peRatio": "65.3",
      "evEbitda": "45.0",
      "epsGrowth": "0.7%",
      "freeCashFlow": "1.2 Mrd. $",
      "week52Range": "220,62 – 359,79 $",
      "dividendYield": "2,2%"
    },
    "profile": "Howmet Aerospace Inc. ist im Bereich Aerospace & Defense innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-02-24",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-13"
      },
      "timeline": [
        {
          "date": "2026-08-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-09",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-02-24",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Interactive Brokers Group, Inc. zählt zur ausgeschlossenen Branche Capital Markets und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "149.3 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Capital Markets",
      "peRatio": "34.9",
      "evEbitda": "–",
      "epsGrowth": "0.4%",
      "freeCashFlow": "–",
      "week52Range": "329,30 – 518,56 $",
      "dividendYield": "1,4%"
    },
    "profile": "Interactive Brokers Group, Inc. ist im Bereich Capital Markets innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-02-23",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-28"
      },
      "timeline": [
        {
          "date": "2026-08-28",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-11",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-02-23",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "International Business Machines überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 31.0% (Limit 30%)). Die Branche (Information Technology Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "210.7 Mrd. $",
      "sector": "Technologie",
      "industry": "Information Technology Services",
      "peRatio": "19.9",
      "evEbitda": "16.3",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "12.0 Mrd. $",
      "week52Range": "200,31 – 321,54 $",
      "dividendYield": "3,1%"
    },
    "profile": "International Business Machines ist im Bereich Information Technology Services innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-09",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-10"
      },
      "timeline": [
        {
          "date": "2026-09-10",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-05",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-09",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Intercontinental Exchange Inc. zählt zur ausgeschlossenen Branche Financial Data & Stock Exchanges und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "85.6 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Financial Data & Stock Exchanges",
      "peRatio": "21.5",
      "evEbitda": "15.7",
      "epsGrowth": "0.1%",
      "freeCashFlow": "3.6 Mrd. $",
      "week52Range": "105,06 – 166,34 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Intercontinental Exchange Inc. ist im Bereich Financial Data & Stock Exchanges innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-04-17",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-22"
      },
      "timeline": [
        {
          "date": "2026-09-18",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-22",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-17",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "IDEXX Laboratories, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Diagnostics & Research) ist zulässig, Verschuldung (2.5%) und Cash-Quote (0.5%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "44.1 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Diagnostics & Research",
      "peRatio": "41.1",
      "evEbitda": "29.1",
      "epsGrowth": "0.2%",
      "freeCashFlow": "787 Mio. $",
      "week52Range": "79,34 – 154,28 $",
      "dividendYield": "4,3%"
    },
    "profile": "IDEXX Laboratories, Inc. ist im Bereich Diagnostics & Research innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-03-20",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-17"
      },
      "timeline": [
        {
          "date": "2026-09-17",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-12",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-20",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "IDEX Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (11.1%) und Cash-Quote (3.7%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "17.0 Mrd. $",
      "sector": "Industrie",
      "industry": "Specialty Industrial Machinery",
      "peRatio": "33.1",
      "evEbitda": "18.9",
      "epsGrowth": "0.1%",
      "freeCashFlow": "556 Mio. $",
      "week52Range": "320,07 – 486,35 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "IDEX Corporation ist im Bereich Specialty Industrial Machinery innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-04-10",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-26"
      },
      "timeline": [
        {
          "date": "2026-09-21",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-26",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-10",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "International Flavors & Fragran überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 32.0% (Limit 30%)). Die Branche (Specialty Chemicals) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "20.2 Mrd. $",
      "sector": "Grundstoffe",
      "industry": "Specialty Chemicals",
      "peRatio": "24.5",
      "evEbitda": "13.9",
      "epsGrowth": "–",
      "freeCashFlow": "3.7 Mrd. $",
      "week52Range": "61,89 – 116,05 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "International Flavors & Fragran ist im Bereich Specialty Chemicals innerhalb des Sektors Grundstoffe tätig.",
    "events": {
      "agm": {
        "date": "2026-09-29",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-30"
      },
      "timeline": [
        {
          "date": "2026-09-29",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-30",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-10",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        }
      ]
    }
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
    "insight": "Incyte Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Biotechnology) ist zulässig, Verschuldung (0.2%) und Cash-Quote (18.7%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "24.2 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Biotechnology",
      "peRatio": "15.2",
      "evEbitda": "10.2",
      "epsGrowth": "0.4%",
      "freeCashFlow": "1.2 Mrd. $",
      "week52Range": "312,16 – 499,46 $",
      "dividendYield": "2,3%"
    },
    "profile": "Incyte Corporation ist im Bereich Biotechnology innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2026-12-13",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-25"
      },
      "timeline": [
        {
          "date": "2026-09-13",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-25",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-12-13",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Intel Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (11.1%) und Cash-Quote (6.5%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "455.0 Mrd. $",
      "sector": "Technologie",
      "industry": "Semiconductors",
      "peRatio": "–",
      "evEbitda": "29.2",
      "epsGrowth": "–",
      "freeCashFlow": "4.9 Mrd. $",
      "week52Range": "170,48 – 365,70 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Intel Corporation ist im Bereich Semiconductors innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-12-13",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-12"
      },
      "timeline": [
        {
          "date": "2026-09-01",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-12",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-12-13",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Intuit Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (8.0%) und Cash-Quote (7.8%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "86.5 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Application",
      "peRatio": "19.3",
      "evEbitda": "13.5",
      "epsGrowth": "0.1%",
      "freeCashFlow": "5.2 Mrd. $",
      "week52Range": "210,38 – 420,76 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Intuit Inc. ist im Bereich Software - Application innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-12",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-11"
      },
      "timeline": [
        {
          "date": "2026-09-06",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-11",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-12",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Invitation Homes Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 48.6% (Limit 30%)). Die Branche (REIT - Residential) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "17.7 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Residential",
      "peRatio": "27.3",
      "evEbitda": "17.4",
      "epsGrowth": "0.6%",
      "freeCashFlow": "1.2 Mrd. $",
      "week52Range": "108,67 – 200,09 $",
      "dividendYield": "2,5%"
    },
    "profile": "Invitation Homes Inc. ist im Bereich REIT - Residential innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2027-01-28",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-06"
      },
      "timeline": [
        {
          "date": "2026-09-06",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-03",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-28",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "International Paper Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 44.8% (Limit 30%)). Die Branche (Packaging & Containers) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "21.6 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Packaging & Containers",
      "peRatio": "–",
      "evEbitda": "8.8",
      "epsGrowth": "–",
      "freeCashFlow": "1.8 Mrd. $",
      "week52Range": "258,27 – 568,99 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "International Paper Company ist im Bereich Packaging & Containers innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-01-18",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-19"
      },
      "timeline": [
        {
          "date": "2026-09-06",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-19",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-18",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "IQVIA Holdings, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 42.0% (Limit 30%)). Die Branche (Diagnostics & Research) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "38.7 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Diagnostics & Research",
      "peRatio": "29.2",
      "evEbitda": "17.4",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "2.1 Mrd. $",
      "week52Range": "214,16 – 418,13 $",
      "dividendYield": "4,4%"
    },
    "profile": "IQVIA Holdings, Inc. ist im Bereich Diagnostics & Research innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2026-10-28",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-05"
      },
      "timeline": [
        {
          "date": "2026-08-22",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-05",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-28",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Ingersoll Rand Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (14.6%) und Cash-Quote (3.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "32.6 Mrd. $",
      "sector": "Industrie",
      "industry": "Specialty Industrial Machinery",
      "peRatio": "34.5",
      "evEbitda": "17.4",
      "epsGrowth": "–",
      "freeCashFlow": "1.2 Mrd. $",
      "week52Range": "165,79 – 313,16 $",
      "dividendYield": "2,9%"
    },
    "profile": "Ingersoll Rand Inc. ist im Bereich Specialty Industrial Machinery innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-09-02",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-22"
      },
      "timeline": [
        {
          "date": "2026-08-22",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-02",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-07",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        }
      ]
    }
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
    "insight": "Iron Mountain Incorporated (Del überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 54.2% (Limit 30%)). Die Branche (REIT - Specialty) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "36.4 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Specialty",
      "peRatio": "133.0",
      "evEbitda": "22.9",
      "epsGrowth": "8.6%",
      "freeCashFlow": "-499 Mio. $",
      "week52Range": "268,84 – 381,15 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Iron Mountain Incorporated (Del ist im Bereich REIT - Specialty innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2026-10-13",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-18"
      },
      "timeline": [
        {
          "date": "2026-08-18",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-16",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-13",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Intuitive Surgical, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Instruments & Supplies) ist zulässig, Verschuldung (0.0%) und Cash-Quote (4.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "126.6 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Medical Instruments & Supplies",
      "peRatio": "40.5",
      "evEbitda": "28.6",
      "epsGrowth": "0.3%",
      "freeCashFlow": "2.6 Mrd. $",
      "week52Range": "21,23 – 40,92 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Intuitive Surgical, Inc. ist im Bereich Medical Instruments & Supplies innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2026-12-07",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-05"
      },
      "timeline": [
        {
          "date": "2026-10-05",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-10",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-12-07",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Gartner, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 33.2% (Limit 30%)). Die Branche (Information Technology Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "10.1 Mrd. $",
      "sector": "Technologie",
      "industry": "Information Technology Services",
      "peRatio": "14.9",
      "evEbitda": "8.8",
      "epsGrowth": "0.2%",
      "freeCashFlow": "1.1 Mrd. $",
      "week52Range": "296,44 – 485,83 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Gartner, Inc. ist im Bereich Information Technology Services innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-10-12",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-17"
      },
      "timeline": [
        {
          "date": "2026-08-27",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-12",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-17",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Illinois Tool Works Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (11.7%) und Cash-Quote (1.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "82.6 Mrd. $",
      "sector": "Industrie",
      "industry": "Specialty Industrial Machinery",
      "peRatio": "26.0",
      "evEbitda": "18.9",
      "epsGrowth": "0.1%",
      "freeCashFlow": "–",
      "week52Range": "190,09 – 239,28 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Illinois Tool Works Inc. ist im Bereich Specialty Industrial Machinery innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-10-11",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-29"
      },
      "timeline": [
        {
          "date": "2026-09-25",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-11",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Invesco Ltd zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "13.1 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Asset Management",
      "peRatio": "–",
      "evEbitda": "10.3",
      "epsGrowth": "–",
      "freeCashFlow": "–",
      "week52Range": "270,87 – 419,65 $",
      "dividendYield": "1,1%"
    },
    "profile": "Invesco Ltd ist im Bereich Asset Management innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-11-01",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-18"
      },
      "timeline": [
        {
          "date": "2026-08-31",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-18",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-01",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Jacobs Solutions Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Engineering & Construction) ist zulässig, Verschuldung (28.6%) und Cash-Quote (8.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "15.9 Mrd. $",
      "sector": "Industrie",
      "industry": "Engineering & Construction",
      "peRatio": "39.8",
      "evEbitda": "18.6",
      "epsGrowth": "–",
      "freeCashFlow": "512 Mio. $",
      "week52Range": "322,51 – 387,74 $",
      "dividendYield": "3,9%"
    },
    "profile": "Jacobs Solutions Inc. ist im Bereich Engineering & Construction innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-09-29",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-18"
      },
      "timeline": [
        {
          "date": "2026-09-29",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-05",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-18",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "J.B. Hunt Transport Services, I erfüllt aktuell alle geprüften Kriterien: Die Branche (Integrated Freight & Logistics) ist zulässig, Verschuldung (5.5%) und Cash-Quote (0.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "25.5 Mrd. $",
      "sector": "Industrie",
      "industry": "Integrated Freight & Logistics",
      "peRatio": "38.6",
      "evEbitda": "16.1",
      "epsGrowth": "0.5%",
      "freeCashFlow": "903 Mio. $",
      "week52Range": "36,13 – 55,76 $",
      "dividendYield": "3,1%"
    },
    "profile": "J.B. Hunt Transport Services, I ist im Bereich Integrated Freight & Logistics innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-08-26",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-24"
      },
      "timeline": [
        {
          "date": "2026-08-24",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-08-26",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-24",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Jabil Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Electronic Components) ist zulässig, Verschuldung (11.9%) und Cash-Quote (4.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "33.0 Mrd. $",
      "sector": "Technologie",
      "industry": "Electronic Components",
      "peRatio": "39.4",
      "evEbitda": "14.9",
      "epsGrowth": "0.3%",
      "freeCashFlow": "1.2 Mrd. $",
      "week52Range": "145,77 – 173,39 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Jabil Inc. ist im Bereich Electronic Components innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-24",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-19"
      },
      "timeline": [
        {
          "date": "2026-08-19",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-13",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-24",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Johnson Controls International erfüllt aktuell alle geprüften Kriterien: Die Branche (Building Products & Equipment) ist zulässig, Verschuldung (10.7%) und Cash-Quote (0.7%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "88.8 Mrd. $",
      "sector": "Industrie",
      "industry": "Building Products & Equipment",
      "peRatio": "41.3",
      "evEbitda": "22.6",
      "epsGrowth": "0.2%",
      "freeCashFlow": "3.0 Mrd. $",
      "week52Range": "202,84 – 369,27 $",
      "dividendYield": "2,9%"
    },
    "profile": "Johnson Controls International ist im Bereich Building Products & Equipment innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-11-14",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-09"
      },
      "timeline": [
        {
          "date": "2026-09-08",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-09",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-14",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Jack Henry & Associates, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Information Technology Services) ist zulässig, Verschuldung (1.2%) und Cash-Quote (0.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "10.9 Mrd. $",
      "sector": "Technologie",
      "industry": "Information Technology Services",
      "peRatio": "21.5",
      "evEbitda": "15.5",
      "epsGrowth": "0.1%",
      "freeCashFlow": "373 Mio. $",
      "week52Range": "227,74 – 393,36 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Jack Henry & Associates, Inc. ist im Bereich Information Technology Services innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-09-14",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-09"
      },
      "timeline": [
        {
          "date": "2026-09-09",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-14",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-22",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        }
      ]
    }
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
    "insight": "Johnson & Johnson erfüllt aktuell alle geprüften Kriterien: Die Branche (Drug Manufacturers - General) ist zulässig, Verschuldung (7.9%) und Cash-Quote (3.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "617.8 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Drug Manufacturers - General",
      "peRatio": "29.8",
      "evEbitda": "18.5",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "16.9 Mrd. $",
      "week52Range": "199,38 – 331,48 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Johnson & Johnson ist im Bereich Drug Manufacturers - General innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-02-26",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-18"
      },
      "timeline": [
        {
          "date": "2026-08-26",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-18",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-02-26",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "JP Morgan Chase & Co. zählt zur ausgeschlossenen Branche Banks - Diversified und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "935.1 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Banks - Diversified",
      "peRatio": "15.1",
      "evEbitda": "–",
      "epsGrowth": "0.5%",
      "freeCashFlow": "–",
      "week52Range": "15,77 – 35,86 $",
      "dividendYield": "0,7%"
    },
    "profile": "JP Morgan Chase & Co. ist im Bereich Banks - Diversified innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-02-10",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-07"
      },
      "timeline": [
        {
          "date": "2026-09-04",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-07",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-02-10",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Keurig Dr Pepper Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 68.2% (Limit 30%)). Die Branche (Beverages - Non-Alcoholic) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "42.3 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Beverages - Non-Alcoholic",
      "peRatio": "23.1",
      "evEbitda": "17.7",
      "epsGrowth": "-0.5%",
      "freeCashFlow": "-16.3 Mrd. $",
      "week52Range": "62,20 – 102,35 $",
      "dividendYield": "4,3%"
    },
    "profile": "Keurig Dr Pepper Inc. ist im Bereich Beverages - Non-Alcoholic innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2026-12-18",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-25"
      },
      "timeline": [
        {
          "date": "2026-09-22",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-25",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-12-18",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "KeyCorp zählt zur ausgeschlossenen Branche Banks - Regional und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "24.2 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Banks - Regional",
      "peRatio": "13.2",
      "evEbitda": "–",
      "epsGrowth": "0.3%",
      "freeCashFlow": "–",
      "week52Range": "22,98 – 36,71 $",
      "dividendYield": "1,4%"
    },
    "profile": "KeyCorp ist im Bereich Banks - Regional innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-12-23",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-13"
      },
      "timeline": [
        {
          "date": "2026-09-11",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-12-23",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Keysight Technologies Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Scientific & Technical Instruments) ist zulässig, Verschuldung (5.1%) und Cash-Quote (4.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "54.5 Mrd. $",
      "sector": "Technologie",
      "industry": "Scientific & Technical Instruments",
      "peRatio": "51.3",
      "evEbitda": "38.4",
      "epsGrowth": "0.4%",
      "freeCashFlow": "1.1 Mrd. $",
      "week52Range": "105,22 – 180,58 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Keysight Technologies Inc. ist im Bereich Scientific & Technical Instruments innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-05-31",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-27"
      },
      "timeline": [
        {
          "date": "2026-08-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-27",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-05-31",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "The Kraft Heinz Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 68.9% (Limit 30%)). Die Branche (Packaged Foods) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "30.7 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Packaged Foods",
      "peRatio": "–",
      "evEbitda": "8.3",
      "epsGrowth": "0.1%",
      "freeCashFlow": "3.2 Mrd. $",
      "week52Range": "198,25 – 409,28 $",
      "dividendYield": "3,1%"
    },
    "profile": "The Kraft Heinz Company ist im Bereich Packaged Foods innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2026-10-09",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-29"
      },
      "timeline": [
        {
          "date": "2026-09-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-09",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Kimco Realty Corporation (HC) überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 48.4% (Limit 30%)). Die Branche (REIT - Retail) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "17.2 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Retail",
      "peRatio": "29.3",
      "evEbitda": "19.4",
      "epsGrowth": "0.3%",
      "freeCashFlow": "839 Mio. $",
      "week52Range": "20,56 – 25,87 $",
      "dividendYield": "2,8%"
    },
    "profile": "Kimco Realty Corporation (HC) ist im Bereich REIT - Retail innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2027-01-11",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-02"
      },
      "timeline": [
        {
          "date": "2026-09-01",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-02",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-11",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "KKR & Co. Inc. zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "94.6 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Asset Management",
      "peRatio": "34.5",
      "evEbitda": "–",
      "epsGrowth": "0.4%",
      "freeCashFlow": "–",
      "week52Range": "187,85 – 241,52 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "KKR & Co. Inc. ist im Bereich Asset Management innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-04-23",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-26"
      },
      "timeline": [
        {
          "date": "2026-08-26",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-27",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-04-23",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "KLA Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductor Equipment & Materials) ist zulässig, Verschuldung (2.5%) und Cash-Quote (2.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "238.8 Mrd. $",
      "sector": "Technologie",
      "industry": "Semiconductor Equipment & Materials",
      "peRatio": "50.0",
      "evEbitda": "39.6",
      "epsGrowth": "0.1%",
      "freeCashFlow": "–",
      "week52Range": "342,26 – 414,52 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "KLA Corporation ist im Bereich Semiconductor Equipment & Materials innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-03-07",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-27"
      },
      "timeline": [
        {
          "date": "2026-09-06",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-27",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-03-07",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Kimberly-Clark Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Household & Personal Products) ist zulässig, Verschuldung (19.6%) und Cash-Quote (1.5%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "36.3 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Household & Personal Products",
      "peRatio": "21.1",
      "evEbitda": "12.8",
      "epsGrowth": "0.2%",
      "freeCashFlow": "1.1 Mrd. $",
      "week52Range": "227,99 – 459,48 $",
      "dividendYield": "1,9%"
    },
    "profile": "Kimberly-Clark Corporation ist im Bereich Household & Personal Products innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2027-01-28",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-08"
      },
      "timeline": [
        {
          "date": "2026-08-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-08",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-28",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Kinder Morgan, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 45.3% (Limit 30%)). Die Branche (Oil & Gas Midstream) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "71.6 Mrd. $",
      "sector": "Energie",
      "industry": "Oil & Gas Midstream",
      "peRatio": "20.8",
      "evEbitda": "13.8",
      "epsGrowth": "0.2%",
      "freeCashFlow": "1.1 Mrd. $",
      "week52Range": "16,79 – 39,75 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Kinder Morgan, Inc. ist im Bereich Oil & Gas Midstream innerhalb des Sektors Energie tätig.",
    "events": {
      "agm": {
        "date": "2027-02-19",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-14"
      },
      "timeline": [
        {
          "date": "2026-08-26",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-14",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-02-19",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Coca-Cola Company (The) erfüllt aktuell alle geprüften Kriterien: Die Branche (Beverages - Non-Alcoholic) ist zulässig, Verschuldung (11.7%) und Cash-Quote (4.3%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "376.9 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Beverages - Non-Alcoholic",
      "peRatio": "26.3",
      "evEbitda": "23.9",
      "epsGrowth": "0.2%",
      "freeCashFlow": "5.2 Mrd. $",
      "week52Range": "13,26 – 27,40 $",
      "dividendYield": "1,4%"
    },
    "profile": "Coca-Cola Company (The) ist im Bereich Beverages - Non-Alcoholic innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2026-08-21",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-21"
      },
      "timeline": [
        {
          "date": "2026-08-21",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-18",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-21",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Kroger Company (The) überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 68.4% (Limit 30%)). Die Branche (Grocery Stores) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "35.4 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Grocery Stores",
      "peRatio": "33.8",
      "evEbitda": "8.3",
      "epsGrowth": "0.1%",
      "freeCashFlow": "3.0 Mrd. $",
      "week52Range": "224,98 – 374,96 $",
      "dividendYield": "1,5%"
    },
    "profile": "Kroger Company (The) ist im Bereich Grocery Stores innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2027-05-12",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-14"
      },
      "timeline": [
        {
          "date": "2026-10-14",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-14",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-12",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Kenvue Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Household & Personal Products) ist zulässig, Verschuldung (23.8%) und Cash-Quote (2.9%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "36.9 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Household & Personal Products",
      "peRatio": "22.9",
      "evEbitda": "12.9",
      "epsGrowth": "0.5%",
      "freeCashFlow": "1.9 Mrd. $",
      "week52Range": "104,63 – 150,98 $",
      "dividendYield": "3,5%"
    },
    "profile": "Kenvue Inc. ist im Bereich Household & Personal Products innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2027-04-06",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-26"
      },
      "timeline": [
        {
          "date": "2026-08-26",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-28",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-04-06",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Loews Corporation zählt zur ausgeschlossenen Branche Insurance - Property & Casualty und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "23.9 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Insurance - Property & Casualty",
      "peRatio": "14.7",
      "evEbitda": "8.5",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "2.1 Mrd. $",
      "week52Range": "112,95 – 180,45 $",
      "dividendYield": "0,4%"
    },
    "profile": "Loews Corporation ist im Bereich Insurance - Property & Casualty innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-08-25",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-29"
      },
      "timeline": [
        {
          "date": "2026-08-25",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-03",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        }
      ]
    }
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
    "insight": "Leidos Holdings, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 47.8% (Limit 30%)). Die Branche (Information Technology Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "14.5 Mrd. $",
      "sector": "Technologie",
      "industry": "Information Technology Services",
      "peRatio": "10.6",
      "evEbitda": "8.8",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "1.2 Mrd. $",
      "week52Range": "329,65 – 497,98 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Leidos Holdings, Inc. ist im Bereich Information Technology Services innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-11-05",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-21"
      },
      "timeline": [
        {
          "date": "2026-08-21",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-10",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-05",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Lennar Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 31.5% (Limit 30%)). Die Branche (Residential Construction) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "19.8 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Residential Construction",
      "peRatio": "12.9",
      "evEbitda": "10.7",
      "epsGrowth": "-0.3%",
      "freeCashFlow": "1.1 Mrd. $",
      "week52Range": "37,30 – 46,94 $",
      "dividendYield": "2,2%"
    },
    "profile": "Lennar Corporation ist im Bereich Residential Construction innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-02-20",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-23"
      },
      "timeline": [
        {
          "date": "2026-09-16",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-23",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-02-20",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Labcorp Holdings Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Diagnostics & Research) ist zulässig, Verschuldung (27.0%) und Cash-Quote (0.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "25.0 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Diagnostics & Research",
      "peRatio": "25.6",
      "evEbitda": "13.6",
      "epsGrowth": "0.3%",
      "freeCashFlow": "892 Mio. $",
      "week52Range": "30,94 – 39,44 $",
      "dividendYield": "2,4%"
    },
    "profile": "Labcorp Holdings Inc. ist im Bereich Diagnostics & Research innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-05-13",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-16"
      },
      "timeline": [
        {
          "date": "2026-08-16",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-24",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-13",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "L3Harris Technologies, Inc. zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "51.6 Mrd. $",
      "sector": "Industrie",
      "industry": "Aerospace & Defense",
      "peRatio": "28.0",
      "evEbitda": "31.8",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "–",
      "week52Range": "103,42 – 179,16 $",
      "dividendYield": "1,0%"
    },
    "profile": "L3Harris Technologies, Inc. ist im Bereich Aerospace & Defense innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-04-30",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-27"
      },
      "timeline": [
        {
          "date": "2026-08-27",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-27",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-30",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Lennox International, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Building Products & Equipment) ist zulässig, Verschuldung (14.1%) und Cash-Quote (0.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "14.4 Mrd. $",
      "sector": "Industrie",
      "industry": "Building Products & Equipment",
      "peRatio": "18.5",
      "evEbitda": "14.0",
      "epsGrowth": "0.0%",
      "freeCashFlow": "278 Mio. $",
      "week52Range": "12,21 – 19,69 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Lennox International, Inc. ist im Bereich Building Products & Equipment innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-05",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-08"
      },
      "timeline": [
        {
          "date": "2026-09-08",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-16",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-05",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Linde plc erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Chemicals) ist zulässig, Verschuldung (11.9%) und Cash-Quote (1.8%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "221.2 Mrd. $",
      "sector": "Grundstoffe",
      "industry": "Specialty Chemicals",
      "peRatio": "30.9",
      "evEbitda": "19.1",
      "epsGrowth": "0.1%",
      "freeCashFlow": "4.7 Mrd. $",
      "week52Range": "156,51 – 265,20 $",
      "dividendYield": "1,2%"
    },
    "profile": "Linde plc ist im Bereich Specialty Chemicals innerhalb des Sektors Grundstoffe tätig.",
    "events": {
      "agm": {
        "date": "2027-01-06",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-17"
      },
      "timeline": [
        {
          "date": "2026-09-28",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-17",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-06",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Lumentum Holdings Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Communication Equipment) ist zulässig, Verschuldung (6.0%) und Cash-Quote (5.7%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "55.5 Mrd. $",
      "sector": "Technologie",
      "industry": "Communication Equipment",
      "peRatio": "125.0",
      "evEbitda": "100.9",
      "epsGrowth": "–",
      "freeCashFlow": "93 Mio. $",
      "week52Range": "37,93 – 50,58 $",
      "dividendYield": "0,8%"
    },
    "profile": "Lumentum Holdings Inc. ist im Bereich Communication Equipment innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-11-17",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-14"
      },
      "timeline": [
        {
          "date": "2026-08-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-14",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-17",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Eli Lilly and Company erfüllt aktuell alle geprüften Kriterien: Die Branche (Drug Manufacturers - General) ist zulässig, Verschuldung (4.2%) und Cash-Quote (0.5%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "1.02 Bio. $",
      "sector": "Gesundheit",
      "industry": "Drug Manufacturers - General",
      "peRatio": "40.8",
      "evEbitda": "29.3",
      "epsGrowth": "1.7%",
      "freeCashFlow": "9.2 Mrd. $",
      "week52Range": "98,36 – 128,29 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Eli Lilly and Company ist im Bereich Drug Manufacturers - General innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-01-24",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-23"
      },
      "timeline": [
        {
          "date": "2026-09-03",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-23",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-24",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Lockheed Martin Corporation zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "134.5 Mrd. $",
      "sector": "Industrie",
      "industry": "Aerospace & Defense",
      "peRatio": "21.5",
      "evEbitda": "15.6",
      "epsGrowth": "4.4%",
      "freeCashFlow": "5.6 Mrd. $",
      "week52Range": "99,19 – 144,03 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Lockheed Martin Corporation ist im Bereich Aerospace & Defense innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-05-15",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-29"
      },
      "timeline": [
        {
          "date": "2026-08-28",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-08-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-05-15",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Alliant Energy Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 66.3% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "18.3 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Electric",
      "peRatio": "22.3",
      "evEbitda": "16.6",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "-1.1 Mrd. $",
      "week52Range": "224,62 – 295,28 $",
      "dividendYield": "2,7%"
    },
    "profile": "Alliant Energy Corporation ist im Bereich Utilities - Regulated Electric innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2026-09-24",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-18"
      },
      "timeline": [
        {
          "date": "2026-08-27",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-18",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-24",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Lowe's Companies, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 36.5% (Limit 30%)). Die Branche (Home Improvement Retail) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "116.6 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Home Improvement Retail",
      "peRatio": "17.6",
      "evEbitda": "12.6",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "4.8 Mrd. $",
      "week52Range": "22,15 – 29,88 $",
      "dividendYield": "3,6%"
    },
    "profile": "Lowe's Companies, Inc. ist im Bereich Home Improvement Retail innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2026-11-05",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-23"
      },
      "timeline": [
        {
          "date": "2026-09-23",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-10",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-05",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Lam Research Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductor Equipment & Materials) ist zulässig, Verschuldung (1.0%) und Cash-Quote (1.5%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "366.6 Mrd. $",
      "sector": "Technologie",
      "industry": "Semiconductor Equipment & Materials",
      "peRatio": "50.8",
      "evEbitda": "42.2",
      "epsGrowth": "0.3%",
      "freeCashFlow": "3.3 Mrd. $",
      "week52Range": "188,54 – 350,15 $",
      "dividendYield": "3,4%"
    },
    "profile": "Lam Research Corporation ist im Bereich Semiconductor Equipment & Materials innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-03-17",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-16"
      },
      "timeline": [
        {
          "date": "2026-08-16",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-12",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-17",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "lululemon athletica inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Apparel Retail) ist zulässig, Verschuldung (15.8%) und Cash-Quote (11.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "13.5 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Apparel Retail",
      "peRatio": "9.6",
      "evEbitda": "5.5",
      "epsGrowth": "-0.3%",
      "freeCashFlow": "1.1 Mrd. $",
      "week52Range": "96,64 – 168,14 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "lululemon athletica inc. ist im Bereich Apparel Retail innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-03-18",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-11"
      },
      "timeline": [
        {
          "date": "2026-10-10",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-11",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-03-18",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Southwest Airlines Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 31.3% (Limit 30%)). Die Branche (Airlines) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "22.0 Mrd. $",
      "sector": "Industrie",
      "industry": "Airlines",
      "peRatio": "28.1",
      "evEbitda": "10.7",
      "epsGrowth": "0.2%",
      "freeCashFlow": "-835 Mio. $",
      "week52Range": "249,65 – 402,22 $",
      "dividendYield": "1,2%"
    },
    "profile": "Southwest Airlines Company ist im Bereich Airlines innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-03-23",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-05"
      },
      "timeline": [
        {
          "date": "2026-09-05",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-05",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-23",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Las Vegas Sands Corp. zählt zur ausgeschlossenen Branche Resorts & Casinos und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "31.7 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Resorts & Casinos",
      "peRatio": "18.9",
      "evEbitda": "9.5",
      "epsGrowth": "-0.2%",
      "freeCashFlow": "2.2 Mrd. $",
      "week52Range": "136,92 – 246,46 $",
      "dividendYield": "3,8%"
    },
    "profile": "Las Vegas Sands Corp. ist im Bereich Resorts & Casinos innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-05-29",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-03"
      },
      "timeline": [
        {
          "date": "2026-10-03",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-11",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-29",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "LyondellBasell Industries NV überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 71.5% (Limit 30%)). Die Branche (Specialty Chemicals) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "20.0 Mrd. $",
      "sector": "Grundstoffe",
      "industry": "Specialty Chemicals",
      "peRatio": "–",
      "evEbitda": "8.9",
      "epsGrowth": "4.0%",
      "freeCashFlow": "1.2 Mrd. $",
      "week52Range": "189,94 – 220,91 $",
      "dividendYield": "3,3%"
    },
    "profile": "LyondellBasell Industries NV ist im Bereich Specialty Chemicals innerhalb des Sektors Grundstoffe tätig.",
    "events": {
      "agm": {
        "date": "2027-03-08",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-16"
      },
      "timeline": [
        {
          "date": "2026-08-16",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-02",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-08",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Live Nation Entertainment, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Entertainment) ist zulässig, Verschuldung (27.8%) und Cash-Quote (22.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "40.6 Mrd. $",
      "sector": "Kommunikation",
      "industry": "Entertainment",
      "peRatio": "–",
      "evEbitda": "28.7",
      "epsGrowth": "1.6%",
      "freeCashFlow": "1.7 Mrd. $",
      "week52Range": "141,95 – 265,38 $",
      "dividendYield": "1,9%"
    },
    "profile": "Live Nation Entertainment, Inc. ist im Bereich Entertainment innerhalb des Sektors Kommunikation tätig.",
    "events": {
      "agm": {
        "date": "2027-04-25",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-10"
      },
      "timeline": [
        {
          "date": "2026-09-10",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-07",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-04-25",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Mastercard Incorporated zählt zur ausgeschlossenen Branche Credit Services und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "502.0 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Credit Services",
      "peRatio": "31.5",
      "evEbitda": "23.2",
      "epsGrowth": "0.2%",
      "freeCashFlow": "17.0 Mrd. $",
      "week52Range": "220,60 – 448,31 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Mastercard Incorporated ist im Bereich Credit Services innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-05-13",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-30"
      },
      "timeline": [
        {
          "date": "2026-09-07",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-30",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-05-13",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Mid-America Apartment Communiti überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 36.2% (Limit 30%)). Die Branche (REIT - Residential) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "15.8 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Residential",
      "peRatio": "38.8",
      "evEbitda": "17.1",
      "epsGrowth": "0.1%",
      "freeCashFlow": "921 Mio. $",
      "week52Range": "78,00 – 119,41 $",
      "dividendYield": "2,5%"
    },
    "profile": "Mid-America Apartment Communiti ist im Bereich REIT - Residential innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2027-01-01",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-19"
      },
      "timeline": [
        {
          "date": "2026-08-19",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-26",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-01",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Marriott International erfüllt aktuell alle geprüften Kriterien: Die Branche (Lodging) ist zulässig, Verschuldung (17.7%) und Cash-Quote (0.5%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "98.3 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Lodging",
      "peRatio": "39.1",
      "evEbitda": "24.3",
      "epsGrowth": "0.0%",
      "freeCashFlow": "1.8 Mrd. $",
      "week52Range": "320,01 – 502,29 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Marriott International ist im Bereich Lodging innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-03-07",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-01"
      },
      "timeline": [
        {
          "date": "2026-09-01",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-13",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-07",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Masco Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Building Products & Equipment) ist zulässig, Verschuldung (24.8%) und Cash-Quote (3.9%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "14.1 Mrd. $",
      "sector": "Industrie",
      "industry": "Building Products & Equipment",
      "peRatio": "16.5",
      "evEbitda": "11.5",
      "epsGrowth": "0.2%",
      "freeCashFlow": "897 Mio. $",
      "week52Range": "247,77 – 407,29 $",
      "dividendYield": "3,8%"
    },
    "profile": "Masco Corporation ist im Bereich Building Products & Equipment innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-12-13",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-23"
      },
      "timeline": [
        {
          "date": "2026-09-06",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-23",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-12-13",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "McDonald's Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Restaurants) ist zulässig, Verschuldung (28.5%) und Cash-Quote (0.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "192.3 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Restaurants",
      "peRatio": "22.3",
      "evEbitda": "16.5",
      "epsGrowth": "0.1%",
      "freeCashFlow": "6.0 Mrd. $",
      "week52Range": "117,86 – 244,92 $",
      "dividendYield": "3,4%"
    },
    "profile": "McDonald's Corporation ist im Bereich Restaurants innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2026-08-24",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-25"
      },
      "timeline": [
        {
          "date": "2026-08-24",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-08-31",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-25",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Microchip Technology Incorporat erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (14.0%) und Cash-Quote (0.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "40.3 Mrd. $",
      "sector": "Technologie",
      "industry": "Semiconductors",
      "peRatio": "337.7",
      "evEbitda": "37.5",
      "epsGrowth": "–",
      "freeCashFlow": "1.1 Mrd. $",
      "week52Range": "165,03 – 227,14 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Microchip Technology Incorporat ist im Bereich Semiconductors innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-09-25",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-16"
      },
      "timeline": [
        {
          "date": "2026-09-15",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-25",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-16",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "McKesson Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Distribution) ist zulässig, Verschuldung (8.8%) und Cash-Quote (4.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "100.2 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Medical Distribution",
      "peRatio": "22.3",
      "evEbitda": "15.8",
      "epsGrowth": "0.4%",
      "freeCashFlow": "5.7 Mrd. $",
      "week52Range": "39,32 – 57,47 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "McKesson Corporation ist im Bereich Medical Distribution innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-05-05",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-22"
      },
      "timeline": [
        {
          "date": "2026-08-25",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-22",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-05-05",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Moody's Corporation zählt zur ausgeschlossenen Branche Financial Data & Stock Exchanges und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "82.8 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Financial Data & Stock Exchanges",
      "peRatio": "30.4",
      "evEbitda": "22.0",
      "epsGrowth": "0.6%",
      "freeCashFlow": "2.6 Mrd. $",
      "week52Range": "57,20 – 105,28 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Moody's Corporation ist im Bereich Financial Data & Stock Exchanges innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-02-16",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-19"
      },
      "timeline": [
        {
          "date": "2026-08-21",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-19",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-02-16",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Mondelez International, Inc. zählt zur ausgeschlossenen Branche Confectioners und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "80.0 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Confectioners",
      "peRatio": "38.0",
      "evEbitda": "16.4",
      "epsGrowth": "1.4%",
      "freeCashFlow": "2.3 Mrd. $",
      "week52Range": "83,87 – 131,64 $",
      "dividendYield": "3,3%"
    },
    "profile": "Mondelez International, Inc. ist im Bereich Confectioners innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2027-04-25",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-26"
      },
      "timeline": [
        {
          "date": "2026-09-21",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-26",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-25",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Medtronic plc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Devices) ist zulässig, Verschuldung (26.7%) und Cash-Quote (8.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "109.3 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Medical Devices",
      "peRatio": "22.9",
      "evEbitda": "12.9",
      "epsGrowth": "0.2%",
      "freeCashFlow": "4.6 Mrd. $",
      "week52Range": "115,61 – 161,32 $",
      "dividendYield": "3,2%"
    },
    "profile": "Medtronic plc. ist im Bereich Medical Devices innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2026-08-27",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-25"
      },
      "timeline": [
        {
          "date": "2026-08-27",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-22",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-25",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "MetLife, Inc. zählt zur ausgeschlossenen Branche Insurance - Life und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "61.9 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Insurance - Life",
      "peRatio": "18.6",
      "evEbitda": "14.2",
      "epsGrowth": "0.4%",
      "freeCashFlow": "-17.4 Mrd. $",
      "week52Range": "73,36 – 92,12 $",
      "dividendYield": "3,7%"
    },
    "profile": "MetLife, Inc. ist im Bereich Insurance - Life innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-11-16",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-03"
      },
      "timeline": [
        {
          "date": "2026-08-31",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-03",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-16",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Meta Platforms, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Internet Content & Information) ist zulässig, Verschuldung (7.9%) und Cash-Quote (6.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "1.42 Bio. $",
      "sector": "Kommunikation",
      "industry": "Internet Content & Information",
      "peRatio": "21.0",
      "evEbitda": "13.1",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "21.6 Mrd. $",
      "week52Range": "180,74 – 296,42 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Meta Platforms, Inc. ist im Bereich Internet Content & Information innerhalb des Sektors Kommunikation tätig.",
    "events": {
      "agm": {
        "date": "2027-01-30",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-01"
      },
      "timeline": [
        {
          "date": "2026-09-01",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-14",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-30",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "MGM Resorts International zählt zur ausgeschlossenen Branche Resorts & Casinos und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "11.4 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Resorts & Casinos",
      "peRatio": "27.0",
      "evEbitda": "17.6",
      "epsGrowth": "5.2%",
      "freeCashFlow": "879 Mio. $",
      "week52Range": "155,75 – 265,35 $",
      "dividendYield": "1,3%"
    },
    "profile": "MGM Resorts International ist im Bereich Resorts & Casinos innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-05-17",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-01"
      },
      "timeline": [
        {
          "date": "2026-09-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-01",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-05-17",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "McCormick & Company, Incorporat überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 36.1% (Limit 30%)). Die Branche (Packaged Foods) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "13.7 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Packaged Foods",
      "peRatio": "8.5",
      "evEbitda": "13.0",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "714 Mio. $",
      "week52Range": "262,86 – 361,43 $",
      "dividendYield": "0,5%"
    },
    "profile": "McCormick & Company, Incorporat ist im Bereich Packaged Foods innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2026-11-07",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-14"
      },
      "timeline": [
        {
          "date": "2026-08-14",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-30",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-07",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Martin Marietta Materials, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Building Materials) ist zulässig, Verschuldung (20.1%) und Cash-Quote (0.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "31.5 Mrd. $",
      "sector": "Grundstoffe",
      "industry": "Building Materials",
      "peRatio": "34.1",
      "evEbitda": "17.8",
      "epsGrowth": "-0.2%",
      "freeCashFlow": "593 Mio. $",
      "week52Range": "113,86 – 202,58 $",
      "dividendYield": "4,4%"
    },
    "profile": "Martin Marietta Materials, Inc. ist im Bereich Building Materials innerhalb des Sektors Grundstoffe tätig.",
    "events": {
      "agm": {
        "date": "2026-12-28",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-22"
      },
      "timeline": [
        {
          "date": "2026-09-16",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-22",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-12-28",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "3M Company erfüllt aktuell alle geprüften Kriterien: Die Branche (Conglomerates) ist zulässig, Verschuldung (14.5%) und Cash-Quote (5.8%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "90.9 Mrd. $",
      "sector": "Industrie",
      "industry": "Conglomerates",
      "peRatio": "31.4",
      "evEbitda": "15.2",
      "epsGrowth": "0.3%",
      "freeCashFlow": "6.4 Mrd. $",
      "week52Range": "163,70 – 260,43 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "3M Company ist im Bereich Conglomerates innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-12-06",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-14"
      },
      "timeline": [
        {
          "date": "2026-08-14",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-27",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-12-06",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Monster Beverage Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Beverages - Non-Alcoholic) ist zulässig, Verschuldung (0.1%) und Cash-Quote (3.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "94.3 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Beverages - Non-Alcoholic",
      "peRatio": "46.6",
      "evEbitda": "32.4",
      "epsGrowth": "0.3%",
      "freeCashFlow": "1.7 Mrd. $",
      "week52Range": "201,12 – 235,36 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Monster Beverage Corporation ist im Bereich Beverages - Non-Alcoholic innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2026-10-12",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-31"
      },
      "timeline": [
        {
          "date": "2026-08-28",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-08-31",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-12",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Altria Group, Inc. zählt zur ausgeschlossenen Branche Tobacco und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "114.1 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Tobacco",
      "peRatio": "14.4",
      "evEbitda": "8.6",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "9.0 Mrd. $",
      "week52Range": "165,55 – 213,61 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Altria Group, Inc. ist im Bereich Tobacco innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2026-11-15",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-13"
      },
      "timeline": [
        {
          "date": "2026-09-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-13",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-15",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Mosaic Company (The) überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 82.0% (Limit 30%)). Die Branche (Agricultural Inputs) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "7.0 Mrd. $",
      "sector": "Grundstoffe",
      "industry": "Agricultural Inputs",
      "peRatio": "158.0",
      "evEbitda": "6.4",
      "epsGrowth": "–",
      "freeCashFlow": "-290 Mio. $",
      "week52Range": "287,01 – 396,52 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Mosaic Company (The) ist im Bereich Agricultural Inputs innerhalb des Sektors Grundstoffe tätig.",
    "events": {
      "agm": {
        "date": "2026-11-15",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-03"
      },
      "timeline": [
        {
          "date": "2026-08-26",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-03",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-15",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Marathon Petroleum Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 37.2% (Limit 30%)). Die Branche (Oil & Gas Refining & Marketing) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "92.4 Mrd. $",
      "sector": "Energie",
      "industry": "Oil & Gas Refining & Marketing",
      "peRatio": "20.8",
      "evEbitda": "12.8",
      "epsGrowth": "–",
      "freeCashFlow": "3.5 Mrd. $",
      "week52Range": "51,19 – 114,97 $",
      "dividendYield": "4,2%"
    },
    "profile": "Marathon Petroleum Corporation ist im Bereich Oil & Gas Refining & Marketing innerhalb des Sektors Energie tätig.",
    "events": {
      "agm": {
        "date": "2026-08-18",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-23"
      },
      "timeline": [
        {
          "date": "2026-08-18",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-23",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-09",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        }
      ]
    }
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
    "insight": "Monolithic Power Systems, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (0.0%) und Cash-Quote (2.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "70.1 Mrd. $",
      "sector": "Technologie",
      "industry": "Semiconductors",
      "peRatio": "87.0",
      "evEbitda": "68.8",
      "epsGrowth": "0.9%",
      "freeCashFlow": "–",
      "week52Range": "203,16 – 369,39 $",
      "dividendYield": "4,2%"
    },
    "profile": "Monolithic Power Systems, Inc. ist im Bereich Semiconductors innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-05-08",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-16"
      },
      "timeline": [
        {
          "date": "2026-09-06",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-16",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-05-08",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Merck & Company, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Drug Manufacturers - General) ist zulässig, Verschuldung (15.3%) und Cash-Quote (1.8%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "321.6 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Drug Manufacturers - General",
      "peRatio": "36.7",
      "evEbitda": "12.4",
      "epsGrowth": "–",
      "freeCashFlow": "14.0 Mrd. $",
      "week52Range": "90,24 – 154,10 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Merck & Company, Inc. ist im Bereich Drug Manufacturers - General innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-03-31",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-01"
      },
      "timeline": [
        {
          "date": "2026-09-11",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-01",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-03-31",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Moderna, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Biotechnology) ist zulässig, Verschuldung (6.0%) und Cash-Quote (23.9%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "21.8 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Biotechnology",
      "peRatio": "–",
      "evEbitda": "-8.3",
      "epsGrowth": "–",
      "freeCashFlow": "-20 Mio. $",
      "week52Range": "157,05 – 229,26 $",
      "dividendYield": "4,4%"
    },
    "profile": "Moderna, Inc. ist im Bereich Biotechnology innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-03-11",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-04"
      },
      "timeline": [
        {
          "date": "2026-09-04",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-04",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-11",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Marsh zählt zur ausgeschlossenen Branche Insurance Brokers und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "90.5 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Insurance Brokers",
      "peRatio": "23.2",
      "evEbitda": "14.4",
      "epsGrowth": "0.1%",
      "freeCashFlow": "4.8 Mrd. $",
      "week52Range": "243,55 – 382,28 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Marsh ist im Bereich Insurance Brokers innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-04-17",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-27"
      },
      "timeline": [
        {
          "date": "2026-09-27",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-27",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-17",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Marvell Technology, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (3.1%) und Cash-Quote (2.3%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "168.3 Mrd. $",
      "sector": "Technologie",
      "industry": "Semiconductors",
      "peRatio": "64.5",
      "evEbitda": "61.0",
      "epsGrowth": "-0.8%",
      "freeCashFlow": "2.3 Mrd. $",
      "week52Range": "81,37 – 112,90 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Marvell Technology, Inc. ist im Bereich Semiconductors innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-03-26",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-08"
      },
      "timeline": [
        {
          "date": "2026-09-08",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-07",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-26",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Morgan Stanley zählt zur ausgeschlossenen Branche Capital Markets und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "330.8 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Capital Markets",
      "peRatio": "17.0",
      "evEbitda": "–",
      "epsGrowth": "0.6%",
      "freeCashFlow": "–",
      "week52Range": "256,73 – 394,75 $",
      "dividendYield": "3,2%"
    },
    "profile": "Morgan Stanley ist im Bereich Capital Markets innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-04-24",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-04"
      },
      "timeline": [
        {
          "date": "2026-09-21",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-04",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-24",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "MSCI Inc. zählt zur ausgeschlossenen Branche Financial Data & Stock Exchanges und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "41.6 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Financial Data & Stock Exchanges",
      "peRatio": "31.3",
      "evEbitda": "24.4",
      "epsGrowth": "0.2%",
      "freeCashFlow": "1.2 Mrd. $",
      "week52Range": "117,80 – 201,50 $",
      "dividendYield": "1,1%"
    },
    "profile": "MSCI Inc. ist im Bereich Financial Data & Stock Exchanges innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-04-19",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-20"
      },
      "timeline": [
        {
          "date": "2026-09-02",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-20",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-19",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Microsoft Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Infrastructure) ist zulässig, Verschuldung (3.7%) und Cash-Quote (2.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "3.45 Bio. $",
      "sector": "Technologie",
      "industry": "Software - Infrastructure",
      "peRatio": "25.9",
      "evEbitda": "18.0",
      "epsGrowth": "0.3%",
      "freeCashFlow": "16.4 Mrd. $",
      "week52Range": "67,51 – 88,70 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Microsoft Corporation ist im Bereich Software - Infrastructure innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-22",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-23"
      },
      "timeline": [
        {
          "date": "2026-08-21",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-23",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-22",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Motorola Solutions, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Communication Equipment) ist zulässig, Verschuldung (13.3%) und Cash-Quote (1.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "72.3 Mrd. $",
      "sector": "Technologie",
      "industry": "Communication Equipment",
      "peRatio": "35.1",
      "evEbitda": "23.2",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "1.8 Mrd. $",
      "week52Range": "142,98 – 215,40 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Motorola Solutions, Inc. ist im Bereich Communication Equipment innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-05-28",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-18"
      },
      "timeline": [
        {
          "date": "2026-08-27",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-18",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-05-28",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "M&T Bank Corporation zählt zur ausgeschlossenen Branche Banks - Regional und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "35.7 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Banks - Regional",
      "peRatio": "13.0",
      "evEbitda": "–",
      "epsGrowth": "0.3%",
      "freeCashFlow": "–",
      "week52Range": "258,40 – 408,33 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "M&T Bank Corporation ist im Bereich Banks - Regional innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-03-22",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-29"
      },
      "timeline": [
        {
          "date": "2026-09-09",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-03-22",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Mettler-Toledo International, I erfüllt aktuell alle geprüften Kriterien: Die Branche (Diagnostics & Research) ist zulässig, Verschuldung (7.4%) und Cash-Quote (0.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "28.6 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Diagnostics & Research",
      "peRatio": "31.9",
      "evEbitda": "24.0",
      "epsGrowth": "0.2%",
      "freeCashFlow": "715 Mio. $",
      "week52Range": "57,84 – 116,49 $",
      "dividendYield": "0,6%"
    },
    "profile": "Mettler-Toledo International, I ist im Bereich Diagnostics & Research innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2026-12-11",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-04"
      },
      "timeline": [
        {
          "date": "2026-10-04",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-12",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-12-11",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Micron Technology, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (0.7%) und Cash-Quote (2.8%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "929.5 Mrd. $",
      "sector": "Technologie",
      "industry": "Semiconductors",
      "peRatio": "18.6",
      "evEbitda": "13.3",
      "epsGrowth": "13.7%",
      "freeCashFlow": "7.6 Mrd. $",
      "week52Range": "359,97 – 526,40 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Micron Technology, Inc. ist im Bereich Semiconductors innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-05-10",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-17"
      },
      "timeline": [
        {
          "date": "2026-09-17",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-01",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-10",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Norwegian Cruise Line Holdings überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 191.1% (Limit 30%)). Die Branche (Travel Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "8.5 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Travel Services",
      "peRatio": "11.2",
      "evEbitda": "9.5",
      "epsGrowth": "6.2%",
      "freeCashFlow": "-1.6 Mrd. $",
      "week52Range": "182,02 – 292,34 $",
      "dividendYield": "4,0%"
    },
    "profile": "Norwegian Cruise Line Holdings ist im Bereich Travel Services innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-01-29",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-06"
      },
      "timeline": [
        {
          "date": "2026-10-06",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-07",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-29",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Nasdaq, Inc. zählt zur ausgeschlossenen Branche Financial Data & Stock Exchanges und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "52.7 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Financial Data & Stock Exchanges",
      "peRatio": "27.5",
      "evEbitda": "18.3",
      "epsGrowth": "0.1%",
      "freeCashFlow": "1.7 Mrd. $",
      "week52Range": "23,98 – 36,28 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Nasdaq, Inc. ist im Bereich Financial Data & Stock Exchanges innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-12-28",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-20"
      },
      "timeline": [
        {
          "date": "2026-08-20",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-26",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-12-28",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Nordson Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (11.9%) und Cash-Quote (0.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "16.6 Mrd. $",
      "sector": "Industrie",
      "industry": "Specialty Industrial Machinery",
      "peRatio": "31.8",
      "evEbitda": "20.3",
      "epsGrowth": "0.1%",
      "freeCashFlow": "575 Mio. $",
      "week52Range": "211,11 – 238,05 $",
      "dividendYield": "3,7%"
    },
    "profile": "Nordson Corporation ist im Bereich Specialty Industrial Machinery innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-12-10",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-14"
      },
      "timeline": [
        {
          "date": "2026-09-14",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-12",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-12-10",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "NextEra Energy, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 60.8% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "181.3 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Electric",
      "peRatio": "19.5",
      "evEbitda": "20.5",
      "epsGrowth": "0.5%",
      "freeCashFlow": "-17.8 Mrd. $",
      "week52Range": "207,85 – 243,99 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "NextEra Energy, Inc. ist im Bereich Utilities - Regulated Electric innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2027-04-29",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-18"
      },
      "timeline": [
        {
          "date": "2026-09-18",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-02",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-04-29",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Newmont Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Gold) ist zulässig, Verschuldung (5.7%) und Cash-Quote (9.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "98.7 Mrd. $",
      "sector": "Grundstoffe",
      "industry": "Gold",
      "peRatio": "11.8",
      "evEbitda": "5.6",
      "epsGrowth": "0.1%",
      "freeCashFlow": "8.8 Mrd. $",
      "week52Range": "197,29 – 366,39 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Newmont Corporation ist im Bereich Gold innerhalb des Sektors Grundstoffe tätig.",
    "events": {
      "agm": {
        "date": "2026-09-06",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-30"
      },
      "timeline": [
        {
          "date": "2026-08-25",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-08-30",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-06",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Netflix, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Entertainment) ist zulässig, Verschuldung (5.6%) und Cash-Quote (3.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "298.6 Mrd. $",
      "sector": "Kommunikation",
      "industry": "Entertainment",
      "peRatio": "22.6",
      "evEbitda": "20.8",
      "epsGrowth": "0.1%",
      "freeCashFlow": "25.4 Mrd. $",
      "week52Range": "251,80 – 407,24 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Netflix, Inc. ist im Bereich Entertainment innerhalb des Sektors Kommunikation tätig.",
    "events": {
      "agm": {
        "date": "2027-04-18",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-12"
      },
      "timeline": [
        {
          "date": "2026-09-12",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-07",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-04-18",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "NiSource Inc überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 78.9% (Limit 30%)). Die Branche (Utilities - Regulated Gas) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "21.3 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Gas",
      "peRatio": "22.1",
      "evEbitda": "13.5",
      "epsGrowth": "0.1%",
      "freeCashFlow": "-1.6 Mrd. $",
      "week52Range": "152,81 – 203,74 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "NiSource Inc ist im Bereich Utilities - Regulated Gas innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2027-03-17",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-15"
      },
      "timeline": [
        {
          "date": "2026-09-14",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-15",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-03-17",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Nike, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Footwear & Accessories) ist zulässig, Verschuldung (17.8%) und Cash-Quote (14.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "61.9 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Footwear & Accessories",
      "peRatio": "19.9",
      "evEbitda": "13.0",
      "epsGrowth": "4.3%",
      "freeCashFlow": "1.9 Mrd. $",
      "week52Range": "278,23 – 444,50 $",
      "dividendYield": "2,5%"
    },
    "profile": "Nike, Inc. ist im Bereich Footwear & Accessories innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2026-10-20",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-21"
      },
      "timeline": [
        {
          "date": "2026-08-21",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-19",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-20",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Northrop Grumman Corporation zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "77.1 Mrd. $",
      "sector": "Industrie",
      "industry": "Aerospace & Defense",
      "peRatio": "17.2",
      "evEbitda": "12.7",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "2.5 Mrd. $",
      "week52Range": "31,82 – 46,23 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Northrop Grumman Corporation ist im Bereich Aerospace & Defense innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-11-13",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-23"
      },
      "timeline": [
        {
          "date": "2026-08-23",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-28",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-13",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "ServiceNow, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (7.4%) und Cash-Quote (4.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "115.0 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Application",
      "peRatio": "69.5",
      "evEbitda": "41.0",
      "epsGrowth": "-0.2%",
      "freeCashFlow": "5.1 Mrd. $",
      "week52Range": "53,52 – 106,27 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "ServiceNow, Inc. ist im Bereich Software - Application innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-10-22",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-08"
      },
      "timeline": [
        {
          "date": "2026-09-08",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-22",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "NRG Energy, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 82.4% (Limit 30%)). Die Branche (Utilities - Independent Power Producers) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "28.3 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Independent Power Producers",
      "peRatio": "147.6",
      "evEbitda": "23.1",
      "epsGrowth": "-0.9%",
      "freeCashFlow": "432 Mio. $",
      "week52Range": "42,22 – 75,53 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "NRG Energy, Inc. ist im Bereich Utilities - Independent Power Producers innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2027-03-05",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-13"
      },
      "timeline": [
        {
          "date": "2026-08-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-08",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-05",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Norfolk Southern Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Railroads) ist zulässig, Verschuldung (22.8%) und Cash-Quote (1.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "75.4 Mrd. $",
      "sector": "Industrie",
      "industry": "Railroads",
      "peRatio": "28.6",
      "evEbitda": "16.1",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "1.4 Mrd. $",
      "week52Range": "93,60 – 198,12 $",
      "dividendYield": "3,5%"
    },
    "profile": "Norfolk Southern Corporation ist im Bereich Railroads innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-04-01",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-29"
      },
      "timeline": [
        {
          "date": "2026-09-02",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-01",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "NetApp, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Infrastructure) ist zulässig, Verschuldung (7.8%) und Cash-Quote (10.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "35.0 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Infrastructure",
      "peRatio": "28.1",
      "evEbitda": "18.1",
      "epsGrowth": "0.2%",
      "freeCashFlow": "1.3 Mrd. $",
      "week52Range": "226,24 – 266,01 $",
      "dividendYield": "3,4%"
    },
    "profile": "NetApp, Inc. ist im Bereich Software - Infrastructure innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-09-12",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-08"
      },
      "timeline": [
        {
          "date": "2026-08-24",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-08",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-12",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Northern Trust Corporation zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "33.3 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Asset Management",
      "peRatio": "15.7",
      "evEbitda": "–",
      "epsGrowth": "1.0%",
      "freeCashFlow": "–",
      "week52Range": "92,67 – 153,69 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Northern Trust Corporation ist im Bereich Asset Management innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-12-15",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-10"
      },
      "timeline": [
        {
          "date": "2026-10-10",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-12",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-12-15",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Nucor Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Steel) ist zulässig, Verschuldung (12.1%) und Cash-Quote (4.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "58.6 Mrd. $",
      "sector": "Grundstoffe",
      "industry": "Steel",
      "peRatio": "20.5",
      "evEbitda": "11.3",
      "epsGrowth": "0.9%",
      "freeCashFlow": "669 Mio. $",
      "week52Range": "240,50 – 435,69 $",
      "dividendYield": "1,0%"
    },
    "profile": "Nucor Corporation ist im Bereich Steel innerhalb des Sektors Grundstoffe tätig.",
    "events": {
      "agm": {
        "date": "2026-10-28",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-20"
      },
      "timeline": [
        {
          "date": "2026-09-19",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-20",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-28",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "NVIDIA Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (0.3%) und Cash-Quote (1.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "4.86 Bio. $",
      "sector": "Technologie",
      "industry": "Semiconductors",
      "peRatio": "30.8",
      "evEbitda": "29.1",
      "epsGrowth": "2.1%",
      "freeCashFlow": "46.3 Mrd. $",
      "week52Range": "161,36 – 271,88 $",
      "dividendYield": "1,1%"
    },
    "profile": "NVIDIA Corporation ist im Bereich Semiconductors innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-02-04",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-21"
      },
      "timeline": [
        {
          "date": "2026-09-21",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-03",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-02-04",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "NVR, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Residential Construction) ist zulässig, Verschuldung (6.4%) und Cash-Quote (6.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "16.5 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Residential Construction",
      "peRatio": "16.0",
      "evEbitda": "10.7",
      "epsGrowth": "-0.2%",
      "freeCashFlow": "–",
      "week52Range": "239,47 – 342,46 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "NVR, Inc. ist im Bereich Residential Construction innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-05-30",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-24"
      },
      "timeline": [
        {
          "date": "2026-09-24",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-11",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-30",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "News Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Entertainment) ist zulässig, Verschuldung (17.3%) und Cash-Quote (12.9%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "16.9 Mrd. $",
      "sector": "Kommunikation",
      "industry": "Entertainment",
      "peRatio": "39.6",
      "evEbitda": "14.8",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "1.7 Mrd. $",
      "week52Range": "284,91 – 394,99 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "News Corporation ist im Bereich Entertainment innerhalb des Sektors Kommunikation tätig.",
    "events": {
      "agm": {
        "date": "2027-03-15",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-27"
      },
      "timeline": [
        {
          "date": "2026-08-26",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-08-27",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-03-15",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "News Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Entertainment) ist zulässig, Verschuldung (19.6%) und Cash-Quote (14.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "14.9 Mrd. $",
      "sector": "Kommunikation",
      "industry": "Entertainment",
      "peRatio": "34.9",
      "evEbitda": "13.2",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "1.7 Mrd. $",
      "week52Range": "44,60 – 78,90 $",
      "dividendYield": "3,6%"
    },
    "profile": "News Corporation ist im Bereich Entertainment innerhalb des Sektors Kommunikation tätig.",
    "events": {
      "agm": {
        "date": "2027-03-11",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-18"
      },
      "timeline": [
        {
          "date": "2026-09-18",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-07",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-11",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "NXP Semiconductors N.V. erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (19.0%) und Cash-Quote (5.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "57.8 Mrd. $",
      "sector": "Technologie",
      "industry": "Semiconductors",
      "peRatio": "45.6",
      "evEbitda": "13.0",
      "epsGrowth": "0.7%",
      "freeCashFlow": "3.6 Mrd. $",
      "week52Range": "144,13 – 286,15 $",
      "dividendYield": "3,2%"
    },
    "profile": "NXP Semiconductors N.V. ist im Bereich Semiconductors innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-27",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-29"
      },
      "timeline": [
        {
          "date": "2026-08-24",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-08-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-27",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Realty Income Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 50.9% (Limit 30%)). Die Branche (REIT - Retail) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "59.6 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Retail",
      "peRatio": "52.4",
      "evEbitda": "17.5",
      "epsGrowth": "0.2%",
      "freeCashFlow": "1.8 Mrd. $",
      "week52Range": "86,59 – 131,06 $",
      "dividendYield": "1,9%"
    },
    "profile": "Realty Income Corporation ist im Bereich REIT - Retail innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2026-12-08",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-30"
      },
      "timeline": [
        {
          "date": "2026-08-30",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-28",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-12-08",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Old Dominion Freight Line, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Trucking) ist zulässig, Verschuldung (0.0%) und Cash-Quote (0.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "44.1 Mrd. $",
      "sector": "Industrie",
      "industry": "Trucking",
      "peRatio": "40.8",
      "evEbitda": "24.1",
      "epsGrowth": "0.3%",
      "freeCashFlow": "–",
      "week52Range": "222,42 – 447,98 $",
      "dividendYield": "1,3%"
    },
    "profile": "Old Dominion Freight Line, Inc. ist im Bereich Trucking innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-03-17",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-02"
      },
      "timeline": [
        {
          "date": "2026-09-02",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-12",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-17",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "ONEOK, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 58.8% (Limit 30%)). Die Branche (Oil & Gas Midstream) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "57.2 Mrd. $",
      "sector": "Energie",
      "industry": "Oil & Gas Midstream",
      "peRatio": "16.2",
      "evEbitda": "12.1",
      "epsGrowth": "0.2%",
      "freeCashFlow": "454 Mio. $",
      "week52Range": "46,99 – 63,26 $",
      "dividendYield": "3,6%"
    },
    "profile": "ONEOK, Inc. ist im Bereich Oil & Gas Midstream innerhalb des Sektors Energie tätig.",
    "events": {
      "agm": {
        "date": "2026-09-14",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-01"
      },
      "timeline": [
        {
          "date": "2026-09-14",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-22",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-01",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Omnicom Group Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 50.9% (Limit 30%)). Die Branche (Advertising Agencies) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "22.4 Mrd. $",
      "sector": "Kommunikation",
      "industry": "Advertising Agencies",
      "peRatio": "212.7",
      "evEbitda": "8.3",
      "epsGrowth": "0.6%",
      "freeCashFlow": "4.3 Mrd. $",
      "week52Range": "201,78 – 362,63 $",
      "dividendYield": "4,4%"
    },
    "profile": "Omnicom Group Inc. ist im Bereich Advertising Agencies innerhalb des Sektors Kommunikation tätig.",
    "events": {
      "agm": {
        "date": "2027-04-22",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-29"
      },
      "timeline": [
        {
          "date": "2026-09-22",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-22",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "ON Semiconductor Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (10.2%) und Cash-Quote (7.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "31.8 Mrd. $",
      "sector": "Technologie",
      "industry": "Semiconductors",
      "peRatio": "60.0",
      "evEbitda": "16.0",
      "epsGrowth": "–",
      "freeCashFlow": "1.3 Mrd. $",
      "week52Range": "266,17 – 306,68 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "ON Semiconductor Corporation ist im Bereich Semiconductors innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-08-26",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-04"
      },
      "timeline": [
        {
          "date": "2026-08-26",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-18",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-04",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Oracle Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 44.8% (Limit 30%)). Die Branche (Software - Infrastructure) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "374.1 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Infrastructure",
      "peRatio": "22.3",
      "evEbitda": "16.9",
      "epsGrowth": "0.2%",
      "freeCashFlow": "-24.5 Mrd. $",
      "week52Range": "119,79 – 217,97 $",
      "dividendYield": "0,4%"
    },
    "profile": "Oracle Corporation ist im Bereich Software - Infrastructure innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-05-13",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-19"
      },
      "timeline": [
        {
          "date": "2026-09-19",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-13",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "O'Reilly Automotive, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Auto Parts) ist zulässig, Verschuldung (13.1%) und Cash-Quote (0.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "72.9 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Auto Parts",
      "peRatio": "28.4",
      "evEbitda": "19.7",
      "epsGrowth": "0.1%",
      "freeCashFlow": "1.6 Mrd. $",
      "week52Range": "347,40 – 479,04 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "O'Reilly Automotive, Inc. ist im Bereich Auto Parts innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-02-14",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-04"
      },
      "timeline": [
        {
          "date": "2026-08-31",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-04",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-02-14",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Otis Worldwide Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 32.3% (Limit 30%)). Die Branche (Specialty Industrial Machinery) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "27.4 Mrd. $",
      "sector": "Industrie",
      "industry": "Specialty Industrial Machinery",
      "peRatio": "18.5",
      "evEbitda": "13.5",
      "epsGrowth": "0.1%",
      "freeCashFlow": "1.4 Mrd. $",
      "week52Range": "55,45 – 99,11 $",
      "dividendYield": "1,9%"
    },
    "profile": "Otis Worldwide Corporation ist im Bereich Specialty Industrial Machinery innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-08-21",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-21"
      },
      "timeline": [
        {
          "date": "2026-08-21",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-11",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-21",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Occidental Petroleum Corporatio erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas E&P) ist zulässig, Verschuldung (29.3%) und Cash-Quote (6.7%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "56.8 Mrd. $",
      "sector": "Energie",
      "industry": "Oil & Gas E&P",
      "peRatio": "77.1",
      "evEbitda": "7.2",
      "epsGrowth": "3.2%",
      "freeCashFlow": "3.0 Mrd. $",
      "week52Range": "102,61 – 195,89 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Occidental Petroleum Corporatio ist im Bereich Oil & Gas E&P innerhalb des Sektors Energie tätig.",
    "events": {
      "agm": {
        "date": "2027-05-09",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-01"
      },
      "timeline": [
        {
          "date": "2026-10-01",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-12",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-09",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Palo Alto Networks, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Infrastructure) ist zulässig, Verschuldung (0.8%) und Cash-Quote (1.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "270.4 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Infrastructure",
      "peRatio": "286.1",
      "evEbitda": "181.6",
      "epsGrowth": "–",
      "freeCashFlow": "3.6 Mrd. $",
      "week52Range": "277,70 – 575,53 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Palo Alto Networks, Inc. ist im Bereich Software - Infrastructure innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-05-07",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-13"
      },
      "timeline": [
        {
          "date": "2026-09-15",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-05-07",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Paychex, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (11.1%) und Cash-Quote (2.8%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "41.6 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Application",
      "peRatio": "23.8",
      "evEbitda": "28.0",
      "epsGrowth": "0.4%",
      "freeCashFlow": "–",
      "week52Range": "328,61 – 414,33 $",
      "dividendYield": "3,8%"
    },
    "profile": "Paychex, Inc. ist im Bereich Software - Application innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-05-22",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-16"
      },
      "timeline": [
        {
          "date": "2026-09-16",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-06",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-22",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "PACCAR Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Farm & Heavy Construction Machinery) ist zulässig, Verschuldung (21.2%) und Cash-Quote (12.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "69.8 Mrd. $",
      "sector": "Industrie",
      "industry": "Farm & Heavy Construction Machinery",
      "peRatio": "27.9",
      "evEbitda": "23.2",
      "epsGrowth": "0.0%",
      "freeCashFlow": "1.9 Mrd. $",
      "week52Range": "57,03 – 93,33 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "PACCAR Inc. ist im Bereich Farm & Heavy Construction Machinery innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-09-06",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-18"
      },
      "timeline": [
        {
          "date": "2026-08-18",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-24",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-06",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Pacific Gas & Electric Co. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 169.0% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "38.3 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Electric",
      "peRatio": "12.5",
      "evEbitda": "9.9",
      "epsGrowth": "0.4%",
      "freeCashFlow": "-6.2 Mrd. $",
      "week52Range": "144,60 – 188,74 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Pacific Gas & Electric Co. ist im Bereich Utilities - Regulated Electric innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2027-03-17",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-02"
      },
      "timeline": [
        {
          "date": "2026-09-02",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-07",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-17",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Public Service Enterprise Group überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 63.9% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "38.2 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Electric",
      "peRatio": "17.0",
      "evEbitda": "13.0",
      "epsGrowth": "0.3%",
      "freeCashFlow": "-172 Mio. $",
      "week52Range": "273,20 – 350,82 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Public Service Enterprise Group ist im Bereich Utilities - Regulated Electric innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2027-04-08",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-19"
      },
      "timeline": [
        {
          "date": "2026-08-19",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-09",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-04-08",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Pepsico, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Beverages - Non-Alcoholic) ist zulässig, Verschuldung (27.9%) und Cash-Quote (5.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "190.6 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Beverages - Non-Alcoholic",
      "peRatio": "18.3",
      "evEbitda": "12.3",
      "epsGrowth": "1.4%",
      "freeCashFlow": "7.8 Mrd. $",
      "week52Range": "160,71 – 240,21 $",
      "dividendYield": "0,5%"
    },
    "profile": "Pepsico, Inc. ist im Bereich Beverages - Non-Alcoholic innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2027-05-20",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-09"
      },
      "timeline": [
        {
          "date": "2026-08-22",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-09",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-05-20",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Pfizer, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 45.4% (Limit 30%)). Die Branche (Drug Manufacturers - General) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "142.5 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Drug Manufacturers - General",
      "peRatio": "19.1",
      "evEbitda": "7.6",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "12.4 Mrd. $",
      "week52Range": "115,96 – 197,29 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Pfizer, Inc. ist im Bereich Drug Manufacturers - General innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-01-02",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-13"
      },
      "timeline": [
        {
          "date": "2026-10-04",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-02",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Principal Financial Group Inc zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "24.3 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Asset Management",
      "peRatio": "16.2",
      "evEbitda": "10.8",
      "epsGrowth": "0.0%",
      "freeCashFlow": "1.1 Mrd. $",
      "week52Range": "276,59 – 479,16 $",
      "dividendYield": "2,3%"
    },
    "profile": "Principal Financial Group Inc ist im Bereich Asset Management innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-09-03",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-11"
      },
      "timeline": [
        {
          "date": "2026-08-30",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-03",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-11",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Procter & Gamble Company (The) erfüllt aktuell alle geprüften Kriterien: Die Branche (Household & Personal Products) ist zulässig, Verschuldung (10.1%) und Cash-Quote (3.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "336.5 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Household & Personal Products",
      "peRatio": "21.8",
      "evEbitda": "15.5",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "12.8 Mrd. $",
      "week52Range": "210,39 – 403,01 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Procter & Gamble Company (The) ist im Bereich Household & Personal Products innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2026-10-14",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-01"
      },
      "timeline": [
        {
          "date": "2026-09-08",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-01",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-14",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Progressive Corporation (The) zählt zur ausgeschlossenen Branche Insurance - Property & Casualty und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "122.9 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Insurance - Property & Casualty",
      "peRatio": "10.6",
      "evEbitda": "8.4",
      "epsGrowth": "0.1%",
      "freeCashFlow": "–",
      "week52Range": "145,08 – 256,68 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Progressive Corporation (The) ist im Bereich Insurance - Property & Casualty innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-04-20",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-13"
      },
      "timeline": [
        {
          "date": "2026-08-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-24",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-04-20",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Parker-Hannifin Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (7.8%) und Cash-Quote (0.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "123.1 Mrd. $",
      "sector": "Industrie",
      "industry": "Specialty Industrial Machinery",
      "peRatio": "36.0",
      "evEbitda": "24.1",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "2.8 Mrd. $",
      "week52Range": "313,11 – 549,95 $",
      "dividendYield": "1,5%"
    },
    "profile": "Parker-Hannifin Corporation ist im Bereich Specialty Industrial Machinery innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-10-17",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-26"
      },
      "timeline": [
        {
          "date": "2026-08-26",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-03",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-17",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "PulteGroup, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Residential Construction) ist zulässig, Verschuldung (10.3%) und Cash-Quote (5.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "24.1 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Residential Construction",
      "peRatio": "12.9",
      "evEbitda": "9.0",
      "epsGrowth": "-0.2%",
      "freeCashFlow": "1.1 Mrd. $",
      "week52Range": "112,09 – 215,22 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "PulteGroup, Inc. ist im Bereich Residential Construction innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-02-24",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-27"
      },
      "timeline": [
        {
          "date": "2026-08-27",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-02-24",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Packaging Corporation of Americ erfüllt aktuell alle geprüften Kriterien: Die Branche (Packaging & Containers) ist zulässig, Verschuldung (19.9%) und Cash-Quote (2.5%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "21.9 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Packaging & Containers",
      "peRatio": "32.0",
      "evEbitda": "13.4",
      "epsGrowth": "-0.2%",
      "freeCashFlow": "–",
      "week52Range": "36,40 – 69,77 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Packaging Corporation of Americ ist im Bereich Packaging & Containers innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-05-29",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-08"
      },
      "timeline": [
        {
          "date": "2026-09-03",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-08",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-05-29",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Prologis, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (REIT - Industrial) ist zulässig, Verschuldung (26.9%) und Cash-Quote (1.3%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "138.1 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Industrial",
      "peRatio": "32.3",
      "evEbitda": "25.9",
      "epsGrowth": "0.9%",
      "freeCashFlow": "5.4 Mrd. $",
      "week52Range": "194,26 – 326,81 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Prologis, Inc. ist im Bereich REIT - Industrial innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2026-10-10",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-12"
      },
      "timeline": [
        {
          "date": "2026-09-13",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-10",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-12",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Palantir Technologies Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Infrastructure) ist zulässig, Verschuldung (0.1%) und Cash-Quote (2.7%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "295.0 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Infrastructure",
      "peRatio": "138.3",
      "evEbitda": "142.4",
      "epsGrowth": "3.2%",
      "freeCashFlow": "1.8 Mrd. $",
      "week52Range": "319,72 – 472,15 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Palantir Technologies Inc. ist im Bereich Software - Infrastructure innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-08-23",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-22"
      },
      "timeline": [
        {
          "date": "2026-08-22",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-23",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-05",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        }
      ]
    }
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
    "insight": "Philip Morris International Inc zählt zur ausgeschlossenen Branche Tobacco und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "297.4 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Tobacco",
      "peRatio": "26.2",
      "evEbitda": "19.0",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "9.7 Mrd. $",
      "week52Range": "137,54 – 260,01 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Philip Morris International Inc ist im Bereich Tobacco innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2027-02-27",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-28"
      },
      "timeline": [
        {
          "date": "2026-08-28",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-02",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-02-27",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "PNC Financial Services Group, I zählt zur ausgeschlossenen Branche Banks - Regional und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "99.7 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Banks - Regional",
      "peRatio": "13.8",
      "evEbitda": "–",
      "epsGrowth": "0.3%",
      "freeCashFlow": "–",
      "week52Range": "233,62 – 456,46 $",
      "dividendYield": "1,4%"
    },
    "profile": "PNC Financial Services Group, I ist im Bereich Banks - Regional innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-04-28",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-24"
      },
      "timeline": [
        {
          "date": "2026-08-24",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-20",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-04-28",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Pentair plc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (16.7%) und Cash-Quote (0.9%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "10.6 Mrd. $",
      "sector": "Industrie",
      "industry": "Specialty Industrial Machinery",
      "peRatio": "16.9",
      "evEbitda": "11.7",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "558 Mio. $",
      "week52Range": "82,07 – 133,65 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Pentair plc. ist im Bereich Specialty Industrial Machinery innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-08-17",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-25"
      },
      "timeline": [
        {
          "date": "2026-08-17",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-08-25",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-24",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        }
      ]
    }
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
    "insight": "Pinnacle West Capital Corporati überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 123.7% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "12.2 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Electric",
      "peRatio": "18.8",
      "evEbitda": "12.8",
      "epsGrowth": "–",
      "freeCashFlow": "-831 Mio. $",
      "week52Range": "37,14 – 52,51 $",
      "dividendYield": "2,6%"
    },
    "profile": "Pinnacle West Capital Corporati ist im Bereich Utilities - Regulated Electric innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2026-08-27",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-13"
      },
      "timeline": [
        {
          "date": "2026-08-23",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-08-27",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Insulet Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Devices) ist zulässig, Verschuldung (8.9%) und Cash-Quote (4.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "11.5 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Medical Devices",
      "peRatio": "38.6",
      "evEbitda": "19.9",
      "epsGrowth": "1.6%",
      "freeCashFlow": "253 Mio. $",
      "week52Range": "79,04 – 126,69 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Insulet Corporation ist im Bereich Medical Devices innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2026-12-10",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-11"
      },
      "timeline": [
        {
          "date": "2026-09-11",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-23",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-12-10",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "PPG Industries, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 30.4% (Limit 30%)). Die Branche (Specialty Chemicals) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "24.6 Mrd. $",
      "sector": "Grundstoffe",
      "industry": "Specialty Chemicals",
      "peRatio": "15.9",
      "evEbitda": "11.3",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "1.1 Mrd. $",
      "week52Range": "249,62 – 379,55 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "PPG Industries, Inc. ist im Bereich Specialty Chemicals innerhalb des Sektors Grundstoffe tätig.",
    "events": {
      "agm": {
        "date": "2027-02-04",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-15"
      },
      "timeline": [
        {
          "date": "2026-08-28",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-15",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-02-04",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "PPL Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 76.6% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "26.5 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Electric",
      "peRatio": "21.6",
      "evEbitda": "12.5",
      "epsGrowth": "0.1%",
      "freeCashFlow": "-1.6 Mrd. $",
      "week52Range": "237,44 – 297,43 $",
      "dividendYield": "4,2%"
    },
    "profile": "PPL Corporation ist im Bereich Utilities - Regulated Electric innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2026-10-19",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-29"
      },
      "timeline": [
        {
          "date": "2026-09-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-14",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-19",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Prudential Financial, Inc. zählt zur ausgeschlossenen Branche Insurance - Life und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "42.4 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Insurance - Life",
      "peRatio": "12.6",
      "evEbitda": "12.2",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "10.4 Mrd. $",
      "week52Range": "31,20 – 48,23 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Prudential Financial, Inc. ist im Bereich Insurance - Life innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-04-20",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-28"
      },
      "timeline": [
        {
          "date": "2026-08-28",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-18",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-04-20",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Public Storage erfüllt aktuell alle geprüften Kriterien: Die Branche (REIT - Industrial) ist zulässig, Verschuldung (16.8%) und Cash-Quote (0.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "60.5 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Industrial",
      "peRatio": "31.0",
      "evEbitda": "20.7",
      "epsGrowth": "0.5%",
      "freeCashFlow": "2.3 Mrd. $",
      "week52Range": "359,64 – 514,32 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Public Storage ist im Bereich REIT - Industrial innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2026-10-09",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-22"
      },
      "timeline": [
        {
          "date": "2026-09-02",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-09",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-22",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Paramount Skydance Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 186.3% (Limit 30%)). Die Branche (Entertainment) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "8.9 Mrd. $",
      "sector": "Kommunikation",
      "industry": "Entertainment",
      "peRatio": "398.0",
      "evEbitda": "8.0",
      "epsGrowth": "-0.3%",
      "freeCashFlow": "16.4 Mrd. $",
      "week52Range": "61,86 – 87,71 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Paramount Skydance Corporation ist im Bereich Entertainment innerhalb des Sektors Kommunikation tätig.",
    "events": {
      "agm": {
        "date": "2026-09-17",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-28"
      },
      "timeline": [
        {
          "date": "2026-08-28",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-31",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-17",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Phillips 66 überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 32.0% (Limit 30%)). Die Branche (Oil & Gas Refining & Marketing) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "84.9 Mrd. $",
      "sector": "Energie",
      "industry": "Oil & Gas Refining & Marketing",
      "peRatio": "20.9",
      "evEbitda": "15.3",
      "epsGrowth": "-0.6%",
      "freeCashFlow": "-1.1 Mrd. $",
      "week52Range": "132,51 – 180,84 $",
      "dividendYield": "3,5%"
    },
    "profile": "Phillips 66 ist im Bereich Oil & Gas Refining & Marketing innerhalb des Sektors Energie tätig.",
    "events": {
      "agm": {
        "date": "2027-02-09",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-29"
      },
      "timeline": [
        {
          "date": "2026-08-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-26",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-02-09",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "PTC Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (10.1%) und Cash-Quote (2.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "15.8 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Application",
      "peRatio": "13.3",
      "evEbitda": "13.3",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "–",
      "week52Range": "86,97 – 151,57 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "PTC Inc. ist im Bereich Software - Application innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-11-25",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-29"
      },
      "timeline": [
        {
          "date": "2026-10-09",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-25",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Quanta Services, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Engineering & Construction) ist zulässig, Verschuldung (6.6%) und Cash-Quote (0.5%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "100.3 Mrd. $",
      "sector": "Industrie",
      "industry": "Engineering & Construction",
      "peRatio": "76.4",
      "evEbitda": "35.0",
      "epsGrowth": "0.9%",
      "freeCashFlow": "2.0 Mrd. $",
      "week52Range": "294,82 – 423,81 $",
      "dividendYield": "3,0%"
    },
    "profile": "Quanta Services, Inc. ist im Bereich Engineering & Construction innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-04-28",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-19"
      },
      "timeline": [
        {
          "date": "2026-08-24",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-19",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-28",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "PayPal Holdings, Inc. zählt zur ausgeschlossenen Branche Credit Services und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "49.3 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Credit Services",
      "peRatio": "10.8",
      "evEbitda": "8.0",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "4.4 Mrd. $",
      "week52Range": "139,45 – 274,47 $",
      "dividendYield": "4,4%"
    },
    "profile": "PayPal Holdings, Inc. ist im Bereich Credit Services innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-12-22",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-29"
      },
      "timeline": [
        {
          "date": "2026-08-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-02",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-12-22",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Qnity Electronics, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductor Equipment & Materials) ist zulässig, Verschuldung (16.5%) und Cash-Quote (3.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "27.5 Mrd. $",
      "sector": "Technologie",
      "industry": "Semiconductor Equipment & Materials",
      "peRatio": "42.2",
      "evEbitda": "21.7",
      "epsGrowth": "-0.2%",
      "freeCashFlow": "702 Mio. $",
      "week52Range": "92,87 – 176,45 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Qnity Electronics, Inc. ist im Bereich Semiconductor Equipment & Materials innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-09-14",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-06"
      },
      "timeline": [
        {
          "date": "2026-09-14",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-25",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-06",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "QUALCOMM Incorporated erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (9.9%) und Cash-Quote (5.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "155.0 Mrd. $",
      "sector": "Technologie",
      "industry": "Semiconductors",
      "peRatio": "16.9",
      "evEbitda": "13.5",
      "epsGrowth": "-0.2%",
      "freeCashFlow": "10.2 Mrd. $",
      "week52Range": "250,41 – 470,47 $",
      "dividendYield": "2,5%"
    },
    "profile": "QUALCOMM Incorporated ist im Bereich Semiconductors innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-05-21",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-08"
      },
      "timeline": [
        {
          "date": "2026-09-13",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-08",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-05-21",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Royal Caribbean Cruises Ltd. erfüllt aktuell alle geprüften Kriterien: Die Branche (Travel Services) ist zulässig, Verschuldung (27.6%) und Cash-Quote (1.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "85.1 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Travel Services",
      "peRatio": "19.6",
      "evEbitda": "15.6",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "-1.5 Mrd. $",
      "week52Range": "368,57 – 512,79 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Royal Caribbean Cruises Ltd. ist im Bereich Travel Services innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-03-30",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-14"
      },
      "timeline": [
        {
          "date": "2026-09-02",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-14",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-03-30",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Regency Centers Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 34.3% (Limit 30%)). Die Branche (REIT - Retail) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "15.0 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Retail",
      "peRatio": "27.0",
      "evEbitda": "18.9",
      "epsGrowth": "0.1%",
      "freeCashFlow": "–",
      "week52Range": "19,26 – 31,73 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Regency Centers Corporation ist im Bereich REIT - Retail innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2027-04-10",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-17"
      },
      "timeline": [
        {
          "date": "2026-09-11",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-17",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-10",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Regeneron Pharmaceuticals, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Biotechnology) ist zulässig, Verschuldung (3.4%) und Cash-Quote (10.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "78.5 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Biotechnology",
      "peRatio": "18.9",
      "evEbitda": "15.1",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "3.1 Mrd. $",
      "week52Range": "125,83 – 206,84 $",
      "dividendYield": "3,3%"
    },
    "profile": "Regeneron Pharmaceuticals, Inc. ist im Bereich Biotechnology innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-03-07",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-18"
      },
      "timeline": [
        {
          "date": "2026-08-18",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-11",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-07",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Regions Financial Corporation zählt zur ausgeschlossenen Branche Banks - Regional und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "26.4 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Banks - Regional",
      "peRatio": "12.6",
      "evEbitda": "–",
      "epsGrowth": "0.1%",
      "freeCashFlow": "–",
      "week52Range": "248,67 – 466,26 $",
      "dividendYield": "1,0%"
    },
    "profile": "Regions Financial Corporation ist im Bereich Banks - Regional innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-03-18",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-19"
      },
      "timeline": [
        {
          "date": "2026-09-19",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-24",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-18",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Raymond James Financial, Inc. zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "33.8 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Asset Management",
      "peRatio": "15.3",
      "evEbitda": "–",
      "epsGrowth": "0.4%",
      "freeCashFlow": "–",
      "week52Range": "104,46 – 210,37 $",
      "dividendYield": "4,4%"
    },
    "profile": "Raymond James Financial, Inc. ist im Bereich Asset Management innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-09-04",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-08"
      },
      "timeline": [
        {
          "date": "2026-09-02",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-04",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-08",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Ralph Lauren Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Apparel Manufacturing) ist zulässig, Verschuldung (13.3%) und Cash-Quote (9.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "22.6 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Apparel Manufacturing",
      "peRatio": "25.2",
      "evEbitda": "15.5",
      "epsGrowth": "0.2%",
      "freeCashFlow": "656 Mio. $",
      "week52Range": "190,98 – 282,44 $",
      "dividendYield": "3,9%"
    },
    "profile": "Ralph Lauren Corporation ist im Bereich Apparel Manufacturing innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2026-12-03",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-14"
      },
      "timeline": [
        {
          "date": "2026-10-12",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-14",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-12-03",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "ResMed Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Instruments & Supplies) ist zulässig, Verschuldung (2.8%) und Cash-Quote (5.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "30.6 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Medical Instruments & Supplies",
      "peRatio": "20.3",
      "evEbitda": "14.1",
      "epsGrowth": "0.1%",
      "freeCashFlow": "1.4 Mrd. $",
      "week52Range": "73,79 – 100,21 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "ResMed Inc. ist im Bereich Medical Instruments & Supplies innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2026-10-08",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-12"
      },
      "timeline": [
        {
          "date": "2026-08-12",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-20",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-08",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Rockwell Automation, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (7.6%) und Cash-Quote (0.8%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "53.4 Mrd. $",
      "sector": "Industrie",
      "industry": "Specialty Industrial Machinery",
      "peRatio": "49.7",
      "evEbitda": "29.0",
      "epsGrowth": "0.4%",
      "freeCashFlow": "974 Mio. $",
      "week52Range": "125,76 – 174,13 $",
      "dividendYield": "1,9%"
    },
    "profile": "Rockwell Automation, Inc. ist im Bereich Specialty Industrial Machinery innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-08-28",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-04"
      },
      "timeline": [
        {
          "date": "2026-08-28",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-21",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-04",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Rollins, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Personal Services) ist zulässig, Verschuldung (6.1%) und Cash-Quote (0.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "18.3 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Personal Services",
      "peRatio": "34.5",
      "evEbitda": "22.3",
      "epsGrowth": "0.0%",
      "freeCashFlow": "502 Mio. $",
      "week52Range": "308,73 – 459,04 $",
      "dividendYield": "2,6%"
    },
    "profile": "Rollins, Inc. ist im Bereich Personal Services innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-04-21",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-21"
      },
      "timeline": [
        {
          "date": "2026-08-21",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-25",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-04-21",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Roper Technologies, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (29.2%) und Cash-Quote (0.9%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "38.8 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Application",
      "peRatio": "16.3",
      "evEbitda": "15.4",
      "epsGrowth": "2.3%",
      "freeCashFlow": "2.3 Mrd. $",
      "week52Range": "307,71 – 443,67 $",
      "dividendYield": "1,1%"
    },
    "profile": "Roper Technologies, Inc. ist im Bereich Software - Application innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-12-25",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-02"
      },
      "timeline": [
        {
          "date": "2026-09-02",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-13",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-12-25",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Ross Stores, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Apparel Retail) ist zulässig, Verschuldung (5.9%) und Cash-Quote (5.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "80.5 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Apparel Retail",
      "peRatio": "35.1",
      "evEbitda": "23.6",
      "epsGrowth": "0.4%",
      "freeCashFlow": "2.0 Mrd. $",
      "week52Range": "360,59 – 457,52 $",
      "dividendYield": "4,2%"
    },
    "profile": "Ross Stores, Inc. ist im Bereich Apparel Retail innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-01-27",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-28"
      },
      "timeline": [
        {
          "date": "2026-08-28",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-27",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Republic Services, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Waste Management) ist zulässig, Verschuldung (21.7%) und Cash-Quote (0.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "64.8 Mrd. $",
      "sector": "Industrie",
      "industry": "Waste Management",
      "peRatio": "30.2",
      "evEbitda": "15.2",
      "epsGrowth": "0.1%",
      "freeCashFlow": "1.8 Mrd. $",
      "week52Range": "230,57 – 457,48 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Republic Services, Inc. ist im Bereich Waste Management innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-11-15",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-16"
      },
      "timeline": [
        {
          "date": "2026-09-15",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-16",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-15",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "RTX Corporation zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "290.1 Mrd. $",
      "sector": "Industrie",
      "industry": "Aerospace & Defense",
      "peRatio": "37.9",
      "evEbitda": "20.3",
      "epsGrowth": "0.3%",
      "freeCashFlow": "9.9 Mrd. $",
      "week52Range": "204,26 – 279,51 $",
      "dividendYield": "2,3%"
    },
    "profile": "RTX Corporation ist im Bereich Aerospace & Defense innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-26",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-10"
      },
      "timeline": [
        {
          "date": "2026-09-02",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-10",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-26",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Revvity, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Diagnostics & Research) ist zulässig, Verschuldung (26.7%) und Cash-Quote (6.9%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "12.6 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Diagnostics & Research",
      "peRatio": "54.1",
      "evEbitda": "17.6",
      "epsGrowth": "0.0%",
      "freeCashFlow": "509 Mio. $",
      "week52Range": "23,06 – 38,10 $",
      "dividendYield": "2,5%"
    },
    "profile": "Revvity, Inc. ist im Bereich Diagnostics & Research innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2026-10-22",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-24"
      },
      "timeline": [
        {
          "date": "2026-08-28",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-22",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-24",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "SBA Communications Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 80.3% (Limit 30%)). Die Branche (REIT - Specialty) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "19.2 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Specialty",
      "peRatio": "19.1",
      "evEbitda": "18.8",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "708 Mio. $",
      "week52Range": "265,13 – 432,41 $",
      "dividendYield": "3,2%"
    },
    "profile": "SBA Communications Corporation ist im Bereich REIT - Specialty innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2026-10-06",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-18"
      },
      "timeline": [
        {
          "date": "2026-09-30",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-06",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-18",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Starbucks Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Restaurants) ist zulässig, Verschuldung (18.7%) und Cash-Quote (3.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "120.0 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Restaurants",
      "peRatio": "60.8",
      "evEbitda": "24.6",
      "epsGrowth": "0.9%",
      "freeCashFlow": "3.1 Mrd. $",
      "week52Range": "322,75 – 529,95 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Starbucks Corporation ist im Bereich Restaurants innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-02-21",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-26"
      },
      "timeline": [
        {
          "date": "2026-09-10",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-26",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-02-21",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Charles Schwab Corporation (The zählt zur ausgeschlossenen Branche Capital Markets und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "183.0 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Capital Markets",
      "peRatio": "19.2",
      "evEbitda": "–",
      "epsGrowth": "0.4%",
      "freeCashFlow": "–",
      "week52Range": "213,39 – 391,67 $",
      "dividendYield": "2,4%"
    },
    "profile": "Charles Schwab Corporation (The ist im Bereich Capital Markets innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-01-21",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-29"
      },
      "timeline": [
        {
          "date": "2026-09-19",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-21",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Sherwin-Williams Company (The) erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Chemicals) ist zulässig, Verschuldung (18.2%) und Cash-Quote (0.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "82.7 Mrd. $",
      "sector": "Grundstoffe",
      "industry": "Specialty Chemicals",
      "peRatio": "31.4",
      "evEbitda": "20.6",
      "epsGrowth": "0.1%",
      "freeCashFlow": "2.5 Mrd. $",
      "week52Range": "152,33 – 237,19 $",
      "dividendYield": "0,9%"
    },
    "profile": "Sherwin-Williams Company (The) ist im Bereich Specialty Chemicals innerhalb des Sektors Grundstoffe tätig.",
    "events": {
      "agm": {
        "date": "2027-02-26",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-05"
      },
      "timeline": [
        {
          "date": "2026-09-03",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-05",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-02-26",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "The J.M. Smucker Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 55.9% (Limit 30%)). Die Branche (Packaged Foods) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "12.7 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Packaged Foods",
      "peRatio": "–",
      "evEbitda": "10.3",
      "epsGrowth": "–",
      "freeCashFlow": "1.0 Mrd. $",
      "week52Range": "211,84 – 329,25 $",
      "dividendYield": "2,8%"
    },
    "profile": "The J.M. Smucker Company ist im Bereich Packaged Foods innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2026-08-23",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-17"
      },
      "timeline": [
        {
          "date": "2026-08-17",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-23",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-18",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        }
      ]
    }
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
    "insight": "SLB Limited erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas Equipment & Services) ist zulässig, Verschuldung (17.4%) und Cash-Quote (5.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "73.6 Mrd. $",
      "sector": "Energie",
      "industry": "Oil & Gas Equipment & Services",
      "peRatio": "24.2",
      "evEbitda": "11.3",
      "epsGrowth": "-0.3%",
      "freeCashFlow": "3.0 Mrd. $",
      "week52Range": "211,44 – 317,17 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "SLB Limited ist im Bereich Oil & Gas Equipment & Services innerhalb des Sektors Energie tätig.",
    "events": {
      "agm": {
        "date": "2027-04-08",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-12"
      },
      "timeline": [
        {
          "date": "2026-08-12",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-14",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-04-08",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Super Micro Computer, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 49.8% (Limit 30%)). Die Branche (Computer Hardware) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "18.4 Mrd. $",
      "sector": "Technologie",
      "industry": "Computer Hardware",
      "peRatio": "14.9",
      "evEbitda": "15.8",
      "epsGrowth": "3.3%",
      "freeCashFlow": "-7.4 Mrd. $",
      "week52Range": "331,16 – 507,78 $",
      "dividendYield": "3,8%"
    },
    "profile": "Super Micro Computer, Inc. ist im Bereich Computer Hardware innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-11-16",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-16"
      },
      "timeline": [
        {
          "date": "2026-08-16",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-20",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-16",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Snap-On Incorporated erfüllt aktuell alle geprüften Kriterien: Die Branche (Tools & Accessories) ist zulässig, Verschuldung (6.2%) und Cash-Quote (7.7%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "21.2 Mrd. $",
      "sector": "Industrie",
      "industry": "Tools & Accessories",
      "peRatio": "20.9",
      "evEbitda": "14.8",
      "epsGrowth": "0.1%",
      "freeCashFlow": "1.1 Mrd. $",
      "week52Range": "99,98 – 132,95 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Snap-On Incorporated ist im Bereich Tools & Accessories innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-12-14",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-25"
      },
      "timeline": [
        {
          "date": "2026-08-23",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-25",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-12-14",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Sandisk Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Computer Hardware) ist zulässig, Verschuldung (0.1%) und Cash-Quote (2.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "179.9 Mrd. $",
      "sector": "Technologie",
      "industry": "Computer Hardware",
      "peRatio": "41.5",
      "evEbitda": "31.3",
      "epsGrowth": "–",
      "freeCashFlow": "2.3 Mrd. $",
      "week52Range": "59,36 – 91,38 $",
      "dividendYield": "1,4%"
    },
    "profile": "Sandisk Corporation ist im Bereich Computer Hardware innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-09-29",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-15"
      },
      "timeline": [
        {
          "date": "2026-09-29",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-12",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-15",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Synopsys, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Infrastructure) ist zulässig, Verschuldung (14.6%) und Cash-Quote (3.3%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "74.4 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Infrastructure",
      "peRatio": "89.4",
      "evEbitda": "48.8",
      "epsGrowth": "-1.0%",
      "freeCashFlow": "3.5 Mrd. $",
      "week52Range": "157,96 – 207,65 $",
      "dividendYield": "3,9%"
    },
    "profile": "Synopsys, Inc. ist im Bereich Software - Infrastructure innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-21",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-16"
      },
      "timeline": [
        {
          "date": "2026-09-11",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-16",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-21",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Southern Company (The) überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 70.9% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "108.8 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Electric",
      "peRatio": "22.8",
      "evEbitda": "12.8",
      "epsGrowth": "0.3%",
      "freeCashFlow": "-3.8 Mrd. $",
      "week52Range": "135,24 – 284,20 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Southern Company (The) ist im Bereich Utilities - Regulated Electric innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2026-12-11",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-29"
      },
      "timeline": [
        {
          "date": "2026-09-06",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-12-11",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Solventum Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 35.8% (Limit 30%)). Die Branche (Medical Instruments & Supplies) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "14.8 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Medical Instruments & Supplies",
      "peRatio": "10.5",
      "evEbitda": "17.4",
      "epsGrowth": "-0.9%",
      "freeCashFlow": "378 Mio. $",
      "week52Range": "159,47 – 217,47 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Solventum Corporation ist im Bereich Medical Instruments & Supplies innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-04-15",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-20"
      },
      "timeline": [
        {
          "date": "2026-09-18",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-20",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-15",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Simon Property Group, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 33.3% (Limit 30%)). Die Branche (REIT - Retail) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "87.2 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Retail",
      "peRatio": "16.0",
      "evEbitda": "21.2",
      "epsGrowth": "0.2%",
      "freeCashFlow": "2.5 Mrd. $",
      "week52Range": "183,06 – 396,63 $",
      "dividendYield": "1,5%"
    },
    "profile": "Simon Property Group, Inc. ist im Bereich REIT - Retail innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2026-09-26",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-09"
      },
      "timeline": [
        {
          "date": "2026-08-28",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-09",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-26",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "S&P Global Inc. zählt zur ausgeschlossenen Branche Financial Data & Stock Exchanges und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "121.4 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Financial Data & Stock Exchanges",
      "peRatio": "25.1",
      "evEbitda": "17.0",
      "epsGrowth": "0.2%",
      "freeCashFlow": "5.4 Mrd. $",
      "week52Range": "66,12 – 107,92 $",
      "dividendYield": "3,1%"
    },
    "profile": "S&P Global Inc. ist im Bereich Financial Data & Stock Exchanges innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-03-21",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-19"
      },
      "timeline": [
        {
          "date": "2026-08-19",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-01",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-21",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "DBA Sempra überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 62.9% (Limit 30%)). Die Branche (Utilities - Diversified) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "57.9 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Diversified",
      "peRatio": "30.1",
      "evEbitda": "18.5",
      "epsGrowth": "0.1%",
      "freeCashFlow": "-28.2 Mrd. $",
      "week52Range": "97,52 – 149,06 $",
      "dividendYield": "1,6%"
    },
    "profile": "DBA Sempra ist im Bereich Utilities - Diversified innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2026-10-27",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-12"
      },
      "timeline": [
        {
          "date": "2026-09-07",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-12",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-27",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "STERIS plc (Ireland) erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Devices) ist zulässig, Verschuldung (9.4%) und Cash-Quote (2.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "22.3 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Medical Devices",
      "peRatio": "28.8",
      "evEbitda": "15.0",
      "epsGrowth": "0.5%",
      "freeCashFlow": "837 Mio. $",
      "week52Range": "195,33 – 381,78 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "STERIS plc (Ireland) ist im Bereich Medical Devices innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-05-12",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-05"
      },
      "timeline": [
        {
          "date": "2026-09-18",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-05",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-05-12",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Steel Dynamics, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Steel) ist zulässig, Verschuldung (12.2%) und Cash-Quote (1.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "36.0 Mrd. $",
      "sector": "Grundstoffe",
      "industry": "Steel",
      "peRatio": "22.8",
      "evEbitda": "14.9",
      "epsGrowth": "0.8%",
      "freeCashFlow": "234 Mio. $",
      "week52Range": "66,22 – 116,80 $",
      "dividendYield": "3,8%"
    },
    "profile": "Steel Dynamics, Inc. ist im Bereich Steel innerhalb des Sektors Grundstoffe tätig.",
    "events": {
      "agm": {
        "date": "2026-11-28",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-13"
      },
      "timeline": [
        {
          "date": "2026-09-06",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-28",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "State Street Corporation zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "50.6 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Asset Management",
      "peRatio": "16.3",
      "evEbitda": "–",
      "epsGrowth": "-0.2%",
      "freeCashFlow": "–",
      "week52Range": "147,53 – 282,04 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "State Street Corporation ist im Bereich Asset Management innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-11-20",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-14"
      },
      "timeline": [
        {
          "date": "2026-09-27",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-14",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-20",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Seagate Technology Holdings PLC erfüllt aktuell alle geprüften Kriterien: Die Branche (Computer Hardware) ist zulässig, Verschuldung (1.8%) und Cash-Quote (0.9%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "193.7 Mrd. $",
      "sector": "Technologie",
      "industry": "Computer Hardware",
      "peRatio": "61.7",
      "evEbitda": "43.6",
      "epsGrowth": "1.5%",
      "freeCashFlow": "2.0 Mrd. $",
      "week52Range": "194,09 – 273,88 $",
      "dividendYield": "2,9%"
    },
    "profile": "Seagate Technology Holdings PLC ist im Bereich Computer Hardware innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-07",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-29"
      },
      "timeline": [
        {
          "date": "2026-08-24",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-07",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Constellation Brands, Inc. zählt zur ausgeschlossenen Branche Beverages - Brewers und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "22.2 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Beverages - Brewers",
      "peRatio": "12.4",
      "evEbitda": "9.5",
      "epsGrowth": "0.3%",
      "freeCashFlow": "2.2 Mrd. $",
      "week52Range": "159,43 – 235,26 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Constellation Brands, Inc. ist im Bereich Beverages - Brewers innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2026-11-29",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-16"
      },
      "timeline": [
        {
          "date": "2026-09-04",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-16",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-29",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Smurfit WestRock plc überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 58.7% (Limit 30%)). Die Branche (Packaging & Containers) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "24.1 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Packaging & Containers",
      "peRatio": "48.9",
      "evEbitda": "8.2",
      "epsGrowth": "–",
      "freeCashFlow": "1.2 Mrd. $",
      "week52Range": "39,72 – 90,00 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Smurfit WestRock plc ist im Bereich Packaging & Containers innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-01-03",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-14"
      },
      "timeline": [
        {
          "date": "2026-10-04",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-14",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-03",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Stanley Black & Decker, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 36.5% (Limit 30%)). Die Branche (Tools & Accessories) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "14.3 Mrd. $",
      "sector": "Industrie",
      "industry": "Tools & Accessories",
      "peRatio": "23.1",
      "evEbitda": "10.6",
      "epsGrowth": "2.5%",
      "freeCashFlow": "1.4 Mrd. $",
      "week52Range": "229,07 – 448,19 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Stanley Black & Decker, Inc. ist im Bereich Tools & Accessories innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-08-16",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-21"
      },
      "timeline": [
        {
          "date": "2026-08-16",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-08-21",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-06",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        }
      ]
    }
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
    "insight": "Skyworks Solutions, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (7.3%) und Cash-Quote (8.5%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "9.4 Mrd. $",
      "sector": "Technologie",
      "industry": "Semiconductors",
      "peRatio": "32.3",
      "evEbitda": "10.5",
      "epsGrowth": "-0.7%",
      "freeCashFlow": "449 Mio. $",
      "week52Range": "211,11 – 376,48 $",
      "dividendYield": "0,7%"
    },
    "profile": "Skyworks Solutions, Inc. ist im Bereich Semiconductors innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-10-26",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-15"
      },
      "timeline": [
        {
          "date": "2026-08-15",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-05",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-26",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Synchrony Financial zählt zur ausgeschlossenen Branche Credit Services und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "24.7 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Credit Services",
      "peRatio": "7.8",
      "evEbitda": "–",
      "epsGrowth": "0.0%",
      "freeCashFlow": "–",
      "week52Range": "186,30 – 261,31 $",
      "dividendYield": "1,4%"
    },
    "profile": "Synchrony Financial ist im Bereich Credit Services innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-08-21",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-22"
      },
      "timeline": [
        {
          "date": "2026-08-21",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-07",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-22",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Stryker Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Devices) ist zulässig, Verschuldung (11.4%) und Cash-Quote (2.8%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "124.9 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Medical Devices",
      "peRatio": "37.7",
      "evEbitda": "18.4",
      "epsGrowth": "0.4%",
      "freeCashFlow": "4.9 Mrd. $",
      "week52Range": "132,41 – 266,92 $",
      "dividendYield": "0,5%"
    },
    "profile": "Stryker Corporation ist im Bereich Medical Devices innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2026-12-10",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-31"
      },
      "timeline": [
        {
          "date": "2026-08-25",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-08-31",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-12-10",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Sysco Corporation überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 37.7% (Limit 30%)). Die Branche (Food Distribution) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "40.8 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Food Distribution",
      "peRatio": "23.7",
      "evEbitda": "11.9",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "1.9 Mrd. $",
      "week52Range": "287,95 – 433,47 $",
      "dividendYield": "2,1%"
    },
    "profile": "Sysco Corporation ist im Bereich Food Distribution innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2027-03-30",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-24"
      },
      "timeline": [
        {
          "date": "2026-08-24",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-09",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-30",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "AT&T Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 104.0% (Limit 30%)). Die Branche (Telecom Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "159.3 Mrd. $",
      "sector": "Kommunikation",
      "industry": "Telecom Services",
      "peRatio": "7.7",
      "evEbitda": "7.2",
      "epsGrowth": "0.1%",
      "freeCashFlow": "10.1 Mrd. $",
      "week52Range": "60,22 – 113,56 $",
      "dividendYield": "0,6%"
    },
    "profile": "AT&T Inc. ist im Bereich Telecom Services innerhalb des Sektors Kommunikation tätig.",
    "events": {
      "agm": {
        "date": "2026-10-09",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-22"
      },
      "timeline": [
        {
          "date": "2026-09-01",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-22",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-09",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Molson Coors Beverage Company zählt zur ausgeschlossenen Branche Beverages - Brewers und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "7.8 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Beverages - Brewers",
      "peRatio": "–",
      "evEbitda": "5.8",
      "epsGrowth": "0.4%",
      "freeCashFlow": "774 Mio. $",
      "week52Range": "47,69 – 56,79 $",
      "dividendYield": "3,0%"
    },
    "profile": "Molson Coors Beverage Company ist im Bereich Beverages - Brewers innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2027-05-01",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-30"
      },
      "timeline": [
        {
          "date": "2026-09-05",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-30",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-05-01",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Transdigm Group Incorporated zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "70.2 Mrd. $",
      "sector": "Industrie",
      "industry": "Aerospace & Defense",
      "peRatio": "39.2",
      "evEbitda": "20.3",
      "epsGrowth": "0.1%",
      "freeCashFlow": "1.5 Mrd. $",
      "week52Range": "192,69 – 287,68 $",
      "dividendYield": "3,0%"
    },
    "profile": "Transdigm Group Incorporated ist im Bereich Aerospace & Defense innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-04-01",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-05"
      },
      "timeline": [
        {
          "date": "2026-08-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-05",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-01",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Teledyne Technologies Incorpora erfüllt aktuell alle geprüften Kriterien: Die Branche (Scientific & Technical Instruments) ist zulässig, Verschuldung (6.7%) und Cash-Quote (1.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "30.4 Mrd. $",
      "sector": "Technologie",
      "industry": "Scientific & Technical Instruments",
      "peRatio": "31.7",
      "evEbitda": "20.1",
      "epsGrowth": "0.2%",
      "freeCashFlow": "913 Mio. $",
      "week52Range": "301,28 – 429,32 $",
      "dividendYield": "4,0%"
    },
    "profile": "Teledyne Technologies Incorpora ist im Bereich Scientific & Technical Instruments innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-08-23",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-05"
      },
      "timeline": [
        {
          "date": "2026-08-23",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-05",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-26",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        }
      ]
    }
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
    "insight": "Bio-Techne Corp erfüllt aktuell alle geprüften Kriterien: Die Branche (Biotechnology) ist zulässig, Verschuldung (2.6%) und Cash-Quote (1.9%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "11.2 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Biotechnology",
      "peRatio": "103.0",
      "evEbitda": "31.0",
      "epsGrowth": "1.3%",
      "freeCashFlow": "300 Mio. $",
      "week52Range": "184,40 – 394,72 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Bio-Techne Corp ist im Bereich Biotechnology innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2026-11-10",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-16"
      },
      "timeline": [
        {
          "date": "2026-09-19",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-16",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-10",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "TE Connectivity plc erfüllt aktuell alle geprüften Kriterien: Die Branche (Electronic Components) ist zulässig, Verschuldung (9.8%) und Cash-Quote (2.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "59.6 Mrd. $",
      "sector": "Technologie",
      "industry": "Electronic Components",
      "peRatio": "20.2",
      "evEbitda": "13.0",
      "epsGrowth": "0.2%",
      "freeCashFlow": "2.3 Mrd. $",
      "week52Range": "132,03 – 242,35 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "TE Connectivity plc ist im Bereich Electronic Components innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-08-29",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-15"
      },
      "timeline": [
        {
          "date": "2026-08-29",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-15",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-21",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        }
      ]
    }
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
    "insight": "Teradyne, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductor Equipment & Materials) ist zulässig, Verschuldung (0.2%) und Cash-Quote (0.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "57.6 Mrd. $",
      "sector": "Technologie",
      "industry": "Semiconductor Equipment & Materials",
      "peRatio": "50.5",
      "evEbitda": "38.1",
      "epsGrowth": "3.9%",
      "freeCashFlow": "439 Mio. $",
      "week52Range": "122,41 – 261,76 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Teradyne, Inc. ist im Bereich Semiconductor Equipment & Materials innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-09-17",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-12"
      },
      "timeline": [
        {
          "date": "2026-09-17",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-23",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-12",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Truist Financial Corporation zählt zur ausgeschlossenen Branche Banks - Regional und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "63.3 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Banks - Regional",
      "peRatio": "11.9",
      "evEbitda": "–",
      "epsGrowth": "0.4%",
      "freeCashFlow": "–",
      "week52Range": "254,73 – 436,69 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Truist Financial Corporation ist im Bereich Banks - Regional innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-05-31",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-23"
      },
      "timeline": [
        {
          "date": "2026-10-13",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-23",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-05-31",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Target Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Discount Stores) ist zulässig, Verschuldung (29.4%) und Cash-Quote (5.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "65.6 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Discount Stores",
      "peRatio": "19.1",
      "evEbitda": "9.8",
      "epsGrowth": "-0.2%",
      "freeCashFlow": "3.1 Mrd. $",
      "week52Range": "167,67 – 235,84 $",
      "dividendYield": "2,7%"
    },
    "profile": "Target Corporation ist im Bereich Discount Stores innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2027-01-01",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-03"
      },
      "timeline": [
        {
          "date": "2026-09-02",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-03",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-01",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "TJX Companies, Inc. (The) erfüllt aktuell alle geprüften Kriterien: Die Branche (Apparel Retail) ist zulässig, Verschuldung (8.2%) und Cash-Quote (3.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "173.8 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Apparel Retail",
      "peRatio": "30.6",
      "evEbitda": "20.6",
      "epsGrowth": "0.3%",
      "freeCashFlow": "4.3 Mrd. $",
      "week52Range": "238,07 – 363,94 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "TJX Companies, Inc. (The) ist im Bereich Apparel Retail innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-04-30",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-17"
      },
      "timeline": [
        {
          "date": "2026-08-17",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-26",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-04-30",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "TKO Group Holdings, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Entertainment) ist zulässig, Verschuldung (14.3%) und Cash-Quote (2.3%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "34.7 Mrd. $",
      "sector": "Kommunikation",
      "industry": "Entertainment",
      "peRatio": "67.6",
      "evEbitda": "15.9",
      "epsGrowth": "0.6%",
      "freeCashFlow": "831 Mio. $",
      "week52Range": "243,58 – 323,81 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "TKO Group Holdings, Inc. ist im Bereich Entertainment innerhalb des Sektors Kommunikation tätig.",
    "events": {
      "agm": {
        "date": "2027-04-04",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-04"
      },
      "timeline": [
        {
          "date": "2026-09-29",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-04",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-04",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Thermo Fisher Scientific Inc erfüllt aktuell alle geprüften Kriterien: Die Branche (Diagnostics & Research) ist zulässig, Verschuldung (19.9%) und Cash-Quote (1.9%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "213.4 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Diagnostics & Research",
      "peRatio": "30.9",
      "evEbitda": "21.4",
      "epsGrowth": "0.1%",
      "freeCashFlow": "6.2 Mrd. $",
      "week52Range": "114,30 – 186,40 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Thermo Fisher Scientific Inc ist im Bereich Diagnostics & Research innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-01-05",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-16"
      },
      "timeline": [
        {
          "date": "2026-08-16",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-11",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-05",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "T-Mobile US, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 65.0% (Limit 30%)). Die Branche (Telecom Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "185.3 Mrd. $",
      "sector": "Kommunikation",
      "industry": "Telecom Services",
      "peRatio": "18.0",
      "evEbitda": "8.8",
      "epsGrowth": "0.1%",
      "freeCashFlow": "11.3 Mrd. $",
      "week52Range": "82,23 – 155,33 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "T-Mobile US, Inc. ist im Bereich Telecom Services innerhalb des Sektors Kommunikation tätig.",
    "events": {
      "agm": {
        "date": "2026-11-03",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-02"
      },
      "timeline": [
        {
          "date": "2026-09-19",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-02",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-03",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Texas Pacific Land Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas E&P) ist zulässig, Verschuldung (0.1%) und Cash-Quote (0.9%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "27.8 Mrd. $",
      "sector": "Energie",
      "industry": "Oil & Gas E&P",
      "peRatio": "55.2",
      "evEbitda": "39.9",
      "epsGrowth": "0.2%",
      "freeCashFlow": "-56 Mio. $",
      "week52Range": "59,99 – 104,99 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Texas Pacific Land Corporation ist im Bereich Oil & Gas E&P innerhalb des Sektors Energie tätig.",
    "events": {
      "agm": {
        "date": "2026-10-13",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-05"
      },
      "timeline": [
        {
          "date": "2026-09-30",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-05",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-13",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Tapestry, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Luxury Goods) ist zulässig, Verschuldung (12.7%) und Cash-Quote (3.5%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "30.8 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Luxury Goods",
      "peRatio": "46.5",
      "evEbitda": "17.1",
      "epsGrowth": "0.7%",
      "freeCashFlow": "1.5 Mrd. $",
      "week52Range": "256,45 – 461,61 $",
      "dividendYield": "1,3%"
    },
    "profile": "Tapestry, Inc. ist im Bereich Luxury Goods innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-01-09",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-27"
      },
      "timeline": [
        {
          "date": "2026-08-27",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-10",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-09",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Targa Resources, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 33.0% (Limit 30%)). Die Branche (Oil & Gas Midstream) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "58.0 Mrd. $",
      "sector": "Energie",
      "industry": "Oil & Gas Midstream",
      "peRatio": "27.6",
      "evEbitda": "14.8",
      "epsGrowth": "1.4%",
      "freeCashFlow": "-319 Mio. $",
      "week52Range": "234,47 – 347,36 $",
      "dividendYield": "1,0%"
    },
    "profile": "Targa Resources, Inc. ist im Bereich Oil & Gas Midstream innerhalb des Sektors Energie tätig.",
    "events": {
      "agm": {
        "date": "2026-12-22",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-19"
      },
      "timeline": [
        {
          "date": "2026-10-09",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-19",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-12-22",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Trimble Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Scientific & Technical Instruments) ist zulässig, Verschuldung (10.7%) und Cash-Quote (1.8%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "13.2 Mrd. $",
      "sector": "Technologie",
      "industry": "Scientific & Technical Instruments",
      "peRatio": "29.6",
      "evEbitda": "16.6",
      "epsGrowth": "0.6%",
      "freeCashFlow": "370 Mio. $",
      "week52Range": "110,01 – 170,13 $",
      "dividendYield": "3,3%"
    },
    "profile": "Trimble Inc. ist im Bereich Scientific & Technical Instruments innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-03-25",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-05"
      },
      "timeline": [
        {
          "date": "2026-09-05",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-04",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-25",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "T. Rowe Price Group, Inc. zählt zur ausgeschlossenen Branche Asset Management und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "23.9 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Asset Management",
      "peRatio": "11.2",
      "evEbitda": "8.0",
      "epsGrowth": "0.0%",
      "freeCashFlow": "1.9 Mrd. $",
      "week52Range": "139,67 – 281,66 $",
      "dividendYield": "2,5%"
    },
    "profile": "T. Rowe Price Group, Inc. ist im Bereich Asset Management innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-05-23",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-16"
      },
      "timeline": [
        {
          "date": "2026-08-16",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-06",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-23",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "The Travelers Companies, Inc. zählt zur ausgeschlossenen Branche Insurance - Property & Casualty und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "78.1 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Insurance - Property & Casualty",
      "peRatio": "10.1",
      "evEbitda": "7.2",
      "epsGrowth": "0.6%",
      "freeCashFlow": "14.8 Mrd. $",
      "week52Range": "235,86 – 493,16 $",
      "dividendYield": "4,5%"
    },
    "profile": "The Travelers Companies, Inc. ist im Bereich Insurance - Property & Casualty innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-04-05",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-28"
      },
      "timeline": [
        {
          "date": "2026-09-12",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-28",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-05",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Tractor Supply Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 40.6% (Limit 30%)). Die Branche (Specialty Retail) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "16.1 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Specialty Retail",
      "peRatio": "16.0",
      "evEbitda": "11.6",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "103 Mio. $",
      "week52Range": "143,20 – 228,72 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Tractor Supply Company ist im Bereich Specialty Retail innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2027-01-21",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-04"
      },
      "timeline": [
        {
          "date": "2026-09-28",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-04",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-21",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Tesla, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Auto Manufacturers) ist zulässig, Verschuldung (1.3%) und Cash-Quote (3.5%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "1.23 Bio. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Auto Manufacturers",
      "peRatio": "285.5",
      "evEbitda": "111.8",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "4.8 Mrd. $",
      "week52Range": "316,43 – 430,89 $",
      "dividendYield": "3,3%"
    },
    "profile": "Tesla, Inc. ist im Bereich Auto Manufacturers innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2026-12-18",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-09"
      },
      "timeline": [
        {
          "date": "2026-09-09",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-07",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-12-18",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Tyson Foods, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 39.6% (Limit 30%)). Die Branche (Farm Products) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "20.4 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Farm Products",
      "peRatio": "45.6",
      "evEbitda": "10.4",
      "epsGrowth": "36.0%",
      "freeCashFlow": "1.0 Mrd. $",
      "week52Range": "336,59 – 540,81 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Tyson Foods, Inc. ist im Bereich Farm Products innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2026-11-13",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-27"
      },
      "timeline": [
        {
          "date": "2026-08-22",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-27",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-13",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Trane Technologies plc erfüllt aktuell alle geprüften Kriterien: Die Branche (Building Products & Equipment) ist zulässig, Verschuldung (4.6%) und Cash-Quote (1.3%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "100.1 Mrd. $",
      "sector": "Industrie",
      "industry": "Building Products & Equipment",
      "peRatio": "33.9",
      "evEbitda": "24.0",
      "epsGrowth": "0.1%",
      "freeCashFlow": "3.1 Mrd. $",
      "week52Range": "257,05 – 392,00 $",
      "dividendYield": "3,0%"
    },
    "profile": "Trane Technologies plc ist im Bereich Building Products & Equipment innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-02-21",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-14"
      },
      "timeline": [
        {
          "date": "2026-08-14",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-06",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-02-21",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "The Trade Desk, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Advertising Agencies) ist zulässig, Verschuldung (5.0%) und Cash-Quote (16.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "8.5 Mrd. $",
      "sector": "Kommunikation",
      "industry": "Advertising Agencies",
      "peRatio": "20.5",
      "evEbitda": "10.6",
      "epsGrowth": "-0.2%",
      "freeCashFlow": "569 Mio. $",
      "week52Range": "83,12 – 106,16 $",
      "dividendYield": "2,7%"
    },
    "profile": "The Trade Desk, Inc. ist im Bereich Advertising Agencies innerhalb des Sektors Kommunikation tätig.",
    "events": {
      "agm": {
        "date": "2027-02-28",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-25"
      },
      "timeline": [
        {
          "date": "2026-09-15",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-25",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-02-28",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Take-Two Interactive Software, erfüllt aktuell alle geprüften Kriterien: Die Branche (Electronic Gaming & Multimedia) ist zulässig, Verschuldung (6.5%) und Cash-Quote (4.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "45.4 Mrd. $",
      "sector": "Kommunikation",
      "industry": "Electronic Gaming & Multimedia",
      "peRatio": "–",
      "evEbitda": "58.4",
      "epsGrowth": "–",
      "freeCashFlow": "1.4 Mrd. $",
      "week52Range": "296,08 – 470,69 $",
      "dividendYield": "4,1%"
    },
    "profile": "Take-Two Interactive Software, ist im Bereich Electronic Gaming & Multimedia innerhalb des Sektors Kommunikation tätig.",
    "events": {
      "agm": {
        "date": "2026-09-18",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-16"
      },
      "timeline": [
        {
          "date": "2026-09-16",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-16",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-18",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Texas Instruments Incorporated erfüllt aktuell alle geprüften Kriterien: Die Branche (Semiconductors) ist zulässig, Verschuldung (5.6%) und Cash-Quote (2.8%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "251.8 Mrd. $",
      "sector": "Technologie",
      "industry": "Semiconductors",
      "peRatio": "41.8",
      "evEbitda": "27.2",
      "epsGrowth": "0.5%",
      "freeCashFlow": "3.5 Mrd. $",
      "week52Range": "89,86 – 153,37 $",
      "dividendYield": "0,7%"
    },
    "profile": "Texas Instruments Incorporated ist im Bereich Semiconductors innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-11-03",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-25"
      },
      "timeline": [
        {
          "date": "2026-08-25",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-10",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-03",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Textron Inc. zählt zur ausgeschlossenen Branche Aerospace & Defense und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "14.8 Mrd. $",
      "sector": "Industrie",
      "industry": "Aerospace & Defense",
      "peRatio": "16.1",
      "evEbitda": "10.4",
      "epsGrowth": "0.1%",
      "freeCashFlow": "453 Mio. $",
      "week52Range": "349,92 – 528,69 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Textron Inc. ist im Bereich Aerospace & Defense innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-31",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-04"
      },
      "timeline": [
        {
          "date": "2026-10-04",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-12",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-31",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Tyler Technologies, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (11.5%) und Cash-Quote (7.7%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "12.7 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Application",
      "peRatio": "40.6",
      "evEbitda": "28.7",
      "epsGrowth": "0.2%",
      "freeCashFlow": "594 Mio. $",
      "week52Range": "221,26 – 375,83 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Tyler Technologies, Inc. ist im Bereich Software - Application innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-23",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-16"
      },
      "timeline": [
        {
          "date": "2026-09-16",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-12",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-23",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "United Airlines Holdings, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 85.5% (Limit 30%); Cash-Quote zu hoch: 42.2% (Limit 30%)). Die Branche (Airlines) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "39.4 Mrd. $",
      "sector": "Industrie",
      "industry": "Airlines",
      "peRatio": "11.4",
      "evEbitda": "8.0",
      "epsGrowth": "-0.2%",
      "freeCashFlow": "910 Mio. $",
      "week52Range": "57,98 – 94,95 $",
      "dividendYield": "1,1%"
    },
    "profile": "United Airlines Holdings, Inc. ist im Bereich Airlines innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-11-20",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-27"
      },
      "timeline": [
        {
          "date": "2026-08-27",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-08",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-20",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Uber Technologies, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (8.7%) und Cash-Quote (4.3%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "143.2 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Application",
      "peRatio": "17.5",
      "evEbitda": "21.5",
      "epsGrowth": "-0.8%",
      "freeCashFlow": "6.5 Mrd. $",
      "week52Range": "228,92 – 384,72 $",
      "dividendYield": "3,5%"
    },
    "profile": "Uber Technologies, Inc. ist im Bereich Software - Application innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-01",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-01"
      },
      "timeline": [
        {
          "date": "2026-10-01",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-04",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-01-01",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "UDR, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 42.4% (Limit 30%)). Die Branche (REIT - Residential) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "14.1 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Residential",
      "peRatio": "24.2",
      "evEbitda": "18.4",
      "epsGrowth": "0.9%",
      "freeCashFlow": "780 Mio. $",
      "week52Range": "135,90 – 298,57 $",
      "dividendYield": "0,6%"
    },
    "profile": "UDR, Inc. ist im Bereich REIT - Residential innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2026-08-27",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-02"
      },
      "timeline": [
        {
          "date": "2026-08-26",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-08-27",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-02",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Universal Health Services, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 51.6% (Limit 30%)). Die Branche (Medical Care Facilities) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "10.2 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Medical Care Facilities",
      "peRatio": "6.9",
      "evEbitda": "5.7",
      "epsGrowth": "0.1%",
      "freeCashFlow": "498 Mio. $",
      "week52Range": "287,74 – 380,10 $",
      "dividendYield": "3,7%"
    },
    "profile": "Universal Health Services, Inc. ist im Bereich Medical Care Facilities innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-03-24",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-06"
      },
      "timeline": [
        {
          "date": "2026-09-06",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-16",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-24",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Ulta Beauty, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Retail) ist zulässig, Verschuldung (10.4%) und Cash-Quote (1.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "22.0 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Specialty Retail",
      "peRatio": "19.2",
      "evEbitda": "12.8",
      "epsGrowth": "0.2%",
      "freeCashFlow": "973 Mio. $",
      "week52Range": "319,56 – 414,67 $",
      "dividendYield": "2,3%"
    },
    "profile": "Ulta Beauty, Inc. ist im Bereich Specialty Retail innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2026-10-11",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-26"
      },
      "timeline": [
        {
          "date": "2026-08-26",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-11",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-11",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        }
      ]
    }
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
    "insight": "UnitedHealth Group Incorporated erfüllt aktuell alle geprüften Kriterien: Die Branche (Healthcare Plans) ist zulässig, Verschuldung (19.5%) und Cash-Quote (8.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "376.3 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Healthcare Plans",
      "peRatio": "31.3",
      "evEbitda": "17.3",
      "epsGrowth": "0.6%",
      "freeCashFlow": "22.8 Mrd. $",
      "week52Range": "76,42 – 114,12 $",
      "dividendYield": "0,5%"
    },
    "profile": "UnitedHealth Group Incorporated ist im Bereich Healthcare Plans innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-05-11",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-09"
      },
      "timeline": [
        {
          "date": "2026-09-09",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-09",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-05-11",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Union Pacific Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Railroads) ist zulässig, Verschuldung (18.0%) und Cash-Quote (1.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "173.5 Mrd. $",
      "sector": "Industrie",
      "industry": "Railroads",
      "peRatio": "23.6",
      "evEbitda": "15.7",
      "epsGrowth": "0.1%",
      "freeCashFlow": "4.7 Mrd. $",
      "week52Range": "206,36 – 382,05 $",
      "dividendYield": "0,8%"
    },
    "profile": "Union Pacific Corporation ist im Bereich Railroads innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-04-05",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-18"
      },
      "timeline": [
        {
          "date": "2026-09-18",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-13",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-04-05",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "United Parcel Service, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 32.4% (Limit 30%)). Die Branche (Integrated Freight & Logistics) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "88.6 Mrd. $",
      "sector": "Industrie",
      "industry": "Integrated Freight & Logistics",
      "peRatio": "19.4",
      "evEbitda": "10.2",
      "epsGrowth": "-0.5%",
      "freeCashFlow": "5.0 Mrd. $",
      "week52Range": "270,38 – 478,96 $",
      "dividendYield": "3,4%"
    },
    "profile": "United Parcel Service, Inc. ist im Bereich Integrated Freight & Logistics innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-02-01",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-05"
      },
      "timeline": [
        {
          "date": "2026-10-05",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-09",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-02-01",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "United Rentals, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Rental & Leasing Services) ist zulässig, Verschuldung (22.9%) und Cash-Quote (0.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "67.2 Mrd. $",
      "sector": "Industrie",
      "industry": "Rental & Leasing Services",
      "peRatio": "26.0",
      "evEbitda": "17.6",
      "epsGrowth": "0.3%",
      "freeCashFlow": "1.7 Mrd. $",
      "week52Range": "305,64 – 392,97 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "United Rentals, Inc. ist im Bereich Rental & Leasing Services innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-05-11",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-26"
      },
      "timeline": [
        {
          "date": "2026-08-22",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-26",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-05-11",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "U.S. Bancorp zählt zur ausgeschlossenen Branche Banks - Regional und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "98.2 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Banks - Regional",
      "peRatio": "12.6",
      "evEbitda": "–",
      "epsGrowth": "0.2%",
      "freeCashFlow": "–",
      "week52Range": "176,80 – 299,79 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "U.S. Bancorp ist im Bereich Banks - Regional innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-10-05",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-17"
      },
      "timeline": [
        {
          "date": "2026-09-09",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-17",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-05",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Visa Inc. zählt zur ausgeschlossenen Branche Credit Services und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "683.6 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Credit Services",
      "peRatio": "31.2",
      "evEbitda": "22.0",
      "epsGrowth": "0.1%",
      "freeCashFlow": "20.4 Mrd. $",
      "week52Range": "224,28 – 399,08 $",
      "dividendYield": "2,2%"
    },
    "profile": "Visa Inc. ist im Bereich Credit Services innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-10-15",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-28"
      },
      "timeline": [
        {
          "date": "2026-08-28",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-25",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-15",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Veeva Systems Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Health Information Services) ist zulässig, Verschuldung (0.3%) und Cash-Quote (22.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "33.1 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Health Information Services",
      "peRatio": "36.1",
      "evEbitda": "25.2",
      "epsGrowth": "0.1%",
      "freeCashFlow": "1.3 Mrd. $",
      "week52Range": "250,58 – 396,26 $",
      "dividendYield": "2,9%"
    },
    "profile": "Veeva Systems Inc. ist im Bereich Health Information Services innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-04-18",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-03"
      },
      "timeline": [
        {
          "date": "2026-09-03",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-17",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-04-18",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "VICI Properties Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 61.5% (Limit 30%)). Die Branche (REIT - Diversified) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "29.0 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Diversified",
      "peRatio": "10.2",
      "evEbitda": "12.9",
      "epsGrowth": "-0.4%",
      "freeCashFlow": "267 Mio. $",
      "week52Range": "27,05 – 45,40 $",
      "dividendYield": "1,3%"
    },
    "profile": "VICI Properties Inc. ist im Bereich REIT - Diversified innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2027-02-06",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-02"
      },
      "timeline": [
        {
          "date": "2026-08-23",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-02",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-02-06",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Valero Energy Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas Refining & Marketing) ist zulässig, Verschuldung (12.6%) und Cash-Quote (8.7%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "90.1 Mrd. $",
      "sector": "Energie",
      "industry": "Oil & Gas Refining & Marketing",
      "peRatio": "13.1",
      "evEbitda": "7.2",
      "epsGrowth": "4.5%",
      "freeCashFlow": "8.4 Mrd. $",
      "week52Range": "167,84 – 282,27 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Valero Energy Corporation ist im Bereich Oil & Gas Refining & Marketing innerhalb des Sektors Energie tätig.",
    "events": {
      "agm": {
        "date": "2027-04-10",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-29"
      },
      "timeline": [
        {
          "date": "2026-09-21",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-10",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Veralto Corp erfüllt aktuell alle geprüften Kriterien: Die Branche (Pollution & Treatment Controls) ist zulässig, Verschuldung (15.7%) und Cash-Quote (9.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "23.0 Mrd. $",
      "sector": "Industrie",
      "industry": "Pollution & Treatment Controls",
      "peRatio": "23.7",
      "evEbitda": "17.6",
      "epsGrowth": "0.1%",
      "freeCashFlow": "807 Mio. $",
      "week52Range": "92,88 – 190,25 $",
      "dividendYield": "2,6%"
    },
    "profile": "Veralto Corp ist im Bereich Pollution & Treatment Controls innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-05-08",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-20"
      },
      "timeline": [
        {
          "date": "2026-08-20",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-04",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-08",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Vulcan Materials Company (Holdi erfüllt aktuell alle geprüften Kriterien: Die Branche (Building Materials) ist zulässig, Verschuldung (14.2%) und Cash-Quote (0.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "34.8 Mrd. $",
      "sector": "Grundstoffe",
      "industry": "Building Materials",
      "peRatio": "31.6",
      "evEbitda": "16.9",
      "epsGrowth": "0.0%",
      "freeCashFlow": "844 Mio. $",
      "week52Range": "296,04 – 579,91 $",
      "dividendYield": "1,5%"
    },
    "profile": "Vulcan Materials Company (Holdi ist im Bereich Building Materials innerhalb des Sektors Grundstoffe tätig.",
    "events": {
      "agm": {
        "date": "2027-04-22",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-23"
      },
      "timeline": [
        {
          "date": "2026-10-13",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-23",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-22",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Verisk Analytics, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Consulting Services) ist zulässig, Verschuldung (18.1%) und Cash-Quote (2.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "25.5 Mrd. $",
      "sector": "Industrie",
      "industry": "Consulting Services",
      "peRatio": "29.9",
      "evEbitda": "19.4",
      "epsGrowth": "-0.0%",
      "freeCashFlow": "1.1 Mrd. $",
      "week52Range": "244,56 – 401,77 $",
      "dividendYield": "2,9%"
    },
    "profile": "Verisk Analytics, Inc. ist im Bereich Consulting Services innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-02-03",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-09"
      },
      "timeline": [
        {
          "date": "2026-09-09",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-05",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-02-03",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "VeriSign, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Infrastructure) ist zulässig, Verschuldung (8.9%) und Cash-Quote (3.9%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "26.2 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Infrastructure",
      "peRatio": "31.5",
      "evEbitda": "23.2",
      "epsGrowth": "0.1%",
      "freeCashFlow": "833 Mio. $",
      "week52Range": "150,11 – 212,51 $",
      "dividendYield": "3,4%"
    },
    "profile": "VeriSign, Inc. ist im Bereich Software - Infrastructure innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-04-08",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-21"
      },
      "timeline": [
        {
          "date": "2026-09-05",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-21",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-08",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Vertiv Holdings, LLC erfüllt aktuell alle geprüften Kriterien: Die Branche (Electrical Equipment & Parts) ist zulässig, Verschuldung (3.6%) und Cash-Quote (3.3%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "93.0 Mrd. $",
      "sector": "Industrie",
      "industry": "Electrical Equipment & Parts",
      "peRatio": "54.7",
      "evEbitda": "34.8",
      "epsGrowth": "0.5%",
      "freeCashFlow": "2.7 Mrd. $",
      "week52Range": "89,62 – 124,18 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Vertiv Holdings, LLC ist im Bereich Electrical Equipment & Parts innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-05-30",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-29"
      },
      "timeline": [
        {
          "date": "2026-08-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-07",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-30",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Vertex Pharmaceuticals Incorpor erfüllt aktuell alle geprüften Kriterien: Die Branche (Biotechnology) ist zulässig, Verschuldung (1.6%) und Cash-Quote (6.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "121.1 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Biotechnology",
      "peRatio": "28.3",
      "evEbitda": "23.3",
      "epsGrowth": "0.6%",
      "freeCashFlow": "2.8 Mrd. $",
      "week52Range": "200,29 – 259,63 $",
      "dividendYield": "1,8%"
    },
    "profile": "Vertex Pharmaceuticals Incorpor ist im Bereich Biotechnology innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2026-11-03",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-29"
      },
      "timeline": [
        {
          "date": "2026-09-15",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-29",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-03",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Vistra Corp. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 41.2% (Limit 30%)). Die Branche (Utilities - Independent Power Producers) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "50.0 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Independent Power Producers",
      "peRatio": "24.7",
      "evEbitda": "10.7",
      "epsGrowth": "–",
      "freeCashFlow": "-164 Mio. $",
      "week52Range": "52,98 – 88,93 $",
      "dividendYield": "1,9%"
    },
    "profile": "Vistra Corp. ist im Bereich Utilities - Independent Power Producers innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2026-09-22",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-20"
      },
      "timeline": [
        {
          "date": "2026-08-20",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-12",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-22",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Ventas, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (REIT - Healthcare Facilities) ist zulässig, Verschuldung (26.9%) und Cash-Quote (0.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "48.0 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Healthcare Facilities",
      "peRatio": "170.0",
      "evEbitda": "25.7",
      "epsGrowth": "-0.1%",
      "freeCashFlow": "1.5 Mrd. $",
      "week52Range": "184,62 – 266,94 $",
      "dividendYield": "4,2%"
    },
    "profile": "Ventas, Inc. ist im Bereich REIT - Healthcare Facilities innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2027-02-16",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-06"
      },
      "timeline": [
        {
          "date": "2026-09-06",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-07",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-02-16",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Viatris Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 71.4% (Limit 30%)). Die Branche (Drug Manufacturers - Specialty & Generic) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "20.4 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Drug Manufacturers - Specialty & Generic",
      "peRatio": "–",
      "evEbitda": "7.9",
      "epsGrowth": "–",
      "freeCashFlow": "2.2 Mrd. $",
      "week52Range": "125,52 – 158,62 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Viatris Inc. ist im Bereich Drug Manufacturers - Specialty & Generic innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-03-31",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-12"
      },
      "timeline": [
        {
          "date": "2026-09-04",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-12",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-03-31",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Verizon Communications Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 96.4% (Limit 30%)). Die Branche (Telecom Services) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "195.5 Mrd. $",
      "sector": "Kommunikation",
      "industry": "Telecom Services",
      "peRatio": "12.2",
      "evEbitda": "7.7",
      "epsGrowth": "-0.2%",
      "freeCashFlow": "18.9 Mrd. $",
      "week52Range": "337,91 – 482,15 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Verizon Communications Inc. ist im Bereich Telecom Services innerhalb des Sektors Kommunikation tätig.",
    "events": {
      "agm": {
        "date": "2026-11-19",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-04"
      },
      "timeline": [
        {
          "date": "2026-10-04",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-14",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-19",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Westinghouse Air Brake Technolo erfüllt aktuell alle geprüften Kriterien: Die Branche (Railroads) ist zulässig, Verschuldung (14.1%) und Cash-Quote (1.3%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "49.1 Mrd. $",
      "sector": "Industrie",
      "industry": "Railroads",
      "peRatio": "39.2",
      "evEbitda": "20.9",
      "epsGrowth": "0.2%",
      "freeCashFlow": "1.1 Mrd. $",
      "week52Range": "292,32 – 418,63 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Westinghouse Air Brake Technolo ist im Bereich Railroads innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-01-27",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-06"
      },
      "timeline": [
        {
          "date": "2026-08-24",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-06",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-01-27",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Waters Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Diagnostics & Research) ist zulässig, Verschuldung (15.1%) und Cash-Quote (1.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "37.0 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Diagnostics & Research",
      "peRatio": "48.1",
      "evEbitda": "37.2",
      "epsGrowth": "–",
      "freeCashFlow": "-502 Mio. $",
      "week52Range": "107,92 – 237,43 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Waters Corporation ist im Bereich Diagnostics & Research innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-03-20",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-18"
      },
      "timeline": [
        {
          "date": "2026-10-01",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-18",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-03-20",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Warner Bros. Discovery, Inc. - überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 49.2% (Limit 30%)). Die Branche (Entertainment) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "65.9 Mrd. $",
      "sector": "Kommunikation",
      "industry": "Entertainment",
      "peRatio": "–",
      "evEbitda": "12.7",
      "epsGrowth": "–",
      "freeCashFlow": "18.5 Mrd. $",
      "week52Range": "81,67 – 105,98 $",
      "dividendYield": "1,1%"
    },
    "profile": "Warner Bros. Discovery, Inc. - ist im Bereich Entertainment innerhalb des Sektors Kommunikation tätig.",
    "events": {
      "agm": {
        "date": "2026-08-31",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-13"
      },
      "timeline": [
        {
          "date": "2026-08-31",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-10-02",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Workday, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Application) ist zulässig, Verschuldung (9.6%) und Cash-Quote (11.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "39.6 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Application",
      "peRatio": "50.0",
      "evEbitda": "25.8",
      "epsGrowth": "2.5%",
      "freeCashFlow": "3.1 Mrd. $",
      "week52Range": "269,60 – 363,96 $",
      "dividendYield": "4,1%"
    },
    "profile": "Workday, Inc. ist im Bereich Software - Application innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-02-12",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-08"
      },
      "timeline": [
        {
          "date": "2026-09-20",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-08",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-02-12",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Western Digital Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Computer Hardware) ist zulässig, Verschuldung (0.9%) und Cash-Quote (1.7%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "187.8 Mrd. $",
      "sector": "Technologie",
      "industry": "Computer Hardware",
      "peRatio": "32.6",
      "evEbitda": "47.4",
      "epsGrowth": "4.8%",
      "freeCashFlow": "2.1 Mrd. $",
      "week52Range": "310,80 – 504,60 $",
      "dividendYield": "1,7%"
    },
    "profile": "Western Digital Corporation ist im Bereich Computer Hardware innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2027-05-11",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-17"
      },
      "timeline": [
        {
          "date": "2026-08-17",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-11",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-11",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "WEC Energy Group, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 64.5% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "35.7 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Electric",
      "peRatio": "21.2",
      "evEbitda": "14.9",
      "epsGrowth": "0.2%",
      "freeCashFlow": "-2.3 Mrd. $",
      "week52Range": "224,41 – 359,67 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "WEC Energy Group, Inc. ist im Bereich Utilities - Regulated Electric innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2026-12-24",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-12"
      },
      "timeline": [
        {
          "date": "2026-08-12",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-03",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-12-24",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Welltower Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (REIT - Healthcare Facilities) ist zulässig, Verschuldung (11.7%) und Cash-Quote (1.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "168.9 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Healthcare Facilities",
      "peRatio": "105.1",
      "evEbitda": "56.3",
      "epsGrowth": "0.4%",
      "freeCashFlow": "2.8 Mrd. $",
      "week52Range": "290,47 – 500,44 $",
      "dividendYield": "1,9%"
    },
    "profile": "Welltower Inc. ist im Bereich REIT - Healthcare Facilities innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2026-10-13",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-22"
      },
      "timeline": [
        {
          "date": "2026-09-22",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-09",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-13",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Wells Fargo & Company zählt zur ausgeschlossenen Branche Banks - Diversified und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "261.4 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Banks - Diversified",
      "peRatio": "12.6",
      "evEbitda": "–",
      "epsGrowth": "0.2%",
      "freeCashFlow": "–",
      "week52Range": "304,41 – 444,28 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Wells Fargo & Company ist im Bereich Banks - Diversified innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2026-09-24",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-23"
      },
      "timeline": [
        {
          "date": "2026-08-23",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-08-25",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-24",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Waste Management, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Waste Management) ist zulässig, Verschuldung (25.8%) und Cash-Quote (0.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "90.6 Mrd. $",
      "sector": "Industrie",
      "industry": "Waste Management",
      "peRatio": "59.5",
      "evEbitda": "14.6",
      "epsGrowth": "0.1%",
      "freeCashFlow": "2.3 Mrd. $",
      "week52Range": "279,76 – 489,58 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Waste Management, Inc. ist im Bereich Waste Management innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2026-10-11",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-30"
      },
      "timeline": [
        {
          "date": "2026-09-08",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-30",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-11",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Williams Companies, Inc. (The) überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 34.6% (Limit 30%)). Die Branche (Oil & Gas Midstream) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "87.5 Mrd. $",
      "sector": "Energie",
      "industry": "Oil & Gas Midstream",
      "peRatio": "31.4",
      "evEbitda": "17.5",
      "epsGrowth": "0.2%",
      "freeCashFlow": "-190 Mio. $",
      "week52Range": "204,06 – 304,73 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Williams Companies, Inc. (The) ist im Bereich Oil & Gas Midstream innerhalb des Sektors Energie tätig.",
    "events": {
      "agm": {
        "date": "2027-05-11",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-18"
      },
      "timeline": [
        {
          "date": "2026-08-18",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-30",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-05-11",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Walmart Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Discount Stores) ist zulässig, Verschuldung (8.5%) und Cash-Quote (1.2%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "884.9 Mrd. $",
      "sector": "Konsumgüter (Basis)",
      "industry": "Discount Stores",
      "peRatio": "39.2",
      "evEbitda": "21.3",
      "epsGrowth": "0.2%",
      "freeCashFlow": "6.9 Mrd. $",
      "week52Range": "121,60 – 189,50 $",
      "dividendYield": "3,6%"
    },
    "profile": "Walmart Inc. ist im Bereich Discount Stores innerhalb des Sektors Konsumgüter (Basis) tätig.",
    "events": {
      "agm": {
        "date": "2027-03-05",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-15"
      },
      "timeline": [
        {
          "date": "2026-09-15",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-18",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-03-05",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "W.R. Berkley Corporation zählt zur ausgeschlossenen Branche Insurance - Property & Casualty und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "26.9 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Insurance - Property & Casualty",
      "peRatio": "14.9",
      "evEbitda": "10.8",
      "epsGrowth": "0.1%",
      "freeCashFlow": "–",
      "week52Range": "250,47 – 585,79 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "W.R. Berkley Corporation ist im Bereich Insurance - Property & Casualty innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-05-25",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-14"
      },
      "timeline": [
        {
          "date": "2026-09-03",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-14",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-05-25",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Williams-Sonoma, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Retail) ist zulässig, Verschuldung (5.5%) und Cash-Quote (2.4%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "26.9 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Specialty Retail",
      "peRatio": "25.6",
      "evEbitda": "16.8",
      "epsGrowth": "0.0%",
      "freeCashFlow": "885 Mio. $",
      "week52Range": "256,17 – 408,18 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Williams-Sonoma, Inc. ist im Bereich Specialty Retail innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2026-09-12",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-16"
      },
      "timeline": [
        {
          "date": "2026-09-12",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-26",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-16",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "West Pharmaceutical Services, I erfüllt aktuell alle geprüften Kriterien: Die Branche (Medical Instruments & Supplies) ist zulässig, Verschuldung (1.3%) und Cash-Quote (1.8%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "24.0 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Medical Instruments & Supplies",
      "peRatio": "43.7",
      "evEbitda": "26.2",
      "epsGrowth": "0.2%",
      "freeCashFlow": "278 Mio. $",
      "week52Range": "17,45 – 30,75 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "West Pharmaceutical Services, I ist im Bereich Medical Instruments & Supplies innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-02-03",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-12"
      },
      "timeline": [
        {
          "date": "2026-09-12",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-19",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-02-03",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Willis Towers Watson Public Lim zählt zur ausgeschlossenen Branche Insurance Brokers und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "31.2 Mrd. $",
      "sector": "Finanzdienstleistungen",
      "industry": "Insurance Brokers",
      "peRatio": "20.8",
      "evEbitda": "13.0",
      "epsGrowth": "-0.3%",
      "freeCashFlow": "1.4 Mrd. $",
      "week52Range": "67,56 – 111,95 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Willis Towers Watson Public Lim ist im Bereich Insurance Brokers innerhalb des Sektors Finanzdienstleistungen tätig.",
    "events": {
      "agm": {
        "date": "2027-04-09",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-15"
      },
      "timeline": [
        {
          "date": "2026-09-03",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-15",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-04-09",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Weyerhaeuser Company überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 30.1% (Limit 30%)). Die Branche (REIT - Specialty) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "18.0 Mrd. $",
      "sector": "Immobilien",
      "industry": "REIT - Specialty",
      "peRatio": "37.9",
      "evEbitda": "32.7",
      "epsGrowth": "0.9%",
      "freeCashFlow": "46 Mio. $",
      "week52Range": "232,03 – 335,46 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Weyerhaeuser Company ist im Bereich REIT - Specialty innerhalb des Sektors Immobilien tätig.",
    "events": {
      "agm": {
        "date": "2026-11-27",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-01"
      },
      "timeline": [
        {
          "date": "2026-09-01",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-06",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-11-27",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Wynn Resorts, Limited zählt zur ausgeschlossenen Branche Resorts & Casinos und ist damit unabhängig von den Finanzkennzahlen nicht konform.",
    "eckdaten": {
      "marketCap": "10.3 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Resorts & Casinos",
      "peRatio": "28.5",
      "evEbitda": "11.2",
      "epsGrowth": "0.5%",
      "freeCashFlow": "357 Mio. $",
      "week52Range": "328,96 – 526,34 $",
      "dividendYield": "0,3%"
    },
    "profile": "Wynn Resorts, Limited ist im Bereich Resorts & Casinos innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2026-09-17",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-13"
      },
      "timeline": [
        {
          "date": "2026-08-13",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-02",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-17",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Xcel Energy Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 85.3% (Limit 30%)). Die Branche (Utilities - Regulated Electric) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "48.8 Mrd. $",
      "sector": "Versorger",
      "industry": "Utilities - Regulated Electric",
      "peRatio": "21.4",
      "evEbitda": "14.5",
      "epsGrowth": "0.2%",
      "freeCashFlow": "-7.9 Mrd. $",
      "week52Range": "208,91 – 252,14 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Xcel Energy Inc. ist im Bereich Utilities - Regulated Electric innerhalb des Sektors Versorger tätig.",
    "events": {
      "agm": {
        "date": "2027-02-27",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-27"
      },
      "timeline": [
        {
          "date": "2026-08-27",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-10-05",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2027-02-27",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "ExxonMobil Holdings Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Oil & Gas Integrated) ist zulässig, Verschuldung (7.4%) und Cash-Quote (1.3%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "644.3 Mrd. $",
      "sector": "Energie",
      "industry": "Oil & Gas Integrated",
      "peRatio": "26.2",
      "evEbitda": "12.4",
      "epsGrowth": "-0.4%",
      "freeCashFlow": "11.6 Mrd. $",
      "week52Range": "188,34 – 313,89 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "ExxonMobil Holdings Corporation ist im Bereich Oil & Gas Integrated innerhalb des Sektors Energie tätig.",
    "events": {
      "agm": {
        "date": "2026-09-22",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-25"
      },
      "timeline": [
        {
          "date": "2026-08-25",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-18",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-22",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Xylem Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Specialty Industrial Machinery) ist zulässig, Verschuldung (11.2%) und Cash-Quote (4.7%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "27.3 Mrd. $",
      "sector": "Industrie",
      "industry": "Specialty Industrial Machinery",
      "peRatio": "27.9",
      "evEbitda": "14.8",
      "epsGrowth": "0.2%",
      "freeCashFlow": "1.2 Mrd. $",
      "week52Range": "207,77 – 254,18 $",
      "dividendYield": "1,3%"
    },
    "profile": "Xylem Inc. ist im Bereich Specialty Industrial Machinery innerhalb des Sektors Industrie tätig.",
    "events": {
      "agm": {
        "date": "2027-05-28",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-14"
      },
      "timeline": [
        {
          "date": "2026-08-23",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-14",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-05-28",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Block, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Software - Infrastructure) ist zulässig, Verschuldung (16.8%) und Cash-Quote (15.1%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "48.4 Mrd. $",
      "sector": "Technologie",
      "industry": "Software - Infrastructure",
      "peRatio": "63.5",
      "evEbitda": "31.2",
      "epsGrowth": "–",
      "freeCashFlow": "-795 Mio. $",
      "week52Range": "194,38 – 323,96 $",
      "dividendYield": "2,8%"
    },
    "profile": "Block, Inc. ist im Bereich Software - Infrastructure innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-09-12",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-23"
      },
      "timeline": [
        {
          "date": "2026-09-05",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-09-12",
          "type": "HV",
          "label": "Hauptversammlung"
        },
        {
          "date": "2026-09-23",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        }
      ]
    }
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
    "insight": "Yum! Brands, Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Restaurants) ist zulässig, Verschuldung (29.3%) und Cash-Quote (1.6%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "41.8 Mrd. $",
      "sector": "Konsumgüter (zyklisch)",
      "industry": "Restaurants",
      "peRatio": "19.3",
      "evEbitda": "17.5",
      "epsGrowth": "1.3%",
      "freeCashFlow": "814 Mio. $",
      "week52Range": "62,26 – 92,41 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Yum! Brands, Inc. ist im Bereich Restaurants innerhalb des Sektors Konsumgüter (zyklisch) tätig.",
    "events": {
      "agm": {
        "date": "2026-10-04",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-09-06"
      },
      "timeline": [
        {
          "date": "2026-09-06",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-30",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-04",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Zimmer Biomet Holdings, Inc. überschreitet aktuell einen Grenzwert (Verschuldungsgrad zu hoch: 41.8% (Limit 30%)). Die Branche (Medical Devices) selbst ist zulässig — eine regelmäßige Neuprüfung wird empfohlen.",
    "eckdaten": {
      "marketCap": "18.2 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Medical Devices",
      "peRatio": "24.3",
      "evEbitda": "9.8",
      "epsGrowth": "0.3%",
      "freeCashFlow": "1.0 Mrd. $",
      "week52Range": "197,75 – 468,00 $",
      "dividendYield": "Keine Dividende"
    },
    "profile": "Zimmer Biomet Holdings, Inc. ist im Bereich Medical Devices innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2027-02-04",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-08"
      },
      "timeline": [
        {
          "date": "2026-08-28",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-08",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2027-02-04",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Zebra Technologies Corporation erfüllt aktuell alle geprüften Kriterien: Die Branche (Communication Equipment) ist zulässig, Verschuldung (20.4%) und Cash-Quote (0.8%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "14.0 Mrd. $",
      "sector": "Technologie",
      "industry": "Communication Equipment",
      "peRatio": "35.4",
      "evEbitda": "16.3",
      "epsGrowth": "0.0%",
      "freeCashFlow": "559 Mio. $",
      "week52Range": "238,82 – 365,85 $",
      "dividendYield": "2,5%"
    },
    "profile": "Zebra Technologies Corporation ist im Bereich Communication Equipment innerhalb des Sektors Technologie tätig.",
    "events": {
      "agm": {
        "date": "2026-10-09",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-08-22"
      },
      "timeline": [
        {
          "date": "2026-08-22",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-09-14",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-09",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
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
    "insight": "Zoetis Inc. erfüllt aktuell alle geprüften Kriterien: Die Branche (Drug Manufacturers - Specialty & Generic) ist zulässig, Verschuldung (28.6%) und Cash-Quote (6.0%) liegen unter dem 30%-Grenzwert.",
    "eckdaten": {
      "marketCap": "32.4 Mrd. $",
      "sector": "Gesundheit",
      "industry": "Drug Manufacturers - Specialty & Generic",
      "peRatio": "12.7",
      "evEbitda": "9.7",
      "epsGrowth": "0.1%",
      "freeCashFlow": "1.8 Mrd. $",
      "week52Range": "115,32 – 225,48 $",
      "dividendYield": "3,3%"
    },
    "profile": "Zoetis Inc. ist im Bereich Drug Manufacturers - Specialty & Generic innerhalb des Sektors Gesundheit tätig.",
    "events": {
      "agm": {
        "date": "2026-11-02",
        "status": "Bevorstehend"
      },
      "nextEarnings": {
        "date": "2026-10-17"
      },
      "timeline": [
        {
          "date": "2026-09-12",
          "type": "Dividende",
          "label": "Dividendenstichtag (Ex-Div-Date)"
        },
        {
          "date": "2026-10-17",
          "type": "Earnings",
          "label": "Quartalszahlen (Earnings Call)"
        },
        {
          "date": "2026-11-02",
          "type": "HV",
          "label": "Hauptversammlung"
        }
      ]
    }
  }
];
