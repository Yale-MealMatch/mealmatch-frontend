// From https://github.com/supabase/auth-helpers/blob/main/packages/sveltekit/README.md
import '$lib/db';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	return response;
};
