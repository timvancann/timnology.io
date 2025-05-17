import type { ArticlePageProps, Chapter, MarkdownArticle } from '$lib/types';
import { error } from '@sveltejs/kit';

export const load = async ({ params, fetch }): Promise<ArticlePageProps> => {
  try {
    // Load the article content
    const slug = params.slug;
    const article: MarkdownArticle = await import(`../../../articles/${slug}/index.md`);

    // Fetch chapters for this article
    let chapters: Chapter[] = [];
    try {
      const response = await fetch(`/api/articles/${params.slug}/chapters`);
      if (response.ok) {
        chapters = await response.json();
      }
    } catch (error) {
      console.error('Error fetching chapters:', error);
    }

    return {
      metadata: article.metadata,
      content: article.default,
      slug,
      chapters
    };
  } catch (e) {
    console.error(`Could not find ${params.slug}:`, e);
    throw error(404, `Could not find ${params.slug}`);
  }
};
