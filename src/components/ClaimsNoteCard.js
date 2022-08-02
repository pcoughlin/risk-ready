import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState, useRef } from 'react'

const ClaimsNoteCard = ({ parent }) => {
  const [play, setPlay] = useState(false)
  const [audioTimer, setAudioTimer] = useState(0)
  const [duration, setDuration] = useState(0)
  const audio = new Audio()
  audio.src =
    'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_alert_chime_short_musical_notification_cute_child_like_001_64918.mp3?_=1'

  audio.addEventListener('loadedmetadata', () => {
    setDuration(audio.duration)
  })

  const showTime = (e) => {
    console.log(parseInt(audio.currentTime))
    setAudioTimer((100 * audio.currentTime) / audio.duration)
  }

  const endAudio = () => {
    audio.currentTime = 0
    setAudioTimer((100 * audio.currentTime) / audio.duration)
    setPlay(!play)
  }
  const togglePlay = () => {
    play ? audio.pause() : audio.play()
    setPlay(!play)
  }

  useEffect(() => {
    audio.addEventListener('timeupdate', showTime)
    audio.addEventListener('ended', endAudio)
    return () => {
      audio.removeEventListener('timeupdate', showTime)
      audio.removeEventListener('timeupdate', endAudio)
    }
  }, [duration, audio])

  return (
    <div className=" note note__card">
      <div className="note__heading">
        {parent === 'contractor' && (
          <>
            <div className="note__heading--info">
              <img
                src="/assets/images/contractor.png"
                alt=""
                className="note__heading--img"
              />
              <div className="">
                <p className="note__heading--name">James Gunn</p>
                <span className="note__heading--title">Contractor</span>
              </div>
            </div>
            <div className="note__heading--media"></div>
          </>
        )}
      </div>
      <div className="note__content">
        <div className="note__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vero
          repudiandae quas officiis doloremque suscipit totam atque rerum
          labore. Adipisci eius excepturi repudiandae iure modi soluta voluptate
          est, sunt magnam?
        </div>
        <div className="note__mail">
          <div className="note__file">
            <div>
              <p>Email conversation</p>
              <p>Click to view</p>
            </div>
            <FontAwesomeIcon icon="fa-envelope" className="note__icon" />
          </div>
          <span className="note__date">Jan 23 20</span>
        </div>
        <div className="note__audio">
          <div className="note__file note__file--audio">
            <input
              type="range"
              name="audio-time"
              id="audio-time"
              max="100"
              value={audioTimer}
              className="audio audio--pseudo"
              readOnly
            />
            <FontAwesomeIcon
              icon={`fa-solid ${play ? 'fa-circle-pause' : 'fa-circle-play'}`}
              className="note__icon"
              onClick={() => togglePlay()}
            />
          </div>
          <div className="note__date">Jan 23 20</div>
        </div>
        <div className="note__video">
          <div className="note__file">
            <video src="" controlsList="play/pause"></video>
          </div>
          <div className="note__date">Jan 23 20</div>
        </div>
      </div>
      <div className="note__create">
        <form className="note__create-form">
          <div className="note__create-form-group">
            <input
              type="text"
              placeholder="Write a note..."
              className="note__create-form-control"
            />
            <button type="submit" className="note__create-btn">
              <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
            </button>
          </div>
        </form>
        <div className="note__create--files">
          <FontAwesomeIcon
            icon="fa-solid fa-microphone"
            className="note__create--file"
          />
          <FontAwesomeIcon
            icon="fa-solid fa-video"
            className="note__create--file"
          />
          <FontAwesomeIcon
            icon="fa-solid fa-envelope"
            className="note__create--file"
          />
          <FontAwesomeIcon
            icon="fa-solid fa-message"
            className="note__create--file"
          />
        </div>
      </div>
    </div>
  )
}

export default ClaimsNoteCard
