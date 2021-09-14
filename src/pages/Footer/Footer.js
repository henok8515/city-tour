import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      {" "}
      <h1 className="footer-title"> contact us</h1>
      <div className="div">
        <ul className="ul">
          <li className="li">
            <a href="https://twitter.com/julesforrest">Twitter</a>
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </li>
          <li>
            <a href="https://codepen.io/julesforrest">Codepen</a>
            <i className="fa fa-codepen" aria-hidden="true"></i>
          </li>
          <li className="li">
            <a href="mailto:julesforrest@gmail.com">Email</a>
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </li>
          <li className="li">
            <a href="https://dribbble.com/julesforrest">facebook</a>
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </li>
          <li className="li">
            <a href="https://github.com/julesforrest">Github</a>{" "}
            <i className="fa fa-github" aria-hidden="true"></i>
          </li>
          <li>
            <p>👋</p>
          </li>
        </ul>

      </div>
      <h2 className="copy-right">
        powerd by <i className="fa fa-copyright" aria-hidden="true"></i>henok
        egezew
      </h2>
    </div>
  );
}

export default Footer;
