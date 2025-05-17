import type { Chapter, ChapterPageProps, MarkdownArticle, MarkdownChapter } from '$lib/types';
import { allChaptersInArticle, findArticle, findChapter } from '$lib/utils';
import { error } from '@sveltejs/kit';

export const load = async ({ params, fetch }): Promise<ChapterPageProps> => {
  try {
    // Extract article slug and chapter slug from params
    const { slug, chapterSlug } = params;
    // First, load the main article metadata (we need this for context)
    const paths = import.meta.glob('/src/articles/**/*.md', { eager: true });
    const article = paths[findArticle(slug, paths)] as MarkdownArticle;
    const chapter = paths[findChapter(chapterSlug, paths)] as MarkdownChapter;

    // Fetch all chapters for this article for navigation
    const chapterPaths = allChaptersInArticle(slug, paths);
    const chapters: Chapter[] = chapterPaths.map((path) => {
      const chapter = paths[path] as MarkdownChapter;
      return {
        ...chapter.metadata,
        content: chapter.default,
        slug: path.split('/').at(-1)?.replace('.md', '').split('-').at(-1) || ''
      } as Chapter;
    });

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
