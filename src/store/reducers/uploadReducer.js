const initialState = {
  vaultError: null,
  vaultResponse: null,
  documentFiles: [],
}

export const upload = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'UPLOAD_SUCCESS':
      return { ...state, uploadMsg: payload, uploadErrorMsg: null }

    case 'UPLOAD_ERROR':
      return { ...state, uploadErrorMsg: payload, uploadMsg: null }

    case 'LOAD_VAULT_DATA':
      return { ...state, documentFiles: payload, vaultError: null }

    case 'LOAD_VAULT_ERROR':
      return { ...state, documentFiles: null, vaultError: payload }
    default:
      return state
  }
}
