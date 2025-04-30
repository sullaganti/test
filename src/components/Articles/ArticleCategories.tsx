import React from 'react';
import { categories } from '../../data/articles';

interface ArticleCategoriesProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const ArticleCategories: React.FC<ArticleCategoriesProps> = ({ 
  activeCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Categories</h2>
      
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeCategory === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          All
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ArticleCategories;