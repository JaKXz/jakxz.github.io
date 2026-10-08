<script>
  import { siteTitle, siteDescription, siteURL, siteLink } from "$lib/config";

  let { data } = $props();
</script>

<svelte:head>
  <title>{siteTitle} | Staff Dev Resume</title>
  <meta name="description" content="{siteTitle} - {siteDescription} Resume" />
</svelte:head>

<div class="resume-layout contents">
  <div class="print-only print-title flex justify-between">
    <h1 class="last-line-underline"><span>{siteTitle}</span></h1>
    <p class="text-right">
      {data.email}<br />
      <a href={siteLink}>{siteURL}</a><br />
      {data.phone}
    </p>
  </div>

  <article>
    <div class="resume-first-page contents">
      <aside class="technical">
        <data.TechnicalContent />
      </aside>
      <section class="experience">
        <data.ExperienceContent />
      </section>
      <section class="oss">
        <data.OpenSourceContent />
      </section>
    </div>
    <section class="education">
      <data.EducationContent />
    </section>
  </article>
</div>

<style lang="scss">
  .education :global(.captions) {
    font-size: 0.8rem;
  }

  article :global(h2:first-of-type) {
    margin-top: 0;
  }

  article {
    display: grid;
    row-gap: 4.5rem;

    @media print {
      display: block;
      min-height: 0;
      font-size: 10pt;
      line-height: 1.4;
    }
  }

  @media print {
    .resume-layout {
      display: grid;
      // Chromium resolves 100vh to the printable page area, excluding page margins.
      height: 100vh;
      grid-template-rows: auto minmax(0, 1fr);
    }

    .resume-first-page {
      display: grid;
      height: 100%;
      column-gap: 2rem;
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

    .education {
      width: 33%;
    }

    h1 {
      margin-bottom: 2rem;
    }

    article :global(h2) {
      break-after: avoid;
    }

    .education :global(.captions) {
      font-size: 0.5rem;
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
