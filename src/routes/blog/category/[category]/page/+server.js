import { redirect } from '@sveltejs/kit';

export const prerender = true;

export function GET({ params }) {
	throw redirect(303, `/blog/category/${params.category}`);
}
