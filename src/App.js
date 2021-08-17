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
      <header className="header">Dogアプリ</header>
      <div className="viewer-container">
        <div className="description">
          <p>犬の画像を表示するサイトです</p>
        </div>
        <div className="viewer">
          <img src={dogUrl} height="300"></img>
          <button className="button viewer-button" onClick={handleChangeDogImage}>
            変更
          </button>
        </div>  
      </div>
    </div>
  )
}
