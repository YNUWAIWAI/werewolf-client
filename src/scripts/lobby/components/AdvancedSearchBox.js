// @flow
import AdvancedSearchBoxRow from './AdvancedSearchBoxRow'
import React from 'react'

export type Props = {
  text: string
}

export default function AdvancedSearchBox(props: Props) {
  const handleChange = event => {
    const elem = document.getElementById(event.target.dataset.checkboxId)

    if (event.target.validity.valid && event.target.value !== '') {
      console.log(event.target.validity.valid)
      console.log(event.target.value)
      elem.checked = true
    } else {
      elem.checked = false
    }
  }

  return (
    <div className="advanced-search">
      <AdvancedSearchBoxRow
        checked={false}
        handleChange={handleChange}
        id="villageName"
        max={30}
        min={5}
        name="Village Name"
        placeholder="5-30 chars"
        type="text"
      />
      <AdvancedSearchBoxRow
        checked={false}
        handleChange={handleChange}
        id="hostName"
        max={15}
        min={5}
        name="Host Name"
        placeholder="5-15 chars"
        type="text"
      />
      <AdvancedSearchBoxRow
        checked={false}
        handleChange={handleChange}
        id="minimum"
        max={15}
        min={5}
        name="Minimum"
        placeholder="4-15"
        type="number"
      />
      <AdvancedSearchBoxRow
        checked={false}
        handleChange={handleChange}
        id="maximum"
        max={15}
        min={5}
        name="Maximum"
        placeholder="4-15"
        type="number"
      />
      <AdvancedSearchBoxRow
        checked
        handleChange={handleChange}
        id="avatar"
        name="Avatar"
        type="select"
      />
      <AdvancedSearchBoxRow
        checked={false}
        handleChange={handleChange}
        id="comment"
        max={100}
        min={0}
        name="Comment"
        placeholder="0-100 chars"
        type="textarea"
      />
    </div>
  )
}
