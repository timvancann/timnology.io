export type Categories = "python" | "kubernetes" | "docker" | "dagster";

export interface ArticleMetadata {
  title: string;
  description: string;
  icon: string;
  youtube_url?: string;
  github?: string;
  date: string;
  categories: Categories[];
  published: boolean;
}

export interface Article extends ArticleMetadata {
  slug: string;
  readingTime?: string;
}

export interface ChapterMetadata {
  title: string;
  order: number;
  description?: string;
}

export interface Chapter extends ChapterMetadata {
  slug: string;
  articleSlug: string;
}

export interface ArticleWithChapters extends Article {
  chapters: Chapter[];
}
