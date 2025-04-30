import React from 'react';
import { Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Article } from '../../types';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const navigate = useNavigate();

  const categoryColors: Record<string, string> = {
    'web-automation':
      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'api-testing':
      'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'mobile-testing':
      'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    'test-frameworks':
      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    'ci-cd': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    'best-practices':
      'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
    reporting: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
  };

  const handleReadMore = () => {
    const slug = article.title
    console.log('Generated slug:', slug);
    navigate(`/articles/${slug}`);
  };

  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 relative overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        {article.featured && (
          <div className="absolute top-3 right-3">
            <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center mb-4">
          {article.category.map((cat) => (
            <span
              key={cat}
              className={`text-xs font-semibold px-2.5 py-0.5 rounded ${
                categoryColors[cat] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
              }`}
            >
              {cat
                .split('-')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
            </span>
          ))}
          <div className="flex items-center ml-auto text-gray-500 dark:text-gray-400 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{article.date}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
          {article.headline}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {article.excerpt}
        </p>

        <div className="pt-2">
          <button
            onClick={handleReadMore}
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center"
          >
            Read more
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
