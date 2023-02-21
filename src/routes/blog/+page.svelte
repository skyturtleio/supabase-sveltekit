<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="blog/{slug}">{title}</a></li>
	{/each}
</ul>
