import Link from 'next/link';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import type { Chapter } from '@/lib/types';

interface ChapterListProps {
  chapters: Chapter[];
  articleSlug: string;
  currentSlug?: string;
}

export default function ChapterList({ chapters, articleSlug, currentSlug }: ChapterListProps) {
  return (
    <Card className="border-border bg-surface p-4">
      <h3 className="text-lg font-bold text-text-primary mb-4">Chapters</h3>
      <ScrollArea className="h-[400px]">
        <div className="space-y-2">
          {chapters.map((chapter) => {
            const isActive = currentSlug === chapter.slug;
            return (
              <Link
                key={chapter.slug}
                href={`/article/${articleSlug}/${chapter.slug}`}
                className={`block p-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-accent/10 border border-accent/50'
                    : 'bg-background border border-border hover:border-accent/30 hover:bg-accent/5'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className={`text-xs font-bold mt-1 ${isActive ? 'text-accent' : 'text-text-tertiary'}`}>
                    {String(chapter.order).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <h4 className={`text-sm font-medium ${isActive ? 'text-accent' : 'text-text-primary'}`}>
                      {chapter.title}
                    </h4>
                    {chapter.description && (
                      <p className="text-xs text-text-secondary mt-1 line-clamp-2">
                        {chapter.description}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </ScrollArea>
    </Card>
  );
}
