import React, { useEffect, forwardRef } from 'react'
import { Formik, Form, useFormikContext, getIn } from 'formik'
import * as Yup from 'yup'

import Select from '../../components/FilingComponents/Select'
import FilingInput from '../../components/FilingComponents/FilingInput'
import FileInput from '../../components/FilingComponents/FileInput'
import FilingButton from '../../components/FilingComponents/FilingButton'

const NewProperty = () => {
  const validationRule = Yup.object({
    title: Yup.string().required('Enter a title '),
    description: Yup.string().required('Enter a description'),
    propertyType: Yup.string().required('Select a proprty type'),
    subCategory: Yup.string().required('Select a subcategory'),
    propertyMedia: Yup.mixed().required('Add some media'),
    itemName: Yup.string().required('Enter a name for the item'),
    date: Yup.string().required('Enter a date of purchase'),
    model: Yup.string().required('Specify the model'),
    price: Yup.string().required('Specify a price'),
    serialNo: Yup.string().required('Enter the serial Number'),
    manufacturer: Yup.string().required('Specify the manufacturer'),
  })

  return (
    <div className="property__new">
      <h2 className="property__heading">Add New Property</h2>
      <Formik
        initialValues={{
          title: '',
          description: '',
          propertyType: '',
          subCategory: '',
          propertyMedia: '',
          itemName: '',
          date: '',
          model: '',
          price: '',
          serialNo: '',
          manufacturer: '',
        }}
        validationSchema={validationRule}
      >
        <Form>
          <div className="property__form">
            <div className="property__form--super-group">
              <FilingInput
                label="Title"
                className="filing-form__control"
                type="text"
                name="title"
                placeholder="Living Room"
              />
              <FilingInput
                label="Description"
                className="filing-form__control"
                type="text"
                name="description"
                placeholder="Description"
              />
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
                  name="subCategory"
                >
                  <option value="">Subcategory</option>
                  <option value="living room">Living Room</option>
                  <option value="mini flat">Mini Flat</option>
                  <option value="cubicle">Cubicle</option>
                </Select>
              </div>
              <FileInput
                label="Add photo / video"
                className="filing-form__control--file"
                name="propertyMedia"
                type="file"
                multiple
              />
            </div>
            <div className="property__form--super-group">
              <FilingInput
                label="Item Name"
                className="filing-form__control"
                type="text"
                name="itemName"
                placeholder="Description"
              />
              <FilingInput
                label="Date of Purchase"
                className="filing-form__control"
                type="text"
                name="date"
                placeholder="15 Jan 20"
              />
              <FilingInput
                label="Model"
                className="filing-form__control"
                type="text"
                name="model"
                placeholder="DSLR"
              />
              <FilingInput
                label="Purchase Price"
                className="filing-form__control"
                type="text"
                name="price"
                placeholder="17,000"
              />
              <FilingInput
                label="Serial Number"
                className="filing-form__control"
                type="text"
                name="serialNo"
                placeholder="CN98524366"
              />
              <FilingInput
                label="Manufacturer"
                className="filing-form__control"
                type="text"
                name="manufacturer"
                placeholder="Samsung"
              />
            </div>
          </div>
          <FilingButton text="Submit" />
        </Form>
      </Formik>
    </div>
  )
}

export default NewProperty
