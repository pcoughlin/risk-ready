export const success = (message) => {
  return (dispatch) => {
    dispatch({ type: 'SUCCESS_NOTIFICATION', payload: message })
  }
}

export const error = (message) => {
  return (dispatch) => {
    dispatch({
      type: 'ERROR_NOTIFICATION',
      payload: message,
    })
  }
}

export const clear = () => {
  return (dispatch) => {
    dispatch({
      type: 'CLEAR_NOTIFICATION',
    })
  }
}
