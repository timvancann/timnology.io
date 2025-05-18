<script lang="ts">
  import { fly, fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  // Props with defaults
  let { title = 'Section Title', subtitle = '' } = $props();
</script>

<div class="max-w-5xl mx-auto">
  <div class="md:flex items-center justify-between">
    <!-- Text content -->
    <div class="md:w-3/5 mb-12 md:mb-0 md:pr-12">
      <!-- Section label -->
      <div class="mb-4" in:fade={{ duration: 600, delay: 100 }}>
        <div class="flex items-center space-x-2">
          <div class="h-0.5 w-8 bg-gradient-to-r from-amber-300 to-[#00BBBB]"></div>
          <span class="text-amber-300 font-medium text-sm uppercase tracking-wider">{subtitle}</span>
        </div>
      </div>

      <!-- Main heading -->
      <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white" in:fly={{ y: 20, duration: 800, delay: 200, easing: quintOut }}>
        <span class="bg-gradient-to-r from-amber-300 via-[#00BBBB] to-purple-400 bg-clip-text text-transparent"> {title} </span>
      </h1>
    </div>
  </div>
</div>
