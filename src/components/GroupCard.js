import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const GroupCard = ({ action }) => {
  return (
    <div className="discover-card">
      <div className="discover-card__img">
        <img src="/assets/images/country-home.jpg" alt="group avatar" />
      </div>
      <div className="discover-card__bottom">
        <div className="discover-card__desc">
          <div className="discover-card__name">Country Home</div>
          <div className="discover-card__count">
            <FontAwesomeIcon icon="fa-solid fa-users" />{' '}
            <span>12.7K members</span>
          </div>
        </div>
        <div className="discover-card__location">Illinois</div>
        <div className="discover-card__controls">
          <div className="discover-card__members">
            <img
              src="/assets/images/group-1.png"
              alt=""
              className="discover-card__member"
            />
            <img
              src="/assets/images/group-2.png"
              alt=""
              className="discover-card__member"
            />
            <img
              src="/assets/images/group-3.png"
              alt=""
              className="discover-card__member"
            />
            <img
              src="/assets/images/group-4.png"
              alt=""
              className="discover-card__member"
            />
          </div>
          <div
            className={`discover-card__action discover-card__action--${action}`}
          >
            <span>{action}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupCard
