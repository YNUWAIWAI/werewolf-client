// @flow
import type {Avatar} from 'lobby'
import React from 'react'
import Select from 'react-select'

type Props = {
  +handleChange: boolean => Avatar => void
}

export default function AvatarSelect(props: Props) {
  const handleChange = selectedOption => {
    if (selectedOption.value) {
      props.handleChange(true)(selectedOption.value)
    } else {
      props.handleChange(true)('random')
    }
  }
  const options = [
    {
      label: 'Random',
      value: 'random'
    },
    {
      label: 'Fixed',
      value: 'fixed'
    },
    {
      label: 'Unspecified',
      value: 'unspecified'
    }
  ]

  return (
    <Select
      className="advanced-search--input"
      classNamePrefix="react-select"
      defaultValue={options[0]}
      name="avatar"
      onChange={handleChange}
      options={options}
    />
  )
}
