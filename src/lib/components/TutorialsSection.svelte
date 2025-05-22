<script lang="ts">
  import type { Article } from '$lib/types';
  import ArticleCard from './ArticleCard.svelte';

  // Mock data for the tutorials - this would normally come from your content system
  interface Props {
    articles: Article[];
  }

  let { articles }: Props = $props();
</script>

<div id="tutorials" class="relative overflow-hidden text-white p-8">
  <div class="max-w-7xl mx-auto relative z-10">
    <!-- Main content -->
    <div class="">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        {#each articles as article (article.slug)}
          <ArticleCard {article} />
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  /* Animation keyframes */
  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.6;
    }
  }

  /* Hover state for entire category section */
</style>
