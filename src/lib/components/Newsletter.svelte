<!-- Newsletter.svelte -->
<script lang="ts">
  import { fly, fade, scale } from 'svelte/transition';
  import { elasticOut, quintOut } from 'svelte/easing';
  import { Mail, ArrowRight, CheckCircle } from '@lucide/svelte';

  // Form state
  let email = '';
  let submitting = false;
  let success = false;
  let error = '';

  // Handle form submission
  async function handleSubmit() {
    // Basic validation
    if (!email || !email.includes('@') || !email.includes('.')) {
      error = 'Please enter a valid email address';
      return;
    }

    error = '';
    submitting = true;

    // Simulate API call with timeout
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      success = true;
      email = '';
    } catch (err) {
      error = 'Something went wrong. Please try again.';
    } finally {
      submitting = false;
    }
  }
</script>

<section class="py-16 px-4 relative overflow-hidden bg-gradient-to-br from-[#131836] to-[#0a0118]">
  <!-- Background elements -->
  <div class="absolute inset-0 z-0">
    <!-- Animated circuit lines -->
    <svg class="absolute inset-0 w-full h-full pointer-events-none opacity-5" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- Horizontal lines -->
      <line x1="0" y1="30" x2="100" y2="30" stroke="#00BBBB" stroke-width="0.2" stroke-dasharray="0.5 2" />
      <line x1="0" y1="70" x2="100" y2="70" stroke="#9333ea" stroke-width="0.2" stroke-dasharray="0.5 2" />

      <!-- Vertical lines -->
      <line x1="30" y1="0" x2="30" y2="100" stroke="#9333ea" stroke-width="0.2" stroke-dasharray="0.5 2" />
      <line x1="70" y1="0" x2="70" y2="100" stroke="#00BBBB" stroke-width="0.2" stroke-dasharray="0.5 2" />

      <!-- Decorative circles -->
      <circle cx="30" cy="30" r="1" fill="#00BBBB" />
      <circle cx="70" cy="70" r="1" fill="#9333ea" />
      <circle cx="30" cy="70" r="1" fill="#F59E0B" />
      <circle cx="70" cy="30" r="1" fill="#00BBBB" />
    </svg>

    <!-- Ambient glows -->
    <div class="absolute top-0 right-0 w-1/3 h-1/2 bg-[#00BBBB]/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#9333ea]/10 rounded-full blur-3xl"></div>
  </div>

  <div class="container mx-auto relative z-10">
    <div class="max-w-4xl mx-auto bg-[#0c1a28]/60 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-xl overflow-hidden relative">
      <!-- Decorative elements in the card -->
      <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-r from-[#00BBBB]/20 to-transparent blur-2xl rounded-full"></div>
      <div class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-r from-[#9333ea]/20 to-transparent blur-2xl rounded-full"></div>

      <!-- Card content with responsive layout -->
      <div class="md:flex items-center justify-between relative z-10">
        <div class="md:w-3/5 mb-8 md:mb-0 md:pr-8">
          <div class="flex items-center space-x-2 mb-2">
            <div class="h-0.5 w-8 bg-gradient-to-r from-amber-300 to-[#00BBBB]"></div>
            <span class="text-amber-300 font-medium text-sm uppercase tracking-wider">Stay Updated</span>
          </div>

          <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Never Miss New Tutorials</h2>

          <p class="text-slate-300 mb-6">Get notified when new tutorials are published. No spam, just quality technical content delivered straight to your inbox.</p>

          {#if !success}
            <form on:submit|preventDefault={handleSubmit} class="flex flex-col sm:flex-row gap-3">
              <div class="relative flex-grow">
                <div class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <Mail size={18} />
                </div>

                <input
                  type="email"
                  bind:value={email}
                  placeholder="Your email address"
                  class="w-full px-10 py-3 rounded-lg bg-slate-800/50 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-[#00BBBB]/50 focus:ring-1 focus:ring-[#00BBBB]/50 transition-all duration-300"
                  disabled={submitting}
                />

                {#if error}
                  <p class="absolute -bottom-6 left-0 text-xs text-red-400 mt-1">{error}</p>
                {/if}
              </div>

              <button
                type="submit"
                class="px-6 py-3 rounded-lg bg-gradient-to-r from-[#00BBBB] to-[#0090b3] text-white font-medium transition duration-300 hover:shadow-lg hover:shadow-[#00BBBB]/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                disabled={submitting}
              >
                {#if submitting}
                  <div class="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                  Subscribing...
                {:else}
                  Subscribe
                  <ArrowRight size={18} class="ml-2" />
                {/if}
              </button>
            </form>
          {:else}
            <div class="text-[#00BBBB] flex items-center space-x-2 p-3 rounded-lg border border-[#00BBBB]/20 bg-[#00BBBB]/10" in:scale={{ duration: 300, delay: 0, easing: elasticOut }}>
              <CheckCircle size={20} />
              <span>Thank you! You've been added to our newsletter.</span>
            </div>
          {/if}
        </div>

        <!-- Illustration/Icon -->
        <div class="md:w-2/5 flex justify-center md:justify-end">
          <div class="w-24 h-24 md:w-32 md:h-32 relative">
            <!-- Pulsing background -->
            <div class="absolute inset-0 bg-[#00BBBB]/20 rounded-full animate-pulse"></div>

            <!-- Icon -->
            <div class="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 md:h-16 md:w-16 text-[#00BBBB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <!-- Decorative elements -->
            <div class="absolute -right-2 -top-2 w-4 h-4 rounded-full bg-amber-300"></div>
            <div class="absolute -left-2 -bottom-2 w-3 h-3 rounded-full bg-[#9333ea]"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Pulse animation for the icon background */
  @keyframes pulse {
    0%,
    100% {
      opacity: 0.2;
      transform: scale(1);
    }
    50% {
      opacity: 0.4;
      transform: scale(1.05);
    }
  }

  .animate-pulse {
    animation: pulse 3s infinite ease-in-out;
  }
</style>
