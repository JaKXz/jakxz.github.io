<script lang="ts">
  import { onMount, tick, type Snippet } from "svelte";

  let { title, items }: { title: string; items: { title: string; code: Snippet }[] } = $props();
  const id = $props.id();
  let ready = $state(false);
  let active = $state(0);
  let nativeFocusGroup = $state(false);
  let tablist = $state<HTMLDivElement>();
  let tabs: HTMLButtonElement[] = [];
  let panels: HTMLDivElement[] = [];

  onMount(() => {
    nativeFocusGroup = Object.hasOwn(HTMLElement.prototype, "focusGroup");
    ready = true;
  });

  async function select(index: number) {
    const moveFocus = panels[active]?.contains(document.activeElement);
    active = index;
    if (moveFocus) tabs[index]?.focus();
    await tick();
    const tab = tabs[index];
    if (!tab || !tablist) return;
    // Scroll only the strip, without moving the article vertically.
    const bounds = tab.getBoundingClientRect();
    const viewport = tablist.getBoundingClientRect();
    if (bounds.left < viewport.left) tablist.scrollLeft += bounds.left - viewport.left;
    else if (bounds.right > viewport.right) tablist.scrollLeft += bounds.right - viewport.right;
  }

  function navigate(event: KeyboardEvent, index: number) {
    if (nativeFocusGroup || !tablist) return;
    let next;
    const rtl = getComputedStyle(tablist).direction === "rtl";
    if (event.key === "ArrowRight") next = index + (rtl ? -1 : 1);
    else if (event.key === "ArrowLeft") next = index + (rtl ? 1 : -1);
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = items.length - 1;
    else return;
    event.preventDefault();
    tabs[(next + items.length) % items.length]?.focus();
  }
</script>

<section class="code-group code-tabs" aria-label={title}>
  <p class="group-title">{title}</p>
  {#if ready}
    <div
      bind:this={tablist}
      class="tablist"
      role="tablist"
      aria-label={title}
      {...nativeFocusGroup ? { focusgroup: "tablist nomemory" } : {}}
    >
      {#each items as item, index}
        <button
          bind:this={tabs[index]}
          type="button"
          role="tab"
          id={`${id}-tab-${index}`}
          aria-controls={`${id}-panel-${index}`}
          aria-selected={active === index}
          tabindex={nativeFocusGroup ? undefined : active === index ? 0 : -1}
          {...active === index ? { focusgroupstart: true } : {}}
          onfocus={() => select(index)}
          onclick={() => select(index)}
          onkeydown={(event) => navigate(event, index)}>{item.title}</button
        >
      {/each}
    </div>
  {/if}
  <div class:enhanced={ready}>
    {#each items as item, index}
      <div
        bind:this={panels[index]}
        class="panel"
        id={`${id}-panel-${index}`}
        role={ready ? "tabpanel" : undefined}
        aria-labelledby={ready ? `${id}-tab-${index}` : undefined}
        hidden={ready && active !== index ? "until-found" : undefined}
        onbeforematch={() => select(index)}
      >
        {@render item.code()}
      </div>
    {/each}
  </div>
</section>

<style>
  .code-tabs {
    min-width: 0;
  }
  .group-title {
    font-weight: 600;
  }
  .tablist {
    display: flex;
    overflow-x: auto;
    padding: 0.25rem;
    border: 1px solid var(--border);
    background: var(--sheet-muted);
  }
  button {
    white-space: nowrap;
    position: relative;
    flex: none;
    padding: 0.75rem 1rem;
    border: 0;
    background: transparent;
    color: var(--ink);
    font: inherit;
    cursor: pointer;
  }
  button[aria-selected="true"]::after {
    content: "";
    position: absolute;
    inset: auto 0.5rem 0;
    border-bottom: 3px solid var(--accent);
  }
  .enhanced {
    display: grid;
  }
  .enhanced > .panel {
    grid-area: 1 / 1;
    min-width: 0;
  }
  .enhanced :global(.code-block) {
    margin-block: 0;
  }
</style>
