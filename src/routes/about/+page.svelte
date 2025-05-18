<script lang="ts">
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import { elasticOut, quintOut } from 'svelte/easing';
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

<section class="relative py-24 overflow-hidden">
  <!-- Background gradient -->
  <div class="absolute inset-0 bg-gradient-to-b from-[#0a0118] to-[#0c1a28] -z-10"></div>

  <!-- Background pattern with low opacity -->
  <div class="absolute inset-0 opacity-[0.03] -z-10">
    <div
      class="absolute inset-0"
      style="background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2228%22%20height%3D%2249%22%20viewBox%3D%220%200%2028%2049%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%22hexagons%22%20fill%3D%22%2300BBBB%22%20fill-opacity%3D%221%22%20fill-rule%3D%22nonzero%22%3E%3Cpath%20d%3D%22M13.99%209.25l13%207.5v15l-13%207.5L1%2031.75v-15l12.99-7.5zM3%2017.9v12.7l10.99%206.34%2011-6.35V17.9l-11-6.34L3%2017.9zM0%2015l12.98-7.5V0h-2v6.35L0%2012.69v2.3zm0%2018.5L12.98%2041v8h-2v-6.85L0%2035.81v-2.3zM15%200v7.5L27.99%2015H28v-2.31h-.01L17%206.35V0h-2zm0%2049v-8l12.99-7.5H28v2.31h-.01L17%2042.15V49h-2z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E');"
    ></div>
  </div>

  <!-- Ambient light effects -->
  <div class="absolute left-1/4 top-0 w-1/2 h-1/3 bg-gradient-to-b from-[#00BBBB]/10 to-transparent -z-10"></div>
  <div class="absolute right-1/4 bottom-0 w-1/2 h-1/3 bg-gradient-to-t from-[#9333ea]/10 to-transparent -z-10"></div>

  <!-- Header content -->
  <div class="container mx-auto px-4 relative z-10">
    <div class="md:flex items-center justify-between max-w-5xl mx-auto">
      <!-- Text content -->
      <div class="md:w-1/2 mb-12 md:mb-0 md:pr-12">
        <!-- Label -->
        <div class="mb-4" in:fade={{ duration: 600, delay: 100 }}>
          <div class="flex items-center space-x-2">
            <div class="h-0.5 w-8 bg-gradient-to-r from-amber-300 to-[#00BBBB]"></div>
            <span class="text-amber-300 font-medium text-sm uppercase tracking-wider">About Timnology</span>
          </div>
        </div>

        <!-- Heading -->
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white" in:fly={{ y: 20, duration: 800, delay: 200, easing: quintOut }}>
          <span class="bg-gradient-to-r from-amber-300 via-[#00BBBB] to-purple-400 bg-clip-text text-transparent"> Learn, Build, Share </span>
        </h1>

        <!-- Description -->
        <p class="text-slate-300 text-lg mb-6 leading-relaxed" in:fly={{ y: 20, duration: 800, delay: 300, easing: quintOut }}>
          Timnology is a free technical tutorial platform created to share knowledge about data engineering, cloud infrastructure, and software development without paywalls.
        </p>

        <!-- Features/Values list -->
        <div class="space-y-4" in:fly={{ y: 20, duration: 800, delay: 400, easing: quintOut }}>
          <div class="flex items-start">
            <div class="flex-shrink-0 mr-3">
              <div class="flex items-center justify-center w-6 h-6 rounded-full bg-[#00BBBB]/20 text-[#00BBBB]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <p class="text-slate-300">
              <span class="font-medium text-white">In-Depth Content</span> with practical examples and step-by-step guidance
            </p>
          </div>

          <div class="flex items-start">
            <div class="flex-shrink-0 mr-3">
              <div class="flex items-center justify-center w-6 h-6 rounded-full bg-[#9333ea]/20 text-[#9333ea]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <p class="text-slate-300">
              <span class="font-medium text-white">Real-World Experience</span> from industry professionals and practitioners
            </p>
          </div>

          <div class="flex items-start">
            <div class="flex-shrink-0 mr-3">
              <div class="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/20 text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <p class="text-slate-300">
              <span class="font-medium text-white">Open Access</span> - no paywalls, subscriptions, or annoying ads
            </p>
          </div>
        </div>
      </div>

      <!-- Author image with animation -->
      <div class="md:w-1/2 flex justify-center">
        {#if showImage}
          <div class="relative" in:fly={{ x: 30, duration: 1000, delay: 0, easing: elasticOut }}>
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

  <!-- Bottom divider wave -->
  <div class="absolute bottom-0 left-0 right-0 h-8 overflow-hidden">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 48" class="w-full h-full" preserveAspectRatio="none">
      <path
        fill="#050a14"
        fill-opacity="1"
        d="M0,32L60,26.7C120,21,240,11,360,16C480,21,600,43,720,42.7C840,43,960,21,1080,16C1200,11,1320,21,1380,26.7L1440,32L1440,48L1380,48C1320,48,1200,48,1080,48C960,48,840,48,720,48C600,48,480,48,360,48C240,48,120,48,60,48L0,48Z"
      ></path>
    </svg>
  </div>
</section>
