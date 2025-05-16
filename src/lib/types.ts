export type Categories = 'sveltekit' | 'svelte';

export interface Article {
  title: string;
  description: string;
  slug: string;
  icon: string;
  youtube_url: string;
  github: string;
  date: string;
  categories: Categories[];
  published: boolean;
}

export interface Chapter {
  title: string;
  slug: string;
  order: number;
}
