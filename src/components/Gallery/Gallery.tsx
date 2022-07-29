import React from 'react';

type GalleryProps = {
  images: string[];
};

const MAX_IMAGES = 6;

const Gallery = ({ images }: GalleryProps) => (
  <div className="property__gallery">
    {images.slice(0, MAX_IMAGES).map((img) => (
      <div key={img} className="property__image-wrapper">
        <img className="property__image" src={img} alt="" />
      </div>
    ))}
  </div>
);

export default Gallery;
