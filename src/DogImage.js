import PropTypes from 'prop-types';
import React from 'react';

// DO NOT DELETE
export const DogImage = ({ url, className }) => {
  return (
    <img className={className} src={url} ></img>
  );
}
DogImage.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
}