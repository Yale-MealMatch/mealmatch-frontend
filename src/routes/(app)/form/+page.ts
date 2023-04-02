import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import type { PageLoad } from './$types';
import { getUserResponses, responses } from '$lib/stores/userResponses';

export const load: PageLoad = async (event) => {
	const { session } = await getSupabase(event);
	const userResponses = await getUserResponses(session.user.email);
	responses.set(userResponses);
};
