import { authenticateUser } from "$lib/server/auth"
import { redirect, type Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
	console.log("___________________________");
	console.log('###Start Handle###');


	// step 1
	event.locals.user = authenticateUser(event)

	// if (event.url.pathname.startsWith("/")) {
	if (event.url.pathname != "/access-gate") {
		// console.log("event.url.pathname", event.url.pathname);
		// console.log("event.locals.user", event.locals.user);

        console.log('no es access-gate - pathname', event.url.pathname);
		if (!event.locals.user) {
			throw redirect(303, "/access-gate")
		}
		// if (event.url.pathname.startsWith("/protected/admin")) {
		// 	if (event.locals.user.role !== "ADMIN") {
		// 		throw redirect(303, "/protected")
		// 	}
		// }

	} else {
		console.log('es access-gate - pathname', event.url.pathname);

		// if (event.locals.user) {
		// 	throw redirect(303, "/")
		// }
	}


	const response = await resolve(event) // step 2

	// step 3
	console.log('###End handle###');
	console.log("___________________________");

	return response
}
