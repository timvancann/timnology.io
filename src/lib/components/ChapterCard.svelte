<script lang="ts">
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { Youtube, ArrowRight } from '@lucide/svelte';
  import type { Chapter } from '$lib/types';

  // Properties
  let { chapter, isActive, index } = $props<{
    chapter: Chapter;
    isActive: boolean;
    index: number;
  }>();

  // Event handlers
  function handleClick() {
    const selectChapterEvent = new CustomEvent('selectChapter', {
      detail: { index }
    });
    window.dispatchEvent(selectChapterEvent);
  }
</script>

<button
  onclick={handleClick}
  class={`w-full text-left p-3 rounded-lg border border-white/10 transition-all duration-300 mb-2 bg-[#0c1a28]/80 hover:border-[#00BBBB]/30 hover:shadow-lg hover:shadow-[#00BBBB]/5 hover:translate-y-[-2px] group relative overflow-hidden
${isActive ? 'bg-[#00BBBB]/10 border-[#00BBBB]/40 ' : ''} `}
  in:fly={{ y: 20, duration: 700, delay: 100 * index, easing: quintOut }}
>
  <!-- Left accent bar -->
  <div class="absolute top-0 left-0 w-1 h-full bg-[#00BBBB] opacity-0 transition-opacity duration-300 group-hover:opacity-70" class:opacity-100={isActive}></div>

  <!-- Chapter number badge -->
  <div
    class={`absolute top-3 right-3 flex items-center justify-center w-6 h-6 rounded-full bg-[#131836] border border-white/10 text-xs font-medium transition-all duration-300 group-hover:bg-[#00BBBB]/10 group-hover:border-[#00BBBB]/30  ${isActive ? 'bg-[#00BBBB]/20 border-[#00BBBB]/50' : ''}`}
  >
    {index + 1}
  </div>

  <!-- Content -->
  <div class="pl-3">
    <h3 class="text-white font-medium pr-8 transition-colors duration-300 group-hover:text-[#00BBBB]" class:text-[#00BBBB]={isActive}>
      {chapter.title}
    </h3>

    {#if chapter.description}
      <p class="text-sm text-slate-400 mt-1 line-clamp-2">{chapter.description}</p>
    {/if}

    <div class="flex items-center mt-3 pt-2 border-t border-white/5">
      {#if chapter.youtube_url}
        <span class="inline-flex items-center text-xs text-red-400">
          <Youtube size={14} class="mr-1" />
          Video available
        </span>
      {/if}

      {#if chapter.date}
        <span class="text-xs text-slate-500 ml-auto">
          {new Date(chapter.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
      {/if}
    </div>
  </div>

  <!-- Arrow indicator for current chapter -->
  <ArrowRight
    size={16}
    class={`absolute right-3 bottom-3 transform -translate-y-1 opacity-0 transition-all duration-300 text-[#00BBBB] group-hover:opacity-100 group-hover:translate-y-0
    ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}
    `}
  />
</button>
