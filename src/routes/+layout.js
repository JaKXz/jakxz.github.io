export const prerender = true;

export async function load({ url }) {
	return {
		path: url.pathname
	};
}
