import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Article } from '@/lib/types';

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Card className="group h-full border-border bg-surface hover:border-accent/50 transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between gap-3 mb-2">
          <Link href={`/article/${article.slug}`} className="flex-1 min-w-0">
            <CardTitle className="text-xl leading-tight text-text-primary group-hover:text-accent transition-colors">
              {article.title}
            </CardTitle>
          </Link>

          <div className="flex gap-2 flex-shrink-0 relative z-10 items-center">
            {article.youtube_url && (
              <a
                href={article.youtube_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity"
                aria-label="Watch on YouTube"
              >
                <Image
                  src="/icons/youtube.svg"
                  alt="YouTube"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </a>
            )}
            {article.github && (
              <a
                href={`https://github.com/${article.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity"
                aria-label="View on GitHub"
              >
                <Image
                  src="/icons/github_light.svg"
                  alt="GitHub"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </a>
            )}
          </div>
        </div>

        <Link href={`/article/${article.slug}`}>
          <CardDescription className="line-clamp-2 text-text-secondary">
            {article.description}
          </CardDescription>
        </Link>
      </CardHeader>

      <CardContent>
        {article.categories.length > 0 && (
          <Link href={`/article/${article.slug}`}>
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
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
