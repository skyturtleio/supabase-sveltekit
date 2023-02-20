<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	export let form;
</script>

<h1>Todos</h1>

{#if form?.error}
	<p class="error">{form.error}</p>
{/if}

<form method="POST" action="?/create">
	<label for="description">
		Add todo:
		<input
			type="text"
			name="description"
			id="description"
			value={form?.description ?? ''}
			placeholder="task"
			required
		/>
	</label>
</form>

<ul>
	{#each data.todos as todo (todo.id)}
		<li class="todo">
			<form method="POST" action="?/delete">
				<input type="hidden" name="id" value={todo.id} />
				<button aria-label="Mark as complete">X</button>
				{todo.description}
			</form>
		</li>
	{/each}
</ul>
