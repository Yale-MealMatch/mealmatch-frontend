<script lang="ts">
	import type { FormCheckboxes } from '$lib/form/types';

	export let question: FormCheckboxes;
	export let value: string | string[] = '';
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
					value={option.label}
					bind:group={question.name}
					type="checkbox"
					class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
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
