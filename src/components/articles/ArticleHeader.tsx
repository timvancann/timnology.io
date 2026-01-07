import { Calendar } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import type { Article } from '@/lib/types';
import { formatDate } from '@/lib/utils';

export default function ArticleHeader({ article }: { article: Article }) {
  return (
    <div className="bg-surface border-b border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            {article.title}
          </h1>

          <p className="text-xl text-text-secondary mb-6">
            {article.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-text-tertiary">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(article.date)}</span>
            </div>

            {article.youtube_url && (
              <a
                href={article.youtube_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
              >
                <Image
                  src="/icons/youtube.svg"
                  alt="YouTube"
                  width={16}
                  height={16}
                />
                <span>Watch Video</span>
              </a>
            )}

            {article.github && (
              <a
                href={`https://github.com/${article.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
              >
                <Image
                  src="/icons/github_light.svg"
                  alt="GitHub"
                  width={16}
                  height={16}
                />
                <span>View Code</span>
              </a>
            )}
          </div>

          {article.categories.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {article.categories.map(cat => (
                <Badge
                  key={cat}
                  variant="secondary"
                  className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20"
                >
                  {cat}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
