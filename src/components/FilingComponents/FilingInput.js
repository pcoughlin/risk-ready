import React from 'react'
import { useField } from 'formik'

const FilingInput = ({ label, className, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <div className="filing-form__group">
        <label htmlFor={props.id || props.name} className="filing-form__label">
          {label}
        </label>
        <input {...field} className={className} {...props} />
      </div>
      {meta.touched && meta.error ? (
        <div className="filing-form__error">{meta.error}</div>
      ) : null}
    </>
  )
}

export default FilingInput
