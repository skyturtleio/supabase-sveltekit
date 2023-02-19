import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import { posts } from "../data";

export const load = (async ({ params }) => {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) throw error(404);

  return {
    post,
  };
}) satisfies PageServerLoad;
