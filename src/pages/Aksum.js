import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

function Aksum() {
  return (
    <div>
      <div className="container">
        <img
          alt=""
          src="https://media.istockphoto.com/photos/obelisk-in-the-aksum-kingdom-ethiopia-picture-id186914973?k=6&m=186914973&s=612x612&w=0&h=CCu3NXHZBVnI_kGMagjnrHCxZnqILWZ4Mr7gDk4IKJw="
          className="place-img-container"
        />
        <p className="content">
          Aksum is a city in northern Ethiopia. It's known for its tall, carved
          obelisks, relics of the ancient Kingdom of Aksum. Most are in the
          northern Stelae Park, including a huge fallen pillar, now in pieces.
          Centuries-old St. Mary of Zion is a Christian church and pilgrimage
          site believed to have housed the biblical Ark of the Covenant. The
          neighboring Chapel of the Tablet is said to contain the Ark today.
        </p>
      </div>
      <Link to="/">go back</Link>;
    </div>
  );
}

export default Aksum;
