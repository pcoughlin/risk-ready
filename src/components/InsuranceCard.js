import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const InsuranceCard = ({ data }) => {
  return (
    <div className="insurance-card">
      <div className="insurance-card__heading">{data.name}</div>
      <div className="insurance-card__summary">{data.description}</div>
      <div className="insurance-card__control">
        <span className="insurance-card__control--name">Claim Doc.pdf</span>
        <span className="insurance-card__control--download">
          <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-down" />
          <>Download</>
        </span>
      </div>
    </div>
  )
}

export default InsuranceCard
