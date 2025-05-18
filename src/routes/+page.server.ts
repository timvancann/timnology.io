import type { Article } from '$lib/types';
import { allArticles, categorisedArticles } from '$lib/utils';

export async function load() {
  const paths = import.meta.glob('/src/articles/**/*.md', { eager: true });
  const articles: Article[] = allArticles(paths);

  return {
    articles,
    categorisedArticles: categorisedArticles(articles)
  };
}
