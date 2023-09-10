import { responses } from '$lib/stores/userResponses';
import { supabaseClient } from '$lib/supabase';
import type { Session } from '@supabase/supabase-js';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { session } = await parent();
	if (!session) return;
	const userResponses = await getUserResponses(session);
	responses.set(userResponses);
};

async function getUserResponses({ user: { email } }: Session) {
	if (!email) throw new Error('No email found');
	const { data, error } = await supabaseClient
		.from('profiles')
		.select('*')
		.eq('email', email)
		.single();
	if (error) throw new Error(error.message);
	return data;
}
