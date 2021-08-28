import React from 'react';
import { BreedsSelect } from './BreedsSelect';

// DO NOT DELETE
export const DogListContainer = () => {
  const [breeds, setBreeds] = React.useState([]);
  const [selectedBreed, setSelectedBreed] = React.useState("");

  const handleSelectBreed = (breed) => {
    setSelectedBreed(breed);
  }

  React.useEffect(()=>{
    const fetchBreeds = async () => {
      const res = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await res.json();
      const fetchedBreeds = Object.keys(data.message);
      setBreeds(fetchedBreeds);
      setSelectedBreed(fetchedBreeds[0]);
    }

    fetchBreeds();
  },[]);

  return (
    <div>
      <BreedsSelect 
        breeds={breeds}
        selectedBreed={selectedBreed} 
        onSelectBreed={handleSelectBreed}/>
    </div>
  );
}