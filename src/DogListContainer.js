import React, { useEffect, useState } from 'react';
import { BreedsSelect } from './BreedsSelect';
import { DogImage } from './DogImage';

// DO NOT DELETE
export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [dogUrls, setDogUrls] = useState([]);

  const handleSelectBreed = (breed) => {
    setSelectedBreed(breed);
  }

  useEffect(()=>{
    const fetchBreeds = async () => {
      const res = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await res.json();
      const fetchedBreeds = Object.keys(data.message);
      setBreeds(fetchedBreeds);
      setSelectedBreed(fetchedBreeds[0]);
    }

    fetchBreeds();
  },[]);

  const handleClick = async () => {
    const res = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`);
    const data = await res.json();
    setDogUrls(data.message);
  }

  return (
    <div className="container">
      <div className="container-select">
        <p>犬種: </p>
        <BreedsSelect 
          className="breeds-select"
          breeds={breeds}
          selectedBreed={selectedBreed} 
          onSelectBreed={handleSelectBreed}/>
        <button className="display-button button" onClick={handleClick}>表示</button>
      </div>
      <div className="container-images">
        {dogUrls.map(url => 
            <DogImage key={url} url={url} className="container-item" />
        )}
      </div>
    </div>
  );
}