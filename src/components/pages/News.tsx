import React from 'react';
import NewsArticles from '../content/NewsArticles';

const News: React.FC = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Latest News</h1>
      <p className="page-description">
        Stay updated with the latest developments in technology and programming.
      </p>
      <NewsArticles />
    </div>
  );
};

export default News;
