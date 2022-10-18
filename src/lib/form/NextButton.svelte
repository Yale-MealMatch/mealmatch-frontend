<script lang="ts">
	import { questions } from '$lib/form/questions.svelte';

	export let currentQuestionIndex: number;
	export let nextSlide: () => void;
</script>

{#if currentQuestionIndex === questions.length - 1}
	<div class="-mb-px flex w-0 flex-1 justify-end">
		<button
			type="submit"
			class="mb-2 flex w-0 justify-center rounded-md border border-transparent bg-rose-600 py-2 px-8 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
		>
			Submit
		</button>
	</div>
{:else}
	<div class="-mb-px flex w-0 flex-1 justify-end">
		<button
			class="inline-flex items-center border-b-2 border-transparent py-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
			on:click={nextSlide}
		>
			Next
			<svg
				class="ml-3 h-5 w-5 text-gray-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>
{/if}
