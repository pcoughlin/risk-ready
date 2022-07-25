import React from 'react'
import { Formik, Form, useField } from 'formik'

const TextInput = ({ label, className, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <div className="form__group">
        <label htmlFor={props.id || props.name} className="form__label">
          {label}
        </label>
        <input
          {...field}
          {...props}
          className={'form__control' + (className ? ' ' + className : '')}
        />
      </div>
      {meta.touched && meta.error ? (
        <div className="form__error">{meta.error}</div>
      ) : null}
    </>
  )
}

export default TextInput
