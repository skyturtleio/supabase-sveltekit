<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Header />

<main>
	<slot />
</main>

<Footer />
