import React from 'react';
import { DogImage } from './DogImage';

// DO NOT DELETE
export const Description = () => {
  const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");

  const handleChangeDogImage = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    setDogUrl(data.message);
  }

  return (
    <div className="description">
      <div className="description-text">
        <p>犬の画像を表示するサイトです</p>
      </div>
      <div className="description-viewer">
        <DogImage url={dogUrl} className="viewer-dog" />
        <button className="button viewer-button" onClick={handleChangeDogImage}>
          変更
        </button>
      </div>  
    </div>
  );
}