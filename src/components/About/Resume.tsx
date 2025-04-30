import React from "react";
import { Briefcase, Award, Phone, Mail, Globe, User } from "lucide-react";
import { CheckCircle2 } from 'lucide-react';


const Resume: React.FC = () => {
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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 p-8 font-sans leading-relaxed">
      <div className="max-w-4xl mx-auto">
        <br/>
        <br/>
        {/* Header */}
        <header className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-2">
            Bhargav Murarisetty
          </h1>
          <p className="text-lg font-medium mb-2">
            Advanced Automation Test Engineer
            <a href="https://bhargavmurari.github.io/" target="_blank" rel="noopener noreferrer" className="underline">
              Blogger 
            </a>
            
            <a href="https://www.microsoft.com/en-us/learning/certification-overview.aspx" target="_blank" rel="noopener noreferrer" className="underline">
               Cloud Certified
            </a>
            <a href="https://se2022conf.com" target="_blank" rel="noopener noreferrer" className="underline">
               Se2022 Conf Speaker
            </a>
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-500" />
              <span>7768966007</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-500" />
              <a href="mailto:Bhargavm7007@gmail.com" className="underline">
                Bhargavm7007@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-purple-500" />
              <a href="https://bhargavmurari.github.io/" className="underline">
                Portfolio
              </a>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4">Professional Summary</h2>
          <p>
            Advanced Automation Tester with 10+ years of experience, combining methodical knowledge with business insight. Expert in designing frameworks with Selenium, Appium, Playwright, RestAssured, and more. Passionate about automation innovation and analytics integration.
          </p>
        </section>

        {/* Key Achievements */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4">Key Achievements</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Designed Docker-centric Selenium frameworks for AWS and Azure.</li>
            <li>Integrated BI dashboards with automation scripts.</li>
            <li>Created a mobile app with PowerApps for test automation execution.</li>
            <li>Recognized by Sr. VP of Rogers and Amdocs Canada for innovation.</li>
            <li>Developed scalable RestAssured API framework.</li>
          </ul>
        </section>

        {/* Work Experience */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4">Work Experience</h2>
          <div className="space-y-6">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Sr Automation Test Engineer – Kongsberg Digital</h3>
              <p className="text-sm text-gray-500">May 2021 – Present</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Developed Protractor and Playwright scripts using TypeScript.</li>
                <li>Handled test data generation, reviews, and automation for Desktop using Appium.</li>
                <li>Integrated ReportPortal.io, setup CI/CD in Azure DevOps.</li>
                <li>API Automation with RestAssured and documentation via docusaurus.io.</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Sr Automation Test Engineer – ITC Infotech Ltd.</h3>
              <p className="text-sm text-gray-500">Dec 2020 – May 2021</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Performed functional and E2E testing of banking applications.</li>
                <li>Engaged in sprint activities: retrospectives, refinements, daily standups.</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Advanced Automation Test Engineer – Amdocs India</h3>
              <p className="text-sm text-gray-500">Aug 2016 – Dec 2020</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Built Selenium frameworks with ML integration and Docker support.</li>
                <li>Led BI dashboard integration and PowerApps automation tools.</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Automation Test Engineer – Tech Mahindra Ltd.</h3>
              <p className="text-sm text-gray-500">Jun 2013 – Aug 2016</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Managed test strategy, manual executions, defect tracking and automation.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4">Skills</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
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
        </section>

        {/* Additional Info */}
        <section>
          <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4">Additional Info</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <a href="https://github.com/bhargavkumar-65" className="underline">GitHub</a>
            </li>
            <li>
              <a href="https://bhargavmurari7.github.io/" className="underline">Blog</a>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default Resume;
