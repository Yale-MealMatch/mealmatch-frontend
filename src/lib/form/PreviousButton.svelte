<script lang="ts">
	export let currentIndex: number;
	export let previousSlide: () => void;
</script>

{#if currentIndex === 0}
	<div class="-mb-px flex w-0 flex-1" />
{:else}
	<div class="-mb-px flex w-0 flex-1">
		<button
			class="inline-flex items-center border-b-2 border-transparent py-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
			on:click={previousSlide}
		>
			<!-- Heroicon name: mini/arrow-long-left -->
			<svg
				class="mr-3 h-5 w-5 text-gray-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
					clip-rule="evenodd"
				/>
			</svg>
			Previous
		</button>
	</div>
{/if}
