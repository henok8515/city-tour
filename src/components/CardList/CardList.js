import React from "react";
import "./CardList.css";
import { CityData } from "../../Data/CityData";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Lalibela from "../../pages/Lalibela";

function CardList() {
  return (
    <div className="card-list-container">
      <Router>
        {CityData.map(({ id, name, img, about, Url }) => (
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
              {" "}
              <img alt="" className="img" src={img} />
              <h1 className="city-name">{name}</h1>
              <p>{about}</p>{" "}
              <Link to="/Lalibela" className="load-more-button">
                See More
              </Link>
            </div>{" "}
          </div>
        ))}
        <div>
          <Route exact path="/Lalibela" component={Lalibela} />
        </div>
      </Router>
    </div>
  );
}

export default CardList;
