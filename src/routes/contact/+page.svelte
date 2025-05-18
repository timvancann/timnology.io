<script lang="ts">
  import { fly, fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { Mail, MessageSquare, Send, Github, Youtube, Linkedin } from '@lucide/svelte';

  // Social media links with icons and URLs
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/timnology', color: '#00BBBB' },
    { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@Timnology-r4s', color: '#f87171' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/timvancann/', color: '#9333ea' }
  ];
</script>

<section class="relative py-24 overflow-hidden">
  <!-- Background gradient -->
  <div class="absolute inset-0 bg-gradient-to-b from-[#0a0118] to-[#0c1a28] -z-10"></div>

  <!-- Background pattern with low opacity -->
  <div class="absolute inset-0 opacity-[0.03] -z-10">
    <div
      class="absolute inset-0"
      style="background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%2300BBBB%22%20stroke-width%3D%220.4%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%221%22%20/%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%224%22%20/%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%228%22%20/%3E%3C/g%3E%3C/svg%3E');"
    ></div>
  </div>

  <!-- Ambient light effects -->
  <div class="absolute left-1/4 top-0 w-1/2 h-1/3 bg-gradient-to-b from-[#00BBBB]/10 to-transparent -z-10"></div>
  <div class="absolute right-1/4 bottom-0 w-1/2 h-1/3 bg-gradient-to-t from-[#9333ea]/10 to-transparent -z-10"></div>

  <!-- Contact header content -->
  <div class="container mx-auto px-4 relative z-10">
    <div class="max-w-5xl mx-auto">
      <div class="md:flex items-center justify-between">
        <!-- Text content -->
        <div class="md:w-3/5 mb-12 md:mb-0 md:pr-12">
          <!-- Section label -->
          <div class="mb-4" in:fade={{ duration: 600, delay: 100 }}>
            <div class="flex items-center space-x-2">
              <div class="h-0.5 w-8 bg-gradient-to-r from-amber-300 to-[#00BBBB]"></div>
              <span class="text-amber-300 font-medium text-sm uppercase tracking-wider">Get in Touch</span>
            </div>
          </div>

          <!-- Main heading -->
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white" in:fly={{ y: 20, duration: 800, delay: 200, easing: quintOut }}>
            <span class="bg-gradient-to-r from-amber-300 via-[#00BBBB] to-purple-400 bg-clip-text text-transparent"> Contact Us </span>
          </h1>

          <!-- Description -->
          <p class="text-slate-300 text-lg mb-8 leading-relaxed" in:fly={{ y: 20, duration: 800, delay: 300, easing: quintOut }}>
            Have questions, feedback, or suggestions? We'd love to hear from you. Use the form below or reach out via one of our social channels.
          </p>

          <!-- Contact methods -->
          <div class="space-y-6" in:fly={{ y: 20, duration: 800, delay: 400, easing: quintOut }}>
            <!-- Email -->
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full flex items-center justify-center bg-[#00BBBB]/10 border border-[#00BBBB]/20 mr-4">
                <Mail size={20} class="text-[#00BBBB]" />
              </div>
              <div>
                <p class="text-white text-sm font-medium mb-1">Email Us</p>
                <a href="mailto:contact@timnology.io" class="text-[#00BBBB] hover:text-[#00BBBB]/80 transition-colors">contact@timnology.io</a>
              </div>
            </div>

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
                {#each socialLinks as link}
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
        <div class="md:w-2/5 flex justify-center" in:fly={{ x: 30, duration: 800, delay: 500, easing: quintOut }}>
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
