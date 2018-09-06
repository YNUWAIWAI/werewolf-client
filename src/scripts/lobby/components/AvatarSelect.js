// @flow
import type {Avatar} from 'lobby'
import React from 'react'
import Select from 'react-select'

type Props = {
  +className: string,
  +handleChange: boolean => Avatar => void,
  +type: 'advancedSearch' | 'buildVillage'
}

export default function AvatarSelect(props: Props) {
  const handleChange = selectedOption => {
    if (!selectedOption.value && props.type === 'advancedSearch') {
      props.handleChange(true)('random')
    } else if (!selectedOption.value && props.type === 'buildVillage') {
      props.handleChange(false)('random')
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

  return (
    <Select
      className={props.className}
      classNamePrefix="react-select"
      defaultValue={options[0]}
      name="avatar"
      onChange={handleChange}
      options={options}
    />
  )
}
