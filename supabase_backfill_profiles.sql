-- supabase_backfill_profiles.sql
--
-- Einmaliger Nachtrag: legt für alle bereits registrierten Nutzer (die vor
-- dem Trigger entstanden sind) rückwirkend eine profiles-Zeile an.
-- Danach nicht mehr nötig — ab jetzt übernimmt das der Trigger automatisch.
--
-- Ausführung: einmalig im Supabase SQL Editor, NACH supabase_schema_profiles.sql.

insert into public.profiles (
  id,
  display_name,
  first_name,
  last_name,
  newsletter_opt_in,
  age_confirmed,
  terms_accepted_at
)
select
  u.id,
  u.raw_user_meta_data ->> 'display_name',
  u.raw_user_meta_data ->> 'first_name',
  u.raw_user_meta_data ->> 'last_name',
  coalesce((u.raw_user_meta_data ->> 'newsletter_opt_in')::boolean, false),
  coalesce((u.raw_user_meta_data ->> 'age_confirmed')::boolean, false),
  now()
from auth.users u
left join public.profiles p on p.id = u.id
where p.id is null;
