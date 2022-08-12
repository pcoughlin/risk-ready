import React, { useEffect } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextInput from '../components/TextInput'
import FormButton from '../components/FormButton'
import { NavLink } from 'react-router-dom'

import { signIn } from '../store/actions/authActions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useToken } from '../utils/useToken'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { getToken } = useToken()

  const handleLogin = (values) => {
    dispatch(signIn({ email: values.email, password: values.password }))
  }

  const timedNavigation = () => {
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }
  useEffect(() => {
    const token = getToken()
    token && timedNavigation()
    return () => {}
  }, [navigate, dispatch, getToken])

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
        onSubmit={(values) => handleLogin(values)}
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
            <NavLink to="/auth/forgot-password" className="form__cta--forgot">
              Forgot Password
            </NavLink>
          </div>
          <div className=" form__cta form__cta--signup">
            Don't Have an Account?
            <NavLink
              to="/auth/signup
            "
              className="form__cta--signup-link"
            >
              Sign up
            </NavLink>
          </div>
          <FormButton type="submit" text="Login" />{' '}
        </Form>
      </Formik>
      <div className="alternative">
        <p className="alternative__heading">Or</p>
        <div className="alternative__options">
          <img src="/assets/images/signIn-google.png" alt="google login" />
          <img src="/assets/images/signIn-facebook.png" alt="facebook login" />
          <img src="/assets/images/signIn-apple.png" alt="apple login" />
        </div>
      </div>
    </div>
  )
}

export default Login
