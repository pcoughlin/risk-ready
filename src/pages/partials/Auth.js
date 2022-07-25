import React from 'react'
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <div className="login-wrapper">
      <div className="leftpane">
        <div className="top">
          <img src="/logo-brand.svg" alt="" />
        </div>
        <Outlet />
      </div>
      <div className="rightpane">
        <div className="logo">
          {/* <img src="/logo.svg" alt="logo brand" /> */}
        </div>
      </div>
    </div>
  )
}

export default Auth
