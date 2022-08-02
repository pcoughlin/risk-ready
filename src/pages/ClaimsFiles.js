import React from 'react'
import Gallery from '../components/Gallery'
import VaultUpload from '../components/VaultUpload'

const ClaimsFiles = () => {
  return (
    <div className="insurance">
      <VaultUpload />
      <h2 className="insurance__heading">Claims Files</h2>
      <Gallery />
    </div>
  )
}

export default ClaimsFiles
