// src/lib/supabaseClient.js
//
// Zentrale Supabase-Verbindung. URL und Anon-Key sind bewusst NICHT geheim —
// sie landen im Frontend-Bundle. Die eigentliche Absicherung läuft über die
// Row-Level-Security-Regeln in der Datenbank (siehe supabase_schema.sql).

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase-Umgebungsvariablen fehlen (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY). " +
    "Anmeldung und Cloud-Sync funktionieren nicht, bis diese gesetzt sind."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
