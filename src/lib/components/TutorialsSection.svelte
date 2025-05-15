<script lang="ts">
  import { fade } from 'svelte/transition';
  import { Calendar, ArrowRight, Youtube, Github, Hash } from '@lucide/svelte';
  import type { Article } from '$lib/types';
  import { formatDate } from '$lib/utils';

  // Mock data for the tutorials - this would normally come from your content system
  interface Props {
    categorisedArticles: Map<string, Article[]>;
  }

  let { categorisedArticles }: Props = $props();
</script>

<div class="min-h-screen relative overflow-hidden text-white p-8">
  <div class="max-w-7xl mx-auto relative z-10">
    <!-- Section header -->
    <div class="mb-10 text-center relative" in:fade={{ duration: 1000, delay: 300 }}>
      <h2 class="inline-block font-bold text-5xl mb-6 relative">
        <span class="absolute -top-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00BBBB] to-transparent" style="width: 100%; transition: width 0.8s ease-out;"></span>
        <span class="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00BBBB] to-transparent" style="width: 100%; transition: width 0.8s ease-out;"></span>
        <span class="text-white">Technical <span class="bg-gradient-to-r from-[#00BBBB] to-[#9333ea] bg-clip-text text-transparent">Tutorials</span></span>
      </h2>

      <p class="text-gray-400 max-w-3xl mx-auto text-lg mt-4" in:fade={{ duration: 800, delay: 800 }}>
        Advanced learning materials designed for developers seeking to expand their technical expertise
      </p>
    </div>

    <!-- Main content -->
    <div class="space-y-24">
      {#each categorisedArticles.entries() as [name, articles] (name)}
        <div data-category-id={name} class="mb-8">
          <!-- Category header - from Teal/Orange -->
          <div class="mb-10 relative">
            <div class="flex items-center">
              <div class="w-1 h-10 bg-gradient-to-b from-[#00BBBB] to-[#9333ea] transition-all duration-300"></div>
              <div class="ml-4 flex-grow">
                <h2 class="text-2xl font-bold text-white">
                  <span class="text-[#00BBBB]">/</span>
                  {name}
                </h2>
                <div class="mt-2 h-px w-full bg-gradient-to-r from-[#00BBBB] via-[rgba(0,187,187,0.5)] to-transparent"></div>
              </div>
            </div>
          </div>

          <!-- Article cards grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {#each articles as article (article.slug)}
              <a href={`/articles/${article.slug}`} class="block no-underline">
                <!-- Card with hover effects using classes -->
                <div
                  class="card-container relative bg-[rgba(10,25,41,0.7)] backdrop-blur-sm border border-[rgba(0,187,187,0.2)] rounded-lg overflow-hidden transition-all duration-300 shadow-md hover:border-[rgba(0,187,187,0.5)] hover:shadow-[0_5px_15px_rgba(0,187,187,0.15)] hover:-translate-y-1"
                >
                  <!-- Left accent bar -->
                  <div class="card-accent absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00BBBB] via-[#00BBBB] to-[#9333ea] transition-all duration-300"></div>

                  <!-- Bottom glow effect on hover -->
                  <div class="card-bottom-glow absolute -bottom-[5px] left-[5%] right-[5%] h-[10px] rounded-[50%] bg-[#00BBBB] blur-[10px] opacity-0 transition-opacity duration-300 -z-[1]"></div>

                  <div class="relative p-6 pl-[calc(1.5rem+4px)]">
                    <!-- Header with ID and date -->
                    <div class="flex justify-between items-center mb-5">
                      <!-- Article ID -->
                      <div class="px-2 py-1 bg-[rgba(0,187,187,0.1)] border border-[rgba(0,187,187,0.2)] rounded">
                        <span class="text-xs font-mono text-[rgba(0,187,187,0.8)] flex items-center">
                          <Hash size={12} class="mr-1" />
                          {article.slug.substring(0, 8)}
                        </span>
                      </div>

                      <!-- Date with fixed-width font -->
                      {#if article.updatedAt}
                        <div class="flex items-center text-xs text-[rgba(251,191,36,0.8)] font-mono">
                          <Calendar size={12} class="mr-1" />
                          {formatDate(article.updatedAt)}
                        </div>
                      {/if}
                    </div>

                    <!-- Content -->
                    <div class="flex gap-4">
                      <!-- Icon with glow effect -->
                      {#if article.icon}
                        <div class="mr-2 flex-shrink-0">
                          <div class="card-icon relative w-14 h-14 bg-[rgba(10,15,25,0.5)] border border-[rgba(0,187,187,0.2)] rounded-lg flex items-center justify-center transition-all duration-300">
                            <img src={article.icon} alt="" class="max-w-[60%] max-h-[60%] object-contain" />
                          </div>
                        </div>
                      {/if}

                      <div>
                        <h3 class="card-title text-xl font-bold text-white mb-2 transition-colors duration-300">
                          {article.title}
                        </h3>

                        {#if article.subtitle}
                          <p class="text-[rgba(255,255,255,0.7)] text-sm leading-relaxed">
                            {article.subtitle}
                          </p>
                        {/if}
                      </div>
                    </div>

                    <!-- Footer with badges -->
                    <div class="mt-6 pt-4 border-t border-[rgba(255,255,255,0.1)] flex justify-between items-center">
                      <div class="flex gap-3">
                        {#if article.youtube_url}
                          <div
                            class="card-badge flex items-center text-xs text-[#f87171] bg-[rgba(248,113,113,0.1)] border border-[rgba(248,113,113,0.2)] px-2 py-1 rounded transition-transform duration-300"
                          >
                            <Youtube size={12} class="mr-1" />
                            Video
                          </div>
                        {/if}

                        {#if article.github}
                          <div
                            class="card-badge flex items-center text-xs text-[#00BBBB] bg-[rgba(0,187,187,0.1)] border border-[rgba(0,187,187,0.2)] px-2 py-1 rounded transition-transform duration-300"
                          >
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
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

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

  .card-container:hover .card-arrow {
    transform: translateX(0.25rem);
  }

  .card-container:hover .card-badge {
    transform: translateY(-0.125rem);
  }

  .card-container:hover .card-bottom-glow {
    opacity: 1;
  }

  /* Animation keyframes */
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

  /* Hover state for entire category section */
</style>
