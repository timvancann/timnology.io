import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    console.log('Loading article:', params.slug);
    const post = await import(`../../../articles/${params.slug}/index.md`);

    return {
      content: post.default,
      meta: post.metadata
    };
  } catch (e) {
    error(404, `Could not find ${params.slug}`);
  }
}
