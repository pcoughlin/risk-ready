import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

const GroupActions = () => {
  return (
    <div className="actions">
      <NavLink
        to="/communities/groups/discover"
        className={({ isActive }) =>
          isActive ? 'action action--active' : 'action'
        }
      >
        <FontAwesomeIcon icon="fa-solid fa-compass" />
        <span className="action__text">Explore</span>
      </NavLink>
      <NavLink
        to="/communities/groups/my"
        className={({ isActive }) =>
          isActive ? 'action action--active' : 'action'
        }
      >
        <FontAwesomeIcon icon="fa-solid fa-users" />
        <span className="action__text">My Groups</span>
      </NavLink>
      <div className="action">
        <FontAwesomeIcon icon="fa-solid fa-plus" />
        <span className="action__text">Create</span>
      </div>
    </div>
  )
}

export default GroupActions
