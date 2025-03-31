import React from 'react';
import './GalleryGrid.css';

interface GalleryItemProps {
  imageUrl: string;
  title: string;
  description: string;
  category: string;
  link: string;
}

const GalleryGrid: React.FC = () => {
  // Sample gallery items - replace with your actual data
  const galleryItems: GalleryItemProps[] = [
    {
      imageUrl:
        'https://t4.ftcdn.net/jpg/01/78/83/59/360_F_178835953_JLt7IY2GX5DvCJhCBEtzgkTWUZbEFZGO.jpg',
      title: 'Quantum Computing',
      description: 'Very real representation of a quantum processor',
      category: 'Hardware',
      link: 'https://www.google.com',
    },
    {
      imageUrl:
        'https://www.shutterstock.com/image-photo/ai-tech-businessman-show-virtual-600nw-2253228203.jpg',
      title: 'AI Programming',
      description: 'Visual representation of machine learning algorithms',
      category: 'Software',
      link: 'https://www.google.com',
    },
    {
      imageUrl:
        'https://www.santacruzsentinel.com/wp-content/uploads/2021/03/STC-L-GRIGGS-COL-0328-01_83852141-1.jpg?w=1800&resize=1800,1800',
      title: 'Cloud Architecture',
      description: 'Diagram of modern cloud infrastructure patterns',
      category: 'Infrastructure',
      link: 'https://www.google.com',
    },
    {
      imageUrl:
        'https://www.shutterstock.com/image-photo/promotion-news-overjoyed-arab-man-260nw-1946302561.jpg',
      title: 'Frontend Development',
      description: 'Modern React component architecture visualization',
      category: 'Web Development',
      link: 'https://www.google.com',
    },
    {
      imageUrl:
        'https://media.licdn.com/dms/image/v2/D5612AQELnKzUm7ODYA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1706963230476?e=2147483647&v=beta&t=CFOQQFdWKlahxtICySrzjYA_pEaxxIDA08_BnfVkSso',
      title: 'IoT Sensors',
      description: 'Smart home device ecosystem diagram',
      category: 'IoT',
      link: 'https://www.google.com',
    },
  ];

  return (
    <div className="gallery-wrapper">
      {galleryItems.map((item, index) => (
        <a
          href={item.link}
          key={index}
          className="gallery-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="gallery-image-container">
            <img src={item.imageUrl} alt={item.title} className="gallery-image" />
          </div>
          <div className="gallery-content">
            <h3 className="gallery-title">{item.title}</h3>
            <p className="gallery-description">{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default GalleryGrid;
