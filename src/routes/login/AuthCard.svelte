<script lang="ts">
	import Auth from 'supabase-ui-svelte';
	import { supabase as supabaseClient } from '$lib/supabaseClient';
</script>

<Auth {supabaseClient} providers={['google']} view="magic_link" />
