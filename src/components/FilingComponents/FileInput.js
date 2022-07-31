import React, { useEffect, useState } from 'react'
import { useField, useFormikContext, getIn } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FileInput = ({ label, className, ...props }) => {
  const [field, meta, helper] = useField(props)
  const { setValue } = helper
  const [files, setFiles] = useState([])

  const { values } = useFormikContext()
  const { fieldValues } = getIn(values)

  const imageChange = (e) => {
    let files = []
    if (files) {
      Object.entries(e.target.files).forEach((file) => {
        files.push(file)
      })
      setValue(files)
      setFiles(files)
    }
    let reader = new FileReader()
  }

  useEffect(() => {
    console.log(files)

    return () => {}
  }, [fieldValues, files])

  return (
    <>
      <div className="filing-form__group">
        <label
          htmlFor={props.id || props.name}
          className="filing-form__label--file"
        >
          {label}
          <div className="filing-form__placeholder">
            <FontAwesomeIcon
              icon="fa-photo-video"
              className="filing-form__placeholder--icon"
            />
            <input
              {...field}
              className={className}
              {...props}
              onChange={imageChange}
              value={undefined}
            />
          </div>
        </label>
      </div>
      {meta.touched && meta.error ? (
        <div className="filing-form__error">{meta.error}</div>
      ) : null}
      {/* {values.claimMedia.length > 0 && (
        <FilePreview media={values.claimMedia} />
      )} */}
    </>
  )
}

export default FileInput
