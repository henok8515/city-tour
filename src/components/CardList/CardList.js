import React from "react";
import About from "../../pages/About";
import Footer from "../../pages/Footer/Footer";

import Card from "../Card/Card";
import "./CardList.css";

function CardList({ Data }) {
  return (
    <div className="card-list">
      <Card Data={Data} />
      <div className="about-container">{/* <About /> */}</div> <Footer />
    </div>
  );
}

export default CardList;
