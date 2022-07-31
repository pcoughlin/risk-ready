import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ClaimCard from '../../components/ClaimCard'
import ClaimsNoteCard from '../../components/ClaimsNoteCard'

const ClaimsListing = ({ setView }) => {
  return (
    <div className="claims">
      <div className="claims__controls">
        <div className="claims__control">
          <span className="claims__period">Year 2020</span>
          <span className="claims__add" onClick={() => setView('new')}>
            Add
          </span>
        </div>
        <div className="claims__control">
          <label htmlFor="year" className="claims__label">
            Sort by year
          </label>
          <select
            name="year"
            id="year"
            className="claims__select"
            defaultValue="2022"
          >
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020s</option>
          </select>
        </div>
      </div>
      <div className="claims__view">
        <div className="claims__listing">
          <ClaimCard />
        </div>
        <ClaimsNoteCard />
      </div>
    </div>
  )
}

export default ClaimsListing
