import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassword } from '../store/actions/authActions'
import { useNavigate } from 'react-router-dom'
import { clearError, clearResponse } from '../store/actions/authActions'
import ForgotPassword from './ForgotPassword'
import ResetPassword from './ResetPassword'

const PasswordReset = () => {
  const { tempUser, errorMsg, responseMsg } = useSelector((state) => state.auth)

  useEffect(() => {
    return () => {}
  }, [tempUser])

  return (
    <div style={{ width: '100%' }}>
      {Object.keys(tempUser).length > 0 ? (
        <ResetPassword />
      ) : (
        <ForgotPassword />
      )}
    </div>
  )
}

export default PasswordReset
