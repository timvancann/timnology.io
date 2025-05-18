<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { Article } from '$lib/types';
  import CategoryHeader from './CategoryHeader.svelte';
  import ArticleCard from './ArticleCard.svelte';

  // Mock data for the tutorials - this would normally come from your content system
  interface Props {
    categorisedArticles: Map<string, Article[]>;
  }

  let { categorisedArticles }: Props = $props();
</script>

<div id="tutorials" class="min-h-screen relative overflow-hidden text-white p-8">
  <div class="max-w-7xl mx-auto relative z-10">
    <!-- Section header -->
    <div class="mb-10 text-center relative" in:fade={{ duration: 1000, delay: 300 }}>
      <h2 class="inline-block font-bold text-5xl mb-6 relative">
        <span class="absolute -top-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00BBBB] to-transparent" style="width: 100%; transition: width 0.8s ease-out;"></span>
        <span class="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00BBBB] to-transparent" style="width: 100%; transition: width 0.8s ease-out;"></span>
        <span class="text-white">Technical <span class="bg-gradient-to-r from-[#00BBBB] to-[#9333ea] bg-clip-text text-transparent">Tutorials</span></span>
      </h2>

      <p class="text-gray-400 max-w-3xl mx-auto text-lg mt-4" in:fade={{ duration: 800, delay: 800 }}>
        Advanced learning materials designed for developers seeking to expand their technical expertise
      </p>
    </div>

    <!-- Main content -->
    <div class="">
      {#each categorisedArticles.entries() as [category, articles], i (category)}
        <div data-category-id={category} class="my-8">
          <!-- Category header - from Teal/Orange -->
          <CategoryHeader {category} count={articles.length} {i} />

          <!-- Article cards grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {#each articles as article (article.slug)}
              <ArticleCard {article} />
            {/each}
          </div>
        </div>
      {/each}
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
