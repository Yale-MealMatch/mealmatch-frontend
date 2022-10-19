<script lang="ts">
	import FormDivider from '$lib/form/FormDivider.svelte';
	import FormGroup from '$lib/form/FormGroup.svelte';
	import NextButton from '$lib/form/NextButton.svelte';
	import PreviousButton from '$lib/form/PreviousButton.svelte';
	import { questions } from '$lib/form/questions';
	import type { Question } from '$lib/form/types';
	import { supabase } from '$lib/supabaseClient';
	import { useQuery, useMutation, useQueryClient } from '@sveltestack/svelte-query';

	let currentQuestionIndex = 0;
	const previousSlide = () => {
		$mutation.mutate({ id: 'efc5ce68-2799-49fa-b7b4-ed05ae8de252', [question.name]: value });
		if (currentQuestionIndex > 0) currentQuestionIndex--;
	};
	const nextSlide = () => {
		$mutation.mutate({ id: 'efc5ce68-2799-49fa-b7b4-ed05ae8de252', [question.name]: value });
		if (currentQuestionIndex < questions.length - 1) currentQuestionIndex++;
	};
	const jumpSlide = (index: number) => {
		$mutation.mutate({ id: 'efc5ce68-2799-49fa-b7b4-ed05ae8de252', [question.name]: value });
		currentQuestionIndex = index;
	};
	$: question = questions[currentQuestionIndex] as Question;

	const queryClient = useQueryClient();

	const getUserResponses = async () => {
		const { data, error } = await supabase
			.from('responses')
			.select('*')
			.eq('id', 'efc5ce68-2799-49fa-b7b4-ed05ae8de252')
			.single();
		if (error) throw new Error(error.message);
		return data;
	};

	type Responses = {
		id: string;
		timestamp: string;
		year: number;
		year_match: number[];
		pronouns: string;
		pronouns_match: string[];
		phone: null;
		nickname: null;
		bio: null;
	};

	const responses: Responses = {
		id: 'efc5ce68-2799-49fa-b7b4-ed05ae8de252',
		timestamp: '2022-10-18T22:27:39.200684+00:00',
		year: 2027,
		year_match: [2024],
		pronouns: 'he/him',
		pronouns_match: ['he/him'],
		phone: null,
		nickname: null,
		bio: null
	};

	const postUserResponses = async (data: any) => {
		const { error } = await supabase
			.from('responses')
			.upsert(data)
			.eq('id', 'efc5ce68-2799-49fa-b7b4-ed05ae8de252');
		if (error) throw new Error(error.message);
	};
	// Queries
	const queryResult = useQuery('userResponses', getUserResponses);
	// Mutations
	const mutation = useMutation(postUserResponses, {
		onSuccess: () => {
			// Invalidate and refetch
			queryClient.invalidateQueries('userResponses');
		}
	});

	let value: string | string[] = '';
</script>

<div class="mt-10 sm:mt-0">
	<div class="overflow-hidden shadow sm:rounded-md">
		<div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
			<nav class="flex items-center justify-between border-b border-gray-200 px-4 sm:px-0">
				<PreviousButton {currentQuestionIndex} {previousSlide} />

				<div class="hidden md:-mb-px md:flex">
					{#each questions as _question, index}
						<button
							class="{index === currentQuestionIndex
								? 'border-rose-500 text-rose-600'
								: ''} inline-flex items-center border-b-2 border-transparent px-4 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
							on:click={() => jumpSlide(index)}
						>
							{index + 1}
						</button>
					{/each}
				</div>
				<NextButton {currentQuestionIndex} {nextSlide} />
			</nav>
		</div>
		<div class="space-y-6 bg-white px-4 py-5 sm:p-6">
			{#if $queryResult.isLoading}
				<FormGroup {question} />
			{:else if $queryResult.isError}
				<div class="text-red-500">{$queryResult.error.message}</div>
			{:else}
				<FormGroup {question} bind:value={responses[question.name]} />
			{/if}
			<FormDivider />
		</div>
	</div>
</div>
