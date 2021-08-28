import React from 'react';

// DO NOT DELETE
export const DogListContainer = () => {
  const [breeds, setBreeds] = React.useState([]);

  React.useEffect(()=>{
    const fetchBreeds = async () => {
      const res = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await res.json();
      setBreeds(Object.keys(data.message));
    }

    fetchBreeds();
  },[]);

  return (
    <div>
    { breeds.map((breed,i) => <div key={i}>{breed}</div>) }
    </div>
  );
}