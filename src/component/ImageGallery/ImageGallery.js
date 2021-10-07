import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import i from './ImageGallery.module.css';

export default function ImageGallery({ images, openModal }) {
  return (
    <ul className={i.ImageGallery}>
      {images.map(({ webformatURL, id, user, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          alt={user}
          webformatURL={webformatURL}
          openModal={() => openModal({ largeImageURL })}
        />
      ))}
    </ul>
  );
}
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ),
  openModal: PropTypes.func.isRequired,
};
