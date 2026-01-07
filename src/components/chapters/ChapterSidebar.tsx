'use client';

import Link from 'next/link';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import type { Chapter } from '@/lib/types';

interface ChapterSidebarProps {
  chapters: Chapter[];
  currentSlug: string;
  articleSlug: string;
}

function ChapterListContent({ chapters, currentSlug, articleSlug }: ChapterSidebarProps) {
  return (
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
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default function ChapterSidebar({ chapters, currentSlug, articleSlug }: ChapterSidebarProps) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block lg:w-1/4">
        <div className="sticky top-24">
          <Card className="border-border bg-surface p-4">
            <h3 className="text-lg font-bold text-text-primary mb-4">Chapters</h3>
            <ScrollArea className="h-[calc(100vh-16rem)]">
              <ChapterListContent
                chapters={chapters}
                currentSlug={currentSlug}
                articleSlug={articleSlug}
              />
            </ScrollArea>
          </Card>
        </div>
      </aside>

      {/* Mobile menu */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              className="h-14 w-14 rounded-full bg-accent hover:opacity-90 text-white shadow-lg"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-border w-[300px]">
            <h3 className="text-lg font-bold text-text-primary mb-4">Chapters</h3>
            <ScrollArea className="h-[calc(100vh-8rem)]">
              <ChapterListContent
                chapters={chapters}
                currentSlug={currentSlug}
                articleSlug={articleSlug}
              />
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
