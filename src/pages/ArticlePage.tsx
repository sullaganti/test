import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ArticleMeta {
  title: string;
  author: string;
  author_title: string;
  date: string;
  category: string;
  featured: boolean;
  excerpt: string;
  imageUrl: string;
}

const ArticlePage: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<{
    content: string;
    meta: ArticleMeta;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) {
        setError('Invalid article slug');
        return;
      }

      try {
        const response = await fetch(`/articles/${slug}.mdx`);
        if (!response.ok) {
          throw new Error(`Article not found for`);
        }
        const text = await response.text();

        // Parse frontmatter
        const match = text.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
        if (!match) {
          throw new Error('Invalid article format');
        }

        const [, frontmatter, content] = match;
        const meta = frontmatter.split('\n').reduce((acc: any, line) => {
          const [key, ...value] = line.split(':');
          if (key && value.length) {
            acc[key.trim()] = value.join(':').trim();
          }
          return acc;
        }, {});

        setArticle({ content, meta });
      } catch (err) {
        setError(err.message || 'An error occurred while fetching the article');
      }
    };

    fetchArticle();
  }, [slug]);

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <button
          onClick={() => navigate('/')}
          className="text-blue-600 hover:underline inline-flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="animate-pulse">Loading article...</div>
      </div>
    );
  }

  return (
    <main className="py-16 bg-gray-50 dark:bg-gray-900">
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <button
          onClick={() => navigate('/')}
          className="mb-8 text-blue-600 hover:underline inline-flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {article.meta.imageUrl && (
            <div className="h-64 sm:h-96 relative">
              <img
                src={article.meta.imageUrl}
                alt={article.meta.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{article.meta.date}</span>
              </div>
              {article.meta.author && (
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <User className="w-4 h-4 mr-2" />
                  <span>{article.meta.author}</span>
                  {article.meta.author_title && (
                    <span className="ml-1 text-sm">
                      ({article.meta.author_title})
                    </span>
                  )}
                </div>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              {article.meta.title}
            </h1>

            <div className="prose dark:prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={tomorrow}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {article.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default ArticlePage;
