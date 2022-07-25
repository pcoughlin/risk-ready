import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const GroupActions = () => {
  return (
    <div className="actions">
      <div className="action">
        <FontAwesomeIcon icon="fa-solid fa-compass" />
        <span className="action__text">Explore</span>
      </div>
      <div className="action">
        <FontAwesomeIcon icon="fa-solid fa-users" />
        <span className="action__text">My Groups</span>
      </div>
      <div className="action">
        <FontAwesomeIcon icon="fa-solid fa-plus" />
        <span className="action__text">Create</span>
      </div>
    </div>
  )
}

export default GroupActions
