<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<div class="callout">
	{@render children?.()}
</div>

<style lang="scss">
	.callout {
		background: var(--lightAccent);
		border-radius: 0.125rem;
		font-style: italic;
		padding: 2rem;
	}
</style>
