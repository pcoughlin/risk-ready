import axios from 'axios'
import { toast } from 'react-toastify'

const baseUrl = 'https://risk-ready.herokuapp.com/api/users'

export const loadRequest = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOADING',
    })
  }
}

export const clearResponse = () => {
  return (dispatch) => {
    dispatch({
      type: 'CLEAR_RESPONSE',
    })
  }
}

export const clearError = () => {
  return (dispatch) => {
    dispatch({
      type: 'CLEAR_ERROR',
    })
  }
}

export const signIn = (formData) => {
  return (dispatch) => {
    dispatch(loadRequest())
    axios
      .post(`${baseUrl}/sign-in`, formData)
      .then((response) => {
        console.log(response)
        dispatch({
          type: 'SIGN_IN',
          payload: response.data,
        })
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data)
          const {
            data: { message },
          } = error.response

          dispatch({
            type: 'SIGN_IN_ERROR',
            payload: message,
          })
        } else if (error.request) {
          dispatch({
            type: 'SIGN_IN_ERROR',
            payload: error.request,
          })
        } else {
          dispatch({
            type: 'SIGN_IN_ERROR',
            payload: error.message,
          })
        }
      })
  }
}

export const signUp = (formData) => {
  return (dispatch) => {
    dispatch(loadRequest())
    axios
      .post(`${baseUrl}/sign-up`, formData)
      .then((response) => {
        console.log(response)
        dispatch({
          type: 'SIGN_UP',
          payload: response.data.data,
        })
      })
      .catch((error) => {
        if (error.response) {
          console.log(error)
          const {
            data: { message: errors },
          } = error.response
          console.log(errors.errors[0].message)
          dispatch({
            type: 'SIGN_UP_ERROR',
            payload: errors.errors[0].message,
          })
        } else if (error.request) {
          dispatch({
            type: 'SIGN_UP_ERROR',
            payload: error.request,
          })
        } else {
          dispatch({
            type: 'SIGN_UP_ERROR',
            payload: error.message,
          })
        }
      })
  }
}

export const updateProfile = (formData) => {
  console.log(formData)
  const { token } = JSON.parse(localStorage.getItem('risk-ready-token'))
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }
  return (dispatch) => {
    dispatch(loadRequest())
    axios.put(`${baseUrl}/profile`, formData, config).then((response) => {
      console.log(response)
    })
  }
}

export const forgotPassword = (email) => {
  return (dispatch) => {
    dispatch(loadRequest())
    axios
      .post(`${baseUrl}/forgot-password`, { email })
      .then((response) => {
        dispatch({
          type: 'FORGOT_PASSWORD',
          payload: response.data,
        })
      })
      .catch((error) => {
        if (error.response) {
          const {
            data: { message },
          } = error.response
          console.log(message)
          dispatch({
            type: 'FORGOT_PASSWORD_ERROR',
            payload: message,
          })
        } else if (error.request) {
          dispatch({
            type: 'FORGOT_PASSWORD_ERROR',
            payload: error.request,
          })
        } else {
          dispatch({
            type: 'FORGOT_PASSWORD_ERROR',
            payload: error.message,
          })
        }
      })
  }
}

export const resetPassword = (data) => {
  return (dispatch) => {
    axios
      .post(`${baseUrl}/reset-password`, data)
      .then((response) => {
        console.log(response)
        dispatch({
          type: 'RESET_PASSWORD',
          payload: response.data.data,
        })
      })
      .catch((error) => {
        console.log(error)
        if (error.response) {
          const {
            data: { message },
          } = error.response
          dispatch({
            type: 'RESET_ERROR',
            payload: message,
          })
        } else if (error.request) {
          dispatch({
            type: 'RESET_ERROR',
            payload: error.request,
          })
        } else {
          dispatch({
            type: 'RESET_ERROR',
            payload: error.message,
          })
        }
      })
  }
}
