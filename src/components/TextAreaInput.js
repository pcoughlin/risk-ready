import React from 'react'
import { Formik, Form, useField } from 'formik'

const TextAreaInput = ({ label, className, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <div className="form__group form__group--autosize">
        <label htmlFor={props.id || props.name} className="form__label">
          {label}
        </label>
        <textarea
          {...field}
          {...props}
          className={
            'form__control form__control--textarea' +
            (className ? ' ' + className : '')
          }
        ></textarea>
      </div>
      {meta.touched && meta.error ? (
        <div className="form__error">{meta.error}</div>
      ) : null}
    </>
  )
}

export default TextAreaInput
