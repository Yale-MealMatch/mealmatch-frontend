<script lang="ts">
	import type { FormInput } from '$lib/form/types';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ExclamationCircle } from '@steeze-ui/heroicons';
	import {createEventDispatcher} from 'svelte';

	export let question: FormInput;
	export let value: string = '';

	$: isError = !question.validationFunction(value);
	$: errorClasses = isError
		? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
		: 'bg-gray-50 focus:border-indigo-600';
	const dispatch = createEventDispatcher();
	$: dispatch('isError', { isError })
</script>

<div>
	<label for={question.name} class="sr-only block text-sm font-medium text-gray-700">
		{question.label}
	</label>
	<div class="relative mt-1 border-b border-gray-300 focus-within:border-rose-600">
		<input
			type="text"
			name={question.name}
			id={question.name}
			class="{errorClasses} block w-full border-0 border-b border-transparent focus:ring-0 sm:text-sm"
			placeholder={question.placeholder}
			bind:value
		/>
		{#if isError}
			<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
				<Icon src={ExclamationCircle} class="h-5 w-5 text-red-500" aria-hidden="true" />
			</div>
		{/if}
	</div>
	{#if isError}
		<p class="mt-2 text-sm text-red-600" id="email-error">{question.errorMessage}</p>
	{/if}
</div>
