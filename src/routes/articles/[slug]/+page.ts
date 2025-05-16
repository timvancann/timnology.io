import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
  try {
    // Load the article content
    const article = await import(`/src/articles/${params.slug}/index.md`);

    // Fetch chapters for this article
    let chapters = [];
    try {
      const response = await fetch(`/api/articles/${params.slug}/chapters`);
      if (response.ok) {
        chapters = await response.json();
        // Sort chapters by order if available
        chapters.sort((a, b) => (a.order || 0) - (b.order || 0));
      }
    } catch (error) {
      console.error('Error fetching chapters:', error);
    }

    return {
      content: article.default,
      meta: {
        ...article.metadata,
        slug: params.slug
      },
      chapters,
      currentChapter: null, // No specific chapter for the article index page
      isIndexPage: true // Flag to identify we're on the article index page
    };
  } catch (e) {
    console.error(`Could not find ${params.slug}:`, e);
    throw error(404, `Could not find ${params.slug}`);
  }
}
