<script lang="ts">
  import ArticleCard from '$lib/components/ArticleCard.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';
  import { capitalize } from '$lib/utils';

  let { data } = $props();
</script>

<section class="relative py-24 overflow-hidden">
  <SectionHeader title={capitalize(data.slug)} subtitle="Article category" />
  <div class="max-w-7xl mx-auto relative z-10">
    <div class=" relative overflow-hidden text-white p-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {#each data.articles as article (article.slug)}
          <ArticleCard {article} />
        {/each}
      </div>
    </div>
  </div>
</section>
