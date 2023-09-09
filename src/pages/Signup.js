import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const handleSubmit = e => e.preventDefault();

  return (
    <>
      <div className="form_wrapper">
        <h2 className="form_heading">Sign Up</h2>
        <form noValidate onSubmit={handleSubmit}>
          <div className="form_control">
            <input name="email" type="email" placeholder="Email" />
          </div>
          <div className="form_control">
            <input name="username" type="text" placeholder="Username" />
          </div>
          <div className="form_control">
            <input name="password" type="password" placeholder="Password" />
          </div>
          <div className="form_control">
            <button type="submit">Sign up</button>
          </div>
        </form>
        <div className="form_link">
          <Link to="/login">Already have an account? Log in.</Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
