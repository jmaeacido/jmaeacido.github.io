create table if not exists public.merch_notifications (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  product_id text not null,
  product_title text,
  size text,
  quantity integer not null default 1,
  price text,
  source text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists merch_notifications_created_at_idx
  on public.merch_notifications (created_at desc);

create index if not exists merch_notifications_product_id_idx
  on public.merch_notifications (product_id);

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  subject text,
  message text not null,
  source text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

create index if not exists contact_submissions_email_idx
  on public.contact_submissions (email);

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text,
  user_agent text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists newsletter_subscribers_created_at_idx
  on public.newsletter_subscribers (created_at desc);

create index if not exists newsletter_subscribers_email_idx
  on public.newsletter_subscribers (email);
