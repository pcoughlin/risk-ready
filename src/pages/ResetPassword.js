import React, { useEffect } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextInput from '../components/TextInput'
import FormButton from '../components/FormButton'
import { NavLink } from 'react-router-dom'

import { resetPassword } from '../store/actions/authActions'
import { useDispatch, useSelector } from 'react-redux'

const ResetPassword = () => {
  const dispatch = useDispatch()

  const reset = (values) => {
    dispatch(
      resetPassword({
        email: values.email,
        password: values.password,
        token: values.token,
      }),
    )
  }

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <div className="login">
      <Formik
        initialValues={{
          email: '',
          password: '',
          passwordConfirmation: '',
          token: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
          password: Yup.string()
            .required('Please enter your password')
            .min(4, 'Password must be at least 4 characters long'),
          passwordConfirmation: Yup.string()
            .required('Confirm your password')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
          token: Yup.string().required('Enter the token sent to your mail'),
        })}
        onSubmit={(values) => reset(values)}
      >
        <Form className="form">
          <TextInput label="Email" type="email" name="email" id="email" />
          <TextInput
            label="Password"
            type="password"
            name="password"
            id="password"
          />
          <TextInput
            label="Password Confirmation"
            type="password"
            name="passwordConfirmation"
            id="passwordConfirmation"
          />
          <TextInput label="Token" type="text" name="token" id="token" />
          <FormButton type="submit" text="Reset Password" />
        </Form>
      </Formik>
    </div>
  )
}

export default ResetPassword
