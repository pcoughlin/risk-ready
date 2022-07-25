import React from 'react'
import GroupActions from '../components/GroupActions'
import PostForm from '../components/PostForm'
import { FeedCard } from '../components/FeedCard'
import LocalHeadline from '../components/LocalHeadline'

export const GroupFeeds = () => {
  return (
    <div className="groups">
      <div className="group">
        <GroupActions />
        <PostForm />
        <div className="feeds">
          <FeedCard type="group" />
        </div>
      </div>
      <LocalHeadline />
    </div>
  )
}
