<script>
  import ChapterList from '$lib/components/ChapterList.svelte';
  import { Bookmark, Clock, Github, List, Youtube } from '@lucide/svelte';

  let { chapters, chapterIndex, meta, slug, chapterSlug } = $props();
</script>

<div class="lg:w-1/4 hidden lg:block">
  <div class="sticky top-24 bg-[#0c1a28]/80 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden shadow-lg">
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

    <!-- Additional resources -->
    <div class="p-4 border-t border-white/10 bg-[#0c1a28]/50 hidden lg:block">
      <div class="text-sm text-slate-400">
        <div class="flex items-center mb-2">
          <Bookmark size={14} class="mr-2 text-[#00BBBB]" />
          <span class="font-medium text-white">Resources</span>
        </div>
        <div class="space-y-2 mt-3">
          {#if meta.github}
            <a href={meta.github} target="_blank" rel="noopener noreferrer" class="flex items-center text-slate-300 hover:text-[#00BBBB] transition-colors">
              <Github size={14} class="mr-2" />
              <span>GitHub Repository</span>
            </a>
          {/if}
          {#if meta.youtube_url}
            <a href={`https://youtu.be/${meta.youtube_url}`} target="_blank" rel="noopener noreferrer" class="flex items-center text-slate-300 hover:text-red-400 transition-colors">
              <Youtube size={14} class="mr-2" />
              <span>Video Tutorial</span>
            </a>
          {/if}
          <div class="flex items-center text-slate-300">
            <Clock size={14} class="mr-2" />
            <span>Est. time: 10-15 min</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
