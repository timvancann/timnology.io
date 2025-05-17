import type { Chapter } from '$lib/types';
import { json } from '@sveltejs/kit';

async function getChapters(articleSlug: string) {
  let chapters: Chapter[] = [];

  // Use glob to find all markdown files in the article directory except index.md
  const paths = import.meta.glob('/articles/**/*.md', { eager: true });

  for (const path in paths) {
    // Check if this file is in the correct article directory and is not index.md
    const pathParts = path.split('/');
    const fileName = pathParts[pathParts.length - 1];
    const dirName = pathParts[pathParts.length - 2];

    if (dirName !== articleSlug || fileName === 'index.md') continue;

    const file = paths[path];
    const chapterSlug = fileName.split('-')[1].replace('.md', '');

    if (file && typeof file === 'object' && 'metadata' in file && chapterSlug) {
      const metadata = file.metadata as Omit<Chapter, 'slug'>;
      const chapter = {
        ...metadata,
        slug: chapterSlug,
        order: metadata.order || 0
      } as Chapter;

      chapters.push(chapter);
    }
  }

  // Sort chapters by order
  chapters = chapters.sort((a, b) => a.order - b.order);

  return chapters;
}

export async function GET({ url }) {
  const articleSlug: string = url.pathname.split('/').at(-2);
  const chapters = await getChapters(articleSlug);
  return json(chapters);
}
