import type { ArticlePageProps, Chapter, MarkdownArticle, MarkdownChapter } from '$lib/types';
import { allChaptersInArticle, findArticle } from '$lib/utils';
import { error } from '@sveltejs/kit';

export const load = async ({ params }): Promise<ArticlePageProps> => {
  try {
    // Load the article content
    const slug = params.slug;
    const paths = import.meta.glob('/src/articles/**/*.md', { eager: true });
    const article = paths[findArticle(slug, paths)] as MarkdownArticle;

    // Fetch chapters for this article
    const chapterPaths = allChaptersInArticle(slug, paths);
    const chapters: Chapter[] = chapterPaths.map((path) => {
      const chapter = paths[path] as MarkdownChapter;
      return {
        ...chapter.metadata,
        content: chapter.default,
        slug: path.split('/').at(-1)?.replace('.md', '').split('-').at(-1) || ''
      } as Chapter;
    });

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
