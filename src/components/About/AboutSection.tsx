import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AboutSection: React.FC = () => {
  const skills = [
    'Selenium WebDriver',
    'Cypress',
    'Playwright',
    'Appium',
    'REST Assured',
    'CI/CD Integration',
    'Test Framework Design',
    'Ready API',
    'WinApp Driver',
    'Ginger By Amdocs',
  ];

  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Test Automation Engineer with over 8 years of
              experience in designing and implementing robust test automation
              frameworks for web, mobile, and API testing.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Throughout my career, I've worked with various industries
              including fintech, e-commerce, and healthcare, helping teams
              deliver high-quality software through effective test automation
              strategies.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              This portfolio showcases my articles, insights, and best practices
              in test automation to help others implement effective testing
              strategies in their projects.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Get in Touch
              </a>

              <a
                href="/resume"
                className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
              Expertise & Skills
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-gray-800 dark:text-white">
                Languages & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Java',
                  'JavaScript',
                  'TypeScript',
                  'Selenium',
                  'Cypress',
                  'Playwright',
                  'Appium',
                  'REST Assured',
                  'TestNG',
                  'Cucumber',
                  'Azure DevOps',
                  'BitBucket',
                  'Azure',
                  'AWS',
                  'Power Platform',
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
