import React from 'react'
import InsuranceCard from '../components/InsuranceCard'
import VaultUpload from '../components/VaultUpload'

const InsurancePolicies = () => {
  return (
    <div className="insurance">
      <VaultUpload />
      <h2 className="insurance__heading">My Insurance Policies Documents</h2>
      <div className="policies">
        <InsuranceCard />
      </div>
    </div>
  )
}

export default InsurancePolicies
