<script lang="ts">
	// Grab the params
	import { page } from '$app/stores';
	import { supabaseClient } from '$lib/db';

	let optIn = supabaseClient
		.from('profiles')
		.update({
			opt_in_status: 'OPTED_IN'
		})
		.eq('phone', $page.params.phone);
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
