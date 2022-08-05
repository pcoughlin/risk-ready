import axios from 'axios'
import { toast } from 'react-toastify'
const baseUrl = 'https://risk-ready.herokuapp.com/api'

export const signIn = (formData) => {
  return (dispatch) => {
    axios
      .get(`${baseUrl}/users/sign-in`, formData)
      .then((response) => {
        console.log(response)
        dispatch({
          type: 'SIGN_IN',
          payload: response.data,
        })
        toast.success(response.data.message)
      })
      .catch((error) => {
        if (error.response) {
          const {
            data: { errors },
          } = error.response

          dispatch({
            type: 'SIGN_IN_ERROR',
            payload: errors[0].message,
          })
          toast.error(errors[0].message)
        } else if (error.request) {
          dispatch({
            type: 'SIGN_IN_ERROR',
            payload: error.request,
          })
          toast.error(error.request)
        } else {
          dispatch({
            type: 'SIGN_IN_ERROR',
            payload: error.message,
          })
          toast.error(error.message)
        }
      })
  }
}
