<script lang="ts">
	import {supabase} from "$lib/supabaseClient";
	import {onMount} from "svelte";


	// Get current logged in user
	let user;
	onMount(async () => {
		user = await supabase.auth.getUser();
	})
</script>
