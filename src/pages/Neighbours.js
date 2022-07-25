import React from 'react'
import ProfileCard from '../components/ProfileCard'
import LocalHeadline from '../components/LocalHeadline'

const Neighbours = () => {
  return (
    <div className="neighbours">
      <div className="neighbours__grid">
        <ProfileCard type="neighbours" />
      </div>
      <LocalHeadline />
    </div>
  )
}

export default Neighbours
