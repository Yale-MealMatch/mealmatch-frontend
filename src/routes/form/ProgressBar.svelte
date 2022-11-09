<script lang="ts">
	import { Check } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';

	export let currentStepIndex: number;
	export let jumpSlide: (index: number) => number | '';
	const steps = [
		{ id: '01', name: 'Basic information', href: '/form/1', status: 'complete' },
		{ id: '02', name: 'Preferences', href: '/form/2', status: 'current' },
		{ id: '03', name: 'Submit', href: '#/form/3', status: 'upcoming' }
	];
</script>

<nav aria-label="Progress">
	<ol class="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
		{#each steps as step, stepIdx (step.name)}
			<li class="relative md:flex md:flex-1" data-sveltekit-noscroll>
				{#if stepIdx < currentStepIndex}
					<button on:click={() => jumpSlide(stepIdx)} class="group flex w-full items-center">
						<span class="flex items-center px-6 py-4 text-sm font-medium">
							<span
								class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose-600 group-hover:bg-rose-800"
							>
								<Icon src={Check} class="h-6 w-6 text-white" aria-hidden="true" />
							</span>
							<span class="ml-4 text-sm font-medium text-gray-900">{step.name}</span>
						</span>
					</button>
				{:else if stepIdx === currentStepIndex}
					<button
						on:click={() => jumpSlide(stepIdx)}
						class="flex items-center px-6 py-4 text-sm font-medium"
						aria-current="step"
					>
						<span
							class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-rose-600"
						>
							<span class="text-rose-600">{step.id}</span>
						</span>
						<span class="ml-4 text-sm font-medium text-rose-600">{step.name}</span>
					</button>
				{:else}
					<button on:click={() => jumpSlide(stepIdx)} class="group flex items-center">
						<span class="flex items-center px-6 py-4 text-sm font-medium">
							<span
								class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400"
							>
								<span class="text-gray-500 group-hover:text-gray-900">{step.id}</span>
							</span>
							<span class="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900"
								>{step.name}</span
							>
						</span>
					</button>
				{/if}

				{#if stepIdx !== steps.length - 1}
					<!-- {/* Arrow separator for lg screens and up */} -->
					<div class="absolute top-0 right-0 hidden h-full w-5 md:block" aria-hidden="true">
						<svg
							class="h-full w-full text-gray-300"
							viewBox="0 0 22 80"
							fill="none"
							preserveAspectRatio="none"
						>
							<path
								d="M0 -2L20 40L0 82"
								vector-effect="non-scaling-stroke"
								stroke="currentcolor"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				{/if}
			</li>
		{/each}
	</ol>
</nav>
