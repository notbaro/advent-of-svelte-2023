<script lang="ts">
	import type { Gift } from '$lib/types';
	import { ProgressBar } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	export let data: PageData;

	let available = data.gifts;
	let loaded: Gift[] = [];
	let currentLoad = 0;

	function handleLoad(gift: Gift) {
		loaded = [...loaded, gift];
		currentLoad += gift.weight;
		currentLoad = Math.round(currentLoad * 100) / 100;
		available = available.filter((g) => g.name !== gift.name);
	}

	function handleUnload(gift: Gift) {
		loaded = loaded.filter((g) => g.name !== gift.name);
		currentLoad -= gift.weight;
		currentLoad = Math.round(currentLoad * 100) / 100;
		available = [...available, gift];
	}
</script>

<main class="flex flex-col items-center justify-center">
	<div class="card p-4 w-4/5 text-center">
		<header class="card-footer flex items-center justify-center">
			<span class="text-2xl font-bold">Current Load</span>
		</header>
		<section class="flex flex-col items-center justify-center">
			<span class="text-2xl font-bold">{currentLoad}</span>
		</section>
		<footer class="card-footer items-center mt-4">
			<ProgressBar
				min={0}
				max={100}
				value={currentLoad}
				height="h-5"
				meter="bg-primary-500"
				track="bg-surface-backdrop-token"
			/>
		</footer>
	</div>
	<div class="flex justify-center w-full">
		<div class="card p-4 w-2/5">
			<div class="grid grid-cols-5 gap-4">
				{#each available.filter((gift) => currentLoad + gift.weight <= 100) as gift}
					<button class="btn variant-filled-primary w-full" on:click={() => handleLoad(gift)}>
						<span class="font-semibold">{gift.name} - {' ' + gift.weight}</span>
					</button>
				{/each}
			</div>
		</div>
		<div class="card p-4 w-2/5">
			<div class="grid grid-cols-5 gap-4">
				{#each loaded as gift}
					<button class="btn variant-filled-secondary w-full" on:click={() => handleUnload(gift)}>
						<span class="font-semibold">{gift.name} - {' ' + gift.weight}</span>
					</button>
				{/each}
			</div>
		</div>
	</div>
</main>
