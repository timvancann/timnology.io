import type { Article, Categories } from '$lib/types';

export async function load({ fetch }) {
  const response = await fetch('/api/articles');
  const articles: Article[] = await response.json();

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
