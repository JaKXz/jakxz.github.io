module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:svelte/recommended', '@unocss', 'prettier'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest'
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
