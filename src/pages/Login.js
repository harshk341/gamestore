import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleSubmit = e => e.preventDefault();

  return (
    <>
      <div className="form_wrapper">
        <h2 className="form_heading">Log in</h2>
        <form noValidate onSubmit={handleSubmit}>
          <div className="form_control">
            <input name="email" type="email" placeholder="Email" />
          </div>
          <div className="form_control">
            <input name="password" type="password" placeholder="Password" />
          </div>
          <div className="form_control">
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
