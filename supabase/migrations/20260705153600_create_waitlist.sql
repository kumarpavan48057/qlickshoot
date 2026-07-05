/*
# Create waitlist table (single-tenant, no auth)

1. New Tables
- `waitlist`
  - `id` (uuid, primary key)
  - `name` (text, not null) — early-access signup's display name
  - `email` (text, not null, unique) — signup email, deduplicated
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `waitlist`.
- Allow anon + authenticated INSERT so the public landing page can collect signups.
- No SELECT/UPDATE/DELETE for anon — only inserts are needed from the public site.
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_waitlist" ON waitlist;
CREATE POLICY "anon_insert_waitlist" ON waitlist
  FOR INSERT TO anon, authenticated WITH CHECK (true);