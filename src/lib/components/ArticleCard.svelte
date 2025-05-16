<script lang="ts">
  import { formatDate } from '$lib/utils';
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { Calendar, Youtube, Play, ArrowRight, Bookmark, Clock, GitBranch, BookOpen } from '@lucide/svelte';
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

<div
  class="relative bg-[#0c1a28]/80 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:border-[#00BBBB]/30 group"
  in:fly={{ y: 30, duration: 800, delay: 300, easing: quintOut }}
>
  <!-- Left accent border -->
  <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00BBBB] to-[#9333ea] opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

  <!-- Background glow effect -->
  <div class="absolute inset-0 bg-gradient-to-br from-[#00BBBB]/5 to-[#9333ea]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

  <div class="p-6 pl-8 relative">
    <!-- Article metadata -->
    <div class="flex flex-wrap gap-3 mb-5">
      <!-- Date -->
      {#if article.date}
        <div class="flex items-center text-amber-300/90 text-sm">
          <Calendar size={16} class="mr-1.5" />
          {formatDate(article.date)}
        </div>
      {/if}

      <!-- Read time estimate -->
      <div class="flex items-center text-slate-400 text-sm">
        <Clock size={16} class="mr-1.5" />
        {readTime} read
      </div>
    </div>

    <!-- Title -->
    <h1 class="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#00BBBB] transition-colors duration-300">
      {article.title}
    </h1>

    <!-- Description -->
    {#if article.description}
      <p class="text-slate-300 mb-6 leading-relaxed">
        {article.description}
      </p>
    {/if}

    <!-- Categories -->
    {#if article.categories && article.categories.length > 0}
      <div class="flex flex-wrap gap-2 mb-6">
        {#each article.categories as category, i (i)}
          <a
            href={`/categories/${category}`}
            class="px-3 py-1.5 rounded-full bg-[#131836] text-xs font-medium text-slate-300 border border-white/10 hover:bg-[#00BBBB]/10 hover:text-[#00BBBB] hover:border-[#00BBBB]/30 transition-colors duration-300"
          >
            #{category}
          </a>
        {/each}
      </div>
    {/if}

    <!-- Action buttons -->
    <div class="flex flex-wrap gap-3 mt-8">
      <!-- Read button -->
      <a href={`/articles/${article.slug}`} class="px-5 py-2.5 rounded-lg bg-[#00BBBB] text-white font-medium hover:bg-[#00a0a0] transition-colors duration-300 flex items-center gap-2">
        <BookOpen size={18} />
        Read Article
      </a>

      <!-- Video button -->
      {#if article.youtube_url}
        <a
          href={article.youtube_url}
          target="_blank"
          rel="noopener noreferrer"
          class="px-5 py-2.5 rounded-lg bg-red-500/80 text-white font-medium hover:bg-red-500 transition-colors duration-300 flex items-center gap-2"
        >
          <Play size={18} />
          Watch Video
        </a>
      {/if}

      <!-- GitHub button -->
      {#if article.github}
        <a
          href={article.github}
          target="_blank"
          rel="noopener noreferrer"
          class="px-5 py-2.5 rounded-lg bg-[#131836] text-white font-medium hover:bg-[#1a2542] transition-colors duration-300 flex items-center gap-2"
        >
          <GitBranch size={18} />
          Source Code
        </a>
      {/if}
    </div>
  </div>
</div>
