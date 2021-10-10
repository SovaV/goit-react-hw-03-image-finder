import React from 'react';
import PropTypes from 'prop-types';

import ii from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ webformatURL, user, openModal, largeImageURL }) {
  return (
    <li className={ii.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={user}
        data-source={largeImageURL}
        className={ii.image}
        onClick={openModal}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
