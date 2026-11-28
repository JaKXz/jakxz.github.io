<script lang="ts">
  import { postsPerPage } from "#lib/config.ts";
  import NavigationControl from "./NavigationControl.svelte";

  interface Props {
    currentPage: number;
    totalPosts: number;
    path?: string;
  }

  let { currentPage, totalPosts, path = "/learning/page" }: Props = $props();

  let pagesAvailable = $derived(Math.ceil(totalPosts / postsPerPage));

  const isCurrentPage = (page: number) => page === currentPage;
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
