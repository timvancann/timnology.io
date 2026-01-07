import { getAllArticles, getArticleWithChapters, getChapter } from '@/lib/content';
import { MDXRemote } from 'next-mdx-remote/rsc';
import ChapterHeader from '@/components/chapters/ChapterHeader';
import ChapterSidebar from '@/components/chapters/ChapterSidebar';
import ChapterNavigation from '@/components/chapters/ChapterNavigation';
import ArticleContent from '@/components/ArticleContent';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeShiki from '@shikijs/rehype';
import { transformerMetaHighlight, transformerNotationDiff } from '@shikijs/transformers';

export async function generateStaticParams() {
  const articles = await getAllArticles();
  const paths = [];

  for (const article of articles) {
    const full = await getArticleWithChapters(article.slug);
    paths.push(
      ...full.chapters.map((c) => ({
        slug: article.slug,
        chapterSlug: c.slug,
      }))
    );
  }

  return paths;
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string; chapterSlug: string }>;
}) {
  const { slug, chapterSlug } = await params;
  const article = await getArticleWithChapters(slug);
  const chapterData = await getChapter(slug, chapterSlug);

  const chapterIndex = article.chapters.findIndex((c) => c.slug === chapterSlug);
  const currentChapter = article.chapters[chapterIndex];
  const prevChapter = chapterIndex > 0 ? article.chapters[chapterIndex - 1] : null;
  const nextChapter =
    chapterIndex < article.chapters.length - 1 ? article.chapters[chapterIndex + 1] : null;

  return (
    <>
      <ChapterHeader
        article={article}
        chapter={currentChapter}
        chapterIndex={chapterIndex}
        totalChapters={article.chapters.length}
      />

      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Browse while reading: Sidebar */}
              <ChapterSidebar
                chapters={article.chapters}
                currentSlug={chapterSlug}
                articleSlug={slug}
              />

              {/* Content + Sequential navigation */}
              <div className="lg:w-3/4">
                <ArticleContent>
                  <article className="article-prose max-w-none">
                    <MDXRemote
                      source={chapterData.content}
                      options={{
                        parseFrontmatter: false,
                        mdxOptions: {
                          remarkPlugins: [remarkGfm],
                          rehypePlugins: [
                            rehypeSlug,
                            rehypeAutolinkHeadings,
                            [
                              rehypeShiki,
                              {
                                themes: {
                                  light: 'github-light',
                                },
                                defaultColor: 'light',
                                transformers: [
                                  transformerMetaHighlight(),
                                  transformerNotationDiff(),
                                  {
                                    name: 'code-title',
                                    pre(node: any) {
                                      const title = (this as any).options.meta?.__raw?.match(/title="([^"]*)"/)?.[1];
                                      if (title) {
                                        (this as any).addClassToHast(node, 'has-title');
                                        node.properties['data-title'] = title;
                                      }
                                    },
                                  },
                                ],
                              },
                            ],
                          ],
                          format: 'md',
                        },
                      }}
                    />
                  </article>
                </ArticleContent>

                <ChapterNavigation
                  articleSlug={slug}
                  prevChapter={prevChapter}
                  nextChapter={nextChapter}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
