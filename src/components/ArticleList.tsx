'use client';

import { useState, useMemo } from 'react';
import ArticleCard from '@/components/articles/ArticleCard';
import { Badge } from '@/components/ui/badge';
import type { Article } from '@/lib/types';

type SortOption = 'date-desc' | 'date-asc' | 'title-asc' | 'title-desc';

interface ArticleListProps {
  articles: Article[];
}

export default function ArticleList({ articles }: ArticleListProps) {
  const [sortBy, setSortBy] = useState<SortOption>('date-desc');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    articles.forEach(article => {
      article.categories.forEach(cat => cats.add(cat));
    });
    return Array.from(cats).sort();
  }, [articles]);

  // Filter and sort articles
  const filteredAndSortedArticles = useMemo(() => {
    let result = [...articles];

    // Filter by category
    if (selectedCategory) {
      result = result.filter(article =>
        article.categories.includes(selectedCategory)
      );
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'date-desc':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'date-asc':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    return result;
  }, [articles, sortBy, selectedCategory]);

  return (
    <div className="space-y-6">
      {/* Filters and Sorting */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm font-medium text-text-secondary">Filter:</span>
          <Badge
            variant={selectedCategory === null ? 'default' : 'outline'}
            className={`cursor-pointer transition-colors ${
              selectedCategory === null
                ? 'bg-accent text-white hover:bg-accent/90'
                : 'hover:bg-accent/10'
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            All ({articles.length})
          </Badge>
          {categories.map(category => (
            <Badge
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={`cursor-pointer transition-colors ${
                selectedCategory === category
                  ? 'bg-accent text-white hover:bg-accent/90'
                  : 'hover:bg-accent/10'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category} ({articles.filter(a => a.categories.includes(category)).length})
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-text-secondary">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="px-3 py-1.5 text-sm rounded-md border border-border bg-surface text-text-primary hover:border-accent/50 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/20"
          >
            <option value="date-desc">Newest First</option>
            <option value="date-asc">Oldest First</option>
            <option value="title-asc">Title (A-Z)</option>
            <option value="title-desc">Title (Z-A)</option>
          </select>
        </div>
      </div>

      {/* Results count */}
      <div className="text-sm text-text-tertiary">
        {filteredAndSortedArticles.length === articles.length
          ? `Showing all ${articles.length} tutorials`
          : `Showing ${filteredAndSortedArticles.length} of ${articles.length} tutorials`}
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedArticles.map(article => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

      {/* No results */}
      {filteredAndSortedArticles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-text-secondary">No tutorials found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
