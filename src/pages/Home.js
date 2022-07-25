import React from 'react'
import LocalHeadline from '../components/LocalHeadline'
import PostForm from '../components/PostForm'
import { FeedCard } from '../components/FeedCard'

const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <PostForm />
        <div className="feed">
          <FeedCard />
        </div>
      </div>
      <LocalHeadline />
    </div>
  )
}

export default Home
