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
	import type { Question } from '$lib/form/types';
	import { postUserResponses } from './+page';
	import type { PageData } from './$types';

	export let data: PageData;
	let { responses } = data;

	let currentQuestionIndex = 0;
	$: question = questions[currentQuestionIndex] as Question;

	const previousSlide = () => (isError ? '' : currentQuestionIndex--);
	const nextSlide = () => (isError ? '' : currentQuestionIndex++);
	const jumpSlide = (index: number) => (isError ? '' : (currentQuestionIndex = index));

	$: console.log(responses[question.name]);
	$: postUserResponses(responses);

	let isError: boolean = false;
	const handleIsError = ({ detail: { isError: updateValue } }: { detail: { isError: boolean } }) =>
		(isError = updateValue);
</script>

{JSON.stringify(responses)}
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
			<div class="rounded-lg border border-gray-200 p-6 shadow-md">
				<FormHeader title={question.label} description={question.description} />
				{#if question.type === 'radio'}
					<FormRadioGroup {question} bind:value={responses[question.name]} />
				{/if}
				{#if question.type === 'checkboxes'}
					<FormCheckboxes {question} bind:value={responses[question.name]} />
				{/if}
				{#if question.type === 'input'}
					<FormInput {question} bind:value={responses[question.name]} on:isError={handleIsError} />
				{/if}
				{#if question.type === 'textarea'}
					<FormTextArea
						{question}
						bind:value={responses[question.name]}
						on:isError={handleIsError}
					/>
				{/if}
			</div>

			<FormDivider />
		</div>
	</div>
</div>
