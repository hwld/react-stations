import PropTypes from 'prop-types';
import React from 'react';

// DO NOT DELETE
export const DogImage = ({ url }) => {
  return (
    <img src={url} height="300"></img>
  );
}
DogImage.propTypes = {
  url: PropTypes.string.isRequired
}