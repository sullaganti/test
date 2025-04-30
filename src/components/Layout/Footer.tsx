import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">TestingMaster</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Sharing test automation knowledge and best practices to help you build better quality software.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://bhargavmurari.github.io/" target="_blank" 
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/bhargavmurari" target='blank'
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#articles" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Articles
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Categories</h3>
            <ul className="space-y-2">
              <li>
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  const articlesSection = document.getElementById('articles');
                  if (articlesSection) {
                    articlesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                  const event = new CustomEvent('filterCategory', { detail: 'web-automation' });
                  window.dispatchEvent(event);
                }} 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Web Automation
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const articlesSection = document.getElementById('articles');
                    if (articlesSection) {
                      articlesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                    const event = new CustomEvent('filterCategory', { detail: 'API-Automation' });
                    window.dispatchEvent(event);
                  }} 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  API Testing
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const articlesSection = document.getElementById('articles');
                    if (articlesSection) {
                      articlesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                    const event = new CustomEvent('filterCategory', { detail: 'mobile-testing' });
                    window.dispatchEvent(event);
                  }} 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Mobile Testing
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const articlesSection = document.getElementById('articles');
                    if (articlesSection) {
                      articlesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                    const event = new CustomEvent('filterCategory', { detail: 'reporting' });
                    window.dispatchEvent(event);
                  }} 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  TestReporting
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} TestingMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;