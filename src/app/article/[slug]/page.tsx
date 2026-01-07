import { getAllArticles, getArticleWithChapters } from '@/lib/content';
import ArticleHeader from '@/components/articles/ArticleHeader';
import ChapterList from '@/components/articles/ChapterList';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map(a => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleWithChapters(slug);

  return (
    <>
      <ArticleHeader article={article} />

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Browse mode: Chapter list */}
              <aside className="lg:w-1/3">
                <ChapterList chapters={article.chapters} articleSlug={article.slug} />
              </aside>

              {/* Sequential mode: Start reading CTA */}
              <div className="lg:w-2/3">
                {article.youtube_url && (
                  <div className="mb-8">
                    <YouTubeEmbed videoUrl={article.youtube_url} />
                  </div>
                )}

                <div className="bg-surface border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">
                    Ready to Start Learning?
                  </h2>
                  <p className="text-text-secondary mb-6">
                    This tutorial is organized into {article.chapters.length} chapters. You can either start from the beginning or jump to any chapter that interests you.
                  </p>
                  {article.chapters.length > 0 && (
                    <Button
                      asChild
                      size="lg"
                      className="bg-accent hover:opacity-90 text-white"
                    >
                      <Link href={`/article/${article.slug}/${article.chapters[0].slug}`}>
                        <BookOpen className="mr-2 h-5 w-5" />
                        Start from Chapter 1
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
