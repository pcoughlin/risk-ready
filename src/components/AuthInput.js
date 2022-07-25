import React from 'react'
import { Formik, Form, useField } from 'formik'

const AuthInput = ({ className, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <input
        {...field}
        {...props}
        className={'form__control' + (className ? ' ' + className : '')}
      />

      {/* {meta.touched && meta.error ? (
        <div className="form__error">{meta.error}</div>
      ) : null} */}
    </>
  )
}

export default AuthInput
