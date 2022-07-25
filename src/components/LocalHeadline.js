import React from 'react'

const LocalHeadline = () => {
  return (
    <div className="local-headlines">
      <h2>Local News & headlines</h2>
      <div className="headline">
        <div className="headline__media">
          <img
            src="/assets/images/headline-img.png"
            alt="headline"
            className="headline-img"
          />
        </div>
        <div className="headline__text">
          <p>What to watch in Tuesday's primaries in California, Iowa</p>
        </div>
      </div>
      <div className="others">
        <div className="other">
          <div className="other__img">
            <img
              src="/assets/images/headline-img.png"
              alt="headline"
              className="headline-img"
            />
          </div>
          <div className="other__text">
            <p className="other__headline">
              What to watch in Tuesday's primaries in California, Iowa
            </p>
            <small className="other__desc">
              What to watch in Tuesday's primaries in California, Iowa
            </small>
          </div>
        </div>
        <div className="other">
          <div className="other__img">
            <img
              src="/assets/images/headline-img.png"
              alt="headline"
              className="headline-img"
            />
          </div>
          <div className="other__text">
            <p className="other__headline">
              What to watch in Tuesday's primaries in California, Iowa
            </p>
            <small className="other__desc">
              What to watch in Tuesday's primaries in California, Iowa
            </small>
          </div>
        </div>
        <div className="other">
          <div className="other__img">
            <img
              src="/assets/images/headline-img.png"
              alt="headline"
              className="headline-img"
            />
          </div>
          <div className="other__text">
            <p className="other__headline">
              What to watch in Tuesday's primaries in California, Iowa
            </p>
            <small className="other__desc">
              What to watch in Tuesday's primaries in California, Iowa...
            </small>
          </div>
        </div>
        <div className="other">
          <div className="other__img">
            <img
              src="/assets/images/headline-img.png"
              alt="headline"
              className="headline-img"
            />
          </div>
          <div className="other__text">
            <p className="other__headline">
              What to watch in Tuesday's primaries in California, Iowa...
            </p>
            <small className="other__desc">
              What to watch in Tuesday's primaries in California, Iowa...
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocalHeadline
