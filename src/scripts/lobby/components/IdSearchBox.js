// @flow
import React from 'react'

export type Props = {
  handleSearchIdChange: number => void,
  handleValidityChange: boolean => void,
  placeholder: string,
  numberOfDigit: number
}

export default function IdSearchBox(props: Props) {
  const handleIdChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    props.handleValidityChange(event.target.validity.valid)
    if (event.target.validity.valid) {
      props.handleSearchIdChange(Number(event.target.value))
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
