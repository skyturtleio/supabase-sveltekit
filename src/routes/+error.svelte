<script lang="ts">
	import { page } from '$app/stores';

	const emojis = {
		420: '🥴',
		500: '💥'
	};
</script>

<h1>{$page.status} {$page.error?.message}</h1>
<span>
	{emojis[$page.status] ?? emojis[500]}
</span>
