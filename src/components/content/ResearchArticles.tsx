import React from 'react';
import ResearchWrapper from '../wrappers/ResearchWrapper';

const ResearchArticles: React.FC = () => {
  const researchArticles = [
    {
      link: 'https://www.google.com',
      header: 'Large Language Model effects on lunch time conversations',
      description:
        'Research suggests that due to persistant use of LLMs at the work place, most have forgotten how to hold a conversation.',
      category: 'LLM',
      date: 'March 15, 2025',
    },
    {
      link: 'https://www.google.com',
      header: 'Quantum Algorithms for Graph-Based Data Structures',
      description:
        'Researchers demonstrate a quantum approach to graph traversal that achieves quadratic speedup compared to classical algorithms for specific problem domains.',
      category: 'Quantum Computing',
      date: 'March 10, 2025',
    },
    {
      link: 'https://www.google.com',
      header: 'Statistical Analysis of Code Review Effectiveness in Open Source Projects',
      description:
        'A comprehensive study of 500+ open source repositories reveals correlations between code review practices and long-term software quality metrics.',
      category: 'Software Engineering',
      date: 'March 5, 2025',
    },
  ];

  return <ResearchWrapper researchItems={researchArticles} />;
};

export default ResearchArticles;
