import type { Actions, PageServerLoad } from "./$types";
import * as db from "$lib/server/database";

export const load = (({ cookies }) => {
  const id = cookies.get("userid");

  if (!id) {
    cookies.set("userid", crypto.randomUUID(), { path: "/" });
  }

  return {
    todos: db.getTodos(id) ?? [],
  };
}) satisfies PageServerLoad;

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    db.createTodo(cookies.get("userid"), data.get("description"));
  },
} satisfies Actions;
