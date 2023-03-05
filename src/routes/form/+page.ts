import { supabaseClient } from '$lib/supabase';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import type { PageLoad } from './$types';
import type { Database } from 'types/supabase';
import { writable } from 'svelte/store';
import { redirect } from '@sveltejs/kit';

export const responses = writable<Database['public']['Tables']['profiles']['Insert']>(
	{} as Database['public']['Tables']['profiles']['Insert']
);

const getUserResponses = async (email: string) => {
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

export const load: PageLoad = async (event) => {
	const { session } = await getSupabase(event);
	if (!session?.user.email) {
		throw redirect(303, '/login');
	}
	responses.set(await getUserResponses(session.user.email));
};
