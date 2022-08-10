import React, { useEffect } from 'react'
import LocalHeadline from '../components/LocalHeadline'
import PostForm from '../components/PostForm'
import { FeedCard } from '../components/FeedCard'
import { useSelector } from 'react-redux'
import { useToken } from '../utils/useToken'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const { token, setToken } = useToken()
  const { isLoggedIn } = useSelector((state) => state.auth)

  useEffect(() => {
    // if (!token) {
    //   navigate('/auth')
    // }
    return () => {}
  }, [isLoggedIn])
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
