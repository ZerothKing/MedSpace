import React from "react";
import "./Register.css";
import logo from "./logo.PNG";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div className="register">
      <Link to="/">
        <img className="reg__logo" src={logo} />
      </Link>

      <div className="register__container">
        <h1>Register To MedSpace</h1>

        <form>
          <h5>Your Name</h5>
          <input type="text" />
          <h5>Mobile Number</h5>
          <input type="text" />
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" placeholder = "Password must be atleast 6 characters.." />
          
          <h5>Confirm Password</h5>
          <input type="password" />

          <button type="submit" className="Register__Button">
            Continue
          </button>
        </form>

        <p>
          By Creating an Account you agree to the MedSpace Conditions of Use &
          Sale.
        </p>
        <div className="log__check">
          Already Have an Account?
          <Link to="/Customer_login">
            <div className="reg_login">Log In</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
