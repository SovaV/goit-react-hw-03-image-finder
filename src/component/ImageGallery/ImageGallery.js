import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import i from './ImageGallery.module.css';

export default function ImageGallery({ images }) {
  return (
    <ul className={i.ImageGallery}>
      {images.map(({ webformatURL, id, user }) => (
        <ImageGalleryItem key={id} alt={user} webformatURL={webformatURL} />
      ))}
    </ul>
  );
}
