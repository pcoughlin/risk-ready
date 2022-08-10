import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Auth from './Auth'
import { TwoFactor } from '../TwoFactor'
import { SignUp } from '../SignUp'
import PasswordReset from '../PasswordReset'
import Login from '../Login'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />}>
        <Route path="" index={true} element={<Login />} />
        <Route path=":two-factor" element={<TwoFactor />} />
        <Route path=":signup" exact element={<SignUp />} />
        <Route path=":forgot-password" exact element={<PasswordReset />} />
        {/* <Route path="password-reset" exact element={<ResetPassword />} /> */}
      </Route>
    </Routes>
  )
}

export default AuthRoutes
