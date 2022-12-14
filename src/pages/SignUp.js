import React, { useEffect } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import TextInput from '../components/TextInput'
import FormButton from '../components/FormButton'
import { NavLink, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../store/actions/authActions'

export const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let userData = {}

  const { isLoggedIn } = useSelector((state) => state.auth)

  const registerUser = (values) => {
    for (const [key, value] of Object.entries(values)) {
      userData[key] = value
    }
    dispatch(signUp(userData))
  }

  const validPhone = /^[+]?[\s./0-9]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-s\.0-9]{7,14}$/g
  const validations = Yup.object({
    first_name: Yup.string()
      .min(2, 'Name should contain at least two characters')
      .required('You should have a First Name'),
    last_name: Yup.string()
      .required('You have a last name, enter it')
      .min(2, 'Name requires minimum of 2 characters'),
    phone: Yup.string()
      .required('Please enter a phone number')
      .matches(validPhone, 'Enter a valid phone number'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Please enter email address'),
    password: Yup.string()
      .required('Please enter a password')
      .min(4, 'Password should be 4 characters minimum'),
  })

  useEffect(() => {
    isLoggedIn && navigate('/')
    return () => {}
  }, [isLoggedIn, navigate])

  return (
    <div className="signup">
      <div className="two-fa__text">
        <h2 className="heading">Hello! Sign up to Get Started</h2>
      </div>
      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          phone: '',
          email: '',
          password: '',
        }}
        validationSchema={validations}
        onSubmit={registerUser}
      >
        <Form className="form">
          <TextInput
            label="First Name"
            type="text"
            id="first_name"
            name="first_name"
          />
          <TextInput
            label="Last Name"
            type="text"
            id="last_name"
            name="last_name"
          />
          <TextInput label="Phone" type="tel" id="phone" name="phone" />
          <TextInput label="Email" type="email" name="email" id="email" />
          <TextInput
            label="Password"
            type="password"
            name="password"
            id="password"
          />
          <div className=" form__cta form__cta--signup">
            Already have an Account?
            <NavLink to="/auth" className="form__cta--signup-link">
              Sign In
            </NavLink>
          </div>
          <FormButton type="submit" text="Sign Up"></FormButton>
        </Form>
      </Formik>
    </div>
  )
}
