// @flow
import React from 'react'

export type Props = {
  placeholder: string,
  numberOfDigit: number
}

export default function IdSearchBox(props: Props) {
  return (
    <div className="id-search">
      <span className="id-search--sharp">
        {'#'}
      </span>
      <input
        className="id-search--input"
        maxLength={props.numberOfDigit}
        minLength={props.numberOfDigit}
        pattern={`^[0-9]{${props.numberOfDigit}}$`}
        placeholder={props.placeholder}
        required
        type="text"
      />
      <span className="id-search--validity" />
    </div>
  )
}
