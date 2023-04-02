import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getUserResponses, responses } from '$lib/stores/userResponses';

export const load: PageLoad = async (event) => {
	const { session } = await getSupabase(event);
	if (!session?.user.email) {
		throw redirect(303, '/login');
	}
	const userResponses = await getUserResponses(session.user.email);
	console.log('🚀 ~ file: +page.ts:12 ~ constload:PageLoad= ~ userResponses:', userResponses);
	responses.set(userResponses);
};
