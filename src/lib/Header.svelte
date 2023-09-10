<script lang="ts">
	import { enhance } from '$app/forms';
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
	import Bars3 from '~icons/heroicons/bars-3';
	import MagnifyingGlass from '~icons/heroicons/magnifying-glass';
	import XMark from '~icons/heroicons/x-mark';
	import BellAlert from '~icons/heroicons/bell-alert';
	import Bell from '~icons/heroicons/bell';

	const navigation = [
		{ name: 'Dashboard', href: '/' },
		{ name: 'Login', href: '/login' },
		{ name: 'Form', href: '/form' }
	];

	// const profilePicture = $page.data.session?.user.user_metadata.avatar_url as string;
	const profilePicture =
		'https://media.licdn.com/dms/image/C4E0BAQGbChaL1J28DQ/company-logo_200_200/0/1591407298201?e=2147483647&v=beta&t=AyAk8AT72fVuwzb1V_7BoyxOltSFmULvpI4sDtTBZ3Y';
</script>

<Disclosure as="nav" class="bg-rose-300" let:open>
	<div class="mx-auto max-w-4xl px-2 sm:px-4 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="flex items-center px-2 lg:px-0">
				<div class="flex-shrink-0">
					<Logo class="block h-12 w-auto lg:hidden" />
					<Logo class="hidden h-12 w-auto lg:block" />
				</div>
				<a href="/form">
					<div class="block">
						<!-- Hidden, lg:block -->
						<h2 class="ml-4 block text-4xl font-bold text-amber-900 md:text-3xl">MealMatch</h2>
					</div>
				</a>
				<!-- <div class="hidden lg:ml-6 lg:block">
					<div class="flex space-x-4">
						{#each navigation as item (item.name)}
							<a
								href={item.href}
								class="rounded-md px-3 py-2 text-sm font-medium {$page.url.pathname === item.href
									? 'bg-neutral-800 text-white'
									: 'text-rose-600 hover:bg-neutral-800 hover:text-white'}"
							>
								{item.name}
							</a>
						{/each}
					</div>
				</div> -->
			</div>
			<!-- <div class="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
				<div class="w-full max-w-lg lg:max-w-xs">
					<label for="search" class="sr-only">Search</label>
					<div class="relative">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<MagnifyingGlass
								class="h-5 w-5 text-slate-700"
								aria-hidden="true"
							/>
						</div>
						<input
							id="search"
							name="search"
							class="block w-full rounded-md border border-transparent bg-neutral-800 py-2 pl-10 pr-3 leading-5 text-rose-190 placeholder-gray-400 focus:border-white focus:bg-white focus:text-rose-790 focus:outline-none focus:ring-white sm:text-sm"
							placeholder="Search"
							type="search"
						/>
					</div>
				</div>
			</div> -->
			<div class="flex lg:hidden">
				<DisclosureButton
					class="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-neutral-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
				>
					<span class="sr-only">Open main menu</span>
					{#if open}
						<XMark class="block h-6 w-6" aria-hidden="true" />
					{:else}
						<Bars3 class="block h-6 w-6" aria-hidden="true" />
					{/if}
				</DisclosureButton>
			</div>
			<div class="hidden lg:ml-4 lg:block">
				<div class="flex items-center">
					<!-- <button
						type="button"
						class="flex-shrink-0 rounded-full bg-gray-800 p-1 text-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
					>
						<span class="sr-only">View notifications</span>
						< BellAlert class="h-6 w-6" aria-hidden="true" />
					</button> -->

					<Menu as="div" class="relative ml-4 flex-shrink-0">
						<div>
							<MenuButton class="flex rounded-full text-3xl text-amber-900">
								<span class="sr-only">Open user menu</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="h-7 w-7"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
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
										href="/form"
										class:bg-gray-100={active}
										class="block w-full px-4 py-2 text-left text-sm"
									>
										Your Profile
									</a>
								</MenuItem>
								<!-- <MenuItem let:active>
									<a
										href="#"
										class:bg-gray-100={active}
										class="block w-full px-4 py-2 text-left text-sm">Settings</a
									>
								</MenuItem> -->
								<form method="POST" action="/login?/logout" use:enhance>
									<button class="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">
										Sign out
									</button>
								</form>
							</MenuItems>
						</transition>
					</Menu>
				</div>
			</div>
		</div>
	</div>
	<DisclosurePanel class="lg:hidden">
		<!-- <div class="space-y-1 px-2 pt-2 pb-3">
			{#each navigation as item (item.name)}
				<DisclosureButton
					as="a"
					href={item.href}
					class="block rounded-md px-3 py-2 text-base font-medium {$page.url.pathname === item.href
						? 'bg-neutral-800 text-white'
						: 'text-rose-190 hover:bg-neutral-800 hover:text-white'}"
				>
					{item.name}
				</DisclosureButton>
			{/each}
		</div> -->
		<div class="border-t border-gray-700 pb-3 pt-4">
			<div class="flex items-center px-5">
				<div class="flex-shrink-0">
					<img class="h-10 w-10 rounded-full" src={profilePicture} alt="" />
				</div>
				<!-- <div class="ml-3">
					<div class="text-base font-medium text-white">Tom Cook</div>
					<div class="text-sm font-medium text-slate-700">tom@example.com</div>
				</div> -->
				<!-- <button
					type="button"
					class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
				>
					<span class="sr-only">View notifications</span>
					<BellAlert class="h-6 w-6" aria-hidden="true" />
					<BellIcon class="h-6 w-6" aria-hidden="true" />
				</button> -->
			</div>
			<div class="mt-3 space-y-1 px-2">
				<DisclosureButton
					as="a"
					href="#"
					class="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-neutral-800 hover:text-white"
				>
					Form
				</DisclosureButton>
				<DisclosureButton
					as="a"
					href="#"
					class="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-neutral-800 hover:text-white"
				>
					Sign out
				</DisclosureButton>
			</div>
		</div>
	</DisclosurePanel>
</Disclosure>
