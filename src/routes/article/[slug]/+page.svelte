<script lang="ts">
  import { formatDate } from '$lib/utils';
  import { fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { Calendar, Github, Youtube, ArrowRight, Bookmark, Clock, List, BookOpen } from '@lucide/svelte';
  import YoutubeEmbed from 'svelte-youtube-embed';
  import type { ArticlePageProps } from '$lib/types';

  interface Props {
    data: ArticlePageProps;
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>{data.metadata.title} | Timnology</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.metadata.title} />
  <meta property="og:description" content={data.metadata.description} />
  <meta name="description" content={data.metadata.description} />
</svelte:head>

<!-- Article Hero Section -->
<section class="pt-8 pb-4 relative bg-gradient-to-b from-[#0a0118] to-[#0c1a28] overflow-hidden">
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
    <div class="mb-8" in:fade={{ duration: 600, delay: 100 }}>
      <div class="flex items-center text-sm">
        <a href="/" class="text-slate-400 hover:text-white transition-colors">Home</a>
        <span class="mx-2 text-slate-600">/</span>
        <span class="text-[#00BBBB]">{data.metadata.title}</span>
      </div>
    </div>

    <!-- Title and metadata -->
    <div class="max-w-4xl">
      <h1 class="text-3xl md:text-5xl font-bold text-white mb-6" in:fly={{ y: 20, duration: 800, delay: 300, easing: quintOut }}>
        {data.metadata.title}
      </h1>

      <div class="flex flex-wrap gap-4 mb-4 text-sm" in:fade={{ duration: 800, delay: 500 }}>
        <!-- Date -->
        {#if data.metadata.date}
          <div class="flex items-center text-amber-300">
            <Calendar size={16} class="mr-1.5" />
            <span>{formatDate(data.metadata.date)}</span>
          </div>
        {/if}

        <!-- Categories -->
        {#if data.metadata.categories && data.metadata.categories.length > 0}
          <div class="flex flex-wrap gap-2">
            {#each data.metadata.categories as category, i (i)}
              <a href={`/category/${category}`} class="rounded-full px-3 py-1 bg-[#00BBBB]/10 text-[#00BBBB] border border-[#00BBBB]/20">
                #{category}
              </a>
            {/each}
          </div>
        {/if}
      </div>

      <!-- Description -->
      {#if data.metadata.description}
        <p class="text-xl text-slate-300 mb-4 leading-relaxed" in:fly={{ y: 20, duration: 800, delay: 400, easing: quintOut }}>
          {data.metadata.description}
        </p>
      {/if}

      <!-- External resources links -->
      <div class="flex flex-wrap gap-4 my-4" in:fade={{ duration: 800, delay: 600 }}>
        {#if data.metadata.github}
          <a
            href={data.metadata.github}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0c1a28]/80 border border-white/10 text-white hover:bg-[#0c1a28] transition duration-300"
          >
            <Github size={18} class="text-[#00BBBB]" />
            <span>Source Code</span>
          </a>
        {/if}

        {#if data.metadata.youtube_url}
          <a
            href={`https://youtu.be/${data.metadata.youtube_url}`}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0c1a28]/80 border border-white/10 text-white hover:bg-[#0c1a28] transition duration-300"
          >
            <Youtube size={18} class="text-red-400" />
            <span>Watch Video</span>
          </a>
        {/if}

        {#if data.chapters.length > 0}
          <a href={`/article/${data.slug}/${data.chapters[0].slug}`} class="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00BBBB] text-white hover:bg-[#00a0a0] transition duration-300">
            <BookOpen size={18} />
            <span>Start Learning</span>
          </a>
        {/if}
      </div>
    </div>
  </div>
</section>

<!-- Main article content with chapters -->
<section class="pt-8 pb-16 relative">
  <div class="container mx-auto px-4">
    <div class="flex flex-col lg:flex-row gap-8 relative">
      <!-- Sidebar with chapter navigation -->
      <div class="lg:w-1/4 hidden lg:block">
        <div class="sticky top-24 bg-[#0c1a28]/80 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden shadow-lg">
          <!-- Chapter list header -->
          <div class="p-4 border-b border-white/10 bg-gradient-to-r from-[#0c1a28] to-[#131836]">
            <div class="flex items-center">
              <List size={18} class="mr-2 text-[#00BBBB]" />
              <h3 class="font-bold text-white">Chapters ({data.chapters.length})</h3>
            </div>
          </div>

          <!-- Additional resources -->
          <div class="p-4 border-t border-white/10 bg-[#0c1a28]/50">
            <div class="text-sm text-slate-400">
              <div class="flex items-center mb-2">
                <Bookmark size={14} class="mr-2 text-[#00BBBB]" />
                <span class="font-medium text-white">Resources</span>
              </div>
              <div class="space-y-2 mt-3">
                {#if data.metadata.github}
                  <a href={data.metadata.github} target="_blank" rel="noopener noreferrer" class="flex items-center text-slate-300 hover:text-[#00BBBB] transition-colors">
                    <Github size={14} class="mr-2" />
                    <span>GitHub Repository</span>
                  </a>
                {/if}
                {#if data.metadata.youtube_url}
                  <a href={`https://youtu.be/${data.metadata.youtube_url}`} target="_blank" rel="noopener noreferrer" class="flex items-center text-slate-300 hover:text-red-400 transition-colors">
                    <Youtube size={14} class="mr-2" />
                    <span>Video Tutorial</span>
                  </a>
                {/if}
                <div class="flex items-center text-slate-300">
                  <Clock size={14} class="mr-2" />
                  <span>Est. time: 10-15 min </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main content -->
      <div class="lg:w-3/4">
        <div class="bg-[#0c1a28]/80 backdrop-blur-sm rounded-lg border border-white/10 p-6 md:p-8 shadow-lg">
          {#if data.metadata.youtube_url}
            <YoutubeEmbed id={data.metadata.youtube_url} />
          {/if}
          <!-- Chapter navigation buttons at bottom -->
          {#if data.chapters.length > 0}
            <div class="flex justify-center mt-8 pt-8 border-t border-white/10">
              <a href={`/article/${data.slug}/${data.chapters[0].slug}`} class="px-6 py-3 rounded-lg bg-[#00BBBB] text-white hover:bg-[#00a0a0] transition-colors flex items-center gap-2">
                <span>Start Reading Chapter 1</span>
                <ArrowRight size={18} />
              </a>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>
