import React from 'react'

export default function NumberSelect(props) {
  const options = [... Array(props.to - props.from + 1).keys()]
    .map(e => e + props.from)
    .map(option =>
      <option key={option} value={option}>
        {option}
      </option>
    )

  return (
    <select
      className={props.class}
      onChange={props.handleChange}
      value={props.value}
    >
      {options}
    </select>
  )
}
