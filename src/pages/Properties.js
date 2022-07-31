import React, { useState } from 'react'
import NewProperty from './partials/NewProperty'
import PropertyListing from './partials/PropertyListing'

const Properties = () => {
  const [view, setView] = useState('new')

  return (
    <>
      {view === 'list' && <PropertyListing setView={setView} />}
      {view === 'new' && <NewProperty />}
    </>
  )
}

export default Properties
