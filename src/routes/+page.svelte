<script lang="ts">
	import { base } from '$app/paths';
	import { dayTitle, implemented } from '$lib/utils';
</script>

<div
	class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-5 p-4"
>
	{#each Array(24).fill(1) as _, i}
		<a href="{base}/day/{i + 1}" class="card p-4 flex flex-col items-center card-hover border border-primary-500">
			<header class="card-header">
				{#if implemented[i + 1]}
          <h2 class="card-title text-xl text-success-500">Day {i + 1}</h2>
        {:else}
          <h2 class="card-title text-xl text-error-500">Day {i + 1}</h2>
        {/if}
			</header>
			<section class="p-4 text-center whitespace-nowrap overflow-ellipsis overflow-hidden">
				<h3 class="text-sm font-light">{dayTitle[i + 1]}</h3>
			</section>
		</a>
	{/each}
</div>
