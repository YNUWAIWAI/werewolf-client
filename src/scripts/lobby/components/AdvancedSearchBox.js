// @flow
import React from 'react'

export type Props = {
  text: string
}

export default function AdvancedSearchBox(props: Props) {
  const handleChange = event => {
    const elem = document.getElementById(event.target.dataset.checkboxId)

    if (event.target.validity.valid && event.target.value !== '') {
      console.log(event.target.value)
      elem.checked = true
    } else {
      elem.checked = false
    }
  }

  return (
    <div className="advanced-search">
      <div className="advanced-search--prop">
        <input
          id="villageName"
          name="villageName"
          type="checkbox"
        />
        <label htmlFor="villageName">
          {'Village Name'}
        </label>
      </div>
      <input
        className="advanced-search--input"
        data-checkbox-id="villageName"
        maxLength="30"
        minLength="5"
        onChange={handleChange}
        placeholder="5-30 chars"
        type="text"
      />
      <div className="advanced-search--prop">
        <input
          id="hostName"
          name="hostName"
          type="checkbox"
        />
        <label htmlFor="hostName">
          {'Host Name'}
        </label>
      </div>
      <input
        className="advanced-search--input"
        data-checkbox-id="hostName"
        maxLength="15"
        minLength="5"
        onChange={handleChange}
        placeholder="5-15 chars"
        type="text"
      />
      <div className="advanced-search--prop">
        <input
          id="minimum"
          name="minimum"
          type="checkbox"
          value="minimum"
        />
        <label htmlFor="minimum">
          {'Minimum'}
        </label>
      </div>
      <input
        className="advanced-search--input"
        data-checkbox-id="minimum"
        max="15"
        maxLength="2"
        min="4"
        onChange={handleChange}
        placeholder="4-15"
        type="number"
      />
      <div className="advanced-search--prop">
        <input
          id="maximum"
          name="maximum"
          type="checkbox"
          value="maximum"
        />
        <label htmlFor="maximum">
          {'Maximum'}
        </label>
      </div>
      <input
        className="advanced-search--input"
        data-checkbox-id="maximum"
        max="15"
        min="4"
        onChange={handleChange}
        placeholder="4-15"
        type="number"
      />
      <div className="advanced-search--prop">
        <input
          id="avatar"
          name="avatar"
          type="checkbox"
          value="avatar"
        />
        <label htmlFor="avatar">
          {'Avatar'}
        </label>
      </div>
      <input
        className="advanced-search--input"
        data-checkbox-id="avatar"
        max="15"
        min="4"
        onChange={handleChange}
        placeholder="4-15"
        type="number"
      />
      <div className="advanced-search--prop">
        <input
          id="comment"
          name="comment"
          type="checkbox"
          value="comment"
        />
        <label htmlFor="comment">
          {'Comment'}
        </label>
      </div>
      <textarea
        className="advanced-search--input"
        data-checkbox-id="comment"
        maxLength="100"
        minLength="0"
        onChange={handleChange}
        placeholder="0-100 chars"
        rows="3"
        type="text"
      />
    </div>
  )
}
