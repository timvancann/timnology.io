<script lang="ts">
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { MessageSquare, Send, Github, Youtube, Linkedin } from '@lucide/svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';

  // Social media links with icons and URLs
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/timvancann', color: '#00BBBB' },
    { name: 'YouTube', icon: Youtube, url: 'https://discord.gg/mB6d74banz', color: '#f87171' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/timvancann/', color: '#9333ea' }
  ];
</script>

<div class="container mx-auto px-4 pt-8 pb-16">
  <SectionHeader title="Contact Us" subtitle="Get in Touch" />
  <div class="max-w-5xl mx-auto">
    <div class="md:flex items-center justify-between">
      <!-- Contact methods -->
      <div class="md:w-3/5 mb-12 md:mb-0 md:pr-12">
        <div class="space-y-6" in:fly={{ y: 20, duration: 800, delay: 200, easing: quintOut }}>
          <!-- Email -->

          <!-- Message -->
          <div class="flex items-center">
            <div class="w-12 h-12 rounded-full flex items-center justify-center bg-[#9333ea]/10 border border-[#9333ea]/20 mr-4">
              <MessageSquare size={20} class="text-[#9333ea]" />
            </div>
            <div>
              <p class="text-white text-sm font-medium mb-1">Discord Community</p>
              <a href="https://discord.gg/timnology" class="text-[#9333ea] hover:text-[#9333ea]/80 transition-colors">Join our Discord</a>
            </div>
          </div>

          <!-- Social media -->
          <div class="pt-4">
            <p class="text-white text-sm font-medium mb-4">Connect on Social Media</p>
            <div class="flex items-center space-x-4">
              {#each socialLinks as link (link.name)}
                <a href={link.url} target="_blank" rel="noopener noreferrer" class="social-link group" aria-label={link.name}>
                  <div
                    class="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 transition-all duration-300 group-hover:scale-110"
                    style="border-color: {link.color}40; background-color: {link.color}10;"
                  >
                    <svelte:component this={link.icon} size={18} class="transition-all duration-300" style="color: {link.color};" />
                  </div>
                </a>
              {/each}
            </div>
          </div>
        </div>
      </div>

      <!-- Decorative element -->
      <div class="md:w-2/5 hidden md:flex justify-center" in:fly={{ x: 30, duration: 800, delay: 300, easing: quintOut }}>
        <div class="relative">
          <!-- Message icon with decorative glowing background -->
          <div class="relative w-64 h-64 flex items-center justify-center">
            <!-- Glowing backgrounds -->
            <div class="absolute inset-0 bg-gradient-to-br from-[#00BBBB]/20 via-[#9333ea]/20 to-amber-500/20 rounded-full blur-3xl"></div>

            <!-- Icon container -->
            <div class="relative w-40 h-40 rounded-full bg-[#131836]/80 backdrop-blur-md border border-white/10 flex items-center justify-center overflow-hidden shadow-xl">
              <!-- Animated waves -->
              <div class="absolute inset-0">
                <div class="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-[#00BBBB]/10 to-transparent animate-wave-slow"></div>
                <div class="absolute top-1/4 left-0 right-0 h-full bg-gradient-to-b from-[#9333ea]/10 to-transparent animate-wave-medium"></div>
                <div class="absolute top-2/4 left-0 right-0 h-full bg-gradient-to-b from-amber-500/10 to-transparent animate-wave-fast"></div>
              </div>

              <!-- Icon -->
              <Send size={56} class="text-white/80 transform -rotate-12" />

              <!-- Decorative dots -->
              <div class="absolute top-6 right-6 w-2 h-2 rounded-full bg-[#00BBBB]"></div>
              <div class="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-amber-500"></div>
            </div>

            <!-- Decorative elements -->
            <div class="absolute top-0 right-0 w-8 h-8 rounded-full border-4 border-[#00BBBB]/30 animate-pulse-slow"></div>
            <div class="absolute bottom-8 left-0 w-4 h-4 rounded-full bg-amber-500/30 animate-ping"></div>
            <div class="absolute top-1/3 -left-4 w-2 h-2 rounded-full bg-[#9333ea] animate-ping"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  /* Animation keyframes */
  @keyframes ping {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    75%,
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  @keyframes pulse-slow {
    0%,
    100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.6;
      transform: scale(1.1);
    }
  }

  @keyframes wave-slow {
    0%,
    100% {
      transform: translateY(0) scaleY(1);
    }
    50% {
      transform: translateY(-10%) scaleY(1.1);
    }
  }

  @keyframes wave-medium {
    0%,
    100% {
      transform: translateY(0) scaleY(1);
    }
    50% {
      transform: translateY(-15%) scaleY(1.05);
    }
  }

  @keyframes wave-fast {
    0%,
    100% {
      transform: translateY(0) scaleY(1);
    }
    50% {
      transform: translateY(-8%) scaleY(1.02);
    }
  }

  .animate-ping {
    animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  .animate-pulse-slow {
    animation: pulse-slow 4s infinite ease-in-out;
  }

  .animate-wave-slow {
    animation: wave-slow 8s infinite ease-in-out;
  }

  .animate-wave-medium {
    animation: wave-medium 6s infinite ease-in-out;
  }

  .animate-wave-fast {
    animation: wave-fast 4s infinite ease-in-out;
  }

  /* Hover effect for social links */
  .social-link:hover div {
    transform: scale(1.1);
  }
</style>
