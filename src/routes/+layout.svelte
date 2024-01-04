<script lang="ts">
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		popup,
		type PopupSettings,
		LightSwitch,
		initializeStores
	} from '@skeletonlabs/skeleton';
	import { Toast, getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { dev } from '$app/environment';


	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { dayTitle } from '$lib/utils';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	//Vercel's Speed Insights
	import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit"
	injectSpeedInsights();

	//Vercel's Analytics
	import {inject} from '@vercel/analytics'
	inject({ mode: dev ? 'development' : 'production' });
	
	const popupClick: PopupSettings = {
		event: 'click',
		target: 'popupClick',
		placement: 'top'
	};


	let day = 0;
	$: title = dayTitle[day];
	$: console.log(day);

	page.subscribe((value) => {
		const match = value.route.id?.match(/day\/(\d+)/);
		day = match ? parseInt(match[1]) : 0;
	});

	initializeStores();
</script>

<Toast />
<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="{base}/" class="flex items-center">
					<img
						src="https://i.imgur.com/E9LJ0pL.png"
						alt="Icon of Svelte with a Santa hat"
						width="50"
					/>
					<strong class="text-xl uppercase">Advent of Svelte 2023</strong>
				</a>
				<LightSwitch class="mx-5" />
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<!--Home-->
				<button class="btn hover:variant-soft-primary">
					<a href="{base}/">
						<span><i class="fa-solid fa-house"></i></span>
						<span>Homepage</span>
					</a>
				</button>
				<!--Day 1 - 8-->
				<button class="btn hover:variant-soft-primary" use:popup={{ event: 'click', target: '1' }}>
					<span>Day 1 - 8</span>
					<i class="fa fa-caret-down"></i>
				</button>
				<!--popup-->
				<div class="card p-4 w-60 shadow-xl" data-popup="1">
					<nav class="list-nav">
						<ul class="divide-y divide-primary-500">
							{#each Array(8).fill(0) as _, i}
								<li>
									<a href="{base}/day/{i + 1}" class="btn" data-sveltekit-preload-data="hover">Day {i + 1}</a>
								</li>
							{/each}
						</ul>
					</nav>
				</div>

				<!--Day 9 - 16-->
				<button class="btn hover:variant-soft-primary" use:popup={{ event: 'click', target: '2' }}>
					<span>Day 9 - 16</span>
					<i class="fa fa-caret-down"></i>
				</button>
				<!--popup-->
				<div class="card p-4 w-60 shadow-xl" data-popup="2">
					<nav class="list-nav">
						<ul class="divide-y divide-primary-500">
							{#each Array(8).fill(0) as _, i}
								<li>
									<a href="{base}/day/{i + 9}" class="btn" data-sveltekit-preload-data="hover">Day {i + 9}</a>
								</li>
							{/each}
						</ul>
					</nav>
				</div>
				<!--Day 17 - 24-->
				<button class="btn hover:variant-soft-primary" use:popup={{ event: 'click', target: '3' }}>
					<span>Day 17 - 24</span>
					<i class="fa fa-caret-down"></i>
				</button>
				<!--popup-->
				<nav class="list-nav">
					<div class="card p-4 w-60 shadow-xl" data-popup="3">
						<nav class="list-nav">
						<ul class="divide-y divide-primary-500">
								{#each Array(8).fill(0) as _, i}
								<li>
									<a href="{base}/day/{i + 17}" class="btn" data-sveltekit-preload-data="hover">Day {i + 17}</a>
								</li>
							{/each}
							</ul>
						</nav>
					</div>
				</nav></svelte:fragment
			>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="pageHeader">
		{#if day > 0}
			<div class="card p-4 variant-soft-primary w-full flex justify-between items-center">
				{#if day > 1}
					<a href="{base}/day/{day - 1}" class="btn-icon variant-filled">
						<i class="fa-solid fa-arrow-left"></i>
					</a>
				{:else}
					<div></div>
				{/if}
				<h1>Day {day}: {title}</h1>
				{#if day < 24}
					<a href="{base}/day/{day + 1}" class="btn-icon variant-filled">
						<i class="fa-solid fa-arrow-right"></i>
					</a>
				{:else}
					<div></div>
				{/if}
			</div>
		{/if}
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot />
	<!--Page Footer-->
	<svelte:fragment slot="pageFooter">
		<footer>
			<AppBar>
				<svelte:fragment slot="lead">
					<a
						href="https://advent.sveltesociety.dev/"
						target="_blank"
						class="underline text-primary-500">https://advent.sveltesociety.dev/</a
					>
				</svelte:fragment>
				<svelte:fragment slot="trail">
					<span class="text">Made by Bao Ngo</span>
					<a href="https://github.com/notbaro" target="_blank"
						><i class="fa-brands fa-github fa-xl"></i></a
					>
				</svelte:fragment>
			</AppBar>
		</footer>
	</svelte:fragment>
</AppShell>
