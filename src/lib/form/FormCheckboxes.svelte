<script lang="ts">
	import type { FormCheckboxes } from '$lib/form/types';
	import { XCircle } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';

	export let question: FormCheckboxes;
	export let value: string[] | number[] = [];
	$: isError = !question.validationFunction(value);
</script>

<fieldset class="space-y-5">
	<legend class="sr-only">Notifications</legend>
	{#each question.options as option, index}
		<div class="relative flex items-start">
			<div class="flex h-5 items-center">
				<input
					id={option.label}
					aria-describedby={option.label}
					name={question.name}
					value={option.value}
					bind:group={value}
					type="checkbox"
					class="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-rose-500"
				/>
			</div>
			<div class="ml-3 text-sm">
				<label for={option.label} class="font-medium text-gray-700">
					{option.label}
				</label>
				<span id="comments-description" class="text-gray-500">
					<span class="sr-only">{option.label}</span>
					{#if option.subtitle}
						{option.subtitle}
					{/if}
				</span>
			</div>
		</div>
	{/each}
</fieldset>

{#if isError}
	<div class="my-4 rounded-md bg-error-50 p-4">
		<div class="flex">
			<div class="flex-shrink-0">
				<Icon src={XCircle} con class="h-5 w-5 text-error-400" aria-hidden="true" />
			</div>
			<div class="ml-3">
				<h3 class="text-sm font-medium text-error-800">{question.errorMessage}</h3>
			</div>
		</div>
	</div>
{/if}
