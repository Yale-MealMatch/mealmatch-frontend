<script lang="ts">
	import GoogleIcon from '$lib/GoogleIcon.svelte';
	import Logo from '$lib/Logo.svelte';
	import { supabaseClient } from '$lib/db';
	import { Envelope } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	const signInWithGoogle = async () => {
		const { data, error } = await supabaseClient.auth.signInWithOAuth({
			provider: 'google',
			options: { redirectTo: `${window.location.origin}/form` }
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
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">start your 14-day free trial</a>
      </p> -->
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
			<form class="space-y-6" action="#" method="POST">
				<div>
					<label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
					<div class="mt-1">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							placeholder="Your email address"
							required
							class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
						/>
					</div>
				</div>

				<div>
					<button
						type="submit"
						class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
						class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
					>
						<GoogleIcon />
						<span>Sign in with Google</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
