<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<div class="callout bg-[var(--lightAccent)] p-8 italic rounded-[0.125rem]">
	{@render children?.()}
</div>

<style>
	.callout :where(h1, h2, h3, h4, h5, h6) {
		margin: none;
	}
</style>
