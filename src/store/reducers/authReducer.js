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
    case 'LOGOUT':
      localStorage.setIItem('risk-ready-token', JSON.stringify(null))
      break
    // return { ...state }
    case 'FETCH_USER':
      return {
        ...state,
        user: payload,
      }

    case 'CLEAR_RESPONSE':
      return {
        ...state,
        responseMsg: null,
      }

    case 'SIGN_IN':
      localStorage.setItem(
        'risk-ready-token',
        JSON.stringify(payload.data.token),
      )

      return {
        ...state,
      }

    // case 'SIGN_IN_ERROR':
    //   return {
    //     ...state,

    //     user: null,
    //     errorMsg: payload,
    //     isLoggedIn: true,
    //   }

    case 'SIGN_UP':
      setTimeout(() => {
        window.location.href = '/auth/confirm'
      }, 2000)
      return {
        ...state,
      }

    case 'SIGN_UP_ERROR':
      return {
        ...state,
        errorMsg: payload,
      }

    case 'CONFIRM_EMAIL':
      localStorage.setItem(
        'risk-ready-token',
        JSON.stringify(payload.data.token),
      )
      return {
        ...state,
      }

    case 'PROFILE_UPDATE':
      return {
        ...state,
        responseMsg: payload,
      }

    case 'FORGOT_PASSWORD':
      localStorage.setItem('risk-ready-temp', JSON.stringify(payload.data))
      return {
        ...state,

        errorMsg: null,
        tempUser: payload.data,
        responseMsg: payload.message,
      }

    case 'FORGOT_PASSWORD_ERROR':
      return {
        ...state,

        errorMsg: payload,
        responseMsg: null,
      }

    case 'RESET_PASSWORD':
      localStorage.setItem('risk-ready-token', JSON.stringify(payload.data))
      return {
        ...state,

        user: payload.data,
        error: null,
        isLoggedIn: true,
      }
    case 'RESET_ERROR':
      return {
        ...state,
        user: null,
        errorMsg: payload,
      }

    case 'UPDATE_PROFILE':
      return {
        ...state,

        errorMsg: null,
        user: payload,
        responseMsg: payload.message,
      }

    case 'UPDATE_PROFILE_ERROR':
      return {
        ...state,
        user: null,
        errorMsg: payload,
      }

    default:
      return state
  }
}
