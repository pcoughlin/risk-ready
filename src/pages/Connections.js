import React from 'react'
import LocalHeadline from '../components/LocalHeadline'
import ProfileCard from '../components/ProfileCard'

const Connections = () => {
  return (
    <div className="connections">
      <div className="connections__grid">
        <ProfileCard type="connection" />
      </div>
      <LocalHeadline />
    </div>
  )
}

export default Connections
