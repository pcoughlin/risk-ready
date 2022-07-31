import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FilingButton = ({ type, text }) => {
  return (
    <button type={type} className="filing-form__btn">
      <FontAwesomeIcon
        icon="fa-cloud-upload"
        className="filing-form__btn--icon"
      />
      {text}
    </button>
  )
}

export default FilingButton
