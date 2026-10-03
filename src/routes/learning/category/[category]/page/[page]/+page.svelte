<script>
  import CategoryPostsPage from "$lib/components/CategoryPostsPage.svelte";

  let { data } = $props();
</script>

<CategoryPostsPage
  category={data.category}
  posts={data.posts}
  page={data.page}
  totalPosts={data.totalPosts}
/>
