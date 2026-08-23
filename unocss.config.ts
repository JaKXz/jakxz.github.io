import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	transformerDirectives
} from 'unocss';

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
		presetUno({
			dark: 'media'
		}),
		presetTypography()
	],
	theme: {
		breakpoints: {
			xs: '600px',
			sm: '768px',
			md: '1024px',
			lg: '1280px',
			xl: '1440px',
			xxl: '1680px',
			xxxl: '1960px'
		}
	}
});
