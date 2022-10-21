// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// From https://github.com/supabase/auth-helpers/blob/main/packages/sveltekit/README.md
	interface Supabase {
	Database: import('./DatabaseDefinitions').Database;
		SchemaName: 'public';
	}
	
	// interface Locals {}
	// From https://github.com/supabase/auth-helpers/blob/main/packages/sveltekit/README.md
	interface PageData {
		session: import('@supabase/supabase-js').Session | null;
	}

	// interface Error {}
	// interface Platform {}
}
