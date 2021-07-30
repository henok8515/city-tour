import React from "react";
import { Link } from "react-router-dom";

function Lalibela() {
  return (
    <div>
      <div className="container">
        <img
          alt=""
          src="https://media.istockphoto.com/photos/church-of-st-george-unesco-world-heritage-lalibela-ethiopia-picture-id530603011?b=1&k=6&m=530603011&s=170667a&w=0&h=5C7cnm87GcaPhnRcWHatbAAZ6WP5uk79XUkk2Ayx5Us="
          className="place-img-container"
        />
        <p className="content">
          Lalibela is a town in the Amhara region of northern Ethiopia. It's
          known for its distinctive rock-cut churches dating from the 12th and
          13th centuries, which are pilgrimage sites for Coptic Christians.
          Carved out of rock, the subterranean monoliths include huge Bete
          Medhane Alem, and cross-shaped Bete Giyorgis. Many are joined by
          tunnels and trenches, and some have carved bas-reliefs and colored
          frescoes inside
        </p>
      </div>
      <Link to="/">go back</Link>;
    </div>
  );
}

export default Lalibela;
