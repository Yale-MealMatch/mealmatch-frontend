<script>
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import '../app.postcss';
</script>

<!-- TODO: Updat eHead -->
<svelte:head>
	<title>Yale MealMatch</title>
	<meta name="description" content="Find Yalies to grab a meal with!" />
	<meta name="viewport" content="initial-scale=1.0, width=device-width" />
	<link rel="icon" href="/favicon.png" />
</svelte:head>
<Header />
<main class="mx-auto max-w-7xl sm:px-6 lg:px-8">
	<slot />
</main>
<Footer />
