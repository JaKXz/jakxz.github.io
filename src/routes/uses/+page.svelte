<script>
  import { siteTitle } from "$lib/config";

  const sections = [
    {
      id: "coding-and-browsing",
      title: "Coding & browsing",
      tools: [
        {
          name: "Zed",
          href: "https://zed.dev/",
          description: "My <3 editor.",
        },
        {
          name: "Zen",
          href: "https://zen-browser.app/",
          description: `"A calmer internet." Based on Firefox.`,
        },
        {
          name: "WezTerm",
          href: "https://wezterm.org/",
          description:
            "My terminal + multiplexer, using the Dracula colour scheme and JetBrains Mono Nerd Font.",
        },
        {
          name: "Oh My Zsh",
          href: "https://ohmyz.sh/",
          description:
            "+ custom Powerlevel10k prompt",
        },
        {
          name: "zoxide",
          href: "https://github.com/ajeetdsouza/zoxide",
          description: "Directory navigation, wired into my cd command.",
        },
        {
          name: "eza",
          href: "https://eza.rocks/",
          description: "Directory listings with Git status and file details.",
        },
        {
          name: "jq",
          href: "https://jqlang.org/",
          description: "Filtering and reshaping JSON from the command line.",
        },
      ],
    },
    {
      id: "version-control-and-setup",
      title: "Version control & setup",
      tools: [
        {
          name: "Jujutsu",
          href: "https://github.com/jj-vcs/jj",
          description: "Version control alongside Git, with jj integrated into my shell.",
        },
        {
          name: "GitHub CLI",
          href: "https://cli.github.com/",
          description: "Working with GitHub from the terminal.",
        },
        {
          name: "Homebrew",
          href: "https://brew.sh/",
          description: "MacOS' package manager; check out my full Brewfile.",
        },
        {
          name: "GNU Stow",
          href: "https://www.gnu.org/software/stow/",
          description: "Symlinking my shell and application configuration into place.",
        },
      ],
    },
    {
      id: "everyday-macos",
      title: "Everyday macOS",
      tools: [
        {
          name: "1Password",
          href: "https://1password.com/",
          description: "Password management, with the 1Password CLI for terminal access.",
        },
        {
          name: "Rectangle",
          href: "https://rectangleapp.com/",
          description: "Keyboard shortcuts for moving and resizing windows.",
        },
        {
          name: "Maccy",
          href: "https://maccy.app/",
          description: "Clipboard history on macOS.",
        },
        {
          name: "BetterDisplay",
          href: "https://github.com/waydabber/BetterDisplay",
          description: "Managing displays and their settings.",
        },
      ],
    },
  ];
</script>

<svelte:head>
  <title>{siteTitle} | Uses</title>
</svelte:head>

<header class="max-w-46rem mb-12">
  <p class="font-600 mb-3 text-xs tracking-[0.18em] text-[var(--accent)] uppercase">My setup</p>
  <h1 class="last-line-underline"><span>Uses</span></h1>
  <p class="m-0 text-lg text-[var(--muted-ink)]">
    A few of the tools behind my day-to-day work on macOS.
  </p>
</header>

<div class="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_13rem]">
  <aside
    class="rounded-1 xs:p-6 min-w-0 border border-[var(--border)] bg-[var(--sheet-muted)] p-5 [box-shadow:var(--shadow-soft)] md:sticky md:top-8 md:col-start-2 md:row-start-1"
  >
    <nav aria-label="On this page">
      <p
        class="font-600 mt-0 mb-4 font-mono text-xs tracking-[0.12em] text-[var(--muted-ink)] uppercase"
      >
        On this page
      </p>
      <ul class="m-0 flex list-none flex-wrap gap-x-5 gap-y-3 p-0 text-sm md:flex-col">
        {#each sections as section (section.id)}
          <li class="m-0"><a href={`#${section.id}`}>{section.title}</a></li>
        {/each}
      </ul>
    </nav>
    <div class="mt-6 border-t border-[var(--border)] pt-5 text-sm">
      <p class="mt-0 mb-3 leading-relaxed text-[var(--muted-ink)]">
        My shell configuration and the full Brewfile live in my
      <a class="font-mono" href="https://github.com/JaKXz/.zsh-custom">dotfiles →</a>
      </p>
    </div>
  </aside>

  <div class="grid min-w-0 gap-6 md:col-start-1 md:row-start-1">
    {#each sections as section (section.id)}
      <section
        aria-labelledby={section.id}
        class="rounded-1 xs:p-6 min-w-0 border border-[var(--border)] bg-[var(--sheet-muted)] p-5 [box-shadow:var(--shadow-soft)]"
      >
        <h2 id={section.id} tabindex="-1" class="xs:text-3xl m-0 scroll-mt-8 text-2xl">
          {section.title}
        </h2>
        <dl class="mt-6 mb-0 divide-y divide-[var(--border)]">
          {#each section.tools as tool (tool.name)}
            <div class="py-5 first:pt-0 last:pb-0">
              <dt class="font-600 text-lg leading-snug">
                <a href={tool.href}>{tool.name}</a>
              </dt>
              <dd class="mt-2 mb-0 ml-0 leading-relaxed text-[var(--muted-ink)]">
                {tool.description}
              </dd>
            </div>
          {/each}
        </dl>
      </section>
    {/each}
  </div>
</div>
