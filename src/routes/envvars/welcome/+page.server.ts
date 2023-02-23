import { redirect } from "@sveltejs/kit";
import { error } from "@sveltejs/kit";

export function load({ cookies }) {
	if (!cookies.get("allowed")) {
		throw error(403, "Forbidden: need to enter passphrase");
	}
}

export const actions = {
	default: ({ cookies }) => {
		cookies.delete("allowed", { path: "/" });
		throw redirect(303, "/");
	},
};
