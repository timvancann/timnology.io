import type { Article } from '$lib/types';
import { json } from '@sveltejs/kit';

async function getPosts() {
  let posts: Article[] = [];

  const paths = import.meta.glob('/src/articles/**/index.md', { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split('/').at(-2);

    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<Article, 'slug'>;
      const post = { ...metadata, slug } satisfies Article;
      if (post.published) posts.push(post);
    }
  }

  posts = posts.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime());

  return posts;
}

export async function GET() {
  const posts = await getPosts();
  return json(posts);
}
