import React from 'react';
import ii from './ImageGalleryItem.module.css';

export default function ImageGallery({ webformatURL, user }) {
  return (
    <li className={ii.ImageGalleryItem}>
      <img src={webformatURL} alt={user} className={ii.image} />
    </li>
  );
}
