import React from 'react';
import { ChevronRight } from 'lucide-react';
import { articles } from '../../data/articles';
import ArticleCard from '../Articles/ArticleCard';

const FeaturedArticles: React.FC = () => {
  const featuredArticles = articles.filter(article => article.featured).slice(0, 3);
  
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Featured Articles
          </h2>
          
          <a 
            href="#articles" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all articles
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;