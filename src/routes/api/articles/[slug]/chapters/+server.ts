import type { Article } from '$lib/types';
import { json } from '@sveltejs/kit';

async function getPosts(article: string) {
  let posts: Article[] = [];

  const paths = import.meta.glob('/src/articles/**/*.md', { eager: true });

  for (const path in paths) {
    if (path.split('/').at(-2) !== article) continue;
    if (path.split('/').at(-1) === 'index.md') continue;

    const file = paths[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');

    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<Article, 'slug'>;
      const post = { ...metadata, slug } satisfies Article;
      if (post.published) posts.push(post);
    }
  }

  posts = posts.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime());

  return posts;
}

export async function GET({ url }) {
  const article: string = url.pathname.split('/').at(-2);
  const posts = await getPosts(article);
  return json(posts);
}
