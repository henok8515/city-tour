import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ Data }) {
  return (
    <div className="card-container">
      {Data.map((Data, id) => (
        <div className="card" key={id}>
          <h1>{Data.title}</h1>
          <p>{Data.place}</p>
          <Link to={`/card/${Data.title}`}>View more</Link>
        </div>
      ))}
    </div>
  );
}

export default Card;
