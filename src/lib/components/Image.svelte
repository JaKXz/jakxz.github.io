<script>
	import { decode } from 'blurhash';
	import { onMount } from 'svelte';

	export let src;
	export let hash;
	export let alt;
	export let width = 16;
	export let height = 9;

	let canvas;
	let loaded = false;
	let thisImg = null;

	onMount(() => {
		if (!loaded && hash && canvas) {
			const pixels = decode(hash, width, height);
			const ctx = canvas.getContext('2d');
			const imageData = ctx.createImageData(width, height);
			imageData.data.set(pixels);
			ctx.putImageData(imageData, 0, 0);
		}

		thisImg.onload = () => {
			loaded = true;
		};
		thisImg.src = src;
	});
</script>

<!-- image that shows the blur hash first and then the image when it is loaded -->
<img
	bind:this={thisImg}
	class:loaded
	style="object-fit: cover; aspect-ratio: {width} / {height}"
	{alt}
/>
<canvas class:loaded bind:this={canvas} {width} {height} />

<style>
	img {
		height: 0;
		opacity: 0;
		transition: height, opacity 1200ms ease-out;
	}
	img.loaded {
		height: 100%;
		opacity: 1;
	}
	canvas {
		height: auto;
		opacity: 1;
		transition: height, opacity 1200ms ease-out;
	}
	canvas.loaded {
		opacity: 0;
		height: 0;
	}
</style>
