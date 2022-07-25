import React from 'react'

const FormButton = ({ type, text }) => {
  return (
    <button type={type} className="form__btn">
      {text}
    </button>
  )
}

export default FormButton
