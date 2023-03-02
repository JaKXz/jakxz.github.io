import { error } from '@sveltejs/kit';

export async function load() {
	try {
		const ReadMe = await import('../../README.md').then((mod) => mod.default);
		return {
			ReadMe
		};
	} catch (err) {
		console.error(err.stack);
		throw error(500, err.message);
	}
}
