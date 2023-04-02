import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getUserResponses } from '$lib/stores/userResponses';

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
