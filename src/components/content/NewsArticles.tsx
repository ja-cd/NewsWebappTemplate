import React from 'react';
import ArticleWrapper from '../wrappers/ArticleWrapper';

const NewsArticles: React.FC = () => {
  const newsArticles = [
    {
      link: 'https://www.google.com',
      header: 'PS3 Super Computer Turned Into A Quantum Computer',
      description:
        'The research team at University of Massachusetts Dartmouth has been able to create a quantum computer out of an old PS3 super computer project, but has not released what the new additions are...',
      category: 'Technology',
      date: 'March 28, 2025',
    },
    {
      link: 'https://www.google.com',
      header: 'Study Finds Remote Work Boosts Productivity for Technical Roles',
      description:
        'One survey participant noted that while working remote they were just "not aware" of the barking dog downstairs, and upstairs neighbors dance class hosted daily M-F 9AM - 11AM in his appartment building',
      category: 'Workplace',
      date: 'March 25, 2025',
    },
    {
      link: 'https://www.google.com',
      header: 'TypeScript 5.4 Released with Improved Type Inference',
      description:
        'The latest update to TypeScript brings significant improvements to type inference along with new utility types and performance optimizations for large codebases.',
      category: 'Programming',
      date: 'March 22, 2025',
    },
    {
      link: 'https://www.google.com',
      header: 'Browser Market Share Shifts as Edge Gains Ground',
      description:
        'Recent market analysis shows Microsoft Edge increasing its user base by 12% in the last quarter, particularly among enterprise users and developers.',
      category: 'Web Browsers',
      date: 'March 18, 2025',
    },
    {
      link: 'https://www.google.com',
      header: 'Security Experts Warn of New Cross-Site Scripting Vulnerability',
      description:
        'A critical XSS vulnerability affecting popular content management systems has been discovered. According to experts no fix will be found until the "T starts running on time, specifically the red line past Central."',
      category: 'Cybersecurity',
      date: 'March 15, 2025',
    },
    {
      link: 'https://www.google.com',
      header: 'React 19 Roadmap Announced with Focus on Server Components',
      description:
        'The React team has outlined their vision for the next major version, emphasizing improvements to server components and a new approach to data fetching.',
      category: 'Frameworks',
      date: 'March 12, 2025',
    },
    {
      link: 'https://www.google.com',
      header: 'Developer Survey Reveals Growing Adoption of Microservices Architecture',
      description:
        'No, we have not considered if monolithic would be better for this low complexity project.',
      category: 'Architecture',
      date: 'March 10, 2025',
    },
    {
      link: 'https://www.google.com',
      header: 'GitHub Introduces AI-Powered Code Review Assistant',
      description:
        'The popular code hosting platform has launched an AI tool that automatically reviews pull requests, identifying potential bugs and suggesting improvements before human review.',
      category: 'Developer Tools',
      date: 'March 5, 2025',
    },
  ];

  return <ArticleWrapper articles={newsArticles} />;
};

export default NewsArticles;
