<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<h1>Todos</h1>

<form method="POST">
	<label for="description">
		add a todo:
		<input type="text" name="description" id="description" value="" />
	</label>
</form>

<ul>
	{#each data.todos as todo (todo.id)}
		<li class="todo">
			{todo.description}
		</li>
	{/each}
</ul>
