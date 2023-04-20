import React, { useState, useEffect } from "react";
import fetch from "node-fetch";

export default function DogPics() {
  // Set initial state for component
  const [img, setImg] = useState();
  // Grab random dog photo
  useEffect( () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(data => data.json())
    .then(data => {
      setImg(data.message)
    });
  }, []);


    // Return an img with the dog picture
    return (
      <div id='dogPics'>
        <h1>Then here's a random picture of a dog!</h1>
        <img src={img} alt='Dog picture'/>
      </div>
      )
}