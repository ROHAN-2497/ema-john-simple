import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
const SignUp = () => {
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const confirm = form.confirm.value;
        const password = form.password.value;
        console.log(email, password, confirm)
    }
    return (
        <div className="form-container">
        <h3 className="form-title">Sign Up</h3>
        <form onSubmit={handleSignUp}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="Email" name="email" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" name="confirm" id="" required />
          </div>
          <input className="btn-submit" type="submit" value="Sign Up" />
        </form>
      <p className='link-btn'><small>Already have an account? <Link to="/login">Login</Link></small></p>
      </div>
    );
};

export default SignUp;