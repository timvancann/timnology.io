<script lang="ts">
  import { quintOut } from 'svelte/easing';
  import { fly } from 'svelte/transition';

  let { category, i } = $props();
</script>

<div class="mb-10 relative" in:fly={{ y: 20, duration: 800, delay: 200 * i, easing: quintOut }}>
  <div class="flex items-center">
    <div class="w-1 h-10 bg-gradient-to-b from-[#00BBBB] to-[#9333ea] transition-all duration-300"></div>
    <div class="ml-4 flex-grow">
      <h2 class="text-2xl font-bold text-white">
        <span class="text-[#00BBBB]">/</span>
        {category.name}
      </h2>
      <div class="mt-2 h-px w-full bg-gradient-to-r from-[#00BBBB] via-[rgba(0,187,187,0.5)] to-transparent"></div>
    </div>
  </div>
</div>
