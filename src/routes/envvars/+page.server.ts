import type { PageServerLoad } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import { PASSPHRASE } from "$env/static/private";

export const load: PageServerLoad = ({ cookies }) => {
	if (cookies.get("allowed")) {
		throw redirect(307, "/envvars/welcome");
	}
};

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();

		if (data.get("passphrase") === PASSPHRASE) {
			cookies.set("allowed", "true", {
				path: "/",
			});

			throw redirect(303, "/envvars/welcome");
		}

		return fail(403, {
			incorrect: true,
		});
	},
};
