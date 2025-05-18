<script>
  import ChapterList from '$lib/components/ChapterList.svelte';
  import { List, MenuSquare, X } from '@lucide/svelte';
  import { quintOut } from 'svelte/easing';
  import { fade, fly } from 'svelte/transition';

  let { chapters, chapterIndex, meta, slug, chapterSlug } = $props();
  let isOpen = $state(false);

  const toggleMenu = () => {
    isOpen = !isOpen;
  };
</script>

<div class="lg:hidden">
  {#if isOpen}
    <div
      class="fixed left-0 bottom-0 bg-[#0c1a28]/80 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden shadow-lg z-50"
      in:fly={{ y: 20, duration: 300, easing: quintOut }}
      out:fade={{ duration: 200 }}
    >
      <!-- Chapter list header -->
      <div class="p-4 border-b border-white/10 bg-gradient-to-r from-[#0c1a28] to-[#131836]">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <List size={18} class="mr-2 text-[#00BBBB]" />
            <h3 class="font-bold text-white">Chapters</h3>
          </div>
          <span class="text-sm text-slate-400">{chapterIndex + 1}/{chapters.length}</span>
        </div>
      </div>

      <!-- Progress indicator -->
      <div class="relative h-1 bg-[#131836]">
        <div class="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00BBBB] to-[#9333ea]" style={`width: ${((chapterIndex + 1) / chapters.length) * 100}%`}></div>
      </div>

      <!-- Chapter list -->
      <div class="p-4 overflow-y-auto">
        <ChapterList {chapters} articleSlug={slug} activeChapter={chapterSlug} />
      </div>
    </div>

    <!-- Close button - improved design -->
    <button onclick={toggleMenu} class="fixed bottom-4 right-4 z-50 p-0 w-14 h-14 flex items-center justify-center transition-all duration-300 group" aria-label="Close chapter menu">
      <!-- Animated background with gradient border -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#00BBBB] to-[#9333ea] rounded-full opacity-80 group-hover:opacity-100 transition-opacity"></div>
      <div class="absolute inset-0.5 bg-[#0c1a28] rounded-full"></div>

      <!-- Animated icon -->
      <X size={22} class="relative z-10 text-white group-hover:scale-110 group-hover:rotate-90 transition-all duration-300" />

      <!-- Glow effect -->
      <div class="absolute -inset-1 bg-gradient-to-br from-[#00BBBB] to-[#9333ea] rounded-full opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"></div>
    </button>
  {:else}
    <!-- Menu open button - improved design -->
    <button onclick={toggleMenu} class="fixed bottom-4 right-4 z-50 p-0 w-14 h-14 flex items-center justify-center transition-all duration-300 group" aria-label="Open chapter menu">
      <!-- Animated background with gradient border -->
      <div class="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full opacity-70 group-hover:opacity-90 transition-opacity"></div>
      <div class="absolute inset-0.5 bg-[#0c1a28] rounded-full"></div>

      <!-- Icon with counter badge -->
      <div class="relative z-10">
        <List size={22} class="text-white group-hover:scale-110 transition-all duration-300" />
      </div>

      <!-- Pulsing effect -->
      <div class="absolute -inset-1 bg-amber-400 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
    </button>
  {/if}
</div>
