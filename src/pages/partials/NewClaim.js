import React, { useEffect, forwardRef } from 'react'
import { Formik, Form, useFormikContext, getIn } from 'formik'
import * as Yup from 'yup'

import Select from '../../components/FilingComponents/Select'
import FilingInput from '../../components/FilingComponents/FilingInput'
import FileInput from '../../components/FilingComponents/FileInput'
import FilePreview from '../../components/FilePreview'

const NewListing = () => {
  const validations = Yup.object({
    propertyType: Yup.string().required('Specify property type'),
    subCategory: Yup.string().required('Select a subcategory'),
    claimType: Yup.string().required('Specify your claim type'),
    claimName: Yup.string().required('Enter a name for your claim'),
    claimNote: Yup.string().required('Add a note for your claim'),
    claimMedia: Yup.mixed().required('Add supporting documents for your claim'),
  })

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <div className="claims-new">
      <Formik
        initialValues={{
          propertyType: '',
          subCategory: '',
          claimType: '',
          claimName: '',
          claimNote: '',
          claimMedia: '',
        }}
        validationSchema={validations}
      >
        <Form className="filing-form">
          <div className="filing-form__grid">
            <Select
              label="Select Property Type"
              className="filing-form__select"
              name="propertyType"
            >
              <option value="">Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="shortlet">Shortlet</option>
              <option value="condo">Condo</option>
            </Select>
            <Select
              label="Select Subcategory"
              className="filing-form__select"
              name="subcategory"
            >
              <option value="">Subcategory</option>
              <option value="living room">Living Room</option>
              <option value="mini flat">Mini Flat</option>
              <option value="cubicle">Cubicle</option>
            </Select>
            <Select
              label="Select Claim Type"
              className="filing-form__select"
              name="claimType"
            >
              <option value="">Claim Type</option>
              <option value="repair">Repair</option>
              <option value="installation">Installation</option>
            </Select>
          </div>
          <FilingInput
            label="Claim Name"
            className="filing-form__control"
            type="text"
            name="claimName"
            placeholder="Living room claim"
          />
          <FilingInput
            label="Claim Note"
            className="filing-form__control"
            type="text"
            name="claimNote"
            placeholder="Make a note here"
          />
          <FileInput
            label="Add after-distater media"
            className="filing-form__control--file"
            name="claimMedia"
            type="file"
            multiple
          />
        </Form>
      </Formik>
    </div>
  )
}

export default NewListing
