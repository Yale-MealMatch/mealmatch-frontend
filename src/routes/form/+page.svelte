<script lang="ts">
	import FormCheckboxes from '$lib/form/FormCheckboxes.svelte';
	import FormHeader from '$lib/form/FormHeader.svelte';
	import FormInput from '$lib/form/FormInput.svelte';
	import FormRadioGroup from '$lib/form/FormRadioGroup.svelte';
	import FormTextArea from '$lib/form/FormTextArea.svelte';
	import NextButton from '$lib/form/NextButton.svelte';
	import PreviousButton from '$lib/form/PreviousButton.svelte';
	import { questions } from '$lib/form/questions';
	import ProgressBar from './ProgressBar.svelte';
	import type { PageData } from './$types';
	import { postUserResponses } from './+page';

	export let data: PageData;
	let responses = data.responses;

	let currentPageIndex = 0;
	$: currentPage = questions[currentPageIndex];

	let isError = false;
	const previousSlide = () => (isError ? '' : currentPageIndex--);
	const nextSlide = () => (isError ? '' : currentPageIndex++);
	const jumpSlide = (index: number) => (isError ? '' : (currentPageIndex = index));
</script>

<div class="mt-10 sm:mt-4">
	{JSON.stringify(responses)}
	<div class="flex flex-col gap-4">
		<div class="overflow-hidden bg-white shadow sm:rounded-md">
			<ProgressBar currentStepIndex={currentPageIndex} {jumpSlide} />
		</div>
		{#each currentPage as question}
			<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
				<FormHeader title={question.label} description={question.description} />
				{#if question.type === 'radio'}
					<FormRadioGroup {question} bind:value={responses[question.name]} />
				{/if}
				{#if question.type === 'checkboxes'}
					<FormCheckboxes {question} bind:value={responses[question.name]} />
				{/if}
				{#if question.type === 'input'}
					<FormInput {question} bind:value={responses[question.name]} />
				{/if}
				{#if question.type === 'textarea'}
					<FormTextArea {question} bind:value={responses[question.name]} />
				{/if}
			</div>
			<!-- <FormDivider /> -->
		{/each}
		{#if currentPageIndex === 0}
			<div class="flex justify-between">
				<div class="flex-1"></div>
				<div class="hidden md:-mb-px md:flex">
					{#each questions as _question, index}
						<button
							class="{index === currentPageIndex
								? 'border-rose-500 text-rose-600'
								: ''} inline-flex items-center border-t-2 border-transparent px-4 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
							on:click={() => jumpSlide(index)}
						>
							{index + 1}
						</button>
					{/each}
				</div>
				<NextButton currentIndex={currentPageIndex} {nextSlide} />
			</div>
		{:else if currentPageIndex === questions.length - 1}
			<div class="flex justify-between">
				<PreviousButton currentIndex={currentPageIndex} {previousSlide} />
				<div class="hidden md:-mb-px md:flex">
					{#each questions as _question, index}
						<button
							class="{index === currentPageIndex
								? 'border-rose-500 text-rose-600'
								: ''} inline-flex items-center border-t-2 border-transparent px-4 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
							on:click={() => jumpSlide(index)}
						>
							{index + 1}
						</button>
					{/each}
				</div>
				<button
					class="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
					on:click={() => {
						postUserResponses(responses);
					}}
				>
					Submit
				</button>
			</div>
		{:else}
			<div class="flex justify-between">
				<PreviousButton currentIndex={currentPageIndex} {previousSlide} />
				<div class="hidden md:-mb-px md:flex">
					{#each questions as _question, index}
						<button
							class="{index === currentPageIndex
								? 'border-rose-500 text-rose-600'
								: ''} inline-flex items-center border-t-2 border-transparent px-4 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
							on:click={() => jumpSlide(index)}
						>
							{index + 1}
						</button>
					{/each}
				</div>
				<NextButton currentIndex={currentPageIndex} {nextSlide} />
			</div>
		{/if}
	</div>

	<nav class="flex items-center justify-between border-gray-200 px-4 sm:px-0">
		<PreviousButton currentIndex={currentPageIndex} {previousSlide} />
		<div class="hidden md:-mb-px md:flex">
			{#each questions as _question, index}
				<button
					class="{index === currentPageIndex
						? 'border-rose-500 text-rose-600'
						: ''} inline-flex items-center border-t-2 border-transparent px-4 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
					on:click={() => jumpSlide(index)}
				>
					{index + 1}
				</button>
			{/each}
		</div>
		<NextButton currentIndex={currentPageIndex} {nextSlide} />
	</nav>
</div>
