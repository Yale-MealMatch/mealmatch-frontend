<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import PlaceholderImage from '$lib/PlaceholderImage.svelte';
	import { supabaseClient } from '$lib/supabase';

	const signInWithGoogle = async () => {
		if (loggedIn) return goto('/form');
		await supabaseClient.auth.signInWithOAuth({
			provider: 'google',
			options: { redirectTo: `${$page.url.origin}/form` }
		});
	};

	let hover = false;
	const NUMBER_BACKGROUND_IMAGES = 4;
	let backgroundDiningHallIndex = 0;
	$: loggedIn = $page.data.session;
</script>

<div class="h-full w-full">
	<div class="relative overflow-hidden">
		<img
			src={`/${backgroundDiningHallIndex}.png`}
			alt={`${backgroundDiningHallIndex}`}
			class="h-screen w-screen object-cover transition duration-150 ease-in-out {hover
				? '-translate-y-1 scale-105'
				: ''}"
		/>
		<div
			class="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black"
			class:bg-opacity-40={hover}
			class:bg-opacity-50={!hover}
		>
			<div class="flex flex-col gap-4 p-8 text-white">
				<h1 class="max-w-3xl text-7xl tracking-wide">MealMatch</h1>
				<h2 class="sm:text-4xl">
					Meet other Yalies over a meal. Customize your preferences for who you'd like to meet.
				</h2>
				<button
					on:click={signInWithGoogle}
					class="inline-flex w-fit items-center justify-center gap-1 rounded-lg bg-stone-200 px-6 py-3 text-stone-700 shadow-xl hover:shadow-2xl"
					on:mouseover={() => (hover = true)}
					on:mouseout={() => (hover = false)}
					on:focus={() => (hover = true)}
					on:blur={() => (hover = false)}
				>
					<span class="text-lg tracking-wider">Get started with @yale.edu</span>
				</button>
			</div>
		</div>
		<button
			class="absolute bottom-4 right-4 inline-flex w-fit items-center justify-center rounded-lg bg-stone-700 p-2 text-stone-200 shadow-xl hover:shadow-2xl"
			on:click={() => {
				backgroundDiningHallIndex = (backgroundDiningHallIndex + 1) % NUMBER_BACKGROUND_IMAGES;
			}}
		>
			<PlaceholderImage />
		</button>
	</div>
</div>
