import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'
import { vaultUpload } from '../store/actions/uploadActions'
import TextInput from './TextInput'
import TextAreaInput from './TextAreaInput'
import FileInput from './FilingComponents/FileInput'
import FormButton from './FormButton'

const VaultUploadModal = () => {
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('risk-ready-token'))

  const { vaultType } = useSelector((state) => state.modals)

  const upload = (values) => {
    console.log(values)
    let formData = new FormData()
    formData.append('name', values.name)
    formData.append('description', values.description)
    formData.append('type', values.type)
    formData.append('images', values.files)
    dispatch(vaultUpload(formData, user.token))
  }

  return (
    <div className="vault-modal">
      <h2>{vaultType} UPLOAD</h2>
      <Formik
        initialValues={{
          name: '',
          description: '',
          type: vaultType.split(' ').join('_'),
          files: undefined,
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Name is required'),
          description: Yup.string().required('Enter a description'),
          type: Yup.string().required(),
          files: Yup.mixed().nullable(),
        })}
        onSubmit={upload}
      >
        <Form className="form">
          <TextInput label="Name" type="text" name="name" id="name" />
          <TextAreaInput
            label="Description"
            name="description"
            id="description"
          />
          <FileInput
            label="Add Images"
            className="filing-form__control--file"
            name="files"
            type="file"
            multiple
            value={undefined}
          />
          <FormButton text="Upload" type="submit" />
          {/* {values} */}
        </Form>
      </Formik>
    </div>
  )
}

export default VaultUploadModal
