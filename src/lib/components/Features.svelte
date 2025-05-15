<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { backOut } from 'svelte/easing';
  import { Book, Zap, Layout, GitBranch, Video, Code } from '@lucide/svelte';

  // Animation controls
  // Features data
  const features = [
    {
      title: 'In-depth Content',
      description: 'Comprehensive tutorials with step-by-step instructions and practical examples that take you from concept to implementation.',
      icon: Book,
      color: '#00BBBB'
    },
    {
      title: 'Modern Techniques',
      description: 'Stay current with the latest approaches, tools, and frameworks used by industry professionals.',
      icon: Zap,
      color: '#9333EA'
    },
    {
      title: 'Always Free',
      description: 'Quality technical content without paywalls, subscriptions, or annoying ads. Knowledge should be accessible to everyone.',
      icon: Layout,
      color: '#F59E0B'
    },
    {
      title: 'Version Controlled',
      description: 'All tutorials are backed by Git repositories, making it easy to track changes and contribute improvements.',
      icon: GitBranch,
      color: '#00BBBB'
    },
    {
      title: 'Video Tutorials',
      description: 'Visual learners can follow along with accompanying video content for key concepts and techniques.',
      icon: Video,
      color: '#9333EA'
    },
    {
      title: 'Code Examples',
      description: 'Each tutorial comes with complete, working code examples that you can use as a foundation for your own projects.',
      icon: Code,
      color: '#F59E0B'
    }
  ];
</script>

<section class="py-24 relative bg-gradient-to-b from-[#050a14] to-[#0a0118] overflow-hidden">
  <!-- Background patterns -->
  <div
    class="absolute inset-0 opacity-[0.03]"
    style="background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2228%22%20height%3D%2249%22%20viewBox%3D%220%200%2028%2049%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%22hexagons%22%20fill%3D%22%2300BBBB%22%20fill-opacity%3D%221%22%20fill-rule%3D%22nonzero%22%3E%3Cpath%20d%3D%22M13.99%209.25l13%207.5v15l-13%207.5L1%2031.75v-15l12.99-7.5zM3%2017.9v12.7l10.99%206.34%2011-6.35V17.9l-11-6.34L3%2017.9zM0%2015l12.98-7.5V0h-2v6.35L0%2012.69v2.3zm0%2018.5L12.98%2041v8h-2v-6.85L0%2035.81v-2.3zM15%200v7.5L27.99%2015H28v-2.31h-.01L17%206.35V0h-2zm0%2049v-8l12.99-7.5H28v2.31h-.01L17%2042.15V49h-2z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')"
  ></div>

  <!-- Ambient glows -->
  <div class="absolute top-0 left-1/4 w-1/2 h-1/3 bg-gradient-to-b from-[#00BBBB]/10 to-transparent"></div>
  <div class="absolute bottom-0 right-1/4 w-1/2 h-1/3 bg-gradient-to-t from-[#9333ea]/10 to-transparent"></div>

  <div class="container mx-auto px-4 relative z-10">
    <!-- Section header -->
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">
        <span class="bg-gradient-to-r from-amber-300 via-[#00BBBB] to-purple-400 bg-clip-text text-transparent">Why Choose Timnology</span>
      </h2>
      <p class="text-slate-300 max-w-3xl mx-auto text-lg">A unique learning experience designed for developers who want to master advanced techniques</p>
    </div>

    <!-- Features grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each features as feature, i (i)}
        <div class="feature-card relative" data-index={i}>
          <div
            class="h-full p-8 rounded-xl bg-[#0c1a28]/60 backdrop-blur-sm border border-white/5 transition-all duration-300 hover:border-[{feature.color}]/30 hover:shadow-lg hover:shadow-[{feature.color}]/5 hover:-translate-y-1"
            in:fly={{ y: 30, duration: 600, delay: 100 * i, easing: backOut }}
          >
            <!-- Card background glow on hover -->
            <div
              class="absolute inset-0 opacity-0 transition-opacity duration-300 feature-glow"
              style="background: radial-gradient(circle at center, {feature.color}10, transparent 70%); z-index: -1;"
            ></div>

            <!-- Icon with colored background -->
            <div class="mb-6 relative">
              <div class="absolute inset-0 bg-[{feature.color}]/10 rounded-full blur-xl opacity-50"></div>
              <div class="w-16 h-16 rounded-full flex items-center justify-center relative bg-[{feature.color}]/10 border border-[{feature.color}]/20">
                <svelte:component this={feature.icon} size={28} color={feature.color} />
              </div>
            </div>

            <!-- Title with gradient underline -->
            <h3 class="text-xl font-bold text-white mb-3 relative inline-block">
              {feature.title}
              <div class="absolute bottom-0 left-0 w-12 h-0.5 bg-[{feature.color}]/50"></div>
            </h3>

            <!-- Description -->
            <p class="text-slate-300">
              {feature.description}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  /* Hover effects */
  .feature-card:hover .feature-glow {
    opacity: 1;
  }
</style>
