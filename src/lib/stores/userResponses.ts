import type { Database } from '$lib/types/supabase';
import { writable } from 'svelte/store';

export const responses = writable<Database['public']['Tables']['profiles']['Insert']>(
	{} as Database['public']['Tables']['profiles']['Insert']
);
