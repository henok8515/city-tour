import React from "react";
import { Link } from "react-router-dom";

function Gonder() {
  return (
    <div>
      <div className="container">
        <img
          alt=""
          src="https://cdn.pixabay.com/photo/2014/01/27/21/57/gonder-253474_960_720.jpg"
          className="place-img-container"
        />
        <p className="content">
          Gondar, or Gonder, is a city in northern Ethiopia. It's known for the
          walled Fasil Ghebbi fortress and palace compound, once the seat of
          Ethiopian emperors. Dominating it is the immense 17th-century castle
          of Emperor Fasilides, which combines Portuguese, Indian and local
          architectural styles. Outside the complex is Debre Berhan Selassie
          church, with an interior of elaborate murals, including a ceiling of
          faces
        </p>
      </div>
      <Link to="/">go back</Link>;
    </div>
  );
}

export default Gonder;
