<script lang="ts">
	import FormDivider from '$lib/form/FormDivider.svelte';
	import FormGroup from '$lib/form/FormGroup.svelte';
	import NextButton from '$lib/form/NextButton.svelte';
	import PreviousButton from '$lib/form/PreviousButton.svelte';
	import {questions} from '$lib/form/questions.svelte';
	import type {Question} from '$lib/form/types';

	let currentQuestionIndex = 0;
	const previousSlide = () => {
		if (currentQuestionIndex > 0) currentQuestionIndex--;
	};
	const nextSlide = () => {
		if (currentQuestionIndex < questions.length - 1) currentQuestionIndex++;
	};
	const jumpSlide = (index: number) => (currentQuestionIndex = index);
	$: question = questions[currentQuestionIndex] as Question;
</script>

<main class="mx-auto max-w-7xl sm:px-6 lg:px-8">
	<div class="mt-10 sm:mt-0">
		<div class="overflow-hidden shadow sm:rounded-md">
			<div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
				<nav class="flex items-center justify-between border-b border-gray-200 px-4 sm:px-0">
					<PreviousButton {currentQuestionIndex} {previousSlide} />

					<div class="hidden md:-mb-px md:flex">
						{#each questions as _question, index}
							<button
								class={`${
									index === currentQuestionIndex ? 'border-rose-500 text-rose-600' : ''
								} inline-flex items-center border-b-2 border-transparent px-4 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700`}
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
				<FormGroup {question} />
				<FormDivider />
			</div>
		</div>
	</div>
</main>
