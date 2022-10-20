import {supabase} from "$lib/supabaseClient";
import type {definitions} from "$lib/types/supabase";

const getUserResponses = async () => {
	const { data, error } = await supabase
	.from('responses')
	.select('*')
	.eq('id', 'efc5ce68-2799-49fa-b7b4-ed05ae8de252')
	.single();
	if (error) throw new Error(error.message);
	return data as definitions['responses'];
};

export const postUserResponses = async (data: definitions['responses']) => {
	const { error } = await supabase
	.from('responses')
	.upsert(data)
	.eq('id', 'efc5ce68-2799-49fa-b7b4-ed05ae8de252');
	if (error) throw new Error(error.message);
};


export const load = async () => {
	const responses = await getUserResponses();
	return {
		responses
	};
};