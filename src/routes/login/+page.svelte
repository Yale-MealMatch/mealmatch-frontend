<script lang="ts">
	import Logo from '$lib/Logo.svelte';
	import {Envelope} from '@steeze-ui/heroicons';
	import {Icon} from '@steeze-ui/svelte-icon';
	import AuthCard from './AuthCard.svelte';
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
						<Icon src={Envelope} theme="outline" class="block h-5 w-5" aria-hidden="true"  />
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

				<div class="mt-6 gap-3">
					<div>
						<a
							href="#"
							class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
						>
							<svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Sign in with Facebook</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
