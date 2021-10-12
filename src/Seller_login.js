import React, { useState } from "react";
import "./Seller_login.css";
import logo from "./logo.PNG";
import {Link} from "react-router-dom"; 
function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const[ID, setID] = useState('');
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} />
      </Link>

      <div className='login__container'>
                <h1>Log-in</h1>

                <form>

                    <h5>Retailer ID</h5>
                    <input type='text' value={ID} onChange={e => setID(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton'>Log In</button>
                </form>

                <p>
                    By Logging-in you agree to the MedSpace Conditions of Use & Sale. 
                </p>
                <div className = "reg__check">
                  <p>New to MedSpace? </p>
                </div>
                <button className='login__registerButton'>Create your MedSpace Account</button>
            </div>
      
    </div>
  );
}

export default Login;
