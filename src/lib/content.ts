import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Article, Chapter, ArticleWithChapters, ArticleMetadata, ChapterMetadata } from './types';

const articlesDir = path.join(process.cwd(), 'content/articles');

export async function getAllArticles(): Promise<Article[]> {
  const dirs = fs.readdirSync(articlesDir);

  const articles = dirs.map(slug => {
    const indexPath = path.join(articlesDir, slug, 'index.md');

    if (!fs.existsSync(indexPath)) {
      return null;
    }

    const content = fs.readFileSync(indexPath, 'utf8');
    const { data } = matter(content);

    return { ...(data as ArticleMetadata), slug };
  }).filter((article): article is Article => article !== null);

  return articles
    .filter(a => a.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getArticleWithChapters(slug: string): Promise<ArticleWithChapters> {
  const articleDir = path.join(articlesDir, slug);
  const indexPath = path.join(articleDir, 'index.md');
  const { data } = matter(fs.readFileSync(indexPath, 'utf8'));

  const files = fs.readdirSync(articleDir);
  const chapterFiles = files.filter(f => /^\d{2}-.*\.md$/.test(f));

  const chapters: Chapter[] = chapterFiles.map(filename => {
    const content = fs.readFileSync(path.join(articleDir, filename), 'utf8');
    const { data: chapterData } = matter(content);
    const chapterSlug = filename.replace(/^\d{2}-/, '').replace('.md', '');

    return {
      ...(chapterData as ChapterMetadata),
      slug: chapterSlug,
      articleSlug: slug,
    };
  }).sort((a, b) => a.order - b.order);

  return {
    ...(data as ArticleMetadata),
    slug,
    chapters,
  };
}

export async function getChapter(articleSlug: string, chapterSlug: string) {
  const articleDir = path.join(articlesDir, articleSlug);
  const files = fs.readdirSync(articleDir);
  const chapterFile = files.find(f => f.endsWith(`-${chapterSlug}.md`));

  if (!chapterFile) {
    throw new Error(`Chapter not found: ${chapterSlug}`);
  }

  const filePath = path.join(articleDir, chapterFile);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    metadata: data as ChapterMetadata,
    content,
    slug: chapterSlug,
  };
}

export async function getCategories() {
  const articles = await getAllArticles();
  const categorySet = new Set<string>();

  articles.forEach(article => {
    article.categories.forEach(cat => categorySet.add(cat));
  });

  return Array.from(categorySet).sort();
}

export async function getArticlesByCategory(category: string) {
  const articles = await getAllArticles();
  return articles.filter(a => a.categories.includes(category as any));
}
