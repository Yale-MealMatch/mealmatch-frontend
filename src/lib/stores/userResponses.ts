import { supabaseClient } from '$lib/supabase';
import type { Database } from '$lib/types/DatabaseDefinitions';
import { writable } from 'svelte/store';

export const responses = writable<Database['public']['Tables']['profiles']['Insert']>(
	{} as Database['public']['Tables']['profiles']['Insert']
);

export const getUserResponses = async (email: string) => {
	const { data, error } = await supabaseClient
		.from('profiles')
		.select('*')
		.eq('email', email)
		.single();
	if (error) throw new Error(error.message);
	return data;
};

export const postUserResponses = async (
	data: Database['public']['Tables']['profiles']['Insert']
) => {
	const { error } = await supabaseClient.from('profiles').upsert(data);
	if (error) throw new Error(error.message);
};
