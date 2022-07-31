import React from 'react'

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery--files">
        <h4 className="gallery--heading">Picture</h4>
        <div className="gallery--images">
          <div className="gallery--image">
            <img src="/assets/images/room.png" alt="" />
          </div>
          <div className="gallery--image">
            <img src="/assets/images/room.png" alt="" />
          </div>
          <div className="gallery--image">
            <img src="/assets/images/room.png" alt="" />
          </div>
        </div>
      </div>
      <div className="gallery--files">
        <h4 className="gallery--heading">Videos</h4>
        <div className="gallery--videos">
          <video className="gallery--video"></video>
          <video className="gallery--video"></video>
          <video className="gallery--video"></video>
        </div>
      </div>
    </div>
  )
}

export default Gallery
