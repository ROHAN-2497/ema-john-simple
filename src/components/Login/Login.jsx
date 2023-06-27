import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form-container">
      <h3 className="form-title">Login</h3>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="Email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p className="link-btn"><small>New to Ema-jhon ? <Link to="/signup">Create New Account</Link></small></p>
    </div>
  );
};

export default Login;
