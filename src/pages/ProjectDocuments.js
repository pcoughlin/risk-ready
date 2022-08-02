import React from 'react'
import InsuranceCard from '../components/InsuranceCard'
import VaultUpload from '../components/VaultUpload'

const ProjectDocuments = () => {
  return (
    <div className="insurance">
      <VaultUpload />
      <h2 className="insurance__heading">My Projects Documents</h2>
      <div className="policies">
        <InsuranceCard />
      </div>
    </div>
  )
}

export default ProjectDocuments
