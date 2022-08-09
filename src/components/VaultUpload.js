import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { showVaultModal } from '../store/actions/modalActions'
import { useDispatch } from 'react-redux'

const VaultUpload = ({ type }) => {
  const dispatch = useDispatch()

  return (
    <div className="upload" onClick={() => dispatch(showVaultModal(type))}>
      <FontAwesomeIcon icon="fa-cloud-upload" />
      <span>Upload</span>
    </div>
  )
}

export default VaultUpload
