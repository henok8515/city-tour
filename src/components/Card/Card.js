import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

function Card({ Data }) {
  return (
    <div className="card-container">
      {Data.map((Data, id) => (
        <div>
          <div className="card" key={id}>
            <div>
              <img className="img-container" alt="" src={Data.Url} />
            </div>
            <h1>{Data.title}</h1>

            <Link className="btn" to={`/card/${Data.title}`}>
              View more ➤➤
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
