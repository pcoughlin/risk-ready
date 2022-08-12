import React, { useEffect } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextInput from '../components/TextInput'
import FormButton from '../components/FormButton'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { confirmEmail } from '../store/actions/authActions'
import { useToken } from '../utils/useToken'

const ConfirmEmail = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { getToken } = useToken()

  const confirm = (values) => {
    dispatch(confirmEmail({ email: values.email, token: values.otp }))
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
        initialValues={{
          email: '',
          otp: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Email address required'),
          otp: Yup.string().required('Please enter OTP for confirmation'),
        })}
        onSubmit={confirm}
      >
        <Form className="form">
          <TextInput label="Email" type="email" name="email" id="email" />
          <TextInput label="OTP" type="text" name="otp" id="otp" />
          <FormButton type="submit" text="Confirm" />
        </Form>
      </Formik>
    </div>
  )
}

export default ConfirmEmail
