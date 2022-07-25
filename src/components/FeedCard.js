import React from 'react'

export const FeedCard = ({ type }) => {
  return (
    <div className="card">
      <div className="card__control card__control--top">
        <div
          className={`avatar avatar--single ${
            type === 'group' && 'avatar--group'
          }`}
        >
          <img
            src="/post-img.png"
            alt=""
            className="avatar-img  avatar-img--group"
          />
          {type === 'group' && (
            <img
              src="/overlay.png"
              alt=""
              className="avatar-img 
                  avatar-img--absolute"
            />
          )}
        </div>
        <div className="detail">
          <span className="detail--top">Rob Holding</span>
          <span className="detail--top">1 day ago</span>
          <div className="detail--bottom">Rhode Island</div>
        </div>
        <div className="options">
          <img src="/ellipsis.svg" alt="" />
        </div>
      </div>
      <div className="card__media card__media--grid-1 card__media--grid-2  card__media--grid-3 card__media--grid-4">
        <img src="/post-img.png" alt="" />
        <img src="/post-img.png" alt="" />
        <img src="/post-img.png" alt="" /> <img src="/post-img.png" alt="" />
      </div>
      <div className="card__control--bottom">
        <div className="data">
          <img
            src="/message.svg"
            alt="number of comments"
            className="data__img"
          />
          <div className="data__value">600</div>
        </div>
        <div className="data">
          <img src="/heart.svg" alt="likes" className="data__img" />
          <div className="data__value">800</div>
        </div>
        <div className="data">
          <img src="/share.svg" alt="share" className="data__img" />
          <div className="data__value">200</div>
        </div>
      </div>
    </div>
  )
}
