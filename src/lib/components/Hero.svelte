<!-- Hero.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { elasticOut, quintOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';

  // Animation controls
  let isVisible = false;
  let typeComplete = false;

  // Animated text properties
  let currentText = '';
  const finalText = 'technical horizons';
  let typingInterval: ReturnType<typeof setTimeout>;

  // Animated underline width
  const underlineWidth = tweened(0, {
    duration: 800,
    easing: quintOut
  });

  onMount(() => {
    // Reveal the hero section
    isVisible = true;

    // Start typing animation after a short delay
    setTimeout(() => {
      let i = 0;
      typingInterval = setInterval(() => {
        currentText = finalText.substring(0, i + 1);
        i++;

        if (i >= finalText.length) {
          clearInterval(typingInterval);
          typeComplete = true;

          // Animate the underline after typing finishes
          setTimeout(() => {
            underlineWidth.set(100);
          }, 200);
        }
      }, 70); // Typing speed
    }, 800);

    return () => {
      if (typingInterval) clearInterval(typingInterval);
    };
  });
</script>

<section class="min-h-[100vh] -mt-16 md:-mt-20 relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0118] via-[#0c1a28] to-[#131836] text-white">
  <div class="absolute inset-0 bg-gradient-to-br from-[#0a0118] to-[#0a0118] z-0"></div>

  <!-- Decorative hex grid background -->
  <div
    class="absolute inset-0 opacity-[0.03] z-0"
    style="background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2228%22%20height%3D%2249%22%20viewBox%3D%220%200%2028%2049%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%22hexagons%22%20fill%3D%22%2300BBBB%22%20fill-opacity%3D%221%22%20fill-rule%3D%22nonzero%22%3E%3Cpath%20d%3D%22M13.99%209.25l13%207.5v15l-13%207.5L1%2031.75v-15l12.99-7.5zM3%2017.9v12.7l10.99%206.34%2011-6.35V17.9l-11-6.34L3%2017.9zM0%2015l12.98-7.5V0h-2v6.35L0%2012.69v2.3zm0%2018.5L12.98%2041v8h-2v-6.85L0%2035.81v-2.3zM15%200v7.5L27.99%2015H28v-2.31h-.01L17%206.35V0h-2zm0%2049v-8l12.99-7.5H28v2.31h-.01L17%2042.15V49h-2z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')"
  ></div>

  <!-- Glow effects -->
  <div class="absolute top-0 right-0 w-1/3 h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,187,187,0.15),transparent_70%)] rounded-full blur-3xl z-0"></div>
  <div class="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.15),transparent_70%)] rounded-full blur-3xl z-0"></div>

  <!-- Ambient glows -->
  <div class="absolute inset-0 pointer-events-none">
    <!-- Teal glow -->
    <div class="absolute top-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-[#00BBBB] opacity-10 blur-[100px]"></div>
    <!-- Purple glow -->
    <div class="absolute bottom-1/4 left-1/4 w-[40rem] h-[40rem] rounded-full bg-[#9333ea] opacity-10 blur-[100px]"></div>
    <!-- Amber accent -->
    <div class="absolute top-2/3 left-2/3 w-[20rem] h-[20rem] rounded-full bg-amber-500 opacity-5 blur-[60px]"></div>
  </div>

  <!-- Geometric accents -->
  <div class="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
    <!-- Hex grid pattern -->
    <div
      class="absolute inset-0 opacity-[0.05]"
      style="background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2228%22%20height%3D%2249%22%20viewBox%3D%220%200%2028%2049%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%22hexagons%22%20fill%3D%22%2300BBBB%22%20fill-opacity%3D%221%22%20fill-rule%3D%22nonzero%22%3E%3Cpath%20d%3D%22M13.99%209.25l13%207.5v15l-13%207.5L1%2031.75v-15l12.99-7.5zM3%2017.9v12.7l10.99%206.34%2011-6.35V17.9l-11-6.34L3%2017.9zM0%2015l12.98-7.5V0h-2v6.35L0%2012.69v2.3zm0%2018.5L12.98%2041v8h-2v-6.85L0%2035.81v-2.3zM15%200v7.5L27.99%2015H28v-2.31h-.01L17%206.35V0h-2zm0%2049v-8l12.99-7.5H28v2.31h-.01L17%2042.15V49h-2z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')"
    ></div>

    <!-- Animated circuit lines -->
    <svg class="absolute inset-0 w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- Horizontal lines -->
      <line x1="0" y1="20" x2="100" y2="20" stroke="#00BBBB" stroke-width="0.1" stroke-dasharray="1 3" />
      <line x1="0" y1="40" x2="100" y2="40" stroke="#9333ea" stroke-width="0.1" stroke-dasharray="1 3" />
      <line x1="0" y1="60" x2="100" y2="60" stroke="#00BBBB" stroke-width="0.1" stroke-dasharray="1 3" />
      <line x1="0" y1="80" x2="100" y2="80" stroke="#9333ea" stroke-width="0.1" stroke-dasharray="1 3" />

      <!-- Vertical lines -->
      <line x1="20" y1="0" x2="20" y2="100" stroke="#9333ea" stroke-width="0.1" stroke-dasharray="1 3" />
      <line x1="40" y1="0" x2="40" y2="100" stroke="#00BBBB" stroke-width="0.1" stroke-dasharray="1 3" />
      <line x1="60" y1="0" x2="60" y2="100" stroke="#9333ea" stroke-width="0.1" stroke-dasharray="1 3" />
      <line x1="80" y1="0" x2="80" y2="100" stroke="#00BBBB" stroke-width="0.1" stroke-dasharray="1 3" />

      <!-- Decorative elements -->
      <circle cx="20" cy="20" r="1" fill="#00BBBB" />
      <circle cx="40" cy="40" r="1" fill="#9333ea" />
      <circle cx="60" cy="60" r="1" fill="#00BBBB" />
      <circle cx="80" cy="80" r="1" fill="#9333ea" />
      <circle cx="50" cy="50" r="15" fill="none" stroke="#00BBBB" stroke-width="0.2" />
    </svg>
  </div>

  <!-- Main Content -->
  <div class="container relative z-10 px-4 py-20 mx-auto text-center">
    {#if isVisible}
      <!-- Badge -->
      <div in:fade={{ duration: 600, delay: 200 }}>
        <span class="inline-block px-4 py-1.5 text-sm font-medium text-[#00BBBB] bg-[#00BBBB]/10 rounded-full border border-[#00BBBB]/20 mb-8"> Free technical tutorials </span>
      </div>

      <!-- Main Heading -->
      <h1 class="text-5xl font-bold leading-tight tracking-tight mb-6 md:text-7xl" in:fly={{ y: 20, duration: 800, delay: 400, easing: quintOut }}>
        <span class="block mb-2">Expanding your</span>
        <span class="relative inline-block">
          <span class="bg-gradient-to-r from-amber-300 via-[#00BBBB] to-purple-400 bg-clip-text text-transparent">
            {currentText}<span class="inline-block w-0.5 h-8 bg-[#00BBBB] animate-blink ml-1 align-middle" class:hidden={typeComplete}></span>
          </span>
          <span class="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-300 via-[#00BBBB] to-purple-400 rounded-full" style="width: {$underlineWidth}%; transition: width 0.8s ease-out;"
          ></span>
        </span>
      </h1>

      <!-- Subtitle -->
      <p class="max-w-3xl mx-auto text-xl text-slate-300 mb-12 leading-relaxed" in:fly={{ y: 20, duration: 800, delay: 600, easing: quintOut }}>
        In-depth tutorials and resources for data engineers and software developers looking to master advanced techniques.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-wrap justify-center gap-4" in:fly={{ y: 20, duration: 800, delay: 800, easing: quintOut }}>
        <a href="#tutorials" class="group relative overflow-hidden rounded-lg bg-gradient-to-r from-[#00BBBB] to-purple-600 px-8 py-3.5 font-medium text-white shadow-lg transition-all duration-300">
          <span class="relative z-10">Explore Tutorials</span>
          <span class="absolute inset-0 translate-y-full bg-gradient-to-r from-amber-500 to-amber-600 transition-transform duration-300 group-hover:translate-y-0"></span>
        </a>
        <a href="/about" class="rounded-lg border border-white/20 bg-white/10 px-8 py-3.5 font-medium text-white backdrop-blur-sm transition duration-300 hover:bg-white/20"> About Timnology </a>
      </div>
    {/if}
  </div>
</section>

<style>
  /* Typing cursor animation */
  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  .animate-blink {
    animation: blink 1s infinite;
  }
</style>
