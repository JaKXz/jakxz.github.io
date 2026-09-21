<script>
  import { onMount } from "svelte";

  import { calculateViewport, normalizeBlock } from "$lib/assets/js/minimap";

  let { target } = $props();

  let blocks = $state([]);
  let viewport = $state({ top: 0, height: 1 });

  onMount(() => {
    let articleTop = 0;
    let articleHeight = 1;
    let frame;
    let disposed = false;

    function classify(element) {
      if (element.matches("h2, h3, h4")) return "heading";
      if (element.matches("pre")) return "code";
      if (element.matches("figure")) return "figure";
      if (element.matches("ul, ol")) return "list";
      if (element.matches("blockquote, .callout")) return "callout";
      return "prose";
    }

    function updateViewport() {
      viewport = calculateViewport({
        articleTop,
        articleHeight,
        scrollY: window.scrollY,
        viewportHeight: window.innerHeight,
      });
    }

    function measure() {
      frame = undefined;
      const targetRect = target.getBoundingClientRect();
      articleTop = targetRect.top + window.scrollY;
      articleHeight = Math.max(target.scrollHeight, 1);

      blocks = Array.from(
        target.querySelectorAll(
          ":scope > :is(h2, h3, h4, p, ul, ol, pre, figure, blockquote, .callout, hr)",
        ),
      ).map((element) => {
        const rect = element.getBoundingClientRect();
        return normalizeBlock(
          {
            top: rect.top - targetRect.top,
            height: Math.max(rect.height, 3),
            kind: classify(element),
          },
          articleHeight,
        );
      });

      updateViewport();
    }

    function requestMeasure() {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    }

    let scrollFrame;
    function handleScroll() {
      if (scrollFrame) return;
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = undefined;
        updateViewport();
      });
    }

    const observer = new ResizeObserver(requestMeasure);
    observer.observe(target);
    window.addEventListener("resize", requestMeasure);
    window.addEventListener("scroll", handleScroll, { passive: true });
    target.addEventListener("load", requestMeasure, true);
    document.fonts?.ready.then(() => {
      if (!disposed) requestMeasure();
    });
    requestMeasure();

    return () => {
      disposed = true;
      observer.disconnect();
      window.removeEventListener("resize", requestMeasure);
      window.removeEventListener("scroll", handleScroll);
      target.removeEventListener("load", requestMeasure, true);
      if (frame) cancelAnimationFrame(frame);
      if (scrollFrame) cancelAnimationFrame(scrollFrame);
    };
  });
</script>

<aside class="minimap hidden md:block" aria-hidden="true">
  <div class="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[var(--muted-ink)]">
    minimap
  </div>
  <div
    class="map relative h-[min(68vh,32rem)] w-18 overflow-hidden border border-[var(--border)] bg-[var(--sheet-muted)]"
  >
    {#each blocks as block}
      <span
        class="block absolute left-2 right-2 bg-[var(--muted-ink)]"
        class:heading={block.kind === "heading"}
        class:figure={block.kind === "figure"}
        class:code={block.kind === "code"}
        class:callout={block.kind === "callout"}
        style:top={`${block.top * 100}%`}
        style:height={`${Math.max(block.height * 100, 0.45)}%`}
      ></span>
    {/each}
    <span
      class="viewport absolute inset-x-0 border-2 border-[var(--accent)]"
      style:top={`${viewport.top * 100}%`}
      style:height={`${viewport.height * 100}%`}
    ></span>
  </div>
</aside>

<style>
  .minimap {
    position: sticky;
    top: 2rem;
    align-self: start;
  }

  .map {
    box-shadow: 0.2rem 0.2rem 0 var(--border);
  }

  .block {
    min-height: 1px;
    opacity: 0.3;
  }

  .block.heading {
    right: 0.5rem;
    height: 0.22rem !important;
    background: var(--ink);
    opacity: 0.72;
  }

  .block.figure,
  .block.code,
  .block.callout {
    opacity: 0.58;
  }

  .block.figure {
    background: var(--accent);
  }

  .block.code {
    background: var(--ink);
  }

  .block.callout {
    border-left: 0.18rem solid var(--accent);
  }

  .viewport {
    min-height: 0.45rem;
    background: color-mix(in srgb, var(--accent) 8%, transparent);
  }
</style>
