<script lang="ts">
  import { formatDate } from '$lib/utils';
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { Calendar, ArrowRight, Github, Youtube } from '@lucide/svelte';

  let { article } = $props();
</script>

<section class="">
  <!-- Background elements -->
  <div class="absolute inset-0 bg-gradient-to-br from-[#0a0118] via-[#0a0118] to-[#0c1a28] z-0"></div>

  <!-- Decorative hex grid background -->
  <div
    class="absolute inset-0 opacity-[0.03] z-0"
    style="background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2228%22%20height%3D%2249%22%20viewBox%3D%220%200%2028%2049%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%22hexagons%22%20fill%3D%22%2300BBBB%22%20fill-opacity%3D%221%22%20fill-rule%3D%22nonzero%22%3E%3Cpath%20d%3D%22M13.99%209.25l13%207.5v15l-13%207.5L1%2031.75v-15l12.99-7.5zM3%2017.9v12.7l10.99%206.34%2011-6.35V17.9l-11-6.34L3%2017.9zM0%2015l12.98-7.5V0h-2v6.35L0%2012.69v2.3zm0%2018.5L12.98%2041v8h-2v-6.85L0%2035.81v-2.3zM15%200v7.5L27.99%2015H28v-2.31h-.01L17%206.35V0h-2zm0%2049v-8l12.99-7.5H28v2.31h-.01L17%2042.15V49h-2z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')"
  ></div>

  <!-- Glow effects -->
  <div class="absolute top-0 right-0 w-1/3 h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,187,187,0.15),transparent_70%)] rounded-full blur-3xl z-0"></div>
  <div class="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.15),transparent_70%)] rounded-full blur-3xl z-0"></div>

  <!-- Main content -->
  <div class="container mx-auto relative z-10">
    <!-- Section header -->
    <div class="text-center mb-12" in:fade={{ duration: 800, delay: 100 }}>
      <span class="inline-block px-4 py-1 rounded-full bg-white/10 text-amber-300 text-sm font-medium backdrop-blur-sm mb-4 border border-amber-500/10"> Featured Tutorial </span>
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Start Learning Today</h2>
      <p class="text-slate-300 max-w-2xl mx-auto">Dive into our most comprehensive tutorial and take your skills to the next level.</p>
    </div>

    <!-- Featured article card -->
    <div class="max-w-5xl mx-auto overflow-hidden rounded-2xl relative group" in:fly={{ y: 30, duration: 800, delay: 300, easing: quintOut }}>
      <!-- Card background with gradient border -->
      <div class="absolute inset-0 p-[1px] rounded-2xl z-0">
        <div class="absolute inset-0 bg-gradient-to-r from-[#00BBBB]/30 via-[#9333ea]/30 to-[#00BBBB]/30 rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
      </div>

      <!-- Card content -->
      <div class="bg-[#0c1a28]/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 relative z-10">
        <div class="md:flex">
          <!-- Left side with image/icon -->
          <div class="flex items-center justify-center bg-gradient-to-br from-[#0c1a28] to-[#131836] p-8 md:w-2/5 relative overflow-hidden">
            <!-- Decorative elements -->
            <div class="absolute inset-0 opacity-20">
              <div class="absolute top-0 right-0 w-40 h-40 bg-[#00BBBB] rounded-full blur-3xl -z-10 opacity-30"></div>
              <div class="absolute bottom-0 left-0 w-40 h-40 bg-[#9333ea] rounded-full blur-3xl -z-10 opacity-30"></div>

              <!-- Decorative circuit lines -->
              <svg class="h-full w-full absolute inset-0" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M30,20 L70,20 L70,80 L30,80 Z" fill="none" stroke="#00BBBB" stroke-width="0.2" stroke-dasharray="1 3" opacity="0.3"></path>
                <path d="M20,30 L80,30 L80,70 L20,70 Z" fill="none" stroke="#9333ea" stroke-width="0.2" stroke-dasharray="1 3" opacity="0.3"></path>
                <circle cx="50" cy="50" r="30" fill="none" stroke="#00BBBB" stroke-width="0.2" opacity="0.3"></circle>
              </svg>
            </div>

            <!-- Article icon with glow effect -->
            <div class="relative transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
              <div class="absolute inset-0 bg-gradient-to-br from-[#00BBBB]/30 to-[#9333ea]/30 rounded-xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>

              {#if article.icon}
                <img src={article.icon} alt={article.title} class="relative z-10 h-32 w-32 object-contain drop-shadow-[0_0_15px_rgba(0,187,187,0.5)]" />
              {:else}
                <!-- Default code icon if no image provided -->
                <div class="relative z-10 h-32 w-32 flex items-center justify-center text-[#00BBBB]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="h-24 w-24">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
              {/if}
            </div>
          </div>

          <!-- Right side with content -->
          <div class="p-8 md:w-3/5">
            <!-- Date -->
            {#if article.updatedAt}
              <div class="flex items-center text-xs text-[#00BBBB]/70 mb-2 font-mono">
                <Calendar size={14} class="mr-1.5" />
                {formatDate(article.updatedAt)}
              </div>
            {/if}

            <!-- Title -->
            <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-[#00BBBB] transition-colors duration-300">
              {article.title}
            </h3>

            <!-- Subtitle -->
            <p class="mb-6 text-slate-300">
              {article.subtitle || 'An in-depth tutorial covering advanced techniques and best practices.'}
            </p>

            <!-- Category badge and action link -->
            <div class="flex justify-between items-center">
              <span class="rounded-full bg-[rgba(0,187,187,0.1)] backdrop-blur-sm px-3 py-1 text-xs text-[#00BBBB] border border-[#00BBBB]/20">
                {article.category || 'Technology'}
              </span>

              <a href={`/articles/${article.slug}`} class="group inline-flex items-center font-medium text-amber-300 transition-colors hover:text-amber-400">
                Start Learning
                <ArrowRight size={16} class="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            <!-- Feature indicators -->
            {#if article.youtube_url || article.github}
              <div class="mt-4 pt-4 border-t border-white/10 flex gap-3">
                {#if article.youtube_url}
                  <div class="flex items-center text-xs text-red-400/90 bg-red-400/5 px-2 py-1 rounded-md border border-red-400/10">
                    <Youtube size={14} class="mr-1" />
                    Video Tutorial
                  </div>
                {/if}

                {#if article.github}
                  <div class="flex items-center text-xs text-[#00BBBB] bg-[#00BBBB]/5 px-2 py-1 rounded-md border border-[#00BBBB]/10">
                    <Github size={14} class="mr-1" />
                    Source Code
                  </div>
                {/if}
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Animate the gradients on hover */
  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .featured-article-container:hover :global(.bg-gradient-to-r) {
    background-size: 200% 200%;
    animation: gradientShift 3s ease infinite;
  }
</style>
