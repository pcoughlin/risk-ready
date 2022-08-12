import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useToken } from '../utils/useToken'
import { downloadFile } from '../store/actions/uploadActions'

const InsuranceCard = ({ data }) => {
  const dispatch = useDispatch()
  const { getToken } = useToken()

  const [token, setToken] = useState()

  useEffect(() => {
    const localToken = getToken()
    setToken(localToken)

    return () => {}
  }, [])

  return (
    <div className="insurance-card">
      <div className="insurance-card__heading">{data.name}</div>
      <div className="insurance-card__summary">{data.description}</div>
      <div className="insurance-card__control">
        <span className="insurance-card__control--name">Claim Doc.pdf</span>
        <span className="insurance-card__control--download">
          <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-down" />
          <span onClick={() => dispatch(downloadFile(data.id, token))}>
            Download
          </span>
        </span>
      </div>
    </div>
  )
}

export default InsuranceCard
