<script lang="ts">
	import Logo from '$lib/Logo.svelte';
	import AuthCard from './AuthCard.svelte';
</script>

<!-- 
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
 -->
<div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="w-full max-w-md space-y-8">
		<div>
			<Logo class="mx-auto h-12 w-auto" />
			<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
				Sign in to your account
			</h2>
			<p class="mt-2 text-center text-sm text-gray-600">
				Or{' '}
				<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
					start your 14-day free trial
				</a>
			</p>
		</div>
		<div class="mt-8 space-y-6">
			<AuthCard />
		</div>
	</div>
</div>
