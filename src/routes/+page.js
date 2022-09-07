import { error } from '@sveltejs/kit';

export async function load() {
	const ReadMe = await import('../../README.md')
		.then((mod) => mod.default)
		.catch((err) => {
			throw error(500, err);
		});

	return {
		ReadMe
	};
}
