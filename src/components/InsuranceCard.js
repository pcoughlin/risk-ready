import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const InsuranceCard = () => {
  return (
    <div className="insurance-card">
      <div className="insurance-card__heading">Document Title</div>
      <div className="insurance-card__summary">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus,
        aliquid dolorum ut accusamus voluptates nemo exercitationem nobis
        asperiores nam quas vel! Quas rem earum nesciunt, quaerat beatae.
      </div>
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
