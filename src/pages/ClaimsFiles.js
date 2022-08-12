import React, { useEffect, useState } from 'react'
import Gallery from '../components/Gallery'
import VaultUpload from '../components/VaultUpload'

import { useDispatch, useSelector } from 'react-redux'
import { getVaults } from '../store/actions/uploadActions'

const ClaimsFiles = () => {
  const dispatch = useDispatch()

  const token = JSON.parse(localStorage.getItem('risk-ready-token'))

  const { documentFiles } = useSelector((state) => state.upload)

  console.log(documentFiles)
  let files = documentFiles.filter((doc) => doc.type === 'INSURANCE_POLICY')

  useEffect(() => {
    dispatch(getVaults(token))

    return () => {}
  }, [dispatch, token])

  return (
    <div className="insurance">
      <VaultUpload type="CLAIMS FILE" />
      <h2 className="insurance__heading">Claims Files</h2>
      <Gallery />
    </div>
  )
}

export default ClaimsFiles
