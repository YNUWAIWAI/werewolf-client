// @flow
import React from 'react'
import Select from 'react-select'

type Props = {
  +ascendingOrder: boolean,
  +className: string,
  +from: number,
  +handleChange: boolean => number => void,
  +name: string,
  +to: number
}

export default function NumberSelect(props: Props) {
  const handleChange = selectedOption => {
    if (selectedOption.value) {
      props.handleChange(true)(selectedOption.value)
    } else {
      props.handleChange(false)(-1)
    }
  }
  const options = [... Array(props.to - props.from + 1).keys()]
    .map(e => e + props.from)
    .map(option => ({
      label: option,
      value: option
    }))

  return (
    <Select
      className={props.className}
      classNamePrefix="react-select"
      name={props.name}
      onChange={handleChange}
      options={props.ascendingOrder ? options : options.reverse()}
    />
  )
}
