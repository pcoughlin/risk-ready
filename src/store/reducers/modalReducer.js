const initialState = {
  overlay: false,
  profileModal: false,
  vaultModal: false,
  modalTitle: '',
  vaultType: '',
}

export const modals = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'CLOSE_MODAL':
      return {
        ...state,
        overlay: false,
        profileModal: false,
        vaultModal: false,
      }

    case 'EDIT_PROFILE':
      return {
        ...state,
        overlay: true,
        profileModal: true,
        modalTitle: payload,
      }

    case 'VAULT_MODAL':
      return { ...state, overlay: true, vaultModal: true, vaultType: payload }

    default:
      return state
  }
}
