<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import Hero from '$lib/components/Hero.svelte';
  import FeaturedArticle from '$lib/components/FeaturedArticle.svelte';
  import TutorialsSection from '$lib/components/TutorialsSection.svelte';
  import Features from '$lib/components/Features.svelte';
  import Newsletter from '$lib/components/Newsletter.svelte';
  import type { Article } from '$lib/types';
  interface Data {
    data: {
      articles: Article[];
      categorisedArticles: Map<string, Article[]>;
    };
  }

  let { data }: Data = $props();

  // Get a random featured article
  let featuredArticle: Article | null = $state(null);

  onMount(() => {
    if (data.articles.length > 0) {
      featuredArticle = data.articles[Math.floor(Math.random() * data.articles.length)];
    }
    featuredArticle = null;
  });
</script>

<svelte:head>
  <title>Timnology - Technical Tutorials for Developers</title>
  <meta name="description" content="In-depth technical tutorials and resources for data engineers and software developers. Free, comprehensive guides with code examples and videos." />
</svelte:head>

<!-- Hero section -->
<Hero />

<!-- Featured article -->
{#if featuredArticle}
  <FeaturedArticle article={featuredArticle} />
{/if}

<!-- Tutorials section -->
<TutorialsSection categorisedArticles={data.categorisedArticles} />

<!-- Newsletter signup -->
<!--- <Newsletter /> -->
<!-- Features section -->
<Features />
