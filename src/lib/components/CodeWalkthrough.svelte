<script>
  import { onMount, tick } from "svelte";
  import { createLineAnimator } from "#assets/js/markdown/line-transitions.js";
  import { stepAtMidpoint } from "#assets/js/markdown/walkthrough.js";
  import CodeStep from "./CodeStep.svelte";

  /** @type {{title: string, mode?: 'click' | 'scroll', steps: {title: string, content: import('svelte').Snippet, code: import('svelte').Snippet}[]}} */
  let { title, mode = "click", steps } = $props();
  let ready = $state(false);
  let active = $state(0);
  let wide = $state(false);
  let motion = $state(false);
  let scrolling = $derived(ready && wide && mode === "scroll");
  /** @type {HTMLElement} */
  let root = $state();
  /** @type {HTMLDivElement[]} */
  let explanations = $state([]);
  /** @type {HTMLDivElement[]} */
  let panels = $state([]);
  /** @type {ReturnType<typeof createLineAnimator> | undefined} */
  let animator;
  let disposed = false;
  let scheduleScroll = () => {};

  /** @param {number} index @param {boolean} [animate] */
  async function select(index, animate = true) {
    if (disposed || index === active || index < 0 || index >= steps.length) return;
    const previous = panels[active];
    const next = panels[index];
    const moveFocus = previous?.contains(document.activeElement);
    const update = async () => {
      active = index;
      await tick();
      if (!disposed && moveFocus) next?.querySelector(".code-scroll")?.focus();
    };
    if (animator) await animator.change(previous, next, update, animate && motion);
    else await update();
  }

  /** @param {number} index */
  function reveal(index) {
    void select(index, false);
    if (scrolling) explanations[index]?.scrollIntoView({ block: "center", behavior: "instant" });
  }

  onMount(() => {
    animator = createLineAnimator();
    const media = matchMedia("(min-width: 48rem)");
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    /** @type {IntersectionObserver | undefined} */
    let observer;
    let frame = 0;

    function syncScroll() {
      frame = 0;
      if (!scrolling || !root || !steps.length) return;
      const bounds = root.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > innerHeight) return;
      const panel = panels[active];
      const selection = window.getSelection();
      if (panel?.contains(document.activeElement)) return;
      if (selection && !selection.isCollapsed && panel?.contains(selection.anchorNode)) return;
      const index = stepAtMidpoint(
        explanations.map((element, i) =>
          i === 0 ? element.getBoundingClientRect().bottom : element.getBoundingClientRect().top,
        ),
        innerHeight / 2,
      );
      void select(index);
    }
    scheduleScroll = () => {
      if (!frame && !disposed) frame = requestAnimationFrame(syncScroll);
    };
    function resize() {
      animator?.cancel();
      // Keep a focused explanation visible when collapsing to the click layout.
      const focused = explanations.findIndex((element) => element.contains(document.activeElement));
      if (focused >= 0 && !media.matches) active = focused;
      wide = media.matches;
      observer?.disconnect();
      if (typeof IntersectionObserver !== "undefined") {
        const top = Math.floor(innerHeight / 2);
        observer = new IntersectionObserver(scheduleScroll, {
          rootMargin: `${-top}px 0px ${-(innerHeight - top - 1)}px 0px`,
        });
        explanations.forEach((element) => observer.observe(element));
      }
      scheduleScroll();
    }
    function updateMotion() {
      motion = !reducedMotion.matches;
      animator?.cancel();
    }
    const cancelMotion = () => animator?.cancel();
    ready = true;
    updateMotion();
    resize();
    reducedMotion.addEventListener("change", updateMotion);
    media.addEventListener("change", resize);
    window.addEventListener("resize", resize);
    // Also handles jumps that pass an entire step between observer notifications.
    window.addEventListener("scroll", scheduleScroll, { passive: true });
    root.addEventListener("focusout", scheduleScroll);
    root.addEventListener("scroll", cancelMotion, true);
    document.addEventListener("selectionchange", scheduleScroll);
    return () => {
      disposed = true;
      animator?.cancel();
      observer?.disconnect();
      cancelAnimationFrame(frame);
      reducedMotion.removeEventListener("change", updateMotion);
      media.removeEventListener("change", resize);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", scheduleScroll);
      root.removeEventListener("focusout", scheduleScroll);
      root.removeEventListener("scroll", cancelMotion, true);
      document.removeEventListener("selectionchange", scheduleScroll);
    };
  });
</script>

<section bind:this={root} class="code-group code-walkthrough" aria-label={title}>
  <p class="font-semibold">{title}</p>
  {#if ready && !scrolling && steps.length}
    <div class="controls">
      <button type="button" aria-disabled={active === 0} onclick={() => select(active - 1)}
        >Previous</button
      >
      <span role="status">Step {active + 1} of {steps.length}: {steps[active].title}</span>
      <button
        type="button"
        aria-disabled={active === steps.length - 1}
        onclick={() => select(active + 1)}>Next</button
      >
    </div>
  {/if}
  <div class="steps" class:enhanced={ready} class:scrolling>
    {#each steps as step, index}
      <div class="step">
        <div
          bind:this={explanations[index]}
          class="explanation"
          class:current={ready && index === active}
          style:grid-row={scrolling ? index + 1 : undefined}
          hidden={ready && !scrolling && index !== active ? "until-found" : undefined}
          onbeforematch={() => reveal(index)}
        >
          <div class="step-explanation">
            <CodeStep title={step.title} children={step.content} />
          </div>
        </div>
        <div
          bind:this={panels[index]}
          class="panel"
          style:grid-row={scrolling ? `1 / span ${steps.length}` : undefined}
          hidden={ready && index !== active ? "until-found" : undefined}
          onbeforematch={() => reveal(index)}
        >
          {@render step.code()}
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .code-walkthrough {
    min-width: 0;
  }
  .controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.75rem;
    padding-block: 0.75rem;
  }
  .controls span {
    flex: 1;
    text-align: center;
  }
  button {
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--border);
    background: var(--sheet);
    color: var(--ink);
    font: inherit;
    cursor: pointer;
  }
  button[aria-disabled="true"] {
    opacity: 0.5;
    cursor: default;
  }
  .enhanced {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
  }
  .enhanced > .step {
    display: contents;
  }
  .enhanced .explanation {
    grid-area: 1 / 1;
    min-width: 0;
  }
  .enhanced .panel {
    grid-area: 2 / 1;
    min-width: 0;
    align-self: start;
  }
  .enhanced :global(.code-block) {
    margin-block: 0;
  }
  .step-explanation {
    padding-block: 1rem;
  }
  .scrolling {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.3fr);
    column-gap: 1.5rem;
  }
  .scrolling .explanation {
    grid-column: 1;
  }
  .scrolling .step-explanation {
    min-height: fit-content;
    padding-block: 2rem;
    padding-inline: 1rem;
    border-inline-start: 3px solid transparent;
  }
  .scrolling .current .step-explanation {
    border-inline-start-color: var(--accent);
  }
  .scrolling .panel {
    grid-column: 2;
    position: sticky;
    top: 2rem;
  }
  .scrolling .panel :global(.code-scroll) {
    max-height: min(70dvh, 36rem);
  }
</style>
