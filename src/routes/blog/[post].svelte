<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script context="module">
  export const load = async ({ params }) => {
    try {
      const post = await import(`../../lib/posts/${params.post}.md`);
      let coverCaption, imageAlt;
      if (post.metadata.coverImage) {
        const [, , id] = post.metadata.coverImage.split("-");
        const { alt_description, user } = await fetch(
          `https://api.unsplash.com/photos/${id}`,
          {
            headers: {
              Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
            },
          }
        ).then((res) => res.json());
        imageAlt = alt_description;
        coverCaption = user
          ? {
              author: user.name,
              authorUrl: user.links.html,
            }
          : null;
      }

      return {
        props: {
          PostContent: post.default,
          meta: { ...post.metadata, slug: params.post, coverCaption, imageAlt },
        },
      };
    } catch (error) {
      return {
        status: 404,
        error: error.message,
      };
    }
  };
</script>

<script>
  export let PostContent;
  export let meta;

  const {
    title,
    excerpt,
    date,
    updated,
    coverImage,
    coverWidth,
    coverHeight,
    categories,
    imageAlt,
    coverCaption,
  } = meta;
</script>

<svelte:head>
  <!-- Be sure to add your image files and un-comment the lines below -->
  <title>{title}</title>
  <meta data-key="description" name="description" content={excerpt} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={title} />
  <meta name="twitter:title" content={title} />
  <meta property="og:description" content={excerpt} />
  <meta name="twitter:description" content={excerpt} />
  <!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
  <meta property="og:image:width" content={coverWidth} />
  <meta property="og:image:height" content={coverHeight} />
  <!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<article class="post">
  <figure class="cover-image">
    <img
      src={coverImage}
      alt={imageAlt || ""}
      style="aspect-ratio: {coverWidth} / {coverHeight};"
      width={coverWidth}
      height={coverHeight} />
    {#if !!coverCaption}
      <figcaption>
        Photo by
        <a
          href={`${coverCaption.authorUrl}?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`}
          >{coverCaption.author}</a>
        on
        <a
          href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >Unsplash</a>
      </figcaption>
    {:else if imageAlt}
      <figcaption>{imageAlt}</figcaption>
    {/if}
  </figure>

  <h1>{title}</h1>

  <div class="meta">
    <b>Published:</b>
    {date}
    <br />
    <b>Updated:</b>
    {updated}
  </div>

  <svelte:component this={PostContent} />

  {#if categories}
    <aside class="post-footer">
      <h2>Posted in:</h2>
      <ul>
        {#each categories as category}
          <li>
            <a href="/blog/category/{category}/">
              {category}
            </a>
          </li>
        {/each}
      </ul>
    </aside>
  {/if}
</article>
