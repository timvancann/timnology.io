<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import '../app.css';

  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';

  // Page loading state
  let isLoading = true;

  // Handle page transitions
  onMount(() => {
    // Hide loader after page is ready
    isLoading = false;

    // Smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
          });

          // Update URL without reloading page
          history.pushState(null, '', `#${targetId}`);
        }
      });
    });
  });
</script>

<!-- Main layout wrapper -->
<div class="flex flex-col min-h-screen bg-[#0a0118] text-white">
  <!-- Page loader -->
  {#if isLoading}
    <div class="fixed inset-0 bg-[#0a0118] flex items-center justify-center z-50" transition:fade={{ duration: 300 }}>
      <div class="relative">
        <!-- Animated glowing circle -->
        <div class="absolute inset-0 bg-[#00BBBB] rounded-full blur-xl opacity-30 animate-pulse"></div>

        <!-- Main loader -->
        <div class="relative w-16 h-16 border-4 border-[#00BBBB]/20 border-t-[#00BBBB] rounded-full animate-spin"></div>
      </div>
    </div>
  {/if}

  <!-- Header -->
  <Header />

  <!-- Main content -->
  <main class="flex-grow space-y-4">
    <slot />
  </main>

  <!-- Footer -->
  <Footer />
</div>

<style>
  /* Loader animations */
  @keyframes pulse {
    0%,
    100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.05);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .animate-pulse {
    animation: pulse 2s infinite ease-in-out;
  }

  .animate-spin {
    animation: spin 1s linear infinite;
  }
</style>
