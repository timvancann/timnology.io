<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { fade, fly, slide } from 'svelte/transition';
  import { ChevronDown, Github, Youtube, Linkedin } from '@lucide/svelte';
  import { quintOut } from 'svelte/easing';

  // Navigation state
  let isScrolled = false;
  let menuOpen = false;
  let dropdownOpen: number | null = null;

  //let { categories } = $props<{ categories: string[] }>();

  // Menu items
  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Tutorials',
      href: '/#tutorials',
      dropdown: [
        { name: 'Python', href: '/category/python' },
        { name: 'Kubernetes', href: '/category/kubernetes' }
        //        { name: 'Software Development', href: '/categories/software-development' },
        //        { name: 'All Tutorials', href: '/tutorials' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  // Handle scroll events to change header appearance
  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 10;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  // Toggle dropdown menu
  function toggleDropdown(index: number) {
    dropdownOpen = dropdownOpen === index ? null : index;
  }

  // Handle click outside to close dropdown
  function handleClickOutside(event) {
    if (dropdownOpen !== null && !event.target.closest('.dropdown-toggle')) {
      dropdownOpen = null;
    }
  }

  // Check if a link is active
  function isActive(href: string) {
    if (href === '/') {
      return $page.url.pathname === '/';
    }
    return $page.url.pathname.startsWith(href);
  }

  // Close mobile menu when clicking a link
  function handleLinkClick() {
    menuOpen = false;
  }
</script>

<svelte:window on:click={handleClickOutside} />

<header
  class={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
  ${isScrolled || menuOpen ? 'bg-[#0a0118]/90' : ''}

  `}
  class:bg-transparent={!isScrolled && !menuOpen}
  class:backdrop-blur-md={isScrolled || menuOpen}
  class:shadow-md={isScrolled || menuOpen}
>
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between h-16 md:h-20">
      <!-- Logo -->
      <a href="/" class="flex items-center space-x-2 z-20">
        <img src="/timnology.png" alt="Timnology Logo" class="w-10 h-10" />
        <span class="text-lg md:text-xl font-bold text-white hidden md:block">Timnology</span>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-1">
        {#each navItems as item, i (i)}
          {#if item.dropdown}
            <div class="relative">
              <button
                onclick={() => toggleDropdown(i)}
                class={`dropdown-toggle flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${isActive(item.href) ? 'text-[#00BBBB] bg-[#00BBBB]/10' : 'text-slate-300 hover:bg-white/5'}

                `}
              >
                {item.name}
                <ChevronDown size={16} class={`ml-1 transition-transform duration-200 ${dropdownOpen === i ? 'rotate-180' : ''}`} />
              </button>

              {#if dropdownOpen === i}
                <div class="absolute top-full right-0 mt-2 w-56 rounded-xl shadow-lg overflow-hidden z-20" in:fly={{ y: -5, duration: 250, easing: quintOut }} out:fade={{ duration: 150 }}>
                  <div class="absolute inset-0 rounded-xl p-[1px] overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-[#00BBBB]/50 via-[#9333ea]/50 to-[#00BBBB]/50 rounded-xl"></div>
                  </div>
                  <div class="relative bg-[#0c1a28]/90 backdrop-blur-md rounded-xl overflow-hidden border border-white/10">
                    <!-- Ambient glow effects -->
                    <div class="absolute top-0 right-0 w-20 h-20 bg-[#00BBBB]/10 rounded-full blur-xl opacity-70"></div>
                    <div class="absolute bottom-0 left-0 w-20 h-20 bg-[#9333ea]/10 rounded-full blur-xl opacity-70"></div>

                    {#each item.dropdown as subItem, j (j)}
                      <a
                        href={subItem.href}
                        class="group block relative px-4 py-3 text-sm transition-colors {isActive(subItem.href) ? 'text-white bg-[#00BBBB]/10' : 'text-slate-300'}"
                        onclick={handleLinkClick}
                      >
                        <!-- Hover indicator line -->
                        <div
                          class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00BBBB] to-[#9333ea] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          class:opacity-100={isActive(subItem.href)}
                        ></div>

                        <!-- Background hover effect -->
                        <div class="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" class:opacity-100={isActive(subItem.href)}></div>

                        <span class="relative z-10 pl-2 group-hover:text-white transition-colors duration-200">
                          {subItem.name}
                        </span>
                      </a>
                    {/each}
                  </div>
                </div>
              {/if}
            </div>
          {:else}
            <a
              href={item.href}
              class={`px-3 py-2 rounded-md text-sm font-medium transition-colors
              ${isActive(item.href) ? 'text-[#00BBBB] bg-[#00BBBB]/10' : 'text-white hover:bg-white/5'}

              `}
              onclick={handleLinkClick}
            >
              {item.name}
            </a>
          {/if}
        {/each}

        <!-- Social links -->
        <div class="ml-4 flex items-center space-x-2">
          <a href="https://github.com/timnology" target="_blank" rel="noopener noreferrer" class="p-1.5 text-slate-300 hover:text-white transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.youtube.com/@Timnology-r4s" target="_blank" rel="noopener noreferrer" class="p-1.5 text-slate-300 hover:text-white transition-colors" aria-label="YouTube">
            <Youtube size={18} />
          </a>
          <a href="https://www.linkedin.com/in/timvancann/" target="_blank" rel="noopener noreferrer" class="p-1.5 text-slate-300 hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>
      </nav>

      <!-- Mobile menu button -->
      <nav class="flex md:hidden items-center space-x-1">
        <a
          href="/articles"
          class={`px-3 py-2 rounded-md text-sm font-medium transition-colors
              ${isActive('/articles') ? 'text-[#00BBBB] bg-[#00BBBB]/10' : 'text-white hover:bg-white/5'}

              `}
        >
          Articles
        </a>

        <!-- Social links -->
        <div class="ml-4 flex items-center space-x-2">
          <a href="https://github.com/timnology" target="_blank" rel="noopener noreferrer" class="p-1.5 text-slate-300 hover:text-white transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.youtube.com/@Timnology-r4s" target="_blank" rel="noopener noreferrer" class="p-1.5 text-slate-300 hover:text-white transition-colors" aria-label="YouTube">
            <Youtube size={18} />
          </a>
          <a href="https://www.linkedin.com/in/timvancann/" target="_blank" rel="noopener noreferrer" class="p-1.5 text-slate-300 hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>
      </nav>
    </div>
  </div>
</header>

<!-- Spacer to prevent content from being hidden under the fixed header -->
<div class="h-16 md:h-20"></div>

<style>
  /* Subtle animation for dropdown chevron */
  .rotate-180 {
    transform: rotate(180deg);
  }
</style>
