import js from '@eslint/js';
import unocss from '@unocss/eslint-config/flat';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

export default [
	{
		ignores: [
			'build/**',
			'.svelte-kit/**',
			'node_modules/**',
			'pnpm-lock.yaml',
			'package-lock.json',
			'yarn.lock'
		]
	},
	js.configs.recommended,
	...svelte.configs['flat/recommended'],
	{
		rules: {
			'svelte/no-navigation-without-resolve': [
				'error',
				{
					ignoreGoto: false,
					ignoreLinks: true,
					ignorePushState: false,
					ignoreReplaceState: false
				}
			]
		}
	},
	unocss,
	{
		languageOptions: {
			sourceType: 'module',
			ecmaVersion: 'latest',
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2021
			}
		},
		rules: {
			'no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
		}
	},
	prettier
];
