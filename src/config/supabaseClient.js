import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('SUPABASE_URL e SUPABASE_ANON_KEY são obrigatórias.');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
