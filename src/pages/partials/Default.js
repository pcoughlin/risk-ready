import React from 'react'
import { Outlet } from 'react-router-dom'

const Default = () => {
  return (
    <div className="wrapper">
      <div className="top-bar">
        <div className="logo">
          <img src="/logo-brand.svg" alt="" />
        </div>
        <div className="actions">
          <div className="actions__search">
            <form className="search-form">
              <div className="search-form__group">
                <input
                  type="text"
                  className="search-form__control"
                  placeholder="Search...."
                />
                <span className="search-form__icon">
                  <img src="/search.svg" alt="" />
                </span>
              </div>
            </form>
          </div>
          <div className="actions__notifications">
            <span className="notification">
              <img
                src="/chat-bubbles.svg"
                alt="chat notification"
                className="notification__img"
              />
              <span className="notification__attr--alert"></span>
            </span>
            <span className="notification">
              <img
                src="/alarm.svg"
                alt="notification"
                className="notification__img"
              />
            </span>
            <span className="notification">
              <img src="/language.svg" alt="" className="notification__img" />
              <span className="notification__attr"></span>
            </span>
          </div>
          <div className="actions__profile">
            <span className="name">John Doe</span>
            {/* <div className="avatar"> */}
            <img src="/user-placeholder.png" alt="" className="avatar" />
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="body">
        <nav className="nav">
          <div className="nav__main">
            <div className="main-link">C</div>
            <div className="main-link">P</div>
            <div className="main-link">C</div>
            <div className="main-link">P</div>
            <div className="main-link">V</div>
            <div className="main-link">C</div>
          </div>
          <div className="nav__sub">
            <div className="sub-link">Connections</div>
            <div className="sub-link">Neighbours</div>
            <div className="sub-link">Groups</div>
            <div className="sub-link">Businesses</div>
            <div className="widget">
              <div className="widget__weather">
                <span className="heading">Current Location</span>
                <span className="city">Johannesburg</span>
                <img src="/cloud.svg" alt="cloud" />
                <div className="summary">
                  <span className="feel">Clear</span>
                  <div className="span temp">42</div>
                </div>
              </div>
              <div className="widget__community">
                <span className="heading">Your Community circle</span>
                <span className="percentage">30%</span>
                <span className="text">members</span>
                <span className="total">2300</span>
                <span className="text">total</span>
              </div>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
    </div>
  )
}

export default Default
