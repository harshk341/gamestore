import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from 'src/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
  return (
    <>
      <div className="form_wrapper">
        <h2 className="form_heading">Sign Up</h2>
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
          onSubmit={async ({ email, password }, { setSubmitting }) => {
            try {
              console.log({ email, password });
              const data = await createUserWithEmailAndPassword(
                auth,
                email,
                password
              );
              console.log(data.user);
              setSubmitting(false);
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
          <Link to="/login">Already have an account? Log in.</Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
