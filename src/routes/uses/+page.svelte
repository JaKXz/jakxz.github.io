<script>
  import { siteTitle } from "$lib/config";

  const sections = [
    {
      id: "coding-and-browsing",
      title: "Coding & browsing",
      position: [5, 5],
      terrain: {
        viewBox: "0 0 490 640",
        origin: [238, 326],
        contour:
          "M-225-247 C-229-310-114-347-35-313 C35-345 144-299 174-206 C190-143 223-116 215-43 C228 27 170 86 185 151 C190 243 112 296 37 285 C-37 322-133 287-158 205 C-214 156-193 89-222 22 C-251-49-197-104-218-169 C-238-204-222-226-225-247 Z",
        elevations: [
          { x: 63, y: 290, angle: -70, label: "100 m" },
          { x: 205, y: 210, angle: -25, label: "200 m" },
          { x: 220, y: 358, angle: 15, label: "300 m" },
        ],
      },
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
      terrain: {
        viewBox: "500 0 500 330",
        origin: [770, 170],
        contour:
          "M-205-92 C-206-150-109-178-44-149 C14-186 124-166 168-110 C220-102 242-27 206 28 C220 94 139 139 74 120 C2 168-58 103-115 110 C-179 117-210 63-191 14 C-226-24-221-61-205-92 Z",
        elevations: [
          { x: 920, y: 68, angle: 25, label: "100 m" },
          { x: 680, y: 176, angle: -15, label: "200 m" },
        ],
      },
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
      terrain: {
        viewBox: "500 330 500 310",
        origin: [760, 518],
        contour:
          "M-210-85 C-215-139-148-174-90-150 C-25-182 64-164 94-124 C162-145 223-92 207-34 C251 23 204 102 131 105 C125 158 50 167 1 135 C-65 170-116 148-143 102 C-215 103-230 38-206-3 C-238-30-231-62-210-85 Z",
        elevations: [
          { x: 925, y: 525, angle: 50, label: "100 m" },
          { x: 680, y: 480, angle: 20, label: "200 m" },
        ],
      },
      tools: [
        {
          name: "1Password",
          position: [55, 64],
          href: "https://1password.com/",
          description: "Password management, with the 1Password CLI for terminal access.",
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

  const terrain = sections.map((section) => section.terrain);
  const contourScales = [1, 0.82, 0.64, 0.46, 0.28];

  let selectedName = $state(sections[0].tools[0].name);
  let selectedTool = $derived(
    sections.flatMap((section) => section.tools).find((tool) => tool.name === selectedName),
  );
</script>

<svelte:head>
  <title>{siteTitle} | Uses</title>
</svelte:head>

{#snippet topography(viewBox, regions)}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-full w-full text-[var(--border)]"
    {viewBox}
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    focusable="false"
  >
    {#each regions as region (region.viewBox)}
      <g
        transform={`translate(${region.origin.join(" ")})`}
        fill="none"
        stroke="currentColor"
        stroke-linejoin="round"
      >
        {#each contourScales as scale, index (scale)}
          <path
            class={index === 2 ? "text-[var(--border-strong)]" : ""}
            d={region.contour}
            transform={`scale(${scale})`}
            stroke-width={index === 2 ? 1.5 : 1}
            stroke-opacity={index === 2 ? 0.7 : 0.55}
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
        {#each region.elevations as elevation (elevation.label)}
          <text
            x={elevation.x}
            y={elevation.y}
            transform={`rotate(${elevation.angle} ${elevation.x} ${elevation.y})`}
            >{elevation.label}</text
          >
        {/each}
      </g>
    {/each}
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

<div class="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
  <div
    class="rounded-1 xs:p-6 relative isolate grid min-w-0 gap-8 border border-[var(--border)] bg-[var(--sheet-muted)] p-4 lg:block lg:h-128 lg:p-0"
  >
    <div
      class="rounded-1 pointer-events-none absolute inset-0 -z-1 hidden overflow-hidden lg:block"
    >
      {@render topography("0 0 1000 640", terrain)}
    </div>
    {#each sections as section (section.id)}
      <section
        class="relative isolate min-w-0 lg:static lg:[isolation:auto]"
        aria-labelledby={section.id}
        style:--region-x={`${section.position[0]}%`}
        style:--region-y={`${section.position[1]}%`}
      >
        <div class="pointer-events-none absolute -inset-3 -z-1 overflow-hidden lg:hidden">
          {@render topography(section.terrain.viewBox, [section.terrain])}
        </div>
        <h2
          id={section.id}
          tabindex="-1"
          class="m-0 mb-5 w-fit scroll-mt-8 bg-[var(--sheet-muted)] px-2 py-1 font-mono text-sm leading-relaxed tracking-wide lg:absolute lg:top-[var(--region-y)] lg:left-[var(--region-x)] lg:max-w-[44%]"
        >
          {section.title}
        </h2>
        <ul class="m-0 grid list-none gap-3 p-0">
          {#each section.tools as tool (tool.name)}
            <li
              class="m-0 min-w-0 lg:absolute lg:top-[var(--tool-y)] lg:left-[var(--tool-x)] lg:w-max lg:max-w-[24%]"
              style:--tool-x={`${tool.position[0]}%`}
              style:--tool-y={`${tool.position[1]}%`}
            >
              <button
                type="button"
                class="landmark group rounded-1 inline-flex min-h-11 max-w-full cursor-pointer items-center gap-3 border border-transparent bg-[var(--sheet)] px-3 py-2 text-left font-mono text-sm text-[var(--ink)] transition-colors duration-160 hover:border-[var(--border-strong)] motion-reduce:transition-none"
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
                  class="rounded-1 mt-3 border border-[var(--border)] bg-[var(--sheet)] p-4 lg:hidden"
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

  <aside
    id="selected-tool-details"
    class="rounded-1 hidden min-w-0 border border-[var(--border)] bg-[var(--sheet-muted)] p-6 [box-shadow:var(--shadow-soft)] lg:block"
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
  .landmark[aria-pressed="true"] {
    border-color: var(--border-strong);
  }

  .landmark[aria-pressed="true"] .landmark-marker {
    color: var(--accent);
    box-shadow: 0 0 0 0.2rem color-mix(in srgb, var(--accent) 16%, transparent);
  }
</style>
