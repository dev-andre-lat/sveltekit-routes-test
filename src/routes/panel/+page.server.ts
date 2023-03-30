import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ locals, parent }) => {
    await parent();
    console.log("locals in panel", locals);
}