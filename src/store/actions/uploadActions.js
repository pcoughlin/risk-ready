import axios from 'axios'
import { loadRequest } from './authActions'
import { toast } from 'react-toastify'

const baseUrl = 'https://risk-ready.herokuapp.com/api'

export const vaultUpload = (data, token) => {
  return (dispatch) => {
    dispatch(loadRequest())
    axios
      .post(`${baseUrl}/vaults`, data, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((response) => {
        console.log(response)
        dispatch({
          type: 'UPLOAD_SUCCESS',
          payload: response.data.message,
        })
      })
      .catch((error) => {
        if (error.response) {
          console.log(error)
          const {
            data: { message },
          } = error.response

          dispatch({
            type: 'UPLOAD_ERROR',
            payload: message,
          })
        } else if (error.request) {
          dispatch({
            type: 'UPLOAD_ERROR',
            payload: error.request,
          })
        } else {
          dispatch({
            type: 'UPLOAD_ERROR',
            payload: error.message,
          })
        }
      })
  }
}

export const getVaults = (token, page = 1) => {
  return (dispatch) => {
    axios
      .get(`${baseUrl}/vaults?page_no=${page}&per_page=10`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((response) => {
        dispatch({
          type: 'LOAD_VAULT_DATA',
          payload: response.data.data.docs,
        })
      })
      .catch((error) => {
        if (error.response) {
          console.log(error)
          const {
            data: { message },
          } = error.response

          dispatch({
            type: 'LOAD_VAULT_ERROR',
            payload: message,
          })
        } else if (error.request) {
          dispatch({
            type: 'LOAD_VAULT_ERROR',
            payload: error.request,
          })
        } else {
          dispatch({
            type: 'LOAD_VAULT_ERROR',
            payload: error.message,
          })
        }
      })
  }
}
