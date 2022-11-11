// From https://github.com/supabase/auth-helpers/blob/main/packages/sveltekit/README.md
import { createClient } from '@supabase/auth-helpers-sveltekit';
import {PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL} from '$env/static/public';

const supabaseUrl = PUBLIC_SUPABASE_URL;
const supabaseAnonKey = PUBLIC_SUPABASE_ANON_KEY;

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
