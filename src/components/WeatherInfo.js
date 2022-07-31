import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const WeatherInfo = () => {
  return (
    <div className="weather">
      <div className="weather__capsule">
        <div className="weather__time">Mon</div>
        <div className="weather__symbol">
          <img src="/assets/images/sunny.svg" alt="weathersymbol" />
        </div>
        <div className="weather__temperature">30&#x2103;</div>
      </div>
      <div className="weather__capsule">
        <div className="weather__time">Tue</div>
        <div className="weather__symbol">
          <FontAwesomeIcon icon="fa-solid fa-cloud" />
        </div>
        <div className="weather__temperature">28&#x2103;</div>
      </div>
      <div className="weather__capsule">
        <div className="weather__time">Wed</div>
        <div className="weather__symbol">
          <img src="/assets/images/sunny.svg" alt="weather symbol" />
        </div>
        <div className="weather__temperature">33&#x2103;</div>
      </div>
      <div className="weather__capsule">
        <div className="weather__time">Thu</div>
        <div className="weather__symbol">
          <img src="/assets/images/sunny.svg" alt="weather symbol" />
        </div>
        <div className="weather__temperature">32&#x2103;</div>
      </div>
      <div className="weather__capsule">
        <div className="weather__time">Thu</div>
        <div className="weather__symbol">
          <img src="/assets/images/sunny.svg" alt="weather symbol" />
        </div>
        <div className="weather__temperature">32&#x2103;</div>
      </div>
      <div className="weather__capsule">
        <div className="weather__time">Thu</div>
        <div className="weather__symbol">
          <img src="/assets/images/sunny.svg" alt="weather symbol" />
        </div>
        <div className="weather__temperature">32&#x2103;</div>
      </div>
      <div className="weather__capsule">
        <div className="weather__time">Thu</div>
        <div className="weather__symbol">
          <img src="/assets/images/sunny.svg" alt="weather symbol" />
        </div>
        <div className="weather__temperature">32&#x2103;</div>
      </div>
    </div>
  )
}
