import React from 'react'
import BusinessActions from '../components/BusinessActions'
import BusinessCard from '../components/BusinessCard'
import LocalHeadline from '../components/LocalHeadline'

const BusinessList = () => {
  return (
    <div className="w-grid">
      <div className="p-grid">
        <BusinessActions />
        <BusinessCard action="message" />
      </div>
      <LocalHeadline />
    </div>
  )
}

export default BusinessList
