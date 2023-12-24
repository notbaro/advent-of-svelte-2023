<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, popup, type PopupSettings, LightSwitch } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

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
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	const popupClick: PopupSettings = {
		event: 'click',
		target: 'popupClick',
		placement: 'top'
	};

	const dayTitle = [
		"You shouldn't be here",
		'Naughty or Nice',
		'Merry Munch-o-meter',
		'Jingle Bell Balancer',
		'Heart of Christmas',
		'Present Progress',
		'Mistletoe Metronome',
		'Morse Mischief',
		"Santa's Myseterious Deck of Doubles",
		"Santa's Final Countdown",
		'Pop-up! Spreading the holiday cheer',
		'Tinsel Transformers',
		'Greetings and salutations',
		'Jingle Bell Balancer 2.0',
		'Snowfall Symphony',
		'Sparkling Snowglobes',
		'Lessons from Amazon™️',
		'Festive Funds',
		"Santa's Quiz",
		'Polar Lights',
		'Jingle Jokes',
		'Oh the weather outside is frightful',
		'Snowflake Silhouettes',
		'ElfNet Social',
		"Santa's Magical Tracker"
	];

	let day = 0;
	$: title = dayTitle[day];
	$: console.log(day);

	page.subscribe((value) => {
		const match = value.route.id?.match(/day\/(\d+)/);
		day = match ? parseInt(match[1]) : 0;
	});
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<img
					src="https://i.imgur.com/E9LJ0pL.png"
					alt="Icon of Svelte with a Santa hat"
					width="50"
				/>
				<strong class="text-xl uppercase">Advent of Svelte 2023</strong>
				<LightSwitch class="mx-5" />
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<!--Home-->
				<button class="btn hover:variant-soft-primary">
					<a href="/">
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
						<ul>
							<li>
								<a href="/day/1">Day 1</a>
							</li>
							<li>
								<a href="/day/2">Day 2</a>
							</li>
							<li>
								<a href="/day/3">Day 3</a>
							</li>
							<li>
								<a href="/day/4">Day 4</a>
							</li>
							<li>
								<a href="/day/5">Day 5</a>
							</li>
							<li>
								<a href="/day/6">Day 6</a>
							</li>
							<li>
								<a href="/day/7">Day 7</a>
							</li>
							<li>
								<a href="/day/8">Day 8</a>
							</li>
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
						<ul>
							<li>
								<a href="/day/9">Day 9</a>
							</li>
							<li>
								<a href="/day/10">Day 10</a>
							</li>
							<li>
								<a href="/day/11">Day 11</a>
							</li>
							<li>
								<a href="/day/12">Day 12</a>
							</li>
							<li>
								<a href="/day/13">Day 13</a>
							</li>
							<li>
								<a href="/day/14">Day 14</a>
							</li>
							<li>
								<a href="/day/15">Day 15</a>
							</li>
							<li>
								<a href="/day/16">Day 16</a>
							</li>
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
							<ul>
								<li>
									<a href="/day/17">Day 17</a>
								</li>
								<li>
									<a href="/day/18">Day 18</a>
								</li>
								<li>
									<a href="/day/19">Day 19</a>
								</li>
								<li>
									<a href="/day/20">Day 20</a>
								</li>
								<li>
									<a href="/day/21">Day 21</a>
								</li>
								<li>
									<a href="/day/22">Day 22</a>
								</li>
								<li>
									<a href="/day/23">Day 23</a>
								</li>
								<li>
									<a href="/day/24">Day 24</a>
								</li>
							</ul>
						</nav>
					</div>
				</nav></svelte:fragment
			>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="pageHeader">
		<div class="card p-4 variant-soft-primary w-full flex justify-between items-center">
			{#if day > 1}
				<a href="/day/{day - 1}" class="btn-icon variant-filled">
					<i class="fa-solid fa-arrow-left"></i>
				</a>
			{:else}
				<div></div>
			{/if}
			<span>Day {day}: {title}</span>
			{#if day < 24}
				<a href="/day/{day + 1}" class="btn-icon variant-filled">
					<i class="fa-solid fa-arrow-right"></i>
				</a>
			{:else}
				<div></div>
			{/if}
		</div>
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
