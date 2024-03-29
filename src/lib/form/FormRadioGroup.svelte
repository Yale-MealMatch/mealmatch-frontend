<script lang="ts">
	import type { FormRadio } from '$lib/form/types';
	import {
		RadioGroup,
		RadioGroupDescription,
		RadioGroupLabel,
		RadioGroupOption
	} from '@rgossiaux/svelte-headlessui';
	import { XCircle } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';

	export let question: FormRadio;
	export let value: any = '';
	export let showErrors: boolean;
	$: isError = !question.validationFunction(value) && showErrors;
	const roundTopAndBottom = (index: number) => {
		if (index === 0) return 'rounded-tl-md rounded-tr-md';
		if (index === question.options.length - 1) return 'rounded-bl-md rounded-br-md';
	};

	const checkedClasses = (checked: boolean) => {
		if (checked) return 'bg-rose-50 border-rose-200 z-10';
		return 'border-gray-200';
	};
</script>

<RadioGroup {value} on:change={(e) => (value = e.detail)}>
	<RadioGroupLabel class="sr-only">{question.name}</RadioGroupLabel>
	<div class="-space-y-px rounded-md bg-white">
		{#each question.options as option, index}
			<RadioGroupOption value={option.value} let:checked let:active>
				<div
					class="{roundTopAndBottom(index)} {checkedClasses(
						checked
					)} relative flex cursor-pointer border p-4 focus:outline-none"
				>
					<span
						class="mt-0.5 flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-full border {checked
							? 'bg-rose-600 border-transparent'
							: 'bg-white border-gray-300'} {active ? 'ring-2 ring-offset-2 ring-rose-500' : ''}"
						aria-hidden="true"
					>
						<span class="h-1.5 w-1.5 rounded-full bg-white" />
					</span>
					<span class="ml-3 flex flex-col">
						<RadioGroupLabel
							as="span"
							class="{checked ? 'text-rose-900' : 'text-gray-900'} block text-sm font-medium"
						>
							{option.label}
						</RadioGroupLabel>
						{#if option.subtitle}
							<RadioGroupDescription
								as="span"
								class="{checked ? 'text-rose-700' : 'text-gray-500'} block text-sm"
								>{option.subtitle}</RadioGroupDescription
							>
						{/if}
					</span>
				</div>
			</RadioGroupOption>
		{/each}
	</div>
</RadioGroup>

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
