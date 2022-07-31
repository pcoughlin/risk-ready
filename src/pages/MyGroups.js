import React from 'react'
import GroupActions from '../components/GroupActions'
import GroupCard from '../components/GroupCard'
import LocalHeadline from '../components/LocalHeadline'

const MyGroups = () => {
  return (
    <div className="groups-layout">
      <div className="groups-column">
        <GroupActions />
        <div className="groups-cards">
          <GroupCard action="view" />
          <GroupCard action="view" />
        </div>
      </div>
      <LocalHeadline />
    </div>
  )
}

export default MyGroups
