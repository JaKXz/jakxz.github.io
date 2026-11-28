<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
  import classNames from "#assets/js/classNames.ts";

  type LinkProps = HTMLAnchorAttributes & { href: string };
  type ButtonProps = HTMLButtonAttributes & { href?: never };
  type Props = (LinkProps | ButtonProps) & { children: Snippet };

  let { children, ...props }: Props = $props();

  let classes = $derived(
    classNames(
      `inline-flex cursor-pointer items-center justify-center border border-solid border-[var(--border)] bg-[var(--sheet-muted)] p-0 [font-size:inherit] leading-none font-extrabold text-[var(--ink)] no-underline transition-colors duration-120 aria-disabled:cursor-default aria-disabled:opacity-50 aria-[current=true]:border-[var(--accent)] aria-[current=true]:bg-[var(--accent)] aria-[current=true]:text-[var(--accent-contrast)] motion-reduce:transition-none [&:not([aria-disabled=true])]:hover:border-[var(--accent)] [&:not([aria-disabled=true])]:hover:bg-[var(--accent)] [&:not([aria-disabled=true])]:hover:text-[var(--accent-contrast)] dark:[:root:not([data-theme])_&]:font-bold [:root[data-theme=dark]_&]:font-bold`,
      props.class,
    ),
  );
</script>

{#if props.href !== undefined}
  <a {...props} class={classes}>
    {@render children()}
  </a>
{:else}
  <button {...props} type={props.type ?? "button"} class={classes}>
    {@render children()}
  </button>
{/if}
