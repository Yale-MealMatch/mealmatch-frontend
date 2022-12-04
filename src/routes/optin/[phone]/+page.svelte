<script lang="ts">
	// Grab the params
	import { page } from '$app/stores';
	import { supabaseClient } from '$lib/db';

	let optIn = supabaseClient.from('opt_ins').insert({
		phone: $page.params.phone,
		week: 2
	});
</script>

<!-- Await optIn -->
{#await optIn}
	<!-- Loading -->
	<div>Loading, please wait...</div>
{:then data}
	{#if data.error}
		<!-- Error -->
		<div>{JSON.stringify(data.error)}</div>
	{:else}
		<!-- Success -->
		<div>Success! You are opted into matching for this week</div>
	{/if}
{:catch error}
	<!-- Error -->
	<div>Something went wrong</div>
{/await}
