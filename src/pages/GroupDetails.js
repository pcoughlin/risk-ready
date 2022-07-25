import React from 'react'
import GroupActions from '../components/GroupActions'
import PostForm from '../components/PostForm'
import { FeedCard } from '../components/FeedCard'
import LocalHeadline from '../components/LocalHeadline'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const GroupDetails = () => {
  return (
    <div className="group-details">
      <div className="details">
        <GroupActions />
        <div className="cover">
          <div className="cover__img">
            <img src="/assets/images/country-home.jpg" alt="group cover" />
            <div className="cover__edit">
              <FontAwesomeIcon icon="fa-solid fa-pencil" />
              <span>Edit</span>
            </div>
          </div>
          <div className="cover__text">
            <div className="cover__text--name">Brooklyn Runers</div>
            <div className="cover__text--location">Brooklyn,New York</div>
          </div>
          <div className="cover__controls">
            <div className="members">
              <div className="members__avi">
                <img src="/assets/images/group-1.png" alt="" />
                <img src="/assets/images/group-2.png" alt="" />
                <img src="/assets/images/group-3.png" alt="" />
                <img src="/assets/images/group-4.png" alt="" />
              </div>
              <div className="members__count">4.5K members</div>
            </div>
            <div className="members__action">
              <FontAwesomeIcon icon="fa-solid fa-plus" />
              <span className="action__text">Invite</span>
            </div>
          </div>
        </div>
        <PostForm />
        <div className="feeds">
          <FeedCard type="single" />
        </div>
      </div>
      <LocalHeadline />
    </div>
  )
}

export default GroupDetails
