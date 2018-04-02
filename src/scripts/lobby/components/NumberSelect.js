// @flow
import React from 'react'

type Props = {
  +class: string,
  +from: number,
  +handleChange: number => void,
  +to: number,
  +value: number
}

export default function NumberSelect(props: Props) {
  const options = [... Array(props.to - props.from + 1).keys()]
    .map(e => e + props.from)
    .map(option =>
      <option key={option} value={option}>
        {option}
      </option>
    )
    .reverse()

  return (
    <select
      className={props.class}
      onChange={(event: SyntheticInputEvent<HTMLSelectElement>) => props.handleChange(Number(event.target.value))}
      value={props.value}
    >
      {options}
    </select>
  )
}
