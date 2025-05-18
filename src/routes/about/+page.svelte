<script lang="ts">
  import SectionHeader from '$lib/components/SectionHeader.svelte';
  import { fly, fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import { Github, Youtube, Linkedin, BookOpen } from '@lucide/svelte';

  // Animation states
  let showImage = false;

  onMount(() => {
    // Delay image animation
    setTimeout(() => {
      showImage = true;
    }, 600);
  });
</script>

<div class="container mx-auto px-4 pt-8 pb-16">
  <SectionHeader title="Learn, Build, Share" subtitle="About Timnology" />
  <div class="md:flex items-center justify-between max-w-5xl mx-auto">
    <!-- Text content -->
    <div class="md:w-1/2 mb-12 md:mb-0 md:pr-12">
      <!-- Features/Values list -->
      <div class="space-y-6" in:fly={{ y: 20, duration: 800, delay: 200, easing: quintOut }}>
        <div class="flex items-start">
          <div class="flex-shrink-0 mr-3">
            <div class="flex items-center justify-center w-6 h-6 rounded-full bg-[#00BBBB]/20 text-[#00BBBB]">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-medium text-white mb-1">In-Depth Content</h3>
            <p class="text-slate-300">Comprehensive tutorials with practical examples and step-by-step guidance designed for real-world application.</p>
          </div>
        </div>

        <div class="flex items-start">
          <div class="flex-shrink-0 mr-3">
            <div class="flex items-center justify-center w-6 h-6 rounded-full bg-[#9333ea]/20 text-[#9333ea]">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-medium text-white mb-1">Real-World Experience</h3>
            <p class="text-slate-300">Content created by industry professionals sharing knowledge gained from years of hands-on experience.</p>
          </div>
        </div>

        <div class="flex items-start">
          <div class="flex-shrink-0 mr-3">
            <div class="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/20 text-amber-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-medium text-white mb-1">Open Access</h3>
            <p class="text-slate-300">No paywalls, subscriptions, or annoying ads. Quality technical content that's accessible to everyone.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Author image with animation -->
    <div class="md:w-1/2 justify-center hidden md:flex">
      {#if showImage}
        <div class="relative" in:fly={{ x: 30, duration: 1000, delay: 0, easing: quintOut }}>
          <!-- Image frame with accent decoration -->
          <div class="relative rounded-xl overflow-hidden border border-white/10 bg-[#131836]/50 backdrop-blur-sm">
            <!-- Replace with author image - for now using a placeholder -->
            <div class="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-[#0c1a28] to-[#131836] relative">
              <!-- Placeholder avatar/image -->
              <div class="absolute inset-0 flex items-center justify-center text-[#00BBBB]">
                <BookOpen size={120} strokeWidth={1} />
              </div>

              <!-- Overlay gradient -->
              <div class="absolute inset-0 bg-gradient-to-tr from-[#0a0118]/80 via-transparent to-transparent"></div>

              <!-- Social links -->
              <div class="absolute bottom-6 left-0 right-0 flex justify-center space-x-4">
                <a
                  href="https://github.com/timnology"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://www.youtube.com/@Timnology-r4s"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <Youtube size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/timvancann/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>

          <!-- Decorative elements -->
          <div class="absolute -top-3 -right-3 w-24 h-24 bg-gradient-to-r from-[#00BBBB]/20 to-transparent rounded-full blur-xl -z-10"></div>
          <div class="absolute -bottom-3 -left-3 w-24 h-24 bg-gradient-to-r from-[#9333ea]/20 to-transparent rounded-full blur-xl -z-10"></div>
          <div class="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-[#00BBBB]"></div>
          <div class="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-amber-500"></div>
        </div>
      {/if}
    </div>
  </div>
</div>
