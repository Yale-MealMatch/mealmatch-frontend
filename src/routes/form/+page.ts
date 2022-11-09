import { supabaseClient } from '$lib/db';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import type { PageLoad } from './$types';
import type { Database } from '$lib/types/DatabaseDefinitions';

const getUserResponses = async () => {
	const { data, error } = await supabaseClient.from('responses').select('*').single();
	if (error) throw new Error(error.message);
	return data;
};

export const postUserResponses = async (
	data: Database['public']['Tables']['responses']['Insert']
) => {
	const { error } = await supabaseClient.from('responses').upsert(data);
	if (error) throw new Error(error.message);
};

export const load: PageLoad = async (event) => {
	const { session } = await getSupabase(event);
	if (!session) {
		const responses = {} as ReturnType<typeof getUserResponses>;
		return { responses };
	}
	const responses = await getUserResponses();
	return { responses };
};
