-- Create this table in your Supabase project database.
-- The contact form sends submissions to this table.

create table if not exists inquiries (
  id bigint generated always as identity primary key,
  name text not null,
  phone text not null,
  service_required text not null,
  message text not null,
  created_at timestamptz not null default now()
);
