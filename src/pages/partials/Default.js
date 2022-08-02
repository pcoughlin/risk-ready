import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useLocation, useMatch } from 'react-router-dom'
import SubNav from '../../components/SubNav'
import Widget from '../../components/Widget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Default = () => {
  const location = useLocation()
  const { pathname } = location
  const newsMatch = useMatch('/local-news')
  const claimsMatch = useMatch('/claims')
  const propertyMatch = useMatch('/properties')
  const projectMatch = useMatch('/projects')
  const vaultMatch = useMatch('/vault')
  const projectDocumentsMatch = useMatch('/vault/project-documents')
  const claimsFilesmatch = useMatch('/vault/claims-files')

  return (
    <div className="wrapper">
      <div className="top-bar">
        <div className="logo">
          <img
            src="/assets/images/logo-brand.svg"
            alt=""
            className="logo__desktop"
          />
          <img
            src="/assets/images/logo-brand.webp"
            alt=""
            className="logo__mobile"
          />
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
                  <img src="/assets/images/search.svg" alt="" />
                </span>
              </div>
            </form>
          </div>
          <div className="actions__notifications">
            <span className="notification">
              <img
                src="/assets/images/chat-bubbles.svg"
                alt="chat notification"
                className="notification__img"
              />
              <span className="notification__attr--alert"></span>
            </span>
            <span className="notification">
              <img
                src="/assets/images/alarm.svg"
                alt="notification"
                className="notification__img"
              />
            </span>
            <span className="notification">
              <img
                src="/assets/images/language.svg"
                alt=""
                className="notification__img"
              />
              <span className="notification__attr"></span>
            </span>
            <div className="actions__profile">
              <span className="name">John Doe</span>
              {/* <div className="avatar"> */}
              <img
                src="/assets/images/user-placeholder.png"
                alt=""
                className="avatar"
              />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="body">
        <nav className="nav">
          <div className="nav__main">
            <NavLink
              to="/communities"
              className={({ isActive }) =>
                isActive ? 'main-link main-link__active' : 'main-link'
              }
            >
              <FontAwesomeIcon icon="fa-users" className="main-link__icon" />
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? 'main-link main-link__active' : 'main-link'
              }
            >
              <FontAwesomeIcon
                icon="fa-solid fa-file-lines"
                className="main-link__icon"
              />
            </NavLink>
            <NavLink
              to="/claims"
              className={({ isActive }) =>
                isActive ? 'main-link main-link__active' : 'main-link'
              }
            >
              <FontAwesomeIcon
                icon="fa-solid fa-umbrella"
                className="main-link__icon"
              />
            </NavLink>
            <NavLink
              to="/properties"
              className={({ isActive }) =>
                isActive ? 'main-link main-link__active' : 'main-link'
              }
            >
              <FontAwesomeIcon
                icon="fa-solid fa-house-chimney"
                className="main-link__icon"
              />
            </NavLink>
            <NavLink
              to="/vault"
              className={
                pathname.indexOf('/vault') > -1
                  ? 'main-link main-link__active'
                  : 'main-link'
              }
            >
              <FontAwesomeIcon
                icon="fa-solid fa-clipboard-list"
                className="main-link__icon"
              />
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'main-link main-link__active' : 'main-link'
              }
            >
              <FontAwesomeIcon
                icon="fa-solid fa-location-dot"
                className="main-link__icon"
              />
            </NavLink>
          </div>
          <div className="nav__sub-widget">
            {!newsMatch && !claimsMatch && !propertyMatch && !projectMatch && (
              <SubNav parentPath="communities" />
            )}
            {!claimsMatch &&
              !propertyMatch &&
              !projectMatch &&
              !vaultMatch &&
              !claimsFilesmatch &&
              !projectDocumentsMatch && <Widget />}
          </div>
        </nav>
        <Outlet />
      </div>
    </div>
  )
}

export default Default
