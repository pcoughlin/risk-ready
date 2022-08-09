import React, { useEffect, useState, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useLocation, useMatch } from 'react-router-dom'
import SubNav from '../../components/SubNav'
import Widget from '../../components/Widget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { editProfile } from '../../store/actions/modalActions'
import { useCloseOption } from '../../utils/closeOption'

const Default = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { pathname } = location
  const newsMatch = useMatch('/local-news')
  const claimsMatch = useMatch('/claims')
  const propertyMatch = useMatch('/properties')
  const projectMatch = useMatch('/projects')
  const vaultMatch = useMatch('/vault')
  const projectDocumentsMatch = useMatch('/vault/project-documents')
  const claimsFilesmatch = useMatch('/vault/claims-files')

  const { user } = useSelector((state) => state.auth)

  const [authUser, setAuthUser] = useState()
  const [userOptions, setUserOptions] = useState(false)
  const userOptionsRef = useRef(null)
  useCloseOption(userOptionsRef, setUserOptions)

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      const loggedInUser = JSON.parse(localStorage.getItem('risk-ready-token'))
      setAuthUser(loggedInUser)
    } else {
      setAuthUser(user)
    }
    return () => {}
  }, [])

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
        <div className="user">
          <div className="user__search">
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
          <div className="user__notifications">
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
            <div className="user__profile">
              <span className="name">{`${authUser?.first_name} ${authUser?.last_name}`}</span>
              {/* <div className="avatar"> */}
              <img
                src="/assets/images/user-placeholder.png"
                alt=""
                className="user__profile--avatar"
                onClick={() => setUserOptions(!userOptions)}
                ref={userOptionsRef}
              />
              {/* </div> */}
              <div
                className={`user__options ${
                  userOptions ? 'user__options--visible' : ''
                }`}
              >
                <div className="user__option user__option--flex user__option--border">
                  <div className="">
                    <p className="user__text--bold">{`${authUser?.first_name} ${authUser?.last_name}`}</p>
                    <p className="user__text--faded">{authUser?.email}</p>
                  </div>
                  <div
                    // to="/profile/edit"
                    className="user__btn"
                    onClick={() => dispatch(editProfile('Edit Profile'))}
                  >
                    Edit
                  </div>
                </div>
                <div className="user__option--group user__option--border">
                  <h4 className="user__option--heading">Account</h4>
                  <div className="user__option--action">
                    <FontAwesomeIcon
                      icon="fa fa-user-plus"
                      className="user__option--icon"
                    />

                    <span className="user__option--text">Invite</span>
                  </div>
                  <div className="user__option--action">
                    <FontAwesomeIcon
                      icon="fa fa-circle-question"
                      className="user__option--icon"
                    />
                    <span className="user__option--text">Help & Support</span>
                  </div>
                </div>
                <div className="user__option--action">
                  <FontAwesomeIcon
                    icon="fa fa-arrow-right-to-bracket"
                    className="user__option--icon"
                  />
                  <span className="user__option--text">Log Out</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body">
        <nav className="nav">
          <div className="nav__main">
            <NavLink
              to="/"
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
