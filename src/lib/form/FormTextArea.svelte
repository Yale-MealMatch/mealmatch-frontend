<script lang="ts">
	import type {FormTextArea} from "$lib/form/types";

	export let question: FormTextArea;
	export let value: string = '';

	const { validationFunction } = question;
	$: isError = !validationFunction(value);
	$: errorClasses = isError
				? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
				: 'bg-gray-50 focus:border-indigo-600'
</script>

<div>
	<label for={question.name} class="block text-sm font-medium text-gray-700 sr-only">
		{question.label}
	</label>
	<div class="mt-1">
		<textarea
			rows={4}
			name={question.name}
			id={question.name}
			class="{errorClasses} block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
			placeholder={question.placeholder}
			bind:value={value}
		/>
	</div>
	{#if isError}
		<p class="mt-2 text-sm text-red-600" id="email-error">{question.errorMessage}</p>
	{/if}
</div>
