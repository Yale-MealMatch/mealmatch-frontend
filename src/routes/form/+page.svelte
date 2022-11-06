<script>
	import FormHeader from '$lib/form/FormHeader.svelte';
	import FormRadioGroup from '$lib/form/FormRadioGroup.svelte';
	let currentQuestion = {
		type: 'radio',
		name: 'year',
		label: 'What year are you?',
		description: '',
		options: [
			{ label: 'First-year', value: 2026 },
			{ label: 'Sophomore', value: 2025 },
			{ label: 'Junior', value: 2024 },
			{ label: 'Senior', value: 2023 }
		],
		validationFunction: (value) => value > 0,
		errorMessage: 'Please select a year'
	};
</script>

<div class="mt-10 sm:mt-0">
	<div class="overflow-hidden shadow sm:rounded-md">
		<div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
			<!-- <nav class="flex items-center justify-between border-b border-gray-200 px-4 sm:px-0">
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
			</nav> -->
		</div>
					<FormHeader title={currentQuestion.label} description={currentQuestion.description} />
						<FormRadioGroup question={currentQuestion} />
						<FormRadioGroup question={currentQuestion} />
					<FormHeader title={currentQuestion.label} description={currentQuestion.description} />
						<FormRadioGroup question={currentQuestion} />
						<FormRadioGroup question={currentQuestion} />
		<div class="space-y-6 bg-white px-4 py-5 sm:p-6">
			<div class="rounded-lg border border-gray-200 p-6 shadow-md" />
		</div>
	</div>
</div>

