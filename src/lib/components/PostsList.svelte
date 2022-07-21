<script>
  export let posts = [];
</script>

<h2>🖍 Writing:</h2>
<p>Not because anyone needs it but because I need to practice.</p>
<ul class="posts-list">
  {#each posts as post}
    <li>
      <article>
        <a href="/blog/{post.slug}">
          <h3>
            {post.title}
          </h3>
        </a>
      </article>

      <p>{post.excerpt}</p>
    </li>
  {/each}
</ul>

<style>
  h2:first-of-type {
    margin-top: 0;
  }
</style>
