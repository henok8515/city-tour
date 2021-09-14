import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="menu-area">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          Service
          <ul className="dropdown">
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
            <li>Service 5</li>
            <li>Service 6</li>
          </ul>
        </li>
        <li>portfoilo</li>
        <li>contact</li>
      </ul>
    </div>
  );
}

export default HomePage;
