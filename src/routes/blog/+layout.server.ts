import type { LayoutServerLoad } from "./$types";
import { posts } from "./data";

export const load = (({ params }) => {
	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			title: post.title,
		})),
	};
}) satisfies LayoutServerLoad;
