import Link from 'next/link';
import { Home } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import type { Article, Chapter } from '@/lib/types';

interface ChapterHeaderProps {
  article: Article;
  chapter: Chapter;
  chapterIndex: number;
  totalChapters: number;
}

export default function ChapterHeader({
  article,
  chapter,
  chapterIndex,
  totalChapters,
}: ChapterHeaderProps) {
  return (
    <div className="bg-surface border-b border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="flex items-center gap-1">
                    <Home className="h-4 w-4" />
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={`/article/${article.slug}`}>
                    {article.title}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{chapter.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Progress indicator */}
          <div className="text-xs text-text-tertiary mb-2">
            Chapter {chapterIndex + 1} of {totalChapters}
          </div>

          {/* Chapter title */}
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
            {chapter.title}
          </h1>

          {chapter.description && (
            <p className="text-lg text-text-secondary">{chapter.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
