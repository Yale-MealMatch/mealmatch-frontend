<script lang="ts">
	import type { FormRadio } from '$lib/form/types';
	import {
		RadioGroup,
		RadioGroupDescription,
		RadioGroupLabel,
		RadioGroupOption
	} from '@rgossiaux/svelte-headlessui';

	export let question: FormRadio;
	export let value: string | string[] = '';
	const roundTopAndBottom = (index: number) => {
		if (index === 0) return 'rounded-tl-md rounded-tr-md';
		if (index === question.options.length - 1) return 'rounded-bl-md rounded-br-md';
	};

	const checkedClasses = (checked: boolean) => {
		if (checked) return 'bg-indigo-50 border-indigo-200 z-10';
		return 'border-gray-200';
	};
</script>

<RadioGroup value={value} on:change={(e) => (value = e.detail)}>
	<RadioGroupLabel class="sr-only">{question.name}</RadioGroupLabel>
	<div class="-space-y-px rounded-md bg-white">
		{#each question.options as option, index}
			<RadioGroupOption value={option.label} let:checked let:active>
				<div
					class="{roundTopAndBottom(index)} {checkedClasses(
						checked
					)} relative border p-4 flex cursor-pointer focus:outline-none"
				>
					<span
						class="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center {checked
							? 'bg-indigo-600 border-transparent'
							: 'bg-white border-gray-300'} {active ? 'ring-2 ring-offset-2 ring-indigo-500' : ''}"
						aria-hidden="true"
					>
						<span class="rounded-full bg-white w-1.5 h-1.5" />
					</span>
					<span class="ml-3 flex flex-col">
						<RadioGroupLabel
							as="span"
							class="{checked ? 'text-indigo-900' : 'text-gray-900'} block text-sm font-medium"
							>
							{option.label}
							</RadioGroupLabel
						>
						{#if option.subtitle}
							<RadioGroupDescription
								as="span"
								class="{checked ? 'text-indigo-700' : 'text-gray-500'} block text-sm"
								>{option.subtitle}</RadioGroupDescription
							>
						{/if}
					</span>
				</div>
			</RadioGroupOption>
		{/each}
	</div>
</RadioGroup>
