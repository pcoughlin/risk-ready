import React, { useEffect, useState } from 'react'
import { useField, useFormikContext, getIn } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FileInput = ({ label, className, ...props }) => {
  const [field, meta, helper] = useField(props)
  const { setValue } = helper
  const [files, setFiles] = useState([])

  const { values } = useFormikContext()
  const { fieldValues } = getIn(values)
  const [fileUrls, setFileUrls] = useState([])
  const urls = []
  const imageChange = (e) => {
    const files = e.target.files
    for (let index = 0; index < files.length; index++) {
      if (files[index]['type'].split('/')[0] === 'image') {
        console.log(files[index])
        urls.push(URL.createObjectURL(files[index]))
      }
    }
    setValue(files)
    // setFiles(files)
    // console.log(urls)
    setFileUrls(urls)
  }

  useEffect(() => {
    return () => {}
  }, [fieldValues, files, fileUrls, urls])

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
      <div className="preview">
        {fileUrls.length > 0 &&
          fileUrls.map((url) => (
            <div className="preview__image">
              <img src={url} />
            </div>
          ))}
      </div>
    </>
  )
}

export default FileInput
