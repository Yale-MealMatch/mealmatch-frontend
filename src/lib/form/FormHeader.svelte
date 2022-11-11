<script lang="ts">
	import type { Question } from '$lib/form/types';

	export let title: Question['label'];
	export let description: Question['description'];
</script>

<div class="mb-4 border-b border-gray-200 pb-2">
	<h3 class="text-lg font-medium leading-6 text-gray-900">{@html title}</h3>
	{#if description}
		<p class="mt-2 max-w-4xl text-sm text-gray-500">{@html description}</p>
	{/if}
</div>
