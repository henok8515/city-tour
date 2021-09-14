import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

function Card({ Data }) {
  const [count, setCount] = useState(0);
  const [deCount, setDeCount] = useState(0);

  return (
    <div className="card-container">
      {Data.map((Data, id) => (
        <div>
          <div
            key={id}
            style={{
              backgroundImage: `url(${Data.Url})`,
              backgroundSize: "cover",
              color: "b",
            }}
            className="container"
          >
            <div className="container__info">
              <span>
                <FontAwesomeIcon
                  style={{
                    color: "red",
                  }}
                  icon={faEye}
                />
                <i />
                {count + deCount}
              </span>
              <span>
                {" "}
                <FontAwesomeIcon
                  onClick={() => setCount(count + 1)}
                  icon={faThumbsDown}
                />
                <i />
                {count}
              </span>
              <span>
                <FontAwesomeIcon
                  onClick={() => setDeCount(deCount + 1)}
                  icon={faThumbsUp}
                />
                <i />
                {deCount}
              </span>
            </div>
            <div key={id} className="container__profile">
              <Link to={`/card/${Data.title}`}>
                {" "}
                <img src={Data.Url} alt="people" />
              </Link>

              <div className="container__profile__text">
                <h2>{Data.title}</h2>
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  to={`/card/${Data.title}`}
                >
                  <p>See more</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
