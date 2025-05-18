<script lang="ts">
  import SectionHeader from '$lib/components/SectionHeader.svelte';
  import TutorialsSection from '$lib/components/TutorialsSection.svelte';

  let { data } = $props();
</script>

<section class="relative pt-12 md:py-24 overflow-hidden">
  <SectionHeader title="Eat, learn, sleep, repeat" subtitle="All our articles" />
  <TutorialsSection categorisedArticles={data.categorisedArticles} />
</section>
