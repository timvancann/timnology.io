import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

// Types for our content structure
export interface ArticleMetadata {
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  icon?: string;
  updatedAt?: string;
  youtube_url?: string;
  github?: string;
  order?: number;
}

export interface Chapter {
  slug: string;
  title: string;
  order: number;
}

export interface Article extends ArticleMetadata {
  chapters: Chapter[];
}

export interface Category {
  name: string;
  articles: ArticleMetadata[];
}

/**
 * Load all article metadata from the content directory
 */
export async function getAllArticles(): Promise<ArticleMetadata[]> {
  try {
    // Set the content directory path
    const contentDir = path.join(process.cwd(), 'content/articles');

    // Get all article directories
    const articleDirs = fs.readdirSync(contentDir).filter((dir) => fs.statSync(path.join(contentDir, dir)).isDirectory());

    // Get the metadata from each article's index.md file
    const articles = articleDirs
      .map((dir) => {
        const indexPath = path.join(contentDir, dir, 'index.md');

        // Skip if index.md doesn't exist
        if (!fs.existsSync(indexPath)) {
          console.warn(`Missing index.md in ${dir}, skipping`);
          return null;
        }

        // Read the file contents
        const fileContent = fs.readFileSync(indexPath, 'utf8');

        // Parse frontmatter
        const { data } = matter(fileContent);

        // Return article metadata
        return {
          slug: dir,
          title: data.title,
          subtitle: data.subtitle,
          category: data.category,
          icon: data.icon,
          updatedAt: data.updatedAt,
          youtube_url: data.youtube_url,
          github: data.github,
          order: data.order || 0
        };
      })
      .filter(Boolean) as ArticleMetadata[];

    // Sort by order then by title
    return articles.sort((a, b) => {
      if (a.order !== b.order) {
        return (a.order || 0) - (b.order || 0);
      }
      return a.title.localeCompare(b.title);
    });
  } catch (error) {
    console.error('Failed to load articles:', error);
    return [];
  }
}

/**
 * Group articles by their categories
 */
export function groupArticlesByCategory(articles: ArticleMetadata[]): Category[] {
  // Create a map to hold category groups
  const categoriesMap: Record<string, ArticleMetadata[]> = {};

  // Group articles by category
  articles.forEach((article) => {
    const category = article.category || 'Uncategorized';

    if (!categoriesMap[category]) {
      categoriesMap[category] = [];
    }

    categoriesMap[category].push(article);
  });

  // Convert map to array of Category objects
  const categories = Object.entries(categoriesMap).map(([name, articles]) => ({
    name,
    articles: articles.sort((a, b) => {
      if (a.order !== b.order) {
        return (a.order || 0) - (b.order || 0);
      }
      return a.title.localeCompare(b.title);
    })
  }));

  return categories;
}

/**
 * Load a specific article including all its chapters
 */
export async function getArticle(slug: string): Promise<Article | null> {
  try {
    const contentDir = path.join(process.cwd(), 'content/articles');
    const articleDir = path.join(contentDir, slug);

    // Check if directory exists
    if (!fs.existsSync(articleDir)) {
      return null;
    }

    // Read the index.md file for article metadata
    const indexPath = path.join(articleDir, 'index.md');
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    const { data, content } = matter(indexContent);

    // Get all chapter files (all .md files except index.md)
    const files = fs.readdirSync(articleDir);
    const chapterFiles = files.filter((file) => file !== 'index.md' && file.endsWith('.md'));

    // Load each chapter
    const chapters = await Promise.all(
      chapterFiles.map(async (file) => {
        const filePath = path.join(articleDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);

        return {
          slug: file.replace('.md', ''),
          title: data.title,
          content: content,
          order: data.order || 0,
          youtube_url: data.youtube_url
        };
      })
    );

    // Sort chapters by order
    const sortedChapters = chapters.sort((a, b) => a.order - b.order);

    // Return complete article with chapters
    return {
      slug,
      title: data.title,
      subtitle: data.subtitle,
      category: data.category,
      icon: data.icon,
      updatedAt: data.updatedAt,
      youtube_url: data.youtube_url,
      github: data.github,
      order: data.order || 0,
      chapters: sortedChapters
    };
  } catch (error) {
    console.error(`Failed to load article ${slug}:`, error);
    return null;
  }
}

/**
 * Get a specific chapter from an article
 */
export async function getChapter(articleSlug: string, chapterSlug: string) {
  const article = await getArticle(articleSlug);

  if (!article) {
    return null;
  }

  const chapter = article.chapters.find((ch) => ch.slug === chapterSlug);

  if (!chapter) {
    return null;
  }

  return {
    article,
    chapter
  };
}
