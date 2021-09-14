import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register({ onEmailChange }) {
  return (
    <div className="form-container">
      <div class="box">
        <form>
          <span class="text-center">login</span>
          <div class="input-container">
            <input type="text" required="" />
            <label>Full Name</label>
          </div>
          <div class="input-container">
            <input onChange={onEmailChange} type="mail" required="" />
            <label>Email</label>
          </div>
          <Link to="/">
            <button type="button" class="btn">
              submit
            </button>
          </Link>
        </form>
      </div>
      <div class="box1">
        <form>
          <span class="text-center1">Register</span>
          <div class="input-container1">
            <input type="text1" required="" />
            <label>Full Name</label>
          </div>
          <div class="input-container1">
            <input type="mail1" required="" />
            <label>Email</label>
          </div>
          <div class="input-container1">
            <input type="mail1" required="" />
            <label>Email</label>
          </div>
          <Link to="/">
            <button type="button1" class="btn">
              submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
