export type Categories = 'sveltekit' | 'svelte';

export type Article = {
  title: string;
  description: string;
  slug: string;
  icon: string;
  youtube_url: string;
  github: string;
  date: string;
  categories: Categories[];
  published: boolean;
};

export type Post = {
  title: string;
  slug: string;
};
