import React from 'react';
import ResearchArticles from '../content/ResearchArticles';

const Research: React.FC = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Research Papers</h1>
      <p className="page-description">
        Explore the latest research and academic publications in computer science.
      </p>
      <ResearchArticles />
    </div>
  );
};

export default Research;
