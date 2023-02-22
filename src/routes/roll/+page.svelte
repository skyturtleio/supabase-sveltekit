<script lang="ts">
	let number: number;

	async function roll() {
		const response = await fetch('/roll');
		number = await response.json();
	}
</script>

<svelte:head>
	<title>Roll</title>
</svelte:head>

<button on:click={roll}> Roll the dice</button>

{#if number !== undefined}
	<p>You rolled a {number}</p>
{/if}
