import type { PageLoad } from './$types';
import { getUserResponses, responses } from '$lib/stores/userResponses';

export const load: PageLoad = async ({ parent }) => {
	const { session } = await parent();
	if (!session) return;
	const userResponses = await getUserResponses(session);
	responses.set(userResponses);
};
