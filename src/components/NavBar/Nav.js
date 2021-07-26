import React from "react";
import "./Nav.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
function Nav() {
  return (
    <div className="nav-container">
      <Router>
        {/* <h2 className="logo"></h2> */}

        <Link className="link" to="/">
          Home
        </Link>

        <Link className="link" to="/about">
          About
        </Link>

        <Link className="link" to="/dashboard">
          Book
        </Link>
      </Router>
    </div>
  );
}

export default Nav;
