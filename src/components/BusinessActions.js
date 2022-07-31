import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

const BusinessAction = () => {
  return (
    <div className="actions">
      <NavLink
        to="/business/my"
        className={({ isActive }) =>
          isActive ? 'action action--active' : 'action'
        }
      >
        <FontAwesomeIcon icon="fa-solid fa-briefcase" />
        <span className="action__text">My Business</span>
      </NavLink>
      <NavLink
        to="/business/"
        className={({ isActive }) =>
          isActive ? 'action action--active' : 'action'
        }
      >
        <FontAwesomeIcon icon="fa-solid fa-plus" />
        <span className="action__text">ADD</span>
      </NavLink>
    </div>
  )
}

export default BusinessAction
