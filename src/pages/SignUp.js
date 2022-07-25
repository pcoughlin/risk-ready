import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import TextInput from '../components/TextInput'
import FormButton from '../components/FormButton'

export const SignUp = () => {
  const validPhone = /^[+]?[\s./0-9]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-s\.0-9]{7,14}$/g
  const validations = Yup.object({
    firstName: Yup.string()
      .min(2, 'Name should contain at least two characters')
      .required('You should have a First Name'),
    lastName: Yup.string()
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

  return (
    <div className="signup">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          password: '',
        }}
        validationSchema={validations}
      >
        <Form className="form">
          <TextInput
            label="First Name"
            type="text"
            id="firstName"
            name="firstName"
          />
          <TextInput
            label="Last Name"
            type="text"
            id="lastName"
            name="lastName"
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
            <a href="/signup" className="form__cta--signup-link">
              Sign up
            </a>
          </div>
          <FormButton type="submit" text="Sign Up"></FormButton>
        </Form>
      </Formik>
      {/* <form action="" className="form">
        <div className="form__group">
          <label htmlFor="firstName" className="form__label">
            First Name
          </label>
          <input type="text" name="firstName" id="" className="form__control" />
        </div>
        <div className="form__group">
          <label htmlFor="lastName" className="form__label">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="form__control"
          />
        </div>
        <div className="form__group">
          <label htmlFor="phone" className="form__label">
            Phone
          </label>
          <input type="tel" name="phone" id="phone" className="form__control" />
        </div>
        <div className="form__group">
          <label htmlFor="email" className="form__label">
            Enter Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form__control"
          />
        </div>
        <div className="form__group">
          <label htmlFor="email" className="form__label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form__control"
          />
        </div>
        <div className=" form__cta form__cta--signup">
          Already have an Account?
          <a href="/signup" className="form__cta--signup-link">
            Sign up
          </a>
        </div>
        <button type="submit" className="form__btn">
          Login
        </button>
      </form> */}
    </div>
  )
}
