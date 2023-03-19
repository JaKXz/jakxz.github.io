import transformerDirectives from '@unocss/transformer-directives';
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss';

export default defineConfig({
	transformers: [transformerDirectives()],
	presets: [
		presetIcons({
			prefix: 'i-',
			extraProperties: {
				display: 'inline-block'
			}
		}),
		presetAttributify({ prefix: 'uno-' }),
		presetUno()
	]
});
