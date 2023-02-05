import { supabaseClient } from '$lib/db';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import type { Database } from 'types/supabase';

const getUserResponses = async () => {
	const { data, error } = await supabaseClient.from('profiles').select('*').maybeSingle();
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
	if (!session) {
		throw redirect(303, '/login');
	}
	const responses = await getUserResponses();
	return {
		responses
	};
};
