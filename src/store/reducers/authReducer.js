const initialState = {
  loading: false,
  user: { message: '', data: {} },
  error: null,
}

export const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOADING':
      return { ...state, loading: true }

    case 'SIGN_IN':
      return { ...state, loading: false, user: payload, error: null }

    case 'SIGN_IN_ERROR':
      return { ...state, loading: false, user: null, error: payload }

    default:
      return state
  }
}
