<script lang="ts">
	import type { FormInput } from '$lib/form/types';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ExclamationCircle } from '@steeze-ui/heroicons';

	export let question: FormInput;
	export let value: string | string[] = '';

	export let validationFunction: (input: typeof value) => boolean = () => true;
	$: isError = !validationFunction(value);
</script>

<div>
	<label for={question.name} class="block text-sm font-medium text-gray-700 sr-only">
		{question.label}
	</label>
	<div class="relative mt-1 border-b border-gray-300 focus-within:border-rose-600">
		<input
			type="text"
			name={question.name}
			id={question.name}
			class="{isError ? 'border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500' : ''} block w-full border-0 border-b border-transparent bg-gray-50 focus:border-rose-600 focus:ring-0 sm:text-sm"
			placeholder={question.placeholder}
			bind:value
		/>
		<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
			<Icon src={ExclamationCircle} class="h-5 w-5 text-red-500" aria-hidden="true" />
		</div>
	</div>
</div>
