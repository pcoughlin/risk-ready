import React from 'react'
import LocalHeadline from '../components/LocalHeadline'
import NewsCard from '../components/NewsCard'
import { WeatherInfo } from '../components/WeatherInfo'

const LocalNews = () => {
  return (
    <div className="w-grid">
      <div className="p-grid">
        <WeatherInfo />
        <h2>Local News</h2>
        <NewsCard />
      </div>
      <LocalHeadline />
    </div>
  )
}

export default LocalNews
