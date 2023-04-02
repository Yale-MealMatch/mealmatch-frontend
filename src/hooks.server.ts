// From https://github.com/supabase/auth-helpers/blob/main/packages/sveltekit/README.md
import '$lib/supabase';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const { session } = await getSupabase(event);
	const { url } = event;
	if (!session && url.pathname !== '/') {
		throw redirect(303, '/');
	}
	const response = await resolve(event);

	return response;
};
