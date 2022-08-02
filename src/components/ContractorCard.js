import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ContractorCard = () => {
  return (
    <div className="contractor">
      <div className="contractor__info">
        <img
          src="/assets/images/contractor.png"
          alt="contractor"
          className="contractor__info--img"
        />
        <div>
          <p className="contractor__info--name">James Bond</p>
          <small className="contractor__info--title">Contractor</small>
        </div>
      </div>
      <div className="contractor__action">
        <FontAwesomeIcon
          icon="fa-message"
          className="contractor__action--icon"
        />
        <span className="contractor__action--text">Contact</span>
      </div>
    </div>
  )
}

export default ContractorCard
