	// From https://github.com/supabase/auth-helpers/blob/main/packages/sveltekit/README.md 
import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/public'

const supabaseUrl = env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = env.PUBLIC_SUPABASE_ANON_KEY;

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);