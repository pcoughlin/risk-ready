import React, { useState } from 'react'
import Gallery from '../../components/Gallery'

const PropertyListing = ({ setView }) => {
  const [activetab, setActivetab] = useState('LR')

  return (
    <div className="properties">
      <div className="properties__controls">
        <div className="properties__control">
          <span className="properties__title">My Property</span>
          <span className="properties__add" onClick={() => setView('new')}>
            Add
          </span>
        </div>
        <div className="properties__control">
          <label htmlFor="year" className="properties__label">
            Sort by year
          </label>
          <select
            name="year"
            id="year"
            className="properties__select"
            defaultValue="2022"
          >
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020s</option>
          </select>
        </div>
      </div>
      <div className="property">
        <div className="property__tabs">
          <div
            className={`property__tab ${
              activetab === 'LR' ? 'property__tab--active' : ''
            }`}
            onClick={() => setActivetab()}
          >
            Living Room
          </div>
          <div
            className={`property__tab ${
              activetab === 'bed' ? 'property__tab--active' : ''
            }`}
            onClick={() => setActivetab('bed')}
          >
            Bed Room
          </div>
          <div
            className={`property__tab ${
              activetab === 'bath' ? 'property__tab--active' : ''
            }`}
            onClick={() => setActivetab('bath')}
          >
            Bath Room
          </div>
          <div
            className={`property__tab ${
              activetab === 'kitchen' ? 'property__tab--active' : ''
            }`}
            onClick={() => setActivetab('kitchen')}
          >
            Kitchen
          </div>
          <div
            className={`property__tab ${
              activetab === 'exterior' ? 'property__tab--active' : ''
            }`}
            onClick={() => setActivetab('exterior')}
          >
            Exterior
          </div>
          <div
            className={`property__tab ${
              activetab === 'lobby' ? 'property__tab--active' : ''
            }`}
            onClick={() => setActivetab('lobby')}
          >
            Lobby
          </div>
          <div
            className={`property__tab ${
              activetab === 'parking' ? 'property__tab--active' : ''
            }`}
            onClick={() => setActivetab('parking')}
          >
            Parking Area
          </div>
        </div>
        <Gallery />
      </div>
    </div>
  )
}

export default PropertyListing
