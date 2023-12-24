<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, popup, type PopupSettings } from '@skeletonlabs/skeleton';

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
								<a href="/day1">Day 1</a>
							</li>
							<li>
								<a href="/day2">Day 2</a>
							</li>
							<li>
								<a href="/day3">Day 3</a>
							</li>
							<li>
								<a href="/day4">Day 4</a>
							</li>
							<li>
								<a href="/day5">Day 5</a>
							</li>
							<li>
								<a href="/day6">Day 6</a>
							</li>
							<li>
								<a href="/day7">Day 7</a>
							</li>
							<li>
								<a href="/day8">Day 8</a>
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
								<a href="/day9">Day 9</a>
							</li>
							<li>
								<a href="/day10">Day 10</a>
							</li>
							<li>
								<a href="/day11">Day 11</a>
							</li>
							<li>
								<a href="/day12">Day 12</a>
							</li>
							<li>
								<a href="/day13">Day 13</a>
							</li>
							<li>
								<a href="/day14">Day 14</a>
							</li>
							<li>
								<a href="/day15">Day 15</a>
							</li>
							<li>
								<a href="/day16">Day 16</a>
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
									<a href="/day17">Day 17</a>
								</li>
								<li>
									<a href="/day18">Day 18</a>
								</li>
								<li>
									<a href="/day19">Day 19</a>
								</li>
								<li>
									<a href="/day20">Day 20</a>
								</li>
								<li>
									<a href="/day21">Day 21</a>
								</li>
								<li>
									<a href="/day22">Day 22</a>
								</li>
								<li>
									<a href="/day23">Day 23</a>
								</li>
								<li>
									<a href="/day24">Day 24</a>
								</li>
							</ul>
						</nav>
					</div>
				</nav></svelte:fragment
			>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="pageFooter">
		<footer>
			<AppBar>
				<svelte:fragment slot="lead">
					<a href="https://advent.sveltesociety.dev/" target="_blank" class="underline text-primary-500">https://advent.sveltesociety.dev/</a>
				</svelte:fragment>
				<svelte:fragment slot="trail">
					<span class="text">Made by Bao Ngo</span>
				</svelte:fragment>
			</AppBar>
		</footer>
	</svelte:fragment>
</AppShell>
