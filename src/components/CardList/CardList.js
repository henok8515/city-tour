import React from "react";
import "./CardList.css";
import { CityData } from "../../Data/CityData";

function CardList() {
  return (
    <div className="card-list-container">
      {CityData.map(({ id, name, img, about, button }) => (
        <div>
          {" "}
          <div
            className="card-list"
            style={{
              backgroundImage: ` url(${img}),`,
              backgroundSize: "cover",
            }}
            key={id}
          >
            <h1>{name}</h1>
            <p>{about}</p>
            <img alt="" className="img" src={img} />
          </div>{" "}
          <button className="load-more-button">See More</button>
        </div>
      ))}
    </div>
  );
}

export default CardList;
