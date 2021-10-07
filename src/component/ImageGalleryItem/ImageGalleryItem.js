import React from 'react';
import PropTypes from 'prop-types';

import ii from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ webformatURL, user, openModal, largeImageURL }) {
  return (
    <li className={ii.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={user}
        className={ii.image}
        onClick={() => openModal({ largeImageURL })}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  images: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    user: PropTypes.string,
  }),
  openModal: PropTypes.func.isRequired,
};
