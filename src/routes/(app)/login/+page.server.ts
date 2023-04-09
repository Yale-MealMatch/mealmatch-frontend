import { redirect, type Actions } from '@sveltejs/kit';

export const actions = {
	logout: async ({ locals: { supabase } }) => {
		console.log('🚀 ~ file: +page.server.ts:5 ~ logout: ~ supabase:', supabase);
		await supabase.auth.signOut();
		throw redirect(303, '/');
	}
} satisfies Actions;
