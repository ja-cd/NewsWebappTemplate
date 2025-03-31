import React from 'react';
import './ArticleWrapper.css';

interface ArticleProps {
  header: string;
  description: string;
  category: string;
  date: string;
  link: string;
}

interface ArticlesWrapperProps {
  articles: ArticleProps[];
}

const ArticlesWrapper: React.FC<ArticlesWrapperProps> = ({ articles }) => {
  return (
    <div className="articles-wrapper">
      {articles.map((article, index) => (
        <a
          href={article.link}
          key={index}
          className="article-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="article-header">{article.header}</h2>
          <p className="article-description">{article.description}</p>
          <div className="article-meta">
            <div className="article-date">{article.date}</div>
            <div className="article-category">{article.category}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ArticlesWrapper;
