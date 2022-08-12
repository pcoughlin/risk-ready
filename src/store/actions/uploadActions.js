import axios from 'axios'
import { loadRequest } from './authActions'
import { toast } from 'react-toastify'

const baseUrl = 'https://risk-ready.herokuapp.com/api'

export const vaultUpload = (data, token) => {
  return (dispatch) => {
    dispatch({ type: 'INITIATE' })
    axios
      .post(`${baseUrl}/vaults`, data, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((response) => {
        console.log(response)
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

export const getVaults = (token, page = 1) => {
  return (dispatch) => {
    dispatch({ type: 'INITIATE' })
    axios
      .get(`${baseUrl}/vaults?page_no=${page}&per_page=10`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((response) => {
        console.log(response)
        dispatch({
          type: 'LOAD_VAULT_DATA',
          payload: response.data.data.docs,
        })
        // dispatch({
        //   type: 'SUCCESS_NOTIFICATION',
        //   payload: { message: response.data.message, type: 'success' },
        // })
        // setTimeout(() => {
        //   dispatch({
        //     type: 'CLEAR_NOTIFICATION',
        //   })
        // }, 100)
      })
      .catch((error) => {
        if (error.response) {
          console.log(error)
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

export const downloadFile = (id, token) => {
  return (dispatch) => {
    dispatch({ type: 'INITIATE' })
    axios
      .get(`${baseUrl}/${id}/download`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((response) => {
        console.log(response)
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
