<script lang="ts">
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { Youtube } from '@lucide/svelte';
  import type { Chapter } from '$lib/types';

  // Properties
  let { chapters, articleSlug, activeChapter } = $props<{
    chapters: Chapter[];
    articleSlug: string;
    activeChapter: string | null;
  }>();
</script>

<div class="space-y-2">
  <!-- Main article link -->
  <a
    href={`/article/${articleSlug}`}
    class={`block w-full text-left p-2 rounded-lg border transition-all duration-300 mb-4
    ${activeChapter === null ? 'bg-[#00BBBB]/10 border-[#00BBBB]/40' : 'border-white/10 hover:bg-white/5 hover:border-white/20'}
`}
    in:fly={{ y: 20, duration: 500, delay: 100, easing: quintOut }}
  >
    <div class="font-medium text-center" class:text-[#00BBBB]={activeChapter === null}>Article Overview</div>
  </a>

  <!-- Chapter links -->
  {#each chapters as chapter, i (i)}
    <a
      href={`/article/${articleSlug}/${chapter.slug}`}
      class={`block w-full text-left p-2 rounded-lg border transition-all duration-300 hover:-translate-y-1 group relative
      ${activeChapter === chapter.slug ? 'bg-[#00BBBB]/10 border-[#00BBBB]/40' : 'border-white/10 hover:bg-white/5 hover:border-white/20'}
      `}
      in:fly={{ y: 20, duration: 500, delay: 150 + i * 50, easing: quintOut }}
    >
      <!-- Left accent line -->
      <div class="absolute top-0 left-0 w-1 h-full bg-[#00BBBB] opacity-0 transition-opacity duration-300 group-hover:opacity-50" class:opacity-100={activeChapter === chapter.slug}></div>

      <!-- Chapter number badge -->
      <div
        class={`absolute top-2 right-2 flex items-center justify-center w-6 h-6 rounded-full bg-[#131836] border border-white/10 text-xs font-medium text-slate-300 transition-all duration-300 group-hover:bg-[#00BBBB]/10 group-hover:border-[#00BBBB]/30
      ${activeChapter === chapter.slug ? 'bg-[#00BBBB]/20 border-[#00BBBB]/50 text-white' : ''}
      `}
      >
        {i + 1}
      </div>

      <div class="pl-3 pr-8">
        <!-- Title -->
        <div class="font-medium transition-colors duration-300 group-hover:text-[#00BBBB]" class:text-[#00BBBB]={activeChapter === chapter.slug}>
          {chapter.title}
        </div>

        <!-- Video indicator -->
        {#if chapter.youtube_url}
          <div class="flex items-center mt-2 text-xs text-red-400/80">
            <Youtube size={12} class="mr-1" />
            <span>Video available</span>
          </div>
        {/if}
      </div>
    </a>
  {/each}
</div>
