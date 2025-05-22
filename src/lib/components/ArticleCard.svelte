<script lang="ts">
  import { formatDate } from '$lib/utils';
  import { onMount } from 'svelte';
  import { Calendar, Youtube, ArrowRight, Hash, Github } from '@lucide/svelte';
  import type { Article } from '$lib/types';

  // Properties
  let { article } = $props<{
    article: Article;
  }>();

  // State
  let readTime = '10 min';

  // Calculate estimated read time based on content length
  onMount(() => {
    // This is a placeholder function - in a real app you would parse the actual content
    // and calculate based on word count (typically 200-250 words per minute)
    const wordCount = article.description ? article.description.split(/\s+/).length : 0;
    // Just a placeholder for this example
    readTime = `${Math.max(5, Math.ceil(wordCount / 200))} min`;
  });
</script>

<a href={`/article/${article.slug}`} class="block no-underline">
  <!-- Card with hover effects using classes -->
  <div
    class="card-container relative bg-[rgba(10,25,41,0.7)] backdrop-blur-sm border border-[rgba(0,187,187,0.2)] rounded-lg overflow-hidden transition-all duration-300 shadow-md hover:border-[rgba(0,187,187,0.5)] hover:shadow-[0_5px_15px_rgba(0,187,187,0.15)]"
  >
    <!-- Left accent bar -->
    <div class="card-accent absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#00BBBB] via-[#00BBBB] to-[#9333ea] transition-all duration-300"></div>

    <!-- Bottom glow effect on hover -->

    <div class="relative p-3">
      <!-- Header with ID and date -->
      <div class="flex justify-between items-start mb-3">
        <!-- Article ID -->
        <div class="relative">
          <div class="absolute inset-0 bg-teal-400/25 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img src={article.icon} alt="" class="relative w-12 h-12 rounded-lg object-cover border border-teal-500/30 group-hover:border-teal-400/50 transition-colors" />
        </div>

        <!-- Date with fixed-width font -->
        <div class="text-right">
          <div class="flex items-center text-xs text-teal-400/90 font-mono mb-1.5">
            <Calendar size={12} class="mr-1.5" />
            {formatDate(article.date)}
          </div>
          <div class="flex gap-2 justify-end">
            {#if article.youtube_url}
              <div class="w-4 h-4 text-red-400 opacity-70 group-hover:opacity-100 transition-opacity">
                <Youtube size={14} />
              </div>
            {/if}
            {#if article.github}
              <div class="w-4 h-4 text-teal-400 opacity-70 group-hover:opacity-100 transition-opacity">
                <Github size={14} />
              </div>
            {/if}
          </div>
        </div>
      </div>

      <!-- Content -->

      <h3 class="text-xl font-bold text-white mb-2 transition-colors duration-300">
        {article.title}
      </h3>

      {#if article.description}
        <p class="text-[rgba(255,255,255,0.7)] text-xs leading-relaxed">
          {article.description}
        </p>
      {/if}

      <!-- Footer with badges -->
      <div class="mt-3 pt-3 border-t border-[rgba(255,255,255,0.1)] flex justify-between items-center"></div>

      <div class="text-sm justify-between font-medium text-[#00BBBB] flex items-center">
        <div class="gap-2 inline-flex items-center">
          {#each article.categories as category (category)}
            <div class="text-xs text-[#01BBBB] bg-[#00BBBB]/10 rounded-full px-2 py-1 border border-[#00BBBB]/20 transition-all duration-300">
              {category}
            </div>
          {/each}
          <ArrowRight size={16} class="ml-1 card-arrow transition-transform duration-300" />
        </div>
      </div>
    </div>
  </div></a
>

<style>
  /* Hover effects using CSS */
  .card-container:hover .card-accent {
    box-shadow: 0 0 10px rgba(0, 187, 187, 0.5);
    background: linear-gradient(to bottom, #00bbbb, #9333ea);
  }

  .card-container:hover .card-icon {
    border-color: rgba(0, 187, 187, 0.5);
    box-shadow: 0 0 8px rgba(0, 187, 187, 0.3);
  }

  .card-container:hover .card-title {
    color: #00bbbb;
  }

  .card-container:hover .card-badge {
    transform: translateY(-0.125rem);
  }

  .card-container:hover .card-bottom-glow {
    opacity: 1;
  }

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
</style>
