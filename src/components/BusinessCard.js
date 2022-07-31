import React from 'react'

const BusinessCard = ({ action }) => {
  return (
    <div className="business-card">
      <div className="business-card__top">
        <div className="business-card__owner">
          <img
            src="/assets/images/user-placeholder.png"
            alt="business avatar"
            className="business-card__avatar"
          />
          <div>
            <div className="business-card__contact">
              <div className="business-card__user">The Place</div>
              &nbsp;&nbsp;&#x2022;&nbsp;&nbsp;
              <div className="business-card__activity">2 days ago</div>
            </div>
            <p className="business-card__location">Vancouver, Canada</p>
          </div>
        </div>
        <img
          src="/assets/images/ellipsis.svg"
          alt=""
          className="business-card__ellipsis"
        />
      </div>
      <div className="business-card__details">
        <div className="business-card__bio">
          <div>
            <p className="business-card__title">The Pizza shop</p>
            <p className="business-card__summary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              suscipit quaerat temporibus corporis nam? Doloremque labore nisi
              consectetur, quisquam tempore obcaecati, quam nam rerum aspernatur
              eum assumenda. Odit, eligendi praesentium.
            </p>
          </div>
          <div
            className={`business-card__action business-card__action--${action}}`}
          >
            {action}
          </div>
        </div>
        <div className="business-card__img">
          <img src="/assets/images/pizza.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default BusinessCard
