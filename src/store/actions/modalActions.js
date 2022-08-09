import { preventScroll, enableScroll } from '../../utils/scrollControl'

export const closeModal = () => {
  return (dispatch) => {
    enableScroll()
    // dispatch(clearError())
    dispatch({
      type: 'CLOSE_MODAL',
    })
  }
}

export const editProfile = (title) => {
  console.log(title)
  return (dispatch) => {
    preventScroll()
    dispatch({
      type: 'EDIT_PROFILE',
      payload: title,
    })
  }
}

export const showVaultModal = (type) => {
  return (dispatch) => {
    preventScroll()
    dispatch({
      type: 'VAULT_MODAL',
      payload: type,
    })
  }
}
