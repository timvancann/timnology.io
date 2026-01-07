import { getAllArticles } from '@/lib/content';
import ArticleList from '@/components/ArticleList';

export default async function HomePage() {
  const articles = await getAllArticles();

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <header className="mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">
          Byte-sized technical tutorials
        </h1>
        <p className="text-2xl text-text-secondary font-light max-w-3xl">
          In-depth guides broken into digestible chapters. Learn by doing with code examples and videos.
        </p>
      </header>

      <div id="tutorials">
        <ArticleList articles={articles} />
      </div>
    </div>
  );
}
