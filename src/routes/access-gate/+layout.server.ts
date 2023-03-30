// import { redirect } from "@sveltejs/kit"
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({ locals, parent }) => {
    await parent();
    console.log("Locals from access-gate layout.server", locals);
}