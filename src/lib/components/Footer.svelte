<!-- Footer.svelte -->
<script lang="ts">
  import { Github, Youtube, Linkedin, Twitter, ExternalLink, Heart } from '@lucide/svelte';

  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  // Footer links
  const links = [
    {
      title: 'Content',
      items: [
        { name: 'Tutorials', href: '/#tutorials' },
        { name: 'Articles', href: '/articles' },
        { name: 'Videos', href: '/videos' }
      ]
    },
    {
      title: 'About',
      items: [
        { name: 'About Timnology', href: '/about' },
        { name: 'The Author', href: '/about#author' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'GitHub', href: 'https://github.com/timnology', external: true },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Use', href: '/terms' }
      ]
    }
  ];

  // Social links
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/timnology' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@Timnology-r4s' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/timvancann/' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/timnology' }
  ];
</script>

<footer class="bg-[#0a0118] text-white relative overflow-hidden border-t border-white/5">
  <!-- Background elements -->
  <div class="absolute inset-0 z-0">
    <!-- Hex grid pattern -->
    <div
      class="absolute inset-0 opacity-[0.02]"
      style="background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2228%22%20height%3D%2249%22%20viewBox%3D%220%200%2028%2049%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%22hexagons%22%20fill%3D%22%2300BBBB%22%20fill-opacity%3D%221%22%20fill-rule%3D%22nonzero%22%3E%3Cpath%20d%3D%22M13.99%209.25l13%207.5v15l-13%207.5L1%2031.75v-15l12.99-7.5zM3%2017.9v12.7l10.99%206.34%2011-6.35V17.9l-11-6.34L3%2017.9zM0%2015l12.98-7.5V0h-2v6.35L0%2012.69v2.3zm0%2018.5L12.98%2041v8h-2v-6.85L0%2035.81v-2.3zM15%200v7.5L27.99%2015H28v-2.31h-.01L17%206.35V0h-2zm0%2049v-8l12.99-7.5H28v2.31h-.01L17%2042.15V49h-2z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')"
    ></div>

    <!-- Subtle glow at the top -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00BBBB]/40 to-transparent"></div>
  </div>

  <!-- Main footer content -->
  <div class="container mx-auto px-4 pt-16 pb-8 relative z-10">
    <!-- Top section with logo and links -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      <!-- Logo and info -->
      <div class="md:col-span-1">
        <div class="flex items-center space-x-2 mb-6">
          <div class="w-10 h-10 bg-gradient-to-br from-[#00BBBB] to-[#9333ea] rounded-lg flex items-center justify-center text-white font-bold text-lg relative">
            <span class="relative z-10">T</span>
            <div class="absolute inset-0 bg-black/20 rounded-lg"></div>
          </div>
          <span class="text-xl font-bold">Timnology</span>
        </div>

        <p class="text-slate-400 mb-6 text-sm">Free, high-quality technical tutorials and resources for data engineers and software developers. No paywalls, no ads, just knowledge.</p>

        <!-- Social links -->
        <div class="flex space-x-3">
          {#each socialLinks as link}
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors duration-300 text-slate-300 hover:text-white"
              aria-label={link.name}
            >
              <svelte:component this={link.icon} size={16} />
            </a>
          {/each}
        </div>
      </div>

      <!-- Footer links -->
      {#each links as section}
        <div>
          <h3 class="text-lg font-medium mb-4 text-white">{section.title}</h3>
          <ul class="space-y-2">
            {#each section.items as item}
              <li>
                <a
                  href={item.href}
                  class="text-slate-400 hover:text-[#00BBBB] transition-colors duration-300 flex items-center"
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                >
                  {item.name}
                  {#if item.external}
                    <ExternalLink size={12} class="ml-1 text-slate-500" />
                  {/if}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

    <!-- Bottom section with copyright -->
    <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-slate-500 text-sm">
        © {currentYear} Timnology. All rights reserved.
      </p>

      <p class="text-slate-500 text-sm flex items-center flex-wrap justify-center">
        Built with
        <Heart size={14} class="mx-1 text-red-400" />
        using
        <a href="https://kit.svelte.dev" target="_blank" rel="noopener noreferrer" class="mx-1 text-[#00BBBB] hover:text-[#00BBBB]/80 transition-colors"> SvelteKit </a>
        and
        <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" class="mx-1 text-[#00BBBB] hover:text-[#00BBBB]/80 transition-colors"> Tailwind CSS </a>
      </p>
    </div>
  </div>

  <!-- Background dot pattern at the bottom -->
  <div class="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
</footer>

<style>
  /* Responsive spacing adjustments */
  @media (max-width: 768px) {
    footer .container {
      padding-top: 3rem;
      padding-bottom: 2rem;
    }
  }
</style>
