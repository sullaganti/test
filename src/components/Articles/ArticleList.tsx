import React, { useState, useEffect } from 'react';
import { articles as allArticles } from '../../data/articles';
import ArticleCard from './ArticleCard';
import ArticleCategories from './ArticleCategories';
import { Search } from 'lucide-react';

const ArticleList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredArticles, setFilteredArticles] = useState(allArticles);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleFilterCategory = (event: CustomEvent) => {
      console.log('Received filterCategory event:', event.detail);
      setActiveCategory(event.detail);
    };

    window.addEventListener('filterCategory', handleFilterCategory as EventListener);

    return () => {
      window.removeEventListener('filterCategory', handleFilterCategory as EventListener);
    };
  }, []);

  useEffect(() => {
    let result = activeCategory === 'all'
      ? allArticles
      : allArticles.filter(article => article.category.includes(activeCategory));

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        article =>
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.content.toLowerCase().includes(query)
      );
    }

    setFilteredArticles(result);
  }, [activeCategory, searchQuery]);

  return (
    <section id="articles" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Test Automation Articles
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Browse my collection of articles covering various test automation topics,
            from web and API testing to mobile automation and best practices.
          </p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
          </div>
        </div>

        <ArticleCategories 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No articles found matching your criteria. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticleList;