import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, List } from 'lucide-react';
import type { Chapter } from '@/lib/types';

interface ChapterNavigationProps {
  articleSlug: string;
  prevChapter: Chapter | null;
  nextChapter: Chapter | null;
}

export default function ChapterNavigation({
  articleSlug,
  prevChapter,
  nextChapter,
}: ChapterNavigationProps) {
  return (
    <div className="border-t border-border pt-12 mt-16">
      <div className="flex flex-col sm:flex-row items-stretch justify-between gap-6">
        {/* Previous chapter */}
        <div className="w-full sm:w-auto sm:flex-1">
          {prevChapter ? (
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full h-auto py-4 px-6 border-border bg-surface hover:bg-background text-text-primary hover:border-accent/50"
            >
              <Link href={`/article/${articleSlug}/${prevChapter.slug}`} className="flex items-center justify-start">
                <ArrowLeft className="mr-3 h-5 w-5 flex-shrink-0" />
                <div className="text-left flex-1">
                  <div className="text-xs text-text-tertiary mb-1">Previous</div>
                  <div className="text-sm font-medium">{prevChapter.title}</div>
                </div>
              </Link>
            </Button>
          ) : (
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full h-auto py-4 px-6 border-border bg-surface hover:bg-background text-text-primary hover:border-accent/50"
            >
              <Link href={`/article/${articleSlug}`} className="flex items-center justify-start">
                <List className="mr-3 h-5 w-5" />
                <span className="font-medium">All Chapters</span>
              </Link>
            </Button>
          )}
        </div>

        {/* Next chapter */}
        <div className="w-full sm:w-auto sm:flex-1">
          {nextChapter && (
            <Button
              asChild
              size="lg"
              className="w-full h-auto py-4 px-6 bg-accent hover:opacity-90 text-white"
            >
              <Link href={`/article/${articleSlug}/${nextChapter.slug}`} className="flex items-center justify-end">
                <div className="text-right flex-1">
                  <div className="text-xs mb-1">Next</div>
                  <div className="text-sm font-medium">{nextChapter.title}</div>
                </div>
                <ArrowRight className="ml-3 h-5 w-5 flex-shrink-0" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
