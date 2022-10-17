<script lang="ts">
	import Auth from 'supabase-ui-svelte';
	// import { supabase } from 'src/utils/supabase';
	import { createClient } from '@supabase/supabase-js'

	const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
	const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

	// get keys via the settings page at https://app.supabase.io
	const supabase = createClient(supabaseUrl, supabaseAnonKey)

</script>

<Auth {supabase} providers={['google']} view="magic_link" />
