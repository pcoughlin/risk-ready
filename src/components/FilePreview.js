import React, { useEffect } from 'react'

const FilePreview = ({ media }) => {
  useEffect(() => {
    console.log(media)

    return () => {}
  }, [media])

  return <div>FilePreview</div>
}

export default FilePreview
