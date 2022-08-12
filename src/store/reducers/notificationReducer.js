const initialState = {
  message: null,
  loading: false,
  type: '',
}

export const notifications = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'INITIATE':
      return { ...state, loading: true }
    case 'SUCCESS_NOTIFICATION':
      return {
        ...state,
        message: payload.message,
        loading: false,
        type: payload.type,
      }
    case 'ERROR_NOTIFICATION':
      return {
        ...state,
        message: payload.message,
        loading: false,
        type: payload.type,
      }

    case 'CLEAR_NOTIFICATION':
      return { ...state, message: null, loading: false }

    default:
      return state
  }
}
