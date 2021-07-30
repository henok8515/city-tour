import React from "react";

import Card from "../Card/Card";
import "./CardList.css";

function CardList({ Data }) {
  return (
    <div className="card-list">
      <Card Data={Data} />
    </div>
  );
}

export default CardList;
