import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="form-container">
      <h2
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "50px",
          textTransform: "capitalize",
        }}
      >
        Sign in
      </h2>
      <form className="form-content">
        <label>
          Fist Name
          <input />
        </label>
        <label>
          last name
          <input />
        </label>
        <label>
          email
          <input />
        </label>
        <label>
          password
          <input />
        </label>
      </form>
    </div>
  );
}

export default Register;
