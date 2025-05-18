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
    class="card-container relative bg-[rgba(10,25,41,0.7)] backdrop-blur-sm border border-[rgba(0,187,187,0.2)] rounded-lg overflow-hidden transition-all duration-300 shadow-md hover:border-[rgba(0,187,187,0.5)] hover:shadow-[0_5px_15px_rgba(0,187,187,0.15)] hover:-translate-y-1"
  >
    <!-- Left accent bar -->
    <div class="card-accent absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00BBBB] via-[#00BBBB] to-[#9333ea] transition-all duration-300"></div>

    <!-- Bottom glow effect on hover -->
    <div class="card-bottom-glow absolute -bottom-[5px] left-[5%] right-[5%] h-[10px] rounded-[50%] bg-[#00BBBB] blur-[10px] opacity-0 transition-opacity duration-300 -z-[1]"></div>

    <div class="relative p-3 pl-[calc(1.5rem+4px)]">
      <!-- Header with ID and date -->
      <div class="flex justify-between items-center mb-3">
        <!-- Article ID -->
        <div class="px-2 py-1 bg-[rgba(0,187,187,0.1)] border border-[rgba(0,187,187,0.2)] rounded">
          <span class="text-xs font-mono text-[rgba(0,187,187,0.8)] flex items-center">
            <Hash size={12} class="mr-1" />
            {article.slug.substring(0, 8)}
          </span>
        </div>

        <!-- Date with fixed-width font -->
        {#if article.date}
          <div class="flex items-center text-xs text-[rgba(251,191,36,0.8)] font-mono">
            <Calendar size={12} class="mr-1" />
            {formatDate(article.date)}
          </div>
        {/if}
      </div>

      <!-- Content -->
      <div class="flex gap-2">
        <!-- Icon with glow effect -->
        {#if article.icon}
          <div class="mr-2 flex-shrink-0">
            <div class="card-icon relative w-14 h-14 bg-[rgba(10,15,25,0.5)] border border-[rgba(0,187,187,0.2)] rounded-lg flex items-center justify-center transition-all duration-300">
              <img src={article.icon} alt="" class="max-w-[70%] max-h-[70%] object-contain" />
            </div>
          </div>
        {/if}

        <div>
          <h3 class="card-title text-xl font-bold text-white mb-2 transition-colors duration-300">
            {article.title}
          </h3>

          {#if article.description}
            <p class="text-[rgba(255,255,255,0.7)] text-xs leading-relaxed">
              {article.description}
            </p>
          {/if}
        </div>
      </div>

      <!-- Footer with badges -->
      <div class="mt-3 pt-3 border-t border-[rgba(255,255,255,0.1)] flex justify-between items-center">
        <div class="flex gap-3">
          {#if article.youtube_url}
            <div class="card-badge flex items-center text-xs text-[#f87171] bg-[rgba(248,113,113,0.1)] border border-[rgba(248,113,113,0.2)] px-2 py-1 rounded transition-transform duration-300">
              <Youtube size={12} class="mr-1" />
              Video
            </div>
          {/if}

          {#if article.github}
            <div class="card-badge flex items-center text-xs text-[#00BBBB] bg-[rgba(0,187,187,0.1)] border border-[rgba(0,187,187,0.2)] px-2 py-1 rounded transition-transform duration-300">
              <Github size={12} class="mr-1" />
              Code
            </div>
          {/if}
        </div>

        <div class="text-sm font-medium text-[#00BBBB] flex items-center">
          Explore
          <ArrowRight size={16} class="ml-1 card-arrow transition-transform duration-300" />
        </div>
      </div>
    </div>
  </div>
</a>

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
