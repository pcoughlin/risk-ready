import React from 'react'

const ProfileCard = ({ type }) => {
  console.log(type)
  return (
    <div className="profile">
      <div className="profile__avatar">
        <img src="/user-placeholder.png" alt="profile avatar" />
        {type === 'connection' && <span className="connection__status"></span>}
      </div>
      <div className="profile__name">Rob </div>
      <div className="profile__location">Rhode Island, New England</div>
      {type === 'neighbours' && (
        <div className="profile__mutuals">
          <img
            src="/mutuals.svg"
            alt="mutuals"
            className="profile__mutuals--img"
          />
          <span className="profile__mutuals--count">5 mutual profiles</span>
        </div>
      )}
      {type === 'connection' && (
        <p className="profile__duration">
          Connected &nbsp;&nbsp;&#8226;&nbsp;&nbsp; 2days ago
        </p>
      )}
      <div className="profile__action">
        {type === 'connection' ? 'Remove' : 'CONNECT'}
      </div>
    </div>
  )
}

export default ProfileCard
