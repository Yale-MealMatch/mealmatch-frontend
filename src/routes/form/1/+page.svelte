<script lang="ts">
	import FormCheckboxes from '$lib/form/FormCheckboxes.svelte';
	import FormDivider from '$lib/form/FormDivider.svelte';
	import FormHeader from '$lib/form/FormHeader.svelte';
	import FormInput from '$lib/form/FormInput.svelte';
	import FormRadioGroup from '$lib/form/FormRadioGroup.svelte';
	import FormTextArea from '$lib/form/FormTextArea.svelte';
	import NextButton from '$lib/form/NextButton.svelte';
	import PreviousButton from '$lib/form/PreviousButton.svelte';
	import { questions } from '$lib/form/questions';
	import ProgressBar from '../ProgressBar.svelte';

	let currentPageIndex = 0;
	$: currentPage = questions[currentPageIndex];

	let isError = false;
	const previousSlide = () => (isError ? '' : currentPageIndex--);
	const nextSlide = () => (isError ? '' : currentPageIndex++);
	const jumpSlide = (index: number) => (isError ? '' : (currentPageIndex = index));
</script>

<div class="mt-10 sm:mt-0">
	<div class="overflow-hidden shadow sm:rounded-md">
		<!-- svelte-ignore missing-declaration -->
		<div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
			<ProgressBar />
		</div>
		<div class="space-y-6 bg-white px-4 py-5 sm:p-6">
			{#each currentPage as question}
				<div class="rounded-lg border border-gray-200 p-6 shadow-md">
					<FormHeader title={question.label} description={question.description} />
					{#if question.type === 'radio'}
						<FormRadioGroup {question} />
					{/if}
					{#if question.type === 'checkboxes'}
						<FormCheckboxes {question} />
					{/if}
					{#if question.type === 'input'}
						<FormInput {question} />
					{/if}
					{#if question.type === 'textarea'}
						<FormTextArea {question} />
					{/if}
				</div>
				<FormDivider />
			{/each}
		</div>
		<div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
			<nav class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
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
	</div>
</div>
