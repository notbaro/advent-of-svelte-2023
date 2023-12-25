<script lang="ts">
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	let value: number = 0;
	let perCookie = 100 / 7;
	let cookies: number[];


	function addCookie() {
		if (value < 100) {
			value += perCookie;
		}
		const cookie: NodeListOf<Element> = document.querySelectorAll('#cookie');
  cookie[0].innerHTML += '<span class="chip text-2xl bg-transparent">🍪</span>';
    
	}
</script>

<main class="flex items-center justify-center">
	<div class="card p-4 w-3/4">
		<header class="card-header items-center text-center">
			<h2 class="card-title text-2xl font-bold text-primary-400">Santa's Cookie Meter</h2>
		</header>
		<section class="p-4 flex flex-col items-center justify-center">
			<ProgressRadial {value} on:click={addCookie} />
			<div id="cookie"><span class="chip text-2xl bg-transparent">🍪</span></div>
				
		</section>
		<footer class="card-footer flex items-center justify-center">
			<button class="btn variant-filled-primary" on:click={addCookie}>Add Cookie</button>
		</footer>
	</div>
</main>
