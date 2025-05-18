<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { fade, slide } from 'svelte/transition';
  import { Menu, X, ChevronDown, Github, Youtube, Linkedin } from '@lucide/svelte';

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

  // Toggle mobile menu
  function toggleMenu() {
    menuOpen = !menuOpen;
    dropdownOpen = null; // Close any open dropdowns
  }

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
        <div class="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#00BBBB] to-[#9333ea] rounded-lg flex items-center justify-center text-white font-bold text-base md:text-lg relative">
          <span class="relative z-10">T</span>
          <div class="absolute inset-0 bg-black/20 rounded-lg"></div>
        </div>
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
                <div class="absolute top-full right-0 mt-1 w-48 rounded-md shadow-lg bg-[#0c1a28] border border-white/10 overflow-hidden z-20" transition:slide={{ duration: 200 }}>
                  <div class="py-1">
                    {#each item.dropdown as subItem, j (j)}
                      <a
                        href={subItem.href}
                        class={`block px-4 py-2 text-sm text-slate-300 hover:bg-[#00BBBB]/10 hover:text-white transition-colors
                        ${isActive(subItem.href) ? 'bg-[#00BBBB]/10 text-white' : ''} 
                        `}
                        onclick={handleLinkClick}
                      >
                        {subItem.name}
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
