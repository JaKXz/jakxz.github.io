<script>
  import { siteTitle, siteDescription, siteURL, siteLink } from "$lib/config";

  let { data } = $props();
</script>

<svelte:head>
  <title>{siteTitle} | Staff Dev Resume</title>
  <meta name="description" content="{siteTitle} - {siteDescription} Resume" />
</svelte:head>

<!-- Chromium resolves print:h-screen (100vh) to the printable page area, excluding page margins. -->
<div class="contents print:grid print:h-screen print:grid-rows-[auto_minmax(0,1fr)]">
  <div class="print-only print-title flex justify-between">
    <h1 class="last-line-underline print:mb-8"><span>{siteTitle}</span></h1>
    <p class="text-right">
      {data.email}<br />
      <a href={siteLink}>{siteURL}</a><br />
      {data.phone}
    </p>
  </div>

  <article class="grid gap-y-18 print:block print:min-h-0 print:text-[10.5pt]">
    <div class="resume-first-page contents print:grid print:h-full print:gap-x-8">
      <aside class="technical print:text-[10.2pt] print:leading-[1.4]">
        <data.TechnicalContent />
      </aside>
      <section class="experience">
        <data.ExperienceContent />
      </section>
      <section class="oss print:text-[10.2pt] print:leading-[1.4]">
        <data.OpenSourceContent />
      </section>
    </div>
    <section class="education print:w-[33%] print:text-[10.2pt]">
      <data.EducationContent />
    </section>
  </article>
</div>

<style lang="scss">
  article :global(h2:first-of-type) {
    margin-top: 0;
  }

  @media print {
    .resume-first-page {
      grid-template-rows: minmax(0, 1fr) auto;
      grid-template-columns: 33% 1fr;
      grid-template-areas:
        "technical experience"
        "oss experience";

      .technical {
        grid-area: technical;
      }
      .experience {
        grid-area: experience;
      }
      .oss {
        grid-area: oss;
      }
    }

    article :global(h2) {
      break-after: avoid;
    }

    .education :global(img) {
      width: 50px;
      height: 50px;
    }

    article :global(ol),
    article :global(ul:not(ul ul)) {
      padding-inline-start: 27px;
      list-style-type: square;

      :global(::marker) {
        color: var(--accent);
      }
    }
  }
</style>
