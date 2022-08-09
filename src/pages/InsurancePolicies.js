import React, { useEffect, useState } from 'react'
import InsuranceCard from '../components/InsuranceCard'
import VaultUpload from '../components/VaultUpload'
import { useDispatch, useSelector } from 'react-redux'
import { getVaults } from '../store/actions/uploadActions'

const InsurancePolicies = () => {
  const dispatch = useDispatch()

  const user = JSON.parse(localStorage.getItem('risk-ready-token'))
  const token = user.token
  const { documentFiles } = useSelector((state) => state.upload)

  let policies = documentFiles.filter((doc) => doc.type === 'INSURANCE_POLICY')

  useEffect(() => {
    dispatch(getVaults(token))

    return () => {}
  }, [dispatch])

  return (
    <div className="insurance">
      <VaultUpload type="INSURANCE POLICY" />
      <h2 className="insurance__heading">My Insurance Policies Documents</h2>
      <div className="vault-list">
        {policies &&
          policies.map((policy) => (
            <InsuranceCard data={policy} key={policy.id} />
          ))}
      </div>
    </div>
  )
}

export default InsurancePolicies
