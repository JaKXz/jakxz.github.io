<script>
  /**
   * @typedef {import('svelte/elements').HTMLAnchorAttributes & {href: string}} LinkProps
   * @typedef {import('svelte/elements').HTMLButtonAttributes & {href?: never}} ButtonProps
   * @typedef {(LinkProps | ButtonProps) & {children: import('svelte').Snippet}} Props
   */

  /** @type {Props} */
  let { children, ...props } = $props();

  const controlClasses = `inline-flex cursor-pointer items-center justify-center
    border border-solid border-[var(--border)] bg-[var(--sheet-muted)] p-0
    font-[var(--primaryFont)] [font-size:inherit] font-extrabold leading-none
    text-[var(--ink)] no-underline transition-colors duration-120
    [transition-timing-function:ease-out] motion-reduce:transition-none
    [:root[data-theme=dark]_&]:font-bold dark:[:root:not([data-theme])_&]:font-bold
    [&:not([aria-disabled=true])]:hover:bg-[var(--accent)]
    [&:not([aria-disabled=true])]:hover:border-[var(--accent)]
    [&:not([aria-disabled=true])]:hover:text-[var(--accent-contrast)]
    aria-[current=true]:bg-[var(--accent)] aria-[current=true]:border-[var(--accent)]
    aria-[current=true]:text-[var(--accent-contrast)]
    aria-disabled:opacity-50 aria-disabled:cursor-default`;
</script>

{#if props.href !== undefined}
  <a {...props} class={[controlClasses, props.class]}>
    {@render children()}
  </a>
{:else}
  <button {...props} type={props.type ?? "button"} class={[controlClasses, props.class]}>
    {@render children()}
  </button>
{/if}
