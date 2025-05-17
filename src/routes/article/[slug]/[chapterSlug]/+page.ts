import type { Chapter, ChapterPageProps, MarkdownArticle, MarkdownChapter } from '$lib/types';
import { error } from '@sveltejs/kit';

export const load = async ({ params, fetch }): Promise<ChapterPageProps> => {
  try {
    // Extract article slug and chapter slug from params
    const { slug, chapterSlug } = params;
    // First, load the main article metadata (we need this for context)
    const article: MarkdownArticle = await import(`../../../../articles/${slug}/index.md`);

    const paths = import.meta.glob('/src/articles/**/*.md', { eager: true });
    let chapterPath = '';
    for (const path in paths) {
      console.log(path);
      if (path.includes(`/${slug}/`) && path.includes(`${chapterSlug}.md`)) {
        const fileName = path.split('/').pop();
        chapterPath = `../../../../articles/${slug}/${fileName}`;
        console.log(path, fileName, chapterPath);
        break;
      }
    }

    // Then, load the specific chapter content
    const chapter: MarkdownChapter = await import(chapterPath);

    // Fetch all chapters for this article for navigation
    let chapters: Chapter[] = [];
    try {
      const response = await fetch(`/api/articles/${slug}/chapters`);
      if (response.ok) {
        chapters = await response.json();
        // Sort chapters by order if available
        chapters.sort((a, b) => (a.order || 0) - (b.order || 0));
      }
    } catch (error) {
      console.error('Error fetching chapters:', error);
    }

    // Find the current chapter index
    const chapterIndex = chapters.findIndex((c) => c.slug === chapterSlug);

    return {
      content: chapter.default,
      articleMetadata: article.metadata,
      metadata: chapter.metadata,
      slug,
      chapterSlug,
      chapters,
      chapterIndex
    };
  } catch (e) {
    console.error(`Could not find ${params.slug}/${params.chapterSlug}:`, e);
    throw error(404, `Could not find ${params.slug}/${params.chapterSlug}`);
  }
};
