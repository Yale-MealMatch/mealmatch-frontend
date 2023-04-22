// From https://github.com/supabase/auth-helpers/blob/main/packages/sveltekit/README.md
import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import type { Database } from '$lib/types/DatabaseDefinitions';

const supabaseUrl = PUBLIC_SUPABASE_URL;
const supabaseAnonKey = PUBLIC_SUPABASE_ANON_KEY;

export const supabaseClient = createClient<Database>(supabaseUrl, supabaseAnonKey);
