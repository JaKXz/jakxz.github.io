<script>
  import { onDestroy } from "svelte";
  import { MediaQuery } from "svelte/reactivity";

  import { siteTitle } from "$lib/config";

  const sections = [
    {
      id: "coding-and-browsing",
      title: "Coding & browsing",
      position: [5, 5],
      tools: [
        {
          name: "Zed",
          position: [9, 19],
          href: "https://zed.dev/",
          description: "My <3 editor.",
        },
        {
          name: "Zen",
          position: [29, 30],
          href: "https://zen-browser.app/",
          description: `"A calmer internet." Based on Firefox.`,
        },
        {
          name: "WezTerm",
          position: [10, 42],
          href: "https://wezterm.org/",
          description:
            "Terminal + multiplexer, using the Dracula colour scheme and JetBrains Mono Nerd Font.",
        },
        {
          name: "Oh My Zsh",
          position: [27, 53],
          href: "https://ohmyz.sh/",
          description: "+ custom Powerlevel10k prompt",
        },
        {
          name: "zoxide",
          position: [8, 65],
          href: "https://github.com/ajeetdsouza/zoxide",
          description: "Directory navigation wired into my cd command.",
        },
        {
          name: "eza",
          position: [29, 76],
          href: "https://eza.rocks/",
          description: "Directory listings with Git status and file details.",
        },
        {
          name: "jq",
          position: [12, 87],
          href: "https://jqlang.org/",
          description: "Filtering and reshaping JSON from the command line.",
        },
      ],
    },
    {
      id: "version-control-and-setup",
      title: "Version control & setup",
      position: [54, 5],
      tools: [
        {
          name: "Jujutsu",
          position: [57, 18],
          href: "https://github.com/jj-vcs/jj",
          description: "Version control alongside Git, with jj integrated into my shell.",
        },
        {
          name: "GitHub CLI",
          position: [76, 28],
          href: "https://cli.github.com/",
          description: "Working with GitHub from the terminal.",
        },
        {
          name: "Homebrew",
          position: [53, 40],
          href: "https://brew.sh/",
          description: "MacOS' package manager; check out my full Brewfile.",
        },
        {
          name: "GNU Stow",
          position: [76, 44],
          href: "https://www.gnu.org/software/stow/",
          description: "Symlinking my shell and application configuration into place.",
        },
      ],
    },
    {
      id: "everyday-macos",
      title: "Everyday macOS",
      position: [54, 55],
      tools: [
        {
          name: "1Password",
          position: [55, 64],
          href: "https://1password.com/",
          description: "Password manager with the op CLI for terminal access.",
        },
        {
          name: "Rectangle",
          position: [75, 72],
          href: "https://rectangleapp.com/",
          description: "Keyboard shortcuts for moving and resizing windows.",
        },
        {
          name: "Maccy",
          position: [55, 84],
          href: "https://maccy.app/",
          description: "Clipboard history on macOS.",
        },
        {
          name: "BetterDisplay",
          position: [74, 89],
          href: "https://github.com/waydabber/BetterDisplay",
          description: "Managing displays and their settings.",
        },
      ],
    },
  ];

  // Lower contours share one ridge; only the higher elevations split into peaks.
  const contours = [
    {
      elevation: 50,
      d: "M-70 510 C-110 370-80 180 40 98 C130 24 242 18 336 58 C424 94 470 89 532 40 C634-40 850-46 984 28 C1100 96 1130 224 1060 322 C1010 396 1080 486 1024 580 C949 706 782 719 658 662 C574 624 503 628 428 676 C311 750 160 701 58 626 C-8 578-50 584-70 510 Z",
    },
    {
      elevation: 100,
      d: "M-22 466 C-55 341-26 192 76 128 C148 72 242 66 323 104 C407 145 488 131 556 82 C652 17 823 0 936 62 C1030 115 1070 212 1006 307 C957 379 1028 482 975 558 C902 662 788 676 680 624 C585 578 504 578 416 628 C318 683 182 644 98 582 C28 527-8 536-22 466 Z",
    },
    {
      elevation: 150,
      d: "M34 441 C4 329 23 212 112 162 C173 124 240 116 308 152 C399 201 500 176 584 126 C669 75 802 50 897 99 C985 145 1006 217 951 295 C894 375 981 469 928 537 C869 618 784 632 704 586 C604 529 498 532 400 582 C313 627 208 591 142 544 C76 493 55 512 34 441 Z",
    },
    {
      elevation: 200,
      d: "M88 418 C66 332 77 240 146 204 C200 176 240 166 291 202 C386 267 526 232 611 170 C684 118 789 99 857 139 C923 178 944 224 895 283 C823 369 929 453 879 513 C838 565 781 584 727 544 C622 471 491 479 386 533 C319 568 237 542 183 505 C129 465 105 483 88 418 Z",
    },
    {
      elevation: 250,
      d: "M137 398 C119 329 126 267 172 243 C217 219 245 217 280 248 C373 321 550 288 639 222 C699 178 773 151 824 180 C872 207 885 238 841 280 C808 336 868 399 832 453 C803 493 779 519 747 491 C638 412 484 423 372 481 C317 509 263 494 224 470 C181 443 149 451 137 398 Z",
    },
    {
      elevation: 300,
      d: "M168 387 C146 339 163 292 199 278 C225 266 250 274 267 297 C294 330 342 335 353 378 C365 423 328 459 289 463 C242 470 190 436 168 387 Z",
    },
    {
      elevation: 350,
      d: "M199 376 C183 342 198 311 223 308 C251 306 260 337 284 349 C318 365 320 401 295 420 C264 443 215 418 199 376 Z",
    },
    {
      elevation: 400,
      d: "M229 370 C217 351 224 337 239 340 C258 343 275 363 274 380 C269 401 242 394 229 370 Z",
    },
    {
      elevation: 300,
      d: "M662 266 C678 231 714 205 752 204 C790 198 825 221 811 250 C798 280 771 298 731 302 C694 307 658 293 662 266 Z",
    },
    {
      elevation: 350,
      d: "M698 261 C711 241 739 223 764 231 C787 241 775 261 754 272 C729 286 697 282 698 261 Z",
    },
    {
      elevation: 300,
      d: "M656 397 C693 375 748 389 778 408 C819 432 817 463 790 467 C759 470 747 443 715 437 C681 432 646 421 656 397 Z",
    },
    {
      elevation: 350,
      d: "M703 404 C729 397 764 415 779 434 C792 454 767 445 751 434 C734 423 710 423 703 404 Z",
    },
  ];

  const elevations = [
    { x: 440, y: 126, angle: -7, label: "100 m" },
    { x: 46, y: 489, angle: 43, label: "100 m" },
    { x: 659, y: 138, angle: -24, label: "200 m" },
    { x: 502, y: 494, angle: -5, label: "200 m" },
    { x: 186, y: 423, angle: 48, label: "300 m" },
    { x: 693, y: 226, angle: -32, label: "300 m" },
    { x: 683, y: 389, angle: -2, label: "300 m" },
  ];

  let selectedName = $state(sections[0].tools[0].name);
  let selectedTool = $derived(
    sections.flatMap((section) => section.tools).find((tool) => tool.name === selectedName),
  );

  const scrollable = new MediaQuery("(min-width: 1280px)", false);
  let isDragging = $state(false);
  let drag = null;

  function startDrag(event) {
    if (
      !scrollable.current ||
      event.pointerType !== "mouse" ||
      !event.isPrimary ||
      event.button !== 0 ||
      drag ||
      event.target.closest("button, a")
    ) {
      return;
    }

    const viewport = event.currentTarget;
    const bounds = viewport.getBoundingClientRect();
    const x = event.clientX - bounds.left - viewport.clientLeft;
    const y = event.clientY - bounds.top - viewport.clientTop;

    // Leave native scrollbar tracks and the frame's border to the browser.
    if (x < 0 || y < 0 || x >= viewport.clientWidth || y >= viewport.clientHeight) return;

    event.preventDefault();
    viewport.focus({ preventScroll: true });
    drag = {
      viewport,
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      scrollLeft: viewport.scrollLeft,
      scrollTop: viewport.scrollTop,
    };
    viewport.setPointerCapture(event.pointerId);
  }

  function moveDrag(event) {
    if (!drag || event.pointerId !== drag.pointerId) return;
    if (!scrollable.current || !(event.buttons & 1)) {
      finishDrag(event);
      return;
    }

    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    if (!isDragging && Math.hypot(dx, dy) < 5) return;

    event.preventDefault();
    isDragging = true;
    drag.viewport.scrollLeft = drag.scrollLeft - dx;
    drag.viewport.scrollTop = drag.scrollTop - dy;
  }

  function finishDrag(event) {
    if (!drag || (event && event.pointerId !== drag.pointerId)) return;

    const { viewport, pointerId } = drag;
    drag = null;
    isDragging = false;
    if (viewport.hasPointerCapture(pointerId)) viewport.releasePointerCapture(pointerId);
  }

  $effect(() => {
    if (!scrollable.current) finishDrag();
  });

  onDestroy(() => finishDrag());
</script>

<svelte:window onblur={() => finishDrag()} />

<svelte:head>
  <title>{siteTitle} | Uses</title>
</svelte:head>

{#snippet topography(viewBox)}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-full w-full text-[var(--border)]"
    {viewBox}
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    focusable="false"
  >
    <g fill="none" stroke="currentColor" stroke-linejoin="round">
      {#each contours as contour (contour.d)}
        {@const major = contour.elevation % 100 === 0}
        <path
          class={major ? "text-[var(--border-strong)]" : ""}
          d={contour.d}
          stroke-width={major ? 1.5 : 1}
          stroke-opacity={major ? 0.7 : 0.55}
          vector-effect="non-scaling-stroke"
        />
      {/each}
    </g>
    <g
      class="font-mono text-[9px] tracking-wide text-[var(--muted-ink)]"
      fill="currentColor"
      stroke="var(--sheet-muted)"
      stroke-width="5"
      stroke-linejoin="round"
      paint-order="stroke"
    >
      {#each elevations as elevation (elevation.x)}
        <text
          x={elevation.x}
          y={elevation.y}
          transform={`rotate(${elevation.angle} ${elevation.x} ${elevation.y})`}
          >{elevation.label}</text
        >
      {/each}
    </g>
  </svg>
{/snippet}

{#snippet toolDetails(tool, headingId)}
  <h3 id={headingId} class="m-0 text-2xl">{tool.name}</h3>
  <p class="my-4 leading-relaxed text-[var(--muted-ink)]">{tool.description}</p>
  <a class="inline-block py-2 font-mono text-sm" href={tool.href}>
    Visit {tool.name} <span aria-hidden="true">↗</span>
  </a>
{/snippet}

<header class="mb-8">
  <p class="font-600 mt-0 mb-3 text-xs tracking-[0.18em] text-[var(--accent)] uppercase">
    My setup
  </p>
  <h1 class="last-line-underline"><span>Uses</span></h1>
  <p class="m-0 text-lg text-[var(--muted-ink)]">
    A few of the tools behind my day-to-day work on macOS.
  </p>
</header>

<div class="grid items-start gap-6 md:grid-cols-[minmax(0,1fr)_18rem]">
  <div class="min-w-0">
    <!-- svelte-ignore a11y_no_noninteractive_tabindex (The scrollable map region needs native keyboard scrolling.) -->
    <div
      class="map-viewport rounded-1 min-w-0 border border-[var(--border)] bg-[var(--sheet-muted)] lg:h-128 lg:cursor-grab lg:scroll-p-4 lg:overflow-auto"
      class:is-dragging={isDragging}
      role="region"
      aria-label="Tools map"
      aria-describedby={scrollable.current ? "uses-map-hint" : undefined}
      tabindex={scrollable.current ? 0 : undefined}
      onpointerdown={startDrag}
      onpointermove={moveDrag}
      onpointerup={finishDrag}
      onpointercancel={finishDrag}
      onlostpointercapture={finishDrag}
    >
      <div
        class="xs:p-6 md:lt-lg:min-h-[calc(32rem-2px)] md:lt-lg:grid-cols-2 md:lt-lg:grid-rows-[repeat(2,minmax(min-content,1fr))] md:lt-lg:gap-6 md:lt-lg:p-4 relative isolate grid min-w-0 gap-8 p-4 lg:block lg:h-[calc(100%+6rem)] lg:w-[calc(100%+8rem)] lg:max-w-none lg:p-0"
      >
        <div class="rounded-1 pointer-events-none absolute inset-0 -z-1 overflow-hidden">
          {@render topography("0 0 1000 640")}
        </div>
        {#each sections as section (section.id)}
          <section
            class={[
              "md:lt-lg:flex md:lt-lg:flex-col relative isolate min-w-0 lg:static lg:[isolation:auto]",
              section.id === "coding-and-browsing" && "md:lt-lg:row-span-2",
            ]}
            aria-labelledby={section.id}
            style:--region-x={`${section.position[0]}%`}
            style:--region-y={`${section.position[1]}%`}
          >
            <h2
              id={section.id}
              tabindex="-1"
              class="md:lt-lg:mb-2 md:lt-lg:self-center md:lt-lg:text-center m-0 mb-5 w-fit scroll-mt-8 bg-[var(--sheet-muted)] px-2 py-1 font-mono text-sm leading-relaxed tracking-wide lg:absolute lg:top-[var(--region-y)] lg:left-[var(--region-x)] lg:max-w-[44%]"
            >
              {section.title}
            </h2>
            <ul
              class="md:lt-lg:flex md:lt-lg:flex-1 md:lt-lg:flex-col md:lt-lg:justify-between md:lt-lg:gap-1 m-0 grid list-none gap-3 p-0"
            >
              {#each section.tools as tool (tool.name)}
                <li
                  class="md:lt-lg:flex md:lt-lg:odd:self-start md:lt-lg:even:self-end m-0 min-w-0 lg:absolute lg:top-[var(--tool-y)] lg:left-[var(--tool-x)] lg:w-max lg:max-w-[24%]"
                  style:--tool-x={`${tool.position[0]}%`}
                  style:--tool-y={`${tool.position[1]}%`}
                >
                  <button
                    type="button"
                    class="landmark group rounded-1 inline-flex min-h-11 max-w-full cursor-pointer items-center gap-3 border border-transparent bg-[var(--sheet)] px-3 py-2 text-left font-mono text-sm text-[var(--ink)] transition-colors duration-160 hover:border-[var(--border-strong)] motion-reduce:transition-none lg:scroll-m-4"
                    aria-pressed={selectedName === tool.name}
                    aria-controls="selected-tool-details inline-tool-details"
                    onclick={() => (selectedName = tool.name)}
                  >
                    <span
                      class="landmark-marker pointer-events-none grid h-5 w-5 shrink-0 place-items-center rounded-full border border-current text-[var(--border-strong)] transition-colors duration-160 group-hover:text-[var(--accent)] group-focus-visible:text-[var(--accent)] motion-reduce:transition-none"
                      aria-hidden="true"
                    >
                      <span class="h-1.5 w-1.5 rounded-full bg-current"></span>
                    </span>
                    <span class="min-w-0">{tool.name}</span>
                  </button>
                  {#if selectedName === tool.name}
                    <div
                      id="inline-tool-details"
                      class="rounded-1 mt-3 border border-[var(--border)] bg-[var(--sheet)] p-4 md:hidden"
                      role="region"
                      aria-labelledby="inline-tool-heading"
                    >
                      {@render toolDetails(tool, "inline-tool-heading")}
                    </div>
                  {/if}
                </li>
              {/each}
            </ul>
          </section>
        {/each}
      </div>
    </div>
    <p
      id="uses-map-hint"
      class="mt-3 mb-0 hidden font-mono text-xs text-[var(--muted-ink)] lg:block"
    >
      Scroll or drag to explore.
    </p>
  </div>

  <aside
    id="selected-tool-details"
    class="rounded-1 hidden min-w-0 border border-[var(--border)] bg-[var(--sheet-muted)] p-6 [box-shadow:var(--shadow-soft)] md:block"
    aria-labelledby="selected-tool-heading"
    aria-live="polite"
    aria-atomic="true"
  >
    <p class="mt-0 mb-5 font-mono text-xs tracking-[0.12em] text-[var(--muted-ink)] uppercase">
      Selected tool
    </p>
    {@render toolDetails(selectedTool, "selected-tool-heading")}
  </aside>
</div>

<p class="mt-5 mb-0 text-sm leading-relaxed text-[var(--muted-ink)]">
  My shell configuration and the full Brewfile live in my
  <a class="font-mono" href="https://github.com/JaKXz/.zsh-custom">dotfiles →</a>
</p>

<style>
  .map-viewport.is-dragging {
    cursor: grabbing;
    user-select: none;
  }

  .map-viewport.is-dragging :global(*) {
    cursor: grabbing;
  }

  .landmark[aria-pressed="true"] {
    border-color: var(--border-strong);
  }

  .landmark[aria-pressed="true"] .landmark-marker {
    color: var(--accent);
    box-shadow: 0 0 0 0.2rem color-mix(in srgb, var(--accent) 16%, transparent);
  }
</style>
