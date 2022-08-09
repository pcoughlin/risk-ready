import React, { useEffect } from 'react'
import InsuranceCard from '../components/InsuranceCard'
import VaultUpload from '../components/VaultUpload'
import { useDispatch, useSelector } from 'react-redux'
import { getVaults } from '../store/actions/uploadActions'

const ProjectDocuments = () => {
  const dispatch = useDispatch()

  const user = JSON.parse(localStorage.getItem('risk-ready-token'))
  const token = user.token
  const { documentFiles } = useSelector((state) => state.upload)

  console.log(documentFiles)
  let documents = documentFiles.filter((doc) => doc.type === 'PROJECT_DOCUMENT')

  useEffect(() => {
    dispatch(getVaults(token))

    return () => {}
  }, [dispatch])

  return (
    <div className="insurance">
      <VaultUpload type="PROJECT DOCUMENT" />
      <h2 className="insurance__heading">My Projects Documents</h2>
      <div className="vault-list">
        {documents &&
          documents.map((document) => (
            <InsuranceCard data={document} key={document.id} />
          ))}
      </div>
    </div>
  )
}

export default ProjectDocuments
