import { Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const Login = () => {
  return (
    <>
      <div className="form_wrapper">
        <h2 className="form_heading">Log in</h2>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Required'),
            password: Yup.string()
              .min(8, 'Password must be 8 characters or long')
              .required('Required')
          })}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              console.log(values);
              setTimeout(() => {
                setSubmitting(false);
              }, 10002);
            } catch (error) {
              console.log(error);
              setSubmitting(false);
            }
          }}
        >
          {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
            <form noValidate onSubmit={handleSubmit}>
              <div className="form_control">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email && (
                  <span className="input_err">{errors.email}</span>
                )}
              </div>
              <div className="form_control">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={values.password}
                />
                {errors.password && (
                  <span className="input_err">{errors.password}</span>
                )}
              </div>
              <div className="form_control">
                <button type="submit" disabled={isSubmitting}>
                  Log in
                </button>
              </div>
            </form>
          )}
        </Formik>
        <div className="form_link">
          <Link to="/signup">Don't have an account? Sign up.</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
