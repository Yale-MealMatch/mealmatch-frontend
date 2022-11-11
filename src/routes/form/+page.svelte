<script lang="ts">
	import FormCheckboxes from '$lib/form/FormCheckboxes.svelte';
	import FormHeader from '$lib/form/FormHeader.svelte';
	import FormInput from '$lib/form/FormInput.svelte';
	import FormRadioGroup from '$lib/form/FormRadioGroup.svelte';
	import FormTextArea from '$lib/form/FormTextArea.svelte';
	import { questions } from '$lib/form/questions';
	import ProgressBar from './ProgressBar.svelte';
	import { postUserResponses } from './+page';
	import { responses } from './+page';
	import { goto } from '$app/navigation';

	let currentPageIndex = 0;
	$: currentPage = questions[currentPageIndex];

	const isError = () =>
		currentPage.some((question) => !question.validationFunction($responses[question.name]));

	let showErrors = false;
	const previousSlide = () => {
		return currentPageIndex--;
	};
	const nextSlide = () => {
		if (isError()) return (showErrors = true);
		currentPageIndex++;
		showErrors = false;
	};
	const jumpSlide = (index: number) => {
		if (index > currentPageIndex && isError()) return (showErrors = true);
		currentPageIndex = index;
		showErrors = false;
	};

	const submit = () => {
		if (isError()) return (showErrors = true);
		postUserResponses($responses);
		goto('/form/confirmation');
	};
</script>

<div class="mt-10 sm:my-4">
	<div class="flex flex-col gap-4 px-4 sm:px-0">
		<div class="-mt-6 overflow-hidden bg-white shadow sm:mt-0">
			<ProgressBar currentStepIndex={currentPageIndex} {jumpSlide} />
		</div>
		{#each currentPage as question}
			<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
				<FormHeader title={question.label} description={question.description} />
				{#if question.type === 'radio'}
					<FormRadioGroup {showErrors} {question} bind:value={$responses[question.name]} />
				{/if}
				{#if question.type === 'checkboxes'}
					<FormCheckboxes {showErrors} {question} bind:value={$responses[question.name]} />
				{/if}
				{#if question.type === 'input'}
					<FormInput {showErrors} {question} bind:value={$responses[question.name]} />
				{/if}
				{#if question.type === 'textarea'}
					<FormTextArea {showErrors} {question} bind:value={$responses[question.name]} />
				{/if}
			</div>
			<!-- <FormDivider /> -->
		{/each}
		<nav class="flex justify-end gap-2">
			{#if currentPageIndex > 0}
				<button
					type="submit"
					class="rounded-md bg-white py-2 px-6 font-bold text-rose-500 shadow-sm hover:shadow-inner"
					on:click={previousSlide}
				>
					Previous
				</button>
			{/if}
			{#if currentPageIndex < questions.length - 1}
				<button
					type="submit"
					class="rounded-md bg-white py-2 px-6 font-bold text-rose-500 shadow-sm hover:shadow-inner"
					on:click={nextSlide}
				>
					Next
				</button>
			{:else}
				<button
					type="submit"
					class="flex justify-center rounded-md border border-transparent bg-rose-600 py-2 px-4 font-bold text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
					on:click={submit}
				>
					Submit
				</button>
			{/if}
		</nav>
	</div>

	<!-- <nav class="flex items-center justify-between border-gray-200 px-4 sm:px-0">
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
	</nav> -->
</div>
