import { supabaseClient } from '$lib/db';
import {getSupabase} from '@supabase/auth-helpers-sveltekit';
import type { definitions } from '$lib/types/supabase';
import type { PageLoad } from './$types';
import {redirect} from '@sveltejs/kit';

const getUserResponses = async () => {
	const { data, error } = await supabaseClient
		.from('responses')
		.select('*')
		.eq('id', 'efc5ce68-2799-49fa-b7b4-ed05ae8de252')
		.single();
	if (error) throw new Error(error.message);
	return data as definitions['responses'];
};

export const postUserResponses = async (data: definitions['responses']) => {
	const { error } = await supabaseClient
		.from('responses')
		.upsert(data)
		.eq('id', 'efc5ce68-2799-49fa-b7b4-ed05ae8de252');
	if (error) throw new Error(error.message);
};

export const load: PageLoad  = async (event) => {
	  const { session } = await getSupabase(event);
		if (!session) {
			throw redirect(303, '/');
		}
	const responses = await getUserResponses();
	return {
		responses
	};
};
