-- supabase_schema_profiles.sql
--
-- Verbindet die public.profiles-Tabelle mit dem echten Registrierungs-Flow.
-- Bisher existierte die Tabelle nur als leeres Schema — dieser Trigger legt
-- ab jetzt automatisch eine Zeile an, sobald sich ein neuer Nutzer über
-- Supabase Auth registriert (egal auf welchem Weg — heute E-Mail/Passwort,
-- potenziell später auch OAuth).
--
-- Liest die Metadaten, die AuthPanel.jsx bei signUp() mitschickt:
--   display_name, first_name, last_name, newsletter_opt_in, age_confirmed
--
-- terms_accepted_at wird beim Insert auf den aktuellen Zeitpunkt gesetzt,
-- weil das AGB-Häkchen im Formular Pflicht ist — ein erfolgreicher signUp()
-- bedeutet also Zustimmung genau in diesem Moment.
--
-- Ausführung: einmalig im Supabase SQL Editor (Dashboard → SQL Editor →
-- New Query → diesen Inhalt einfügen → Run). Das hier ist reines SQL,
-- Claude Code kann das nicht automatisch ausführen.

-- 1) Funktion, die bei jedem neuen auth.users-Eintrag läuft
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (
    id,
    display_name,
    first_name,
    last_name,
    newsletter_opt_in,
    age_confirmed,
    terms_accepted_at
  )
  values (
    new.id,
    new.raw_user_meta_data ->> 'display_name',
    new.raw_user_meta_data ->> 'first_name',
    new.raw_user_meta_data ->> 'last_name',
    coalesce((new.raw_user_meta_data ->> 'newsletter_opt_in')::boolean, false),
    coalesce((new.raw_user_meta_data ->> 'age_confirmed')::boolean, false),
    now()
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

-- 2) Trigger, der die Funktion bei jeder neuen Registrierung auslöst
drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();

-- 3) Row-Level-Security: jeder Nutzer sieht/ändert nur seine eigene Zeile.
--    Kein INSERT-Recht für normale Nutzer — das Anlegen läuft ausschließlich
--    über den obigen Trigger (security definer, umgeht RLS kontrolliert).
alter table public.profiles enable row level security;

drop policy if exists "Nutzer sehen eigenes Profil" on public.profiles;
create policy "Nutzer sehen eigenes Profil"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "Nutzer aktualisieren eigenes Profil" on public.profiles;
create policy "Nutzer aktualisieren eigenes Profil"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);
