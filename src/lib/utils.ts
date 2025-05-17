import { error } from '@sveltejs/kit';
import type { Article, MarkdownArticle } from './types';

// Format date helper
export function formatDate(dateString: string) {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

export const findArticle = (slug: string, paths: Record<string, unknown>) => {
  const files = Object.keys(paths)
    .filter((path) => {
      const fileName = path.split('/').at(-2) || '';
      // This pattern matches files like "00-prerequisites.md" when chapterSlug is "prerequisites"
      return slug === fileName;
    })
    .filter((path) => path.endsWith('index.md'));

  if (files.length === 0) {
    console.error(`Could not find any files matching ${slug}`);
    throw error(404, `Article not found`);
  }

  return files[0];
};

export const allArticles = (paths: Record<string, unknown>): Article[] => {
  const files = Object.keys(paths)
    .filter((path) => {
      const fileName = path.split('/').at(-1) || '';
      // This pattern matches files like "00-prerequisites.md" when chapterSlug is "prerequisites"
      return fileName === 'index.md';
    })
    .map((article) => {
      const articlePath = paths[article] as MarkdownArticle;
      return {
        ...articlePath.metadata,
        slug: article.split('/').at(-2) || ''
      };
    });

  if (files.length === 0) {
    console.error(`Could not find any article files`);
    throw error(404, `No articles found`);
  }
  return files;
};

export const findChapter = (chapterSlug: string, paths: Record<string, unknown>) => {
  const chapterFiles = Object.keys(paths).filter((path) => {
    const fileName = path.split('/').pop() || '';
    // This pattern matches files like "00-prerequisites.md" when chapterSlug is "prerequisites"
    return fileName.endsWith(`-${chapterSlug}.md`);
  });

  if (chapterFiles.length === 0) {
    console.error(`Could not find any chapter files matching ${chapterSlug} in article`);
    throw error(404, `Chapter not found`);
  }
  return chapterFiles[0];
};

export const allChaptersInArticle = (articleSlug: string, paths: Record<string, unknown>) => {
  const chapterFiles = Object.keys(paths).filter((path) => {
    const pathParts = path.split('/');
    const fileName = pathParts.pop() || '';
    const dirName = pathParts.pop() || '';
    // This pattern matches files like "00-prerequisites.md" when chapterSlug is "prerequisites"
    return dirName === articleSlug && fileName !== 'index.md';
  });

  return chapterFiles;
};
