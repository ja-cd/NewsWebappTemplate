import React from 'react';
import GalleryGrid from '..//gallery/GalleryGrid';

const Gallery: React.FC = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Image Gallery</h1>
      <p className="page-description">
        Explore our collection of technology and programming related images.
      </p>
      <GalleryGrid />
    </div>
  );
};

export default Gallery;
