import PropTypes from 'prop-types';
import React from 'react';

// DO NOT DELETE
export const BreedsSelect = ({ breeds, selectedBreed, onSelectBreed, className }) => {

  const handleChange = (e) => {
    onSelectBreed(e.target.value);
  }

  return (
  <select className={className} value={selectedBreed} onChange={handleChange}>
    {breeds.map((breed,i) => 
      <option key={i} value={breed}>
        {breed}
      </option>
    )}
  </select>
  );
}

BreedsSelect.propTypes = {
  breeds: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedBreed: PropTypes.string.isRequired,
  onSelectBreed: PropTypes.func.isRequired,
  className: PropTypes.string,
}