import type { Component } from 'svelte';

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

export type MarkdownArticle = {
  metadata: Article;
  default: Component;
};

export interface Chapter {
  title: string;
  slug: string;
  order: number;
  fileName: string;
  description?: string;
}

export type MarkdownChapter = {
  metadata: Chapter;
  default: Component;
};

export type ArticlePageProps = {
  metadata: Article;
  content: Component;
  slug: string;
  chapters: Chapter[];
};

export type ChapterPageProps = {
  content: Component;
  metadata: Chapter;
  articleMetadata: Article;
  slug: string;
  chapterSlug: string;
  chapters: Chapter[];
  chapterIndex: number;
};
