<script lang="ts">
	import type { PageData } from './$types';
	import { fly, slide } from 'svelte/transition';
	import { enhance } from '$app/forms';

	export let data: PageData;
	export let form;

	let creating = false;
	let deleting = [];
</script>

<svelte:head>
	<title>Todo List</title>
</svelte:head>

<h1>Todos</h1>

{#if form?.error}
	<p class="error">{form.error}</p>
{/if}

<form
	method="POST"
	action="?/create"
	use:enhance={() => {
		creating = true;

		return async ({ update }) => {
			await update();
			creating = false;
		};
	}}
>
	<label for="description">
		{creating ? 'Saving...' : 'Add a todo'}
		<input
			disabled={creating}
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
	{#each data.todos.filter((todo) => !deleting.includes(todo.id)) as todo (todo.id)}
		<li class="todo" in:fly={{ y: 20 }} out:slide>
			<form
				method="POST"
				action="?/delete"
				use:enhance={() => {
					deleting = [...deleting, todo.id];
					return async ({ update }) => {
						await update();
						deleting = deleting.filter((id) => id !== todo.id);
					};
				}}
			>
				<input type="hidden" name="id" value={todo.id} />
				<button aria-label="Mark as complete">X</button>
				{todo.description}
			</form>
		</li>
	{/each}
</ul>
