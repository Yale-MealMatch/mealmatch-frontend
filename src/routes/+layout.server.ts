// From https://github.com/supabase/auth-helpers/blob/main/packages/sveltekit/README.md
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals: { getSession } }) => {
	return {
		session: await getSession()
	};
};
