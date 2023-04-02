<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import PlaceholderImage from '$lib/PlaceholderImage.svelte';

	import { supabaseClient } from '$lib/supabase';

	const signInWithGoogle = async () => {
		if (loggedIn) return goto('/form');
		await supabaseClient.auth.signInWithOAuth({
			provider: 'google',
			options: { redirectTo: `${window.location.origin}/form` }
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
			class="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black"
			class:bg-opacity-40={hover}
			class:bg-opacity-50={!hover}
		>
		<div class="flex flex-col gap-4 p-8 text-white">
  <h1 class="max-w-3xl text-3xl tracking-wide">MealMatch</h1>
  <h2 class="sm:text-4xl">Meet Yalies who you're more likely to vibe with based on who you are.</h2>
  <div class="flex gap-2 sm:gap-2">
    <button
      on:click={signInWithGoogle}
      class="inline-flex items-center justify-center gap-1 w-fit py-3 px-6 rounded-lg bg-stone-200 text-stone-700 shadow-xl hover:shadow-2xl"
      on:mouseover={() => (hover = true)}
      on:mouseout={() => (hover = false)}
      on:focus={() => (hover = true)}
      on:blur={() => (hover = false)}
    >
      <span class="tracking-wider text-lg">{loggedIn ? 'Get Started' : 'Get Started'}</span>
    </button>
    <button
      class="inline-flex items-center justify-center w-fit px-2 rounded-lg bg-stone-700 shadow-xl hover:shadow-2xl"
      on:click={() => {
        backgroundDiningHallIndex = (backgroundDiningHallIndex + 1) % NUMBER_BACKGROUND_IMAGES;
      }}
    >
      <PlaceholderImage />
    </button>
  </div>
</div>
		</div>
	</div>
</div>
