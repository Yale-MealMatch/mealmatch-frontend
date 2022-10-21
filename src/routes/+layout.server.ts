// From https://github.com/supabase/auth-helpers/blob/main/packages/sveltekit/README.md
import type { LayoutServerLoad } from './$types';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';

export const load: LayoutServerLoad = async (event) => {
	return {
		session: await getServerSession(event)
	};
};
