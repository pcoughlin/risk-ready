import React, { useEffect, useState } from 'react'
import { useField, useFormikContext, getIn } from 'formik'

const ProfileImage = ({ label, ...props }) => {
  const [field, meta, helper] = useField(props)
  const { setValue } = helper
  const [file, setFile] = useState()

  const { values } = useFormikContext()
  const { fieldValues } = getIn(values)

  const imageChange = (e) => {
    console.log(e)
    setValue(e.target.files[0])
    console.log(e.target.files[0])

    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = () => {
      console.log(reader.result)
      setFile(reader.result)
    }
  }

  useEffect(() => {
    console.log(file)

    return () => {}
  }, [fieldValues, file])
  return (
    <div className="profile-form__avatar">
      <img
        src={
          file ||
          'http://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif'
        }
        alt=""
        className="profile-form__img"
      />
      <label
        htmlFor={props.id || props.name}
        className="profile-form__label--img"
      >
        {label}
        <input
          className="profile-form__hide"
          {...props}
          {...field}
          onChange={imageChange}
          value={undefined}
        />
      </label>
    </div>
  )
}

export default ProfileImage
