import { Article, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'web-automation',
    name: 'Web Automation',
    description:
      'Automating web applications using tools like Selenium, Cypress, and Playwright',
  },
  {
    id: 'mobile-testing',
    name: 'Mobile Testing',
    description:
      'Automating mobile applications using Appium, Detox, and XCUITest',
  },
  {
    id: 'test-frameworks',
    name: 'Test Frameworks',
    description: 'Building robust test frameworks and architecture',
  },
  {
    id: 'ci-cd',
    name: 'CI/CD',
    description:
      'Integrating tests into CI/CD pipelines for continuous testing',
  },
  {
    id: 'best-practices',
    name: 'Best Practices',
    description: 'Best practices for test automation and quality assurance',
  },
  {
    id: 'reporting',
    name: 'Reporting',
    description: 'Test reporting and analytics solutions',
  },
  {
    id: 'API-Automation',
    name: 'API Automation',
    description:
      'Automating API testing using tools like Rest Assured, Postman, and SoapUI',
  }
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'adaptiveCards',
    headline: 'Send Your Test Results to Microsoft Teams using AdaptiveCards.io',
    excerpt: 'Send Your Test Results to Microsoft Teams using AdaptiveCards.io',
    content:
    'Adaptive Cards are a new way to present information in a rich and interactive format. They can be used in various applications, including Microsoft Teams, Outlook, and more. In this article, we will explore how to send your test results to Microsoft Teams using AdaptiveCards.io.',
    category: ['reporting'],
    date: '2025-03-15',
    featured: true,
    imageUrl:
      'https://images.pexels.com/photos/102107/pexels-photo-102107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '2',
    title: 'azDevOpsSelenium',
    headline: 'Run Selenium Tests in AzureDevOps',
    excerpt:
      'Comprehensive guide to Setup and Run Selenium Tests in AzureDevOps Build Pipelines',
    content:
      'This article provides a step-by-step guide to setting up and running Selenium tests in Azure DevOps build pipelines. It covers the prerequisites, configuration, and best practices for integrating Selenium tests into your CI/CD workflow.',
    category: ['ci-cd'],
    date: '2025-03-05',
    featured: false,
    imageUrl:
      'https://thedatascientist.com/wp-content/uploads/2023/11/Azure-Devops.png',
  },
  {
    id: '3',
    title: 'azureAppServiceForAutomationReports',
    headline: 'Azure App Service for Automation Reports',
    excerpt:
      'Azure App Service for Automation Reports - A Comprehensive Guide',
    content:
      'Ensuring efficient and timely delivery of automation reports to stakeholders to facilitate informed decision-making and enable effective collaboration.',
    category: ['reporting'],
    date: '2025-03-05',
    featured: true,
    imageUrl:
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '4',
    title: 'gitlabScm',
    headline: 'GitLab SCM for Test Automation',
    excerpt:
      'GitLab SCM for Test Automation - A Comprehensive Guide',
    content:
      'SetUp your own On-Premise Source Code Management tools.',
    category: ['best-practices'],
    date: '2025-03-05',
    featured: false,
    imageUrl:
      'https://images.pexels.com/photos/11035539/pexels-photo-11035539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '5',
    title: 'healenium',
    headline: 'Self Healing Selenium - Healenium',
    excerpt:'Healenium - An OpenSource Self Healing Test Automation solution',
    content:
      'elenium tests are often difficult to maintain due to instability. Self-healing test automation with Healenium fixes the traditional problems that teams face when adopting Selenium. The result: stable and smart Selenium testing with less effort',
    category: ['web-automation'],
    date: '2025-03-15',
    featured: false,
    imageUrl:
      'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '6',
    title: 'MobileAppTesting',
    headline: 'Mobile Test Automation with Appium',
    excerpt:
      'Getting started with Appium for cross-platform mobile test automation.',
    content:
      "This guide will help you set up Appium and write your first automated tests for both Android and iOS applications. We'll cover installation, configuration, and writing tests using the WebdriverIO framework.",
    category: ['mobile-testing'],
    date: '2025-02-15',
    featured: false,
    imageUrl:
      'https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '7',
    title: 'powerBI',
    headline: 'Stream Test Results To PowerBI',
    excerpt:
      'Stream Test Results To PowerBI And Watch It Live From Mobile App',
    content:
      'Explore how PowerBI can help live Automation WorkFlows with streaming datasets.',
    category: ['reporting'],
    date: '2025-03-10',
    featured: false,
    imageUrl:
      'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },

  {
    id: '8',
    title: 'report-portal',
    headline:
      'Machine Learning in Test Automation Reporting with ReportPortal.io',
    excerpt:
      'Learn how to implement machine learning in your test automation reporting using ReportPortal.io.',
    content: `ReportPortal is a powerful server-client reporting tool that reduces the effort to work with test results. Powered with Machine Learning, it provides historical data of executions, logs, screenshots, and binary attachments. The tool offers trends analysis, flaky test detection, and custom widgets for comprehensive visibility.`,
    category: ['reporting'],
    date: '2025-03-01',
    featured: true,
    imageUrl:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },

  {
    id: '9',
    title: 'reportPortal-kubernetes',
    headline: 'Deploy Reportportal.io on Azure Kubernetes Service',
    excerpt:
      'Deploy Reportportal.io on Azure Kubernetes Service for scalable test reporting.',
    content:
      'This article provides a step-by-step guide to deploying ReportPortal.io on Azure Kubernetes Service (AKS). It covers the prerequisites, configuration, and best practices for setting up a scalable test reporting solution using ReportPortal.io on AKS.',
    category: ['reporting'],
    date: '2025-02-10',
    featured: true,
    imageUrl:
      'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '10',
    title: 'RestAssuredAllureLogging',
    headline: 'Advanced RestAssured Logging in Allure Report',
    excerpt:
      'Advanced RestAssured Logging in Allure Report for better insights.',
    content:
    'This article provides a comprehensive guide to Record API Request and Response using RestAssured Logging with Minimal Coding, By Decreasing the Boiler Plate code for Reporting Purposes. Libraries in Use:',
    category: ['reporting'],
    date: '2025-02-10',
    featured: false,
    imageUrl:
      'https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '11',
    title: 'RestAssuredExtentLogging',
    headline: 'Advanced RestAssured Logging in Extent Report',
    excerpt:
      'Advanced RestAssured Logging in Extent Report for better insights.',
    content:
    'This article provides a comprehensive guide to Record API Request and Response using RestAssured Logging with Minimal Coding, By Decreasing the Boiler Plate code for Reporting Purposes. Libraries in Use:',
    category: ['reporting'],
    date: '2025-02-10',
    featured: false,
    imageUrl:
      'https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '12',
    title: 'soapRestAssured',
    headline: 'Automate SOAP APIs using Rest Assured',
    excerpt:
      'Automate SOAP APIs using Rest Assured for efficient testing.',
    content:
    'This article provides a comprehensive guide to automating SOAP APIs using Rest Assured. It covers the prerequisites, configuration, and best practices for setting up a robust test automation framework for SOAP APIs.',
    category: ['API-Automation'],
    date: '2025-02-10',
    featured: false,
    imageUrl:
      'https://blog.postman.com/wp-content/uploads/2020/09/API-101-What-Is-a-SOAP-API-scaled.jpg',
  },
  {
    id: '13',
    title: 'sonarQube',
    headline: 'Write Bug Free Automation Code with SonarQube',
    excerpt:
      'Write Bug Free Automation Code with SonarQube for better quality. ',
    content:
    'This article provides a comprehensive guide to writing bug-free automation code using SonarQube. It covers the prerequisites, configuration, and best practices for integrating SonarQube into your test automation workflow.',
    category: ['best-practices'],
    date: '2025-02-10',
    featured: false,
    imageUrl:
      'https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  
];
