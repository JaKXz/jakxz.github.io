<script>
  import { postsPerPage } from "#lib/config.js";
  import NavigationControl from "./NavigationControl.svelte";

  /**
   * @typedef {Object} Props
   * @property {number} currentPage
   * @property {number} totalPosts
   * @property {string} [path]
   */

  /** @type {Props} */
  let { currentPage, totalPosts, path = "/learning/page" } = $props();

  let pagesAvailable = $derived(Math.ceil(totalPosts / postsPerPage));

  const isCurrentPage = (page) => page == currentPage;
</script>

{#key currentPage}
  {#if pagesAvailable > 1}
    <nav aria-label="Pagination navigation" class="m-0 mb-4">
      <ul class="m-0 flex list-none flex-wrap justify-start gap-2 p-0">
        {#each Array.from({ length: pagesAvailable }, (_, i) => i + 1) as page (path + "/" + page)}
          <li class="m-0">
            <NavigationControl
              href="{path}/{page}"
              aria-current={isCurrentPage(page)}
              class="h-[2em] w-[2em]"
            >
              <span class="sr-only">
                {#if isCurrentPage(page)}
                  Current page:
                {:else}
                  Go to page
                {/if}
              </span>
              {page}
            </NavigationControl>
          </li>
        {/each}
      </ul>
    </nav>
  {/if}
{/key}
