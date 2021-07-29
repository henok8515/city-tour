import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-container">
      {/* <h2 className="logo"></h2> */}

      <Link className="link" to="/">
        Home
      </Link>

      <Link className="link" to="/About">
        About
      </Link>

      <Link className="link" to="/Gonder">
        Book
      </Link>
    </div>
  );
}

export default Nav;
