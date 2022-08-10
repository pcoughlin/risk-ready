import { useToken } from '../../utils/useToken'

const initialState = {
  isLoading: false,
  user: {},
  errorMsg: null,
  responseMsg: null,
  isLoggedIn: false,
  tempUser: {},
}

export const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOADING':
      return { ...state, isLoading: true }

    case 'CLEAR_ERROR':
      return { ...state, errorMsg: null }

    case 'CLEAR_RESPONSE':
      return { ...state, responseMsg: null }

    case 'SIGN_IN':
      localStorage.setItem('risk-ready-token', JSON.stringify(payload.data))
      return {
        ...state,
        isLoading: false,
        user: payload.data,
        error: null,
        isLoggedIn: true,
        responseMsg: payload.message,
      }

    case 'SIGN_UP':
      localStorage.setItem('risk-ready-token', JSON.stringify(payload.data))
      return {
        ...state,
        isLoading: false,
        responseMsg: payload,
        user: payload.data,
        error: null,
        isLoggedIn: true,
      }

    case 'SIGN_IN_ERROR':
      return {
        ...state,
        isLoading: false,
        user: null,
        errorMsg: payload,
        isLoggedIn: true,
      }

    case 'SIGN_UP_ERROR':
      return { ...state, isLoading: false, errorMsg: payload }

    case 'PROFILE_UPDATE':
      return { ...state, isLoading: false, responseMsg: payload }

    case 'FORGOT_PASSWORD':
      localStorage.setItem('risk-ready-temp', JSON.stringify(payload.data))
      return {
        ...state,
        isLoading: false,
        errorMsg: null,
        tempUser: payload.data,
        responseMsg: payload.message,
      }

    case 'FORGOT_PASSWORD_ERROR':
      return {
        ...state,
        isLoading: false,
        errorMsg: payload,
        responseMsg: null,
      }

    case 'RESET_PASSWORD':
      localStorage.setItem('risk-ready-token', JSON.stringify(payload.data))
      return {
        ...state,
        isLoading: false,
        user: payload.data,
        error: null,
        isLoggedIn: true,
      }
    case 'RESET_ERROR':
      return { ...state, isLoading: false, user: null, errorMsg: payload }

    case 'UPDATE_PROFILE':
      return {
        ...state,
        isLoading: false,
        errorMsg: null,
        user: payload,
        responseMsg: payload.message,
      }

    case 'UPDATE_PROFILE_ERROR':
      return { ...state, isLoading: false, user: null, errorMsg: payload }

    default:
      return state
  }
}
