<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import '../app.css';

	// From https://github.com/supabase/auth-helpers/blob/main/packages/sveltekit/README.md
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { supabaseClient } from '$lib/supabase';

	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<!-- TODO: Update Head -->
<svelte:head>
	<title>MealMatch</title>
	<meta name="description" content="Find Yalies to grab a meal with!" />
	<meta name="viewport" content="initial-scale=1.0, width=device-width" />
	<link rel="icon" href="/favicon.png" />
</svelte:head>
{#if $page.url.pathname !== '/'}
	<Header />
{/if}

<main class="">
	<!-- {#if !$page.data.session}
			<h1>I am not logged in</h1>
		{:else}
			<h1>Welcome {$page.data.session.user.email}</h1>
		{/if} -->
	<slot />
</main>
<footer>
	<div class="my-2 flex flex-col justify-center">
		<p class="text-center">
			Made with <span>❤️</span> by Yale students
		</p>
	</div>
</footer>
<Footer />
