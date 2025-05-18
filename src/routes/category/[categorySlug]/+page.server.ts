import type { Article } from '$lib/types';
import { allArticles } from '$lib/utils';

export const load = async ({ params }) => {
  const categorySlug = params.categorySlug;
  const paths = import.meta.glob('/src/articles/**/*.md', { eager: true });
  const articles: Article[] = allArticles(paths);

  return { articles: articles.filter((article) => article.categories.includes(categorySlug)) };
};
