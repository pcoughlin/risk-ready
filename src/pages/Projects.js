import React from 'react'
import ClaimsNoteCard from '../components/ClaimsNoteCard'
import ContractorCard from '../components/ContractorCard'

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="projects__heading">My Projects</h2>
      <div className="projects__grid">
        <div className="projects__contractors">
          <h3>My Contractors</h3>
          <ContractorCard />
        </div>
        <div className="projects__communication">
          <ClaimsNoteCard parent="contractor" />
        </div>
      </div>
    </div>
  )
}

export default Projects
