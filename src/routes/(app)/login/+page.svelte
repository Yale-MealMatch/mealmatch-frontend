<script lang="ts">
	import GoogleIcon from '$lib/GoogleIcon.svelte';
	import Logo from '$lib/Logo.svelte';
	import { supabaseClient } from '$lib/supabase';
	import { Envelope } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	const signInWithGoogle = async () => {
		await supabaseClient.auth.signInWithOAuth({
			provider: 'google',
			options: { redirectTo: `${$page.url.origin}/form` }
		});
	};
	let email = '';
	const signInWithMagicLink = async () => {
		await supabaseClient.auth.signInWithOtp({
			email,
			options: { emailRedirectTo: `${$page.url.origin}/form` }
		});
	};
</script>

<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<Logo class="mx-auto h-12 w-auto" />
		<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
			Sign in to your account
		</h2>
		<!-- <p class="mt-2 text-center text-sm text-gray-600">
        Or {' '}
        <a href="#" class="font-medium text-rose-600 hover:text-rose-500">start your 14-day free trial</a>
      </p> -->
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
			<form class="space-y-6">
				<div>
					<label for="email" class="block text-sm font-medium text-gray-700">
						Yale Email address
					</label>
					<div class="mt-1">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							placeholder="Your yale.edu email address"
							required
							class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-rose-500 sm:text-sm"
							bind:value={email}
						/>
					</div>
				</div>

				<div>
					<button
						type="submit"
						class="flex w-full justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
						on:click={signInWithMagicLink}
					>
						<Icon src={Envelope} theme="outline" class="block h-5 w-5" aria-hidden="true" />
						Send Magic Link
					</button>
				</div>
			</form>

			<div class="mt-6">
				<div class="relative">
					<div class="absolute inset-0 flex items-center">
						<div class="w-full border-t border-gray-300" />
					</div>
					<div class="relative flex justify-center text-sm">
						<span class="bg-white px-2 text-gray-500">Or continue with</span>
					</div>
				</div>
			</div>

			<div class="mt-6 gap-3">
				<div>
					<button
						on:click={signInWithGoogle}
						class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
					>
						<GoogleIcon />
						<span>Sign in with Google</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
