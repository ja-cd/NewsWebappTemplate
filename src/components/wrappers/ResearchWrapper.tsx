import React from 'react';
import './ResearchWrapper.css';

interface ResearchItemProps {
  link: string;
  header: string;
  description: string;
  category: string;
  date: string;
}

interface ResearchWrapperProps {
  researchItems: ResearchItemProps[];
}

const ResearchWrapper: React.FC<ResearchWrapperProps> = ({ researchItems }) => {
  return (
    <div className="research-wrapper">
      {researchItems.map((research, index) => (
        <a
          href={research.link}
          key={index}
          className="research-card"
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer" // Security best practice for external links
        >
          <div className="research-field">{research.category}</div>
          <div className="research-date">{research.date}</div>
          <h2 className="research-title">{research.header}</h2>
          <p className="research-abstract">{research.description}</p>
        </a>
      ))}
    </div>
  );
};

export default ResearchWrapper;
