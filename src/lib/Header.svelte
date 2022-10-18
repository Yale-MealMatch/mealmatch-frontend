<script lang="ts">
  import Logo from './Logo.svelte';

	import {
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		Menu,
		MenuButton,
		MenuItem,
		MenuItems
	} from '@rgossiaux/svelte-headlessui';
	import {Icon} from '@steeze-ui/svelte-icon'
	import {Bars3, MagnifyingGlass, XMark} from '@steeze-ui/heroicons'

</script>

<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->

<Disclosure as="nav" class="bg-gray-800" let:open>
	<div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="flex items-center px-2 lg:px-0">
				<div class="flex-shrink-0">
					<Logo class="block h-8 w-auto lg:hidden" />
					<Logo class="hidden h-8 w-auto lg:block" />
				</div>
				<div class="hidden lg:ml-6 lg:block">
					<div class="flex space-x-4">
						<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
						<a href="#" class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
							>Dashboard</a
						>
						<a
							href="#"
							class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
							>Team</a
						>
						<a
							href="#"
							class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
							>Projects</a
						>
						<a
							href="#"
							class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
							>Calendar</a
						>
					</div>
				</div>
			</div>
			<div class="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
				<div class="w-full max-w-lg lg:max-w-xs">
					<label for="search" class="sr-only">Search</label>
					<div class="relative">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<Icon src={MagnifyingGlass} theme='solid' class="h-5 w-5 text-gray-400" aria-hidden="true" />
						</div>
						<input
							id="search"
							name="search"
							class="block w-full rounded-md border border-transparent bg-gray-700 py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 focus:border-white focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-white sm:text-sm"
							placeholder="Search"
							type="search"
						/>
					</div>
				</div>
			</div>
			<div class="flex lg:hidden">
				<!-- Mobile menu button -->
				<DisclosureButton
					class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
				>
					<span class="sr-only">Open main menu</span>
					{#if open}
						<Icon src={XMark} theme='outline' class="block h-6 w-6" aria-hidden="true" />
					{:else}
						<Icon src={Bars3} theme='outline' class="block h-6 w-6" aria-hidden="true" />
					{/if}
				</DisclosureButton>
			</div>
			<div class="hidden lg:ml-4 lg:block">
				<div class="flex items-center">
					<button
						type="button"
						class="flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
					>
						<span class="sr-only">View notifications</span>
						<!-- <BellIcon class="h-6 w-6" aria-hidden="true" /> -->
					</button>

					<!-- Profile dropdown -->
					<Menu as="div" class="relative ml-4 flex-shrink-0">
						<div>
							<MenuButton
								class="flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
							>
								<span class="sr-only">Open user menu</span>
								<img
									class="h-8 w-8 rounded-full"
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
								/>
							</MenuButton>
						</div>
						<transition
							enter-active-class="transition ease-out duration-100"
							enter-from-class="transform opacity-0 scale-95"
							enter-to-class="transform opacity-100 scale-100"
							leave-active-class="transition ease-in duration-75"
							leave-from-class="transform opacity-100 scale-100"
							leave-to-class="transform opacity-0 scale-95"
						>
							<MenuItems
								class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
							>
								<MenuItem let:active>
									<a
										href="#"
										class:bg-gray-100="{active}" class="block px-4 py-2 text-sm text-gray-700"
										>Your Profile</a
									>
								</MenuItem>
								<MenuItem let:active>
									<a
										href="#"
										class:bg-gray-100="{active}" class="block px-4 py-2 text-sm text-gray-700"
										>Settings</a
									>
								</MenuItem>
								<MenuItem let:active>
									<a
										href="#"
										class:bg-gray-100="{active}" class="block px-4 py-2 text-sm text-gray-700"
										>Sign out</a
									>
								</MenuItem>
							</MenuItems>
						</transition>
					</Menu>
				</div>
			</div>
		</div>
	</div>

	<DisclosurePanel class="lg:hidden">
		<div class="space-y-1 px-2 pt-2 pb-3">
			<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
			<DisclosureButton
				as="a"
				href="#"
				class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
				>Dashboard</DisclosureButton
			>
			<DisclosureButton
				as="a"
				href="#"
				class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
				>Team</DisclosureButton
			>
			<DisclosureButton
				as="a"
				href="#"
				class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
				>Projects</DisclosureButton
			>
			<DisclosureButton
				as="a"
				href="#"
				class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
				>Calendar</DisclosureButton
			>
		</div>
		<div class="border-t border-gray-700 pt-4 pb-3">
			<div class="flex items-center px-5">
				<div class="flex-shrink-0">
					<img
						class="h-10 w-10 rounded-full"
						src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
					/>
				</div>
				<div class="ml-3">
					<div class="text-base font-medium text-white">Tom Cook</div>
					<div class="text-sm font-medium text-gray-400">tom@example.com</div>
				</div>
				<button
					type="button"
					class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
				>
					<span class="sr-only">View notifications</span>
					<!-- <BellIcon class="h-6 w-6" aria-hidden="true" /> -->
				</button>
			</div>
			<div class="mt-3 space-y-1 px-2">
				<DisclosureButton
					as="a"
					href="#"
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
					>Your Profile</DisclosureButton
				>
				<DisclosureButton
					as="a"
					href="#"
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
					>Settings</DisclosureButton
				>
				<DisclosureButton
					as="a"
					href="#"
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
					>Sign out</DisclosureButton
				>
			</div>
		</div>
	</DisclosurePanel>
</Disclosure>
