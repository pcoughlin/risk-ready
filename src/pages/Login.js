import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import TextInput from '../components/TextInput'
import FormButton from '../components/FormButton'

const Login = () => {
  return (
    <div className="login">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
          password: Yup.string()
            .required('Please enter your password')
            .min(4, 'Password must be at least 4 characters long'),
        })}
      >
        <Form className="form">
          <TextInput label="Email" type="email" name="email" id="email" />
          <TextInput
            label="Password"
            type="password"
            name="password"
            id="password"
          />
          <div className="form__cta">
            <a href="/forgot-password" className="form__cta--forgot">
              Forgot Password
            </a>
          </div>
          <div className=" form__cta form__cta--signup">
            Don't Have an Account?
            <a href="/signup" className="form__cta--signup-link">
              Sign up
            </a>
          </div>
          <FormButton type="submit" text="Login" />{' '}
        </Form>
      </Formik>
      {/* <form action="" className="form">
        <div className="form__group">
          <label htmlFor="email" className="form__label">
            Enter Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="form__control"
          />
        </div>
        <div className="form__group">
          <label htmlFor="password" className="form__label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form__control"
          />
        </div>
        <div className="form__cta">
          <a href="/forgot-password" className="form__cta--forgot">
            Forgot Password
          </a>
        </div>
        <div className=" form__cta form__cta--signup">
          Don't Have an Account?
          <a href="/signup" className="form__cta--signup-link">
            Sign up
          </a>
        </div>
        <button type="submit" className="form__btn">
          Login
        </button>
      </form> */}
      <div className="alternative">
        <p className="alternative__heading">Or</p>
        <div className="alternative__options">
          <img src="/signIn-google.png" alt="google login" />
          <img src="/signIn-facebook.png" alt="facebook login" />
          <img src="/signIn-apple.png" alt="apple login" />
        </div>
      </div>
    </div>
  )
}

export default Login
