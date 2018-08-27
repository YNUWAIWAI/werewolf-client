// @flow
import React from 'react'

export type Props = {
  changeSearchId: number => void,
  placeholder: string,
  numberOfDigit: number
}

export default function IdSearchBox(props: Props) {
  const handleIdChange = event => {
    if (event.target.validity.valid) {
      props.changeSearchId(Number(event.target.value))
    }
  }

  return (
    <div className="id-search">
      <span className="id-search--sharp">
        {'#'}
      </span>
      <input
        className="id-search--input"
        maxLength={props.numberOfDigit}
        minLength={1}
        onChange={handleIdChange}
        pattern="^\d+$"
        placeholder={props.placeholder}
        required
        type="text"
      />
      <span className="id-search--validity" />
    </div>
  )
}
