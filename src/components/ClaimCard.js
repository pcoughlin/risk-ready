import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ClaimCard = () => {
  return (
    <div className="claim-card">
      <div className="claim-card__labels">
        <div className="claim-card__label">Claim Name</div>
        <div className="claim-card__label">Claim Number</div>
        <div className="claim-card__label">Claim Type</div>
        <div className="claim-card__label">Claim Date</div>
      </div>
      <div className="claim-card__values">
        <div className="claim-card__value">Wall Repair</div>
        <div className="claim-card__value">37488684757</div>
        <div className="claim-card__value">Repair</div>
        <div className="claim-card__value">12/05/22</div>
      </div>
      <div className="claim-card__controls">
        <div className="claim-card__status">Active</div>
        <FontAwesomeIcon
          icon="fa-solid fa-chevron-circle-right"
          className="claim-card__expand"
        />
      </div>
    </div>
  )
}

export default ClaimCard
