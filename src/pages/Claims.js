import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import ClaimCard from '../components/ClaimCard'
import ClaimsNoteCard from '../components/ClaimsNoteCard'
import ClaimsListing from './partials/ClaimsListing'
import NewClaim from './partials/NewClaim'

const Claims = () => {
  const [view, setView] = useState('list')

  return (
    <>
      {view === 'list' && <ClaimsListing setView={setView} />}
      {view === 'new' && <NewClaim />}
    </>
  )
}

export default Claims
