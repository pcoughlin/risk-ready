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
    dispatch({ type: 'INITIATE' })
    axios
      .post(`${baseUrl}/sign-in`, formData)
      .then((response) => {
        console.log(response)
        dispatch({
          type: 'SIGN_IN',
          payload: response.data,
        })

        dispatch({
          type: 'SUCCESS_NOTIFICATION',
          payload: { message: response.data.message, type: 'success' },
        })

        setTimeout(() => {
          dispatch({
            type: 'CLEAR_NOTIFICATION',
          })
        }, 100)
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data)
          const {
            data: { message },
          } = error.response

          dispatch({
            type: 'ERROR_NOTIFICATION',
            payload: { message, type: 'error' },
          })
        } else if (error.request) {
          dispatch({
            type: 'ERROR_NOTIFICATION',
            payload: { message: error.request, type: 'error' },
          })
        } else {
          dispatch({
            type: 'ERROR_NOTIFICATION',
            payload: { message: error.message, type: 'error' },
          })
        }
        setTimeout(() => {
          dispatch({
            type: 'CLEAR_NOTIFICATION',
          })
        }, 100)
      })
  }
}

export const getUserInfo = (token) => {
  return (dispatch) => {
    dispatch({ type: 'INITIATE' })
    axios
      .get(`${baseUrl}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        dispatch({ type: 'FETCH_USER', payload: response.data.data })
        setTimeout(() => {
          dispatch({
            type: 'CLEAR_NOTIFICATION',
          })
        }, 100)
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data)
          const {
            data: { message },
          } = error.response

          dispatch({
            type: 'ERROR_NOTIFICATION',
            payload: { message, type: 'error' },
          })
        } else if (error.request) {
          dispatch({
            type: 'ERROR_NOTIFICATION',
            payload: { message: error.request, type: 'error' },
          })
        } else {
          dispatch({
            type: 'ERROR_NOTIFICATION',
            payload: { message: error.message, type: 'error' },
          })
        }
        setTimeout(() => {
          dispatch({
            type: 'CLEAR_NOTIFICATION',
          })
        }, 100)
      })
  }
}

export const signUp = (formData) => {
  return (dispatch) => {
    dispatch({ type: 'INITIATE' })
    axios
      .post(`${baseUrl}/sign-up`, formData)
      .then((response) => {
        console.log(response)
        dispatch({
          type: 'SIGN_UP',
          payload: response.data,
        })
        dispatch({
          type: 'SUCCESS_NOTIFICATION',
          payload: { message: response.data.message, type: 'success' },
        })
        setTimeout(() => {
          dispatch({
            type: 'CLEAR_NOTIFICATION',
          })
        }, 100)
      })
      .catch((error) => {
        if (error.response) {
          console.log(error)
          const {
            data: { message: errors },
          } = error.response
          console.log(errors.errors[0].message)
          dispatch({
            type: 'ERROR_NOTIFICATION',
            payload: { message: errors.errors[0].message, type: 'error' },
          })
        } else if (error.request) {
          dispatch({
            type: 'ERROR_NOTIFICATION',
            payload: { message: error.request, type: 'error' },
          })
        } else {
          dispatch({
            type: 'ERROR_NOTIFICATION',
            payload: { message: error.message, type: 'error' },
          })
        }
        setTimeout(() => {
          dispatch({
            type: 'CLEAR_NOTIFICATION',
          })
        }, 100)
      })
  }
}

export const confirmEmail = (formData) => {
  return (dispatch) => {
    dispatch({ type: 'INITIATE' })
    axios
      .post(`${baseUrl}/verify`, formData)
      .then((response) => {
        console.log(response)
        dispatch({ type: 'CONFIRM_EMAIL', payload: response.data.data })
        dispatch({
          type: 'SUCCESS_NOTIFICATION',
          payload: { message: response.data.message, type: 'error' },
        })
        setTimeout(() => {
          dispatch({
            type: 'CLEAR_NOTIFICATION',
          })
        }, 100)
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data)
          const {
            data: { message },
          } = error.response

          dispatch({
            type: 'ERROR_NOTIFICATION',
            payload: { message, type: 'error' },
          })
        } else if (error.request) {
          dispatch({
            type: 'ERROR_NOTIFICATION',
            payload: { message: error.request, type: 'error' },
          })
        } else {
          dispatch({
            type: 'ERROR_NOTIFICATION',
            payload: { message: error.message, type: 'error' },
          })
        }
        setTimeout(() => {
          dispatch({
            type: 'CLEAR_NOTIFICATION',
          })
        }, 100)
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
    dispatch({ type: 'INITIATE' })
    axios
      .put(`${baseUrl}/profile`, formData, config)
      .then((response) => {
        console.log(response)
        dispatch({
          type: 'UPDATE_PROFILE',
          payload: response.data,
        })
        dispatch({
          type: 'SUCCESS_NOTIFICATION',
          payload: { message: response.data.message, type: 'success' },
        })
        setTimeout(() => {
          dispatch({
            type: 'CLEAR_NOTIFICATION',
          })
        }, 100)
      })
      .catch((error) => {
        if (error.response) {
          const {
            data: { message },
          } = error.response
          console.log(message)
          dispatch({
            type: 'ERROR_NOTIFICATION',
            payload: { message, type: 'error' },
          })
        } else if (error.request) {
          dispatch({
            type: 'ERROR_NOTIFICATION',
            payload: { message: error.request, type: 'error' },
          })
        } else {
          dispatch({
            type: 'ERROR_NOTIFICATION',
            payload: { message: error.message, type: 'error' },
          })
        }
        setTimeout(() => {
          dispatch({
            type: 'CLEAR_NOTIFICATION',
          })
        }, 100)
      })
  }
}

export const forgotPassword = (email) => {
  return (dispatch) => {
    dispatch({ type: 'INITIATE' })
    axios
      .post(`${baseUrl}/forgot-password`, { email })
      .then((response) => {
        dispatch({
          type: 'FORGOT_PASSWORD',
          payload: response.data,
        })
        dispatch({
          type: 'SUCCESS_NOTIFICATION',
          payload: { message: response.data.message, type: 'success' },
        })
        setTimeout(() => {
          dispatch({
            type: 'CLEAR_NOTIFICATION',
          })
        }, 100)
      })
      .catch((error) => {
        if (error.response) {
          const {
            data: { message },
          } = error.response
          console.log(message)
          dispatch({
            type: 'ERROR_NOTIFICATION',
            payload: { message, type: 'error' },
          })
        } else if (error.request) {
          dispatch({
            type: 'ERROR_NOTIFICATION',
            payload: { message: error.request, type: 'error' },
          })
        } else {
          dispatch({
            type: 'FORGOT_PASSWORD_ERROR',
            payload: error.message,
          })
        }
        setTimeout(() => {
          dispatch({
            type: 'CLEAR_NOTIFICATION',
          })
        }, 100)
      })
  }
}

export const resetPassword = (data) => {
  return (dispatch) => {
    dispatch({ type: 'INITIATE' })
    axios
      .post(`${baseUrl}/reset-password`, data)
      .then((response) => {
        console.log(response)
        dispatch({
          type: 'RESET_PASSWORD',
          payload: response.data.data,
        })
        dispatch({
          type: 'SUCCESS_NOTIFICATION',
          payload: { message: response.data.data.message, type: 'success' },
        })
        setTimeout(() => {
          dispatch({
            type: 'CLEAR_NOTIFICATION',
          })
        }, 100)
      })
      .catch((error) => {
        console.log(error)
        if (error.response) {
          const {
            data: { message },
          } = error.response
          dispatch({
            type: 'ERROR_NOTIFICATION',
            payload: { message, type: 'error' },
          })
        } else if (error.request) {
          dispatch({
            type: 'RESET_ERROR',
            payload: error.request,
          })
        } else {
          dispatch({
            type: 'ERROR_NOTIFICATION',
            payload: { message: error.message, type: 'error' },
          })
        }
        setTimeout(() => {
          dispatch({
            type: 'CLEAR_NOTIFICATION',
          })
        }, 100)
      })
  }
}

export const logout = () => {
  console.log('ki')
  return (dispatch) => {
    dispatch({ type: 'LOGOUT' })
  }
}
