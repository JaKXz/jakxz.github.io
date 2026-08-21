export const prerender = true;
export const trailingSlash = 'always';

export async function load({ url }) {
	return {
		path: url.pathname
	};
}
