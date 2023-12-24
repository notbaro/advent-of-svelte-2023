<script lang="ts">
	import { Table, getToastStore } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	export let data: PageData;

	const toastStore = getToastStore();
	//@ts-ignore
	let source = data.children;
	let inputName: string;
	let inputTally: number = 0;

	function addChild() {
		source = [{ name: inputName, tally: inputTally }, ...source];
		toastStore.trigger({
			message: `Added ${inputName} to the list with tally of ${inputTally}!`,
			background: 'variant-filled-primary'
		});
		inputName = '';
		inputTally = 0;
	}
</script>

<main>
	<div class="flex space-x-10">
		<div class="table-container">
			<table class="table table-hover">
				<thead>
					<th class="text-center">Name</th>
					<th class="text-center">Tally</th>
					<th class="text-center">Decrement</th>
					<th class="text-center">Increment</th>
				</thead>
				<tbody>
					{#each source as { name, tally }, i}
						<tr>
							{#if tally >= 0}
								<td class="text-center font-semibold text-success-500"
									><span class="text-xl">{name}</span></td
								>
							{:else}
								<td class="text-center font-semibold text-error-500"
									><span class="text-xl">{name}</span></td
								>
							{/if}
							<td class="text-center">{tally}</td>
							<td class="text-center">
								<button
									class="btn btn-icon variant-filled-error"
									on:click={() => {
										tally--;
									}}
								>
									<i class="fa fa-minus"></i>
								</button>
							</td>
							<td class="text-center">
								<button
									class="btn btn-icon variant-filled-success"
									on:click={() => {
										tally++;
									}}
								>
									<i class="fa fa-plus"></i>
								</button>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<div class="card p-4 w-1/2 self-start">
			<form on:submit={addChild}>
				<header class="card-header text-center">
					<h2 class="text-xl font-medium">Add a new Child</h2>
				</header>
				<section class="p-4">
					<label class="label">
						<span>Name</span>
						<input
							class="input"
							title="Name"
							type="text"
							placeholder="John Doe"
							required
							bind:value={inputName}
						/>
					</label>
					<label class="label my-5">
						<span>Tally</span>
						<div class="input-group input-group-divider grid-cols-3">
							<input class="input col-span-1" title="Tally" type="number" bind:value={inputTally} />
							<input class="col-span-2" type="range" min="-100" max="100" bind:value={inputTally} />
						</div>
					</label>
				</section>
				<footer class="card-footer">
					<button class="btn variant-filled-primary w-full" type="submit">Add</button>
				</footer>
			</form>
		</div>
	</div>
</main>
