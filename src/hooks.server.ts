// From https://github.com/supabase/auth-helpers/blob/main/packages/sveltekit/README.md
import '$lib/db';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const { session } = await getSupabase(event);

	if (!session) {
		throw redirect(303, '/login');
	}

	// Now we are authenticated
	if (event.url.pathname.startsWith('/login')) {
		throw redirect(303, '/form');
	}

	const response = await resolve(event);

	return response;
};
