<script lang="ts">
	import type { FormTextArea } from '$lib/form/types';

	export let question: FormTextArea;
	export let value = '';
	export let showErrors: boolean;
	$: isError = !question.validationFunction(value) && showErrors;

	$: errorClasses = isError
		? 'border-error-300 text-error-900 placeholder-error-300 focus:border-error-500 focus:outline-none focus:ring-error-500'
		: 'bg-gray-50 focus:border-rose-600';
</script>

<div>
	<label for={question.name} class="sr-only block text-sm font-medium text-gray-700">
		{@html question.label}
	</label>
	<div class="mt-1">
		<textarea
			rows={4}
			name={question.name}
			id={question.name}
			class="{errorClasses} block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
			placeholder={question.placeholder}
			bind:value
		/>
	</div>
	{#if isError}
		<p class="mt-2 text-sm text-error-600" id="email-error">{question.errorMessage}</p>
	{/if}
</div>
