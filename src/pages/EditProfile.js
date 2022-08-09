import React, { useEffect } from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import ProfileInput from '../components/ProfileInput'
import { updateProfile } from '../store/actions/authActions'
import { useDispatch } from 'react-redux'
import ProfileImage from '../components/ProfileImage'

const EditProfile = () => {
  const dispatch = useDispatch()

  const user = JSON.parse(localStorage.getItem('risk-ready-token'))

  const validPhone = /^[+]?[\s./0-9]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-s\.0-9]{7,14}$/g
  var validZipCode = /(^\d{5}$)|(^\d{5}-\d{4}$)/

  const handleForm = (values) => {
    let userData = {}
    for (const [key, value] of Object.entries(values)) {
      userData[key] = value
    }
    console.log(values)
    // console.log(userData)
    dispatch(updateProfile(userData))
  }

  // const [field, meta] = useField()

  const profileData = {
    filename: undefined,
    last_name: user.last_name || '',
    first_name: user.first_name || '',
    email: user.email || '',
    phone: user.phone || '',
    zipcode: user.zipcode || '',
    address: user.address || '',
    city: user.city || '',
    state: user.state || '',
    country: user.country || '',
    password: '',
  }

  const profileValidation = Yup.object({
    filename: Yup.mixed().nullable(),
    last_name: Yup.string().required('You need  last name to proceed'),
    first_name: Yup.string().required('You need a name to proceed'),
    email: Yup.string()
      .email('Enter a valid email Address')
      .required('You need a mail address'),
    phone: Yup.string()
      .required('Phone Number is required')
      .matches(validPhone, 'Enter a valid phone number'),
    zipcode: Yup.string()
      .required('Please enter a zip code')
      .matches(validZipCode, 'Enter a valid Zip Code'),
    address: Yup.string(),
    city: Yup.string(),
    state: Yup.string(),
    password: Yup.string(),
    country: Yup.string(),
  })

  useEffect(() => {
    return () => {}
  }, [dispatch])

  return (
    <div className="edit-profile">
      <h2 className="edit-profile__heading">Profile Edit</h2>
      <Formik
        initialValues={profileData}
        validationSchema={profileValidation}
        onSubmit={handleForm}
      >
        <Form className="profile-form">
          <ProfileImage
            label="Change Image"
            type="file"
            accept="image/*"
            name="filename"
            id="filename"
          />
          <div className="profile-form__group--super">
            <ProfileInput
              label="First Name"
              type="text"
              name="first_name"
              id="first_name"
            />
            <ProfileInput
              label="Last Name"
              type="text"
              name="last_name"
              id="last_name"
            />
          </div>
          <div className="profile-form__error">
            <ErrorMessage name="first_name" component="span" />
            <ErrorMessage name="last_name" component="span" />
          </div>
          <div className="profile-form__group--super">
            <ProfileInput label="Email" type="email" name="email" id="email" />
            <ProfileInput label="Phone" type="text" name="phone" id="phone" />
          </div>
          <div className="profile-form__error">
            <ErrorMessage name="email" component="span" />
            <ErrorMessage name="phone" component="span" />
          </div>
          <div className="profile-form__group--super">
            <ProfileInput
              label="Address"
              type="text"
              name="address"
              id="address"
            />
            <ProfileInput
              label="Zip Code"
              type="text"
              name="zipcode"
              id="zipcode"
            />
          </div>
          <div className="profile-form__error">
            <ErrorMessage name="address" component="span" />
            <ErrorMessage name="zipcode" component="span" />
          </div>
          <div className="profile-form__group--super">
            <ProfileInput label="City" type="text" name="city" id="city" />
            <ProfileInput label="State" type="text" name="state" id="state" />
          </div>
          <div className="profile-form__error">
            <ErrorMessage name="city" component="span" />
            <ErrorMessage name="state" component="span" />
          </div>
          <div className="profile-form__group--super">
            <ProfileInput
              label="Password"
              type="password"
              name="password"
              id="password"
            />
            <ProfileInput
              label="Country"
              type="text"
              name="country"
              id="country"
            />
          </div>
          <div className="profile-form__error">
            <ErrorMessage name="password" component="span" />
            <ErrorMessage name="country" component="span" />
          </div>
          <div className="profile-form__btn">
            <button type="submit" className="profile-form__">
              Update
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default EditProfile
