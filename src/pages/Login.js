import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleSubmit = e => e.preventDefault();

  return (
    <>
      <div className="login_form_wrapper">
        <h2 className="login_heading">Log in</h2>
        <form noValidate onSubmit={handleSubmit}>
          <div className="login_control">
            <input name="email" type="email" placeholder="Email" />
          </div>
          <div className="login_control">
            <input name="password" type="password" placeholder="Password" />
          </div>
          <div className="login_control">
            <button type="submit">Log in</button>
          </div>
        </form>
        <div className="form_link">
          <Link to="/signup">Don't have an account? Sign up.</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
