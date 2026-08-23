<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<div class="callout bg-[var(--lightAccent)] p-8 italic">
	{@render children?.()}
</div>

<style>
	.callout {
		border-radius: 0.125rem;
	}
</style>
