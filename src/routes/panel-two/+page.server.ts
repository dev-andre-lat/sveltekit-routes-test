import type { PageServerLoad } from "./$types"

// export const load: PageServerLoad = async ({ locals, parent }) => {
export const load: PageServerLoad = async ({ parent }) => {
    const parent_co = await parent();
    console.log("parent in panel two", parent_co);
    
    // console.log("locals in panel", locals);
}