export async function load() {
	const ReadMe = await import('../../README.md').then((mod) => mod.default);

	return {
		ReadMe
	};
}
