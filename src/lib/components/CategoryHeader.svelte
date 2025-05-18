<script lang="ts">
  import { quintOut } from 'svelte/easing';
  import { fly } from 'svelte/transition';
  import { Terminal } from '@lucide/svelte';

  export let category: string;
  export let count: number;
  export let i = 0; // For animation sequencing
</script>

<div class=" relative" in:fly={{ y: 20, duration: 800, delay: 200 * i, easing: quintOut }}>
  <!-- Combination 3: Amber accent variation -->
  <div class="relative">
    <!-- Background with left accent -->
    <div class="absolute -left-2 top-0 bottom-0 w-4 bg-[#131836]/50 border-l-2 border-l-amber-500"></div>

    <!-- Main container -->
    <div class="ml-3 pl-2 pr-2 py-2 bg-[#131836]/50 backdrop-blur-sm border-t border-r border-b border-amber-500/30 rounded-r-md">
      <div class="flex items-center justify-between">
        <!-- Left side with terminal styling -->
        <div class="flex items-center space-x-2">
          <!-- Terminal icon -->
          <Terminal size={30} class="text-amber-400" />

          <div>
            <!-- Terminal command with amber primary -->
            <div class="flex items-center text-xl font-mono">
              <span class="text-[#00BBBB] mr-1">ls</span>
              <span class="text-white tracking-wide">{category}</span>
            </div>
          </div>
        </div>

        <!-- Article counter pill with amber -->
        <div class="px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-md">
          <span class="text-xs font-mono text-amber-400">
            {count}
            {count === 1 ? 'article' : 'articles'}
          </span>
        </div>
      </div>
    </div>

    <!-- Amber line -->
    <div class="relative mt-1 h-[2px] bg-gradient-to-r from-amber-500 ml-3"></div>
  </div>
</div>

<style>
  /* Any additional styles can go here */
</style>
