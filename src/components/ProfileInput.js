import React from 'react'
import { Formik, Form, useField } from 'formik'

const ProfileInput = ({ label, className, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <div className="profile-form__group">
        <label htmlFor={props.id || props.name} className="profile-form__label">
          {label}
        </label>
        <input
          {...field}
          {...props}
          className={
            'profile-form__control' + (className ? ' ' + className : '')
          }
        />
      </div>
    </>
  )
}

export default ProfileInput
