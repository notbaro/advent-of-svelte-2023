<script lang="ts">
	import { Map, Marker } from '@beyonk/svelte-mapbox';
	import type { PageData } from './$types';
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import type { ResponseData } from './+page';

	export let data: PageData;
	$: next = data.response.next;
	let history = data.response.history;
	$: last = history[history.length - 1];
	let mapComponent: Map;
	let presentDelivered: number[] = [0];
	$: {
		for (let i = 1; i < history.length; i++) {
			presentDelivered.push(history[i].presentsDelivered - history[i - 1].presentsDelivered);
			presentDelivered = presentDelivered;
		}
	}

	function onReady() {
		mapComponent.flyTo({ center: [last.location.lng, last.location.lat], zoom: 4, duration: 500 });
	}

	onMount(() => {
		setInterval(async () => {
			const res = await fetch('https://advent.sveltesociety.dev/data/2023/day-twenty-four.json');
			const resJson: ResponseData = await res.json();
			history = resJson.history;
		}, 1000 * 60);
	});

	const MAPBOX_TOKEN =
		'pk.eyJ1Ijoibm90YmFybyIsImEiOiJjbHFrMXQ4cTkyYWljMnFwYXp4NG9venU3In0.6YLmFFbWA6iWhnhM0YvfgA';
</script>

	<div class="card p-4 w-full block">
		<header class="card-header text-center">
			<h2 class="text-2xl font-bold text-primary-400">
				🎅 has delivered {last.presentsDelivered} 🎁 across {history.length - 1} cities!
			</h2>
		</header>
		<section class="p-4 w-full max-w-full">
			<div class="overflow-x-auto" style="width: 100%;">
				<ol class="text-sm breadcrumb overflow-y-scroll">
					{#each history as h, i}
						<li class="crumb">
							<button
								type="button"
								class="btn variant-soft-primary"
								on:click={() => {
									mapComponent.flyTo({
										center: [h.location.lng, h.location.lat],
										zoom: 4,
										duration: 500
									});
								}}
								><span class="text-on-surface-token cursor-pointer transition-all">{h.city}</span>
							</button>
						</li>
						{#if i < history.length - 1}
							<li class="crumb-separator" aria-hidden>&rsaquo;</li>
						{/if}
					{/each}
				</ol>
			</div>
		</section>
	</div>
	<Map
		accessToken={MAPBOX_TOKEN}
		style="mapbox://styles/notbaro/clqk5snh9001k01pmh48l9pqn"
		bind:this={mapComponent}
		on:ready={onReady}
	>
		{#each history as h, i}
			<Marker lat={h.location.lat} lng={h.location.lng} label={h.id}>
				<button
					class=">*]:pointer-events-none"
					use:popup={{
						event: 'hover',
						target: h.id,
						placement: 'top'
					}}
				>
					<span class="text-tertiary-500">{i}</span>
				</button>
			</Marker>
		{/each}
	</Map>
	{#each history as h, i}
		<div class="card p-4 w-60 shadow-xl" data-popup={h.id}>
			<h3 class="text-2xl font-bold text-primary-400">{h.city}</h3>
			<h4 class="text-xl">{h.region}</h4>
			<p>🧑: {h.population}</p>
			<p>🎁: {presentDelivered[i]}</p>
			<p>🕓: {new Date(h.arrival).toLocaleString()}</p>
			{#if h.departure}
				<p>🕓: {new Date(h.departure).toLocaleString()}</p>
			{/if}
		</div>
	{/each}

<style>
	.breadcrumb::-webkit-scrollbar {
		display: -webkit-inline-box;
	}
</style>
