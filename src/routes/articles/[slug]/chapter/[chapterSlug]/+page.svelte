<script lang="ts">
  import { formatDate } from '$lib/utils';
  import { fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { Calendar, Github, Youtube, ArrowRight, Bookmark, Clock, List } from '@lucide/svelte';
  import ChapterList from '$lib/components/ChapterList.svelte';

  let { data } = $props();
  let meta = $derived(data.meta);
  let chapters = $derived(data.chapters);
  let currentChapter = $derived(data.currentChapter);
</script>

<!-- Using the same template as the article page with a different page title -->
<svelte:head>
  <title>{currentChapter.title} - {meta.title} | Timnology</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={`${currentChapter.title} - ${meta.title}`} />
  <meta property="og:description" content={currentChapter.description || meta.description} />
  <meta name="description" content={currentChapter.description || meta.description} />
</svelte:head>

<!-- Article Hero Section -->
<section class="pt-8 relative bg-gradient-to-b from-[#0a0118] to-[#0c1a28] overflow-hidden">
  <!-- Background elements -->
  <div class="absolute inset-0 z-0">
    <!-- Hex grid pattern -->
    <div
      class="absolute inset-0 opacity-[0.03]"
      style="background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2228%22%20height%3D%2249%22%20viewBox%3D%220%200%2028%2049%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%22hexagons%22%20fill%3D%22%2300BBBB%22%20fill-opacity%3D%221%22%20fill-rule%3D%22nonzero%22%3E%3Cpath%20d%3D%22M13.99%209.25l13%207.5v15l-13%207.5L1%2031.75v-15l12.99-7.5zM3%2017.9v12.7l10.99%206.34%2011-6.35V17.9l-11-6.34L3%2017.9zM0%2015l12.98-7.5V0h-2v6.35L0%2012.69v2.3zm0%2018.5L12.98%2041v8h-2v-6.85L0%2035.81v-2.3zM15%200v7.5L27.99%2015H28v-2.31h-.01L17%206.35V0h-2zm0%2049v-8l12.99-7.5H28v2.31h-.01L17%2042.15V49h-2z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')"
    ></div>

    <!-- Ambient glows -->
    <div class="absolute top-0 left-1/4 w-1/2 h-1/3 bg-gradient-to-b from-[#00BBBB]/10 to-transparent blur-3xl"></div>
    <div class="absolute bottom-0 right-1/4 w-1/2 h-1/3 bg-gradient-to-t from-[#9333ea]/10 to-transparent blur-3xl"></div>
  </div>

  <div class="container mx-auto px-4 relative z-10">
    <!-- Breadcrumb navigation -->
    <div class="mb-4" in:fade={{ duration: 600, delay: 100 }}>
      <div class="flex items-center text-sm">
        <a href="/" class="text-slate-400 hover:text-white transition-colors">Home</a>
        <span class="mx-2 text-slate-600">/</span>
        {#if meta.categories && meta.categories[0]}
          <a href={`/categories/${meta.categories[0]}`} class="text-slate-400 hover:text-white transition-colors">{meta.categories[0]}</a>
          <span class="mx-2 text-slate-600">/</span>
        {/if}
        <a href={`/articles/${meta.slug}`} class="text-slate-400 hover:text-white transition-colors">{meta.title}</a>
        <span class="mx-2 text-slate-600">/</span>
        <span class="text-[#00BBBB]">Chapter {currentChapter.index + 1}</span>
      </div>
    </div>

    <!-- Chapter title and metadata -->
    <div class="max-w-4xl">
      <h1 class="text-3xl md:text-5xl font-bold text-white mb-6" in:fly={{ y: 20, duration: 800, delay: 300, easing: quintOut }}>
        <span class="text-[#00BBBB]">Chapter {currentChapter.index + 1}:</span>
        {currentChapter.title}
      </h1>

      <div class="flex flex-wrap gap-4 mb-4 text-sm" in:fade={{ duration: 800, delay: 500 }}>
        <!-- Date -->
        {#if currentChapter.date || meta.date}
          <div class="flex items-center text-amber-300">
            <Calendar size={16} class="mr-1.5" />
            <span>{formatDate(currentChapter.date || meta.date)}</span>
          </div>
        {/if}

        <!-- Progress indicator -->
        <div class="flex items-center text-slate-300">
          <span class="px-3 py-1 rounded-full bg-[#00BBBB]/10 text-[#00BBBB] border border-[#00BBBB]/20">
            {currentChapter.index + 1} of {chapters.length}
          </span>
        </div>
      </div>

      <!-- Description -->
      {#if currentChapter.description}
        <p class="text-xl text-slate-300 mb-4 leading-relaxed" in:fly={{ y: 20, duration: 800, delay: 400, easing: quintOut }}>
          {currentChapter.description}
        </p>
      {/if}

      <!-- External resources links -->
      <div class="flex flex-wrap gap-4 my-4" in:fade={{ duration: 800, delay: 600 }}>
        {#if currentChapter.youtube_url}
          <a
            href={`https://youtu.be/${meta.youtube_url}`}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/80 text-white hover:bg-red-500 transition duration-300"
          >
            <Youtube size={18} />
            <span>Watch Video Tutorial</span>
          </a>
        {/if}

        {#if meta.github}
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0c1a28]/80 border border-white/10 text-white hover:bg-[#0c1a28] transition duration-300"
          >
            <Github size={18} class="text-[#00BBBB]" />
            <span>Source Code</span>
          </a>
        {/if}
      </div>
    </div>
  </div>
</section>

<!-- Main article content with chapters -->
<section class="py-16 bg-[#050a14] relative min-h-screen">
  <div class="container mx-auto px-4">
    <div class="flex flex-col lg:flex-row gap-8 relative">
      <!-- Sidebar with chapter navigation -->
      <div class="lg:w-1/4">
        <div class="sticky top-24 bg-[#0c1a28]/80 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden shadow-lg">
          <!-- Chapter list header -->
          <div class="p-4 border-b border-white/10 bg-gradient-to-r from-[#0c1a28] to-[#131836]">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <List size={18} class="mr-2 text-[#00BBBB]" />
                <h3 class="font-bold text-white">Chapters</h3>
              </div>
              <span class="text-sm text-slate-400">{currentChapter.index + 1}/{chapters.length}</span>
            </div>
          </div>

          <!-- Progress indicator -->
          <div class="relative h-1 bg-[#131836]">
            <div class="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00BBBB] to-[#9333ea]" style={`width: ${((currentChapter.index + 1) / chapters.length) * 100}%`}></div>
          </div>

          <!-- Chapter list -->
          <div class="p-4 max-h-[70vh] overflow-y-auto">
            <ChapterList {chapters} articleSlug={meta.slug} activeChapter={currentChapter.slug} />
          </div>

          <!-- Additional resources -->
          <div class="p-4 border-t border-white/10 bg-[#0c1a28]/50">
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
                {#if currentChapter.youtube_url || meta.youtube_url}
                  <a href={currentChapter.youtube_url || meta.youtube_url} target="_blank" rel="noopener noreferrer" class="flex items-center text-slate-300 hover:text-red-400 transition-colors">
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

      <!-- Main content -->
      <div class="lg:w-3/4">
        <div class="bg-[#0c1a28]/80 backdrop-blur-sm rounded-lg border border-white/10 p-6 md:p-8 shadow-lg">
          <!-- Article content -->
          <div class="prose prose-invert max-w-none">
            <data.content />
          </div>

          <!-- Chapter navigation buttons at bottom -->
          <div class="flex justify-between mt-16 pt-8 border-t border-white/10">
            {#if currentChapter.index > 0}
              <a
                href={`/articles/${meta.slug}/chapter/${chapters[currentChapter.index - 1].slug}`}
                class="px-4 py-2 rounded-lg bg-[#0c1a28] border border-white/10 text-slate-300 hover:bg-[#131836] transition-colors flex items-center gap-2"
              >
                <ArrowRight size={16} class="rotate-180" />
                <span>Previous: {chapters[currentChapter.index - 1].title}</span>
              </a>
            {:else}
              <a href={`/articles/${meta.slug}`} class="px-4 py-2 rounded-lg bg-[#0c1a28] border border-white/10 text-slate-300 hover:bg-[#131836] transition-colors flex items-center gap-2">
                <ArrowRight size={16} class="rotate-180" />
                <span>Article Overview</span>
              </a>
            {/if}

            {#if currentChapter.index < chapters.length - 1}
              <a
                href={`/articles/${meta.slug}/chapter/${chapters[currentChapter.index + 1].slug}`}
                class="px-4 py-2 rounded-lg bg-[#00BBBB] text-white hover:bg-[#00a0a0] transition-colors flex items-center gap-2"
              >
                <span>Next: {chapters[currentChapter.index + 1].title}</span>
                <ArrowRight size={16} />
              </a>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Styling for prose content - same as the article page */
  :global(.prose) {
    color: #d1d5db;
    font-size: 1.125rem;
    line-height: 1.75;
  }

  :global(.prose h2) {
    color: white;
    font-size: 1.875rem;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 0.5rem;
  }

  :global(.prose h3) {
    color: white;
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    font-weight: 600;
  }

  :global(.prose p) {
    margin-top: 1.25em;
    margin-bottom: 1.25em;
  }

  :global(.prose a) {
    color: #00bbbb;
    text-decoration: none;
    font-weight: 500;
  }

  :global(.prose a:hover) {
    text-decoration: underline;
  }

  :global(.prose strong) {
    color: white;
    font-weight: 600;
  }

  :global(.prose code) {
    color: #f59e0b;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.875em;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 0.2em 0.4em;
    border-radius: 0.25rem;
  }

  :global(.prose pre) {
    background-color: #131836;
    border-radius: 0.5rem;
    padding: 1rem;
    overflow-x: auto;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  :global(.prose pre code) {
    background-color: transparent;
    padding: 0;
    color: inherit;
    font-size: 0.9em;
  }

  :global(.prose ul) {
    list-style-type: disc;
    padding-left: 1.5rem;
  }

  :global(.prose ol) {
    list-style-type: decimal;
    padding-left: 1.5rem;
  }

  :global(.prose li) {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  :global(.prose blockquote) {
    border-left: 4px solid #00bbbb;
    padding-left: 1rem;
    font-style: italic;
    color: #9ca3af;
  }

  :global(.prose img) {
    border-radius: 0.5rem;
    max-width: 100%;
    height: auto;
    margin: 2rem 0;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  :global(.prose table) {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
  }

  :global(.prose th) {
    background-color: rgba(12, 26, 40, 0.8);
    color: white;
    font-weight: 600;
    text-align: left;
    padding: 0.75rem 1rem;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  }

  :global(.prose td) {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  :global(.prose tr:hover) {
    background-color: rgba(0, 187, 187, 0.05);
  }
</style>
