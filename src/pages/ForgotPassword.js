import React, { useEffect } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextInput from '../components/TextInput'
import FormButton from '../components/FormButton'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassword } from '../store/actions/authActions'
import { useNavigate } from 'react-router-dom'
import { clearError, clearResponse } from '../store/actions/authActions'
const ForgotPassword = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const tempUserData = JSON.parse(localStorage.getItem('risk-ready-temp'))

  const { errorMsg, responseMsg } = useSelector((state) => state.auth)

  const handleForgotPassword = (values) => {
    dispatch(forgotPassword(values.email))
  }

  useEffect(() => {
    if (errorMsg) {
      dispatch(clearError())
    }

    if (responseMsg) {
      dispatch(clearResponse())
    }
    return () => {}
  }, [dispatch, tempUserData])

  return (
    <div className="login">
      <div className="form__desc">
        <h2 className="form__desc--heading">
          Enter your mail to get a Password Reset Link
        </h2>
      </div>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        })}
        onSubmit={handleForgotPassword}
      >
        <Form className="form">
          <TextInput label="Email" type="email" name="email" id="email" />
          <FormButton type="submit" text="Send" />
        </Form>
      </Formik>
    </div>
  )
}

export default ForgotPassword
