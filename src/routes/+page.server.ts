import type { Article, Categories } from '$lib/types';
import { allArticles } from '$lib/utils';

export async function load() {
  const paths = import.meta.glob('/src/articles/**/*.md', { eager: true });
  const articles: Article[] = allArticles(paths);

  return { articles, categorisedArticles: categorisedArticles(articles) };
}

const categorisedArticles = (articles: Article[]) => {
  // Categorise articles by their categories
  const allCategories = new Map<string, Article[]>();
  articles.forEach((article) => {
    if (article.categories) {
      article.categories.forEach((category: Categories) => allCategories.set(category, []));
    }
  });
  articles.forEach((article) => {
    if (article.categories) {
      article.categories.forEach((category: Categories) => {
        if (allCategories.has(category)) {
          allCategories.get(category)?.push(article);
        }
      });
    }
  });
  return allCategories;
};
