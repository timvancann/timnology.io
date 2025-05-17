import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
  try {
    // Extract article slug and chapter slug from params
    const { slug, chapterSlug } = params;

    // First, load the main article metadata (we need this for context)
    const article = await import(`../../../../../../articles/${slug}/index.md`);

    const paths = import.meta.glob('/src/articles/**/*.md', { eager: true });
    let chapterPath = '';
    for (const path in paths) {
      if (path.includes(`/${slug}/`) && path.includes(`${chapterSlug}.md`)) {
        const fileName = path.split('/').pop();
        chapterPath = `../../../../../../articles/${slug}/${fileName}`;
        break;
      }
    }
    if (chapterPath === '') {
      return;
    }

    // Then, load the specific chapter content
    const chapter = await import(chapterPath);

    // Fetch all chapters for this article for navigation
    let chapters = [];
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
    const currentChapterIndex = chapters.findIndex((c) => c.slug === chapterSlug);
    console.log(chapter, chapters, article)

    return {
      content: chapter.default,
      meta: {
        ...article.metadata,
        slug: slug
      },
      chapters,
      currentChapter: {
        ...chapter.metadata,
        slug: chapterSlug,
        index: currentChapterIndex
      },
      isIndexPage: false // Flag to identify we're on a chapter page
    };
  } catch (e) {
    console.error(`Could not find ${params.slug}/${params.chapterSlug}:`, e);
    throw error(404, `Could not find ${params.slug}/${params.chapterSlug}`);
  }
}
