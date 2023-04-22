<script lang="ts">
	import Header from '$lib/Header.svelte';
</script>

<Header />

<main class="mx-auto max-w-4xl sm:px-6 lg:px-8">
	<!-- {#if !$page.data.session}
			<h1>I am not logged in</h1>
		{:else}
			<h1>Welcome {$page.data.session.user.email}</h1>
		{/if} -->
	<slot />
</main>
