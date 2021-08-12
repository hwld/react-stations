// DO NOT DELETE

import * as React from 'react';
import './App.css';

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");

  const handleChangeDogImage = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    setDogUrl(data.message);
  }

  return (
    <div>
      <header>Dogアプリ</header>
      <p>犬の画像を表示するサイトです</p>
      <img  src={dogUrl}></img>
      <div>
        <button onClick={handleChangeDogImage}>
          変更
        </button>
      </div>
    </div>
  )
}
