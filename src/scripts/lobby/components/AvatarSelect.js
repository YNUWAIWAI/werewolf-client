// @flow
import type {Avatar} from 'lobby'
import React from 'react'
import Select from 'react-select'

type Props = {
  +className: string,
  +defaultValue: Avatar,
  +handleChange: boolean => Avatar => void,
  +type: 'advancedSearch' | 'buildVillage'
}

export default function AvatarSelect(props: Props) {
  const handleChange = selectedOption => {
    if (!selectedOption.value && props.type === 'advancedSearch') {
      props.handleChange(true)('random')
    } else if (!selectedOption.value && props.type === 'buildVillage') {
      props.handleChange(false)('fixed')
    } else {
      props.handleChange(true)(selectedOption.value)
    }
  }
  const options = {
    advancedSearch: [
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
    ],
    buildVillage: [
      {
        label: 'Fixed Avatar',
        value: 'fixed'
      },
      {
        label: 'Random Avatar',
        value: 'random'
      }
    ]
  }[props.type]
  const defaultValue = options.find(option => option.value === props.defaultValue)

  return (
    <Select
      className={props.className}
      classNamePrefix="react-select"
      defaultValue={defaultValue}
      name="avatar"
      onChange={handleChange}
      options={options}
    />
  )
}
