import { defineConfig, presetAttributify, presetUno, presetIcons } from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';

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
