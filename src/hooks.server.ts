// From https://github.com/supabase/auth-helpers/blob/main/packages/sveltekit/README.md
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import type { Database } from '$lib/types/supabase';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
// import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.supabase = createSupabaseServerClient<Database>({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event
	});

	/**
	 * a little helper that is written for convenience so that instead
	 * of calling `const { data: { session } } = await supabase.auth.getSession()`
	 * you just call this `await getSession()`
	 */
	event.locals.getSession = async () => {
		const {
			data: { session }
		} = await event.locals.supabase.auth.getSession();
		return session;
	};

	// if (event.url.pathname !== '/') {
	// 	const session = await event.locals.getSession();
	// 	if (!session) throw redirect(303, '/');
	// }

	// if (event.url.pathname === '/') {
	// 	const session = await event.locals.getSession();
	// 	if (session) throw redirect(303, '/form');
	// }

	return resolve(event, {
		/**
		 * There´s an issue with `filterSerializedResponseHeaders` not working when using `sequence`
		 *
		 * https://github.com/sveltejs/kit/issues/8061
		 */
		filterSerializedResponseHeaders(name) {
			return name === 'content-range';
		}
	});
};
