-- Create signups table for storing email signups
CREATE TABLE IF NOT EXISTS public.signups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert signups (public signup form)
CREATE POLICY "Allow public signup insertions" ON public.signups 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow reading signups (for admin purposes)
CREATE POLICY "Allow reading signups" ON public.signups 
  FOR SELECT 
  USING (true);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_signups_email ON public.signups(email);
CREATE INDEX IF NOT EXISTS idx_signups_created_at ON public.signups(created_at DESC);
