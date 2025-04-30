import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from '../UI/ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90 shadow-md backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <span 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate('/');
              }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              TestingMaster
            </span>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  const homeSection = document.getElementById('home');
                  if (homeSection) {
                    homeSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              Home
            </Link>
            <Link 
              to={window.location.pathname === '/' ? '#' : '/'} 
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  const articlesSection = document.getElementById('articles');
                  if (articlesSection) {
                    articlesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                } else {
                  setTimeout(() => {
                    const articlesSection = document.getElementById('articles');
                    if (articlesSection) {
                      articlesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100); // Delay to ensure the page has loaded
                }
              }}
            >
              Articles
            </Link>
            <Link 
              to={window.location.pathname === '/' ? '#' : '/'} 
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                } else {
                  setTimeout(() => {
                    const aboutSection = document.getElementById('about');
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100); // Delay to ensure the page has loaded
                }
              }}
            >
              About
            </Link>
            <Link 
              to={window.location.pathname === '/' ? '#' : '/'} 
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                } else {
                  setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }
              }}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              aria-label="Search" 
              className="p-2 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <Search className="w-5 h-5 text-gray-700 dark:text-gray-200" />
            </button>
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900 flex flex-col">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <span 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/');
                }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                TestingMaster
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6 mt-10 text-lg">
              <Link 
                to="/" 
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    const homeSection = document.getElementById('home');
                    if (homeSection) {
                      homeSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
              <Link 
                to={window.location.pathname === '/' ? '#' : '/'} 
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    const articlesSection = document.getElementById('articles');
                    if (articlesSection) {
                      articlesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else {
                    setTimeout(() => {
                      const articlesSection = document.getElementById('articles');
                      if (articlesSection) {
                        articlesSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100); // Delay to ensure the page has loaded
                  }
                }}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Articles
              </Link>
              <Link 
                to={window.location.pathname === '/' ? '#' : '/'} 
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    const aboutSection = document.getElementById('about');
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else {
                    setTimeout(() => {
                      const aboutSection = document.getElementById('about');
                      if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100); // Delay to ensure the page has loaded
                  }
                }}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </Link>
              <Link 
                to={window.location.pathname === '/' ? '#' : '/'} 
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else {
                    setTimeout(() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }
                }}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;