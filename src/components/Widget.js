import React from 'react'

const Widget = () => {
  return (
    <div className="nav__widget">
      <div className="widget__weather">
        <span className="heading">Current Location</span>
        <span className="city">Johannesburg</span>
        <img src="/assets/images/cloud.svg" alt="cloud" />
        <div className="summary">
          <span className="feel">Clear</span>
          <div className="span temp">42</div>
        </div>
      </div>
      <div className="widget__community">
        <span className="heading">Your Community circle</span>
        <span className="percentage">30%</span>
        <span className="text">members</span>
        <span className="total">2300</span>
        <span className="text">total</span>
      </div>
    </div>
  )
}

export default Widget
