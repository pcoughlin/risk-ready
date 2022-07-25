import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import AuthInput from '../components/AuthInput'
import FormButton from '../components/FormButton'

export const TwoFactor = () => {
  let [time, setTime] = useState(60)

  // const timeInterval = setInterval(() => {
  //   if (time > 0) {
  //     setTime((time -= 1))
  //   }
  //   if (time === 0) {
  //     clearInterval(timeInterval)
  //   }
  // }, 1000)

  const validations = Yup.object({
    otp1: Yup.number().min(0).max(9),
    otp2: Yup.number().min(0).max(9),
    otp3: Yup.number().min(0).max(9),
    otp4: Yup.number().min(0).max(9),
    otp5: Yup.number().min(0).max(9),
  })

  return (
    <div className="two-fa">
      <div className="two-fa__text">
        <h2 className="heading">Two Factor Authentication Code</h2>
        <p className="desc">
          Check your personal Mail. We have sent you the pin at
          ******mail@gmail.com
        </p>
      </div>
      <Formik
        initialValues={{ otp1: '', otp2: '', otp3: '', otp4: '', otp5: '' }}
        validationSchema={validations}
      >
        <Form className="form">
          <div className="form__group--auth">
            <AuthInput
              className=" form__control form__control--auth-type"
              type="text"
              id="otp1"
              name="otp1"
              maxLength={1}
            />
            <AuthInput
              className=" form__control form__control--auth-type"
              type="text"
              id="otp2"
              name="otp2"
              maxLength={1}
            />
            <AuthInput
              className=" form__control form__control--auth-type"
              type="text"
              id="otp3"
              name="otp3"
              maxLength={1}
            />
            <AuthInput
              className=" form__control form__control--auth-type"
              type="text"
              id="otp4"
              name="otp4"
              maxLength={1}
            />
            <AuthInput
              className=" form__control form__control--auth-type"
              type="text"
              id="otp5"
              name="otp5"
              maxLength={1}
            />
          </div>
          <div className="form__cta">
            <a href="/" className="form__cta--resend">
              Resend Code? &nbsp;&nbsp;
            </a>
            <span>
              <span>0</span>:<span>{time}</span>
            </span>
          </div>
          <FormButton type="submit" text="Verify"></FormButton>
        </Form>
      </Formik>
    </div>
  )
}
