// @flow
import type {Language} from 'lobby'
import React from 'react'
import Select from 'react-select'

type Props = {
  +className: string,
  +defaultValue: Language,
  +handleChange: boolean => Language => void
}

export default function LanguageSelect(props: Props) {
  const handleChange = selectedOption => {
    if (typeof selectedOption.value === 'string') {
      props.handleChange(true)(selectedOption.value)
    } else {
      props.handleChange(false)('en')
    }
  }
  const options: {label: string, value: Language}[] = [
    {
      label: 'English',
      value: 'en'
    },
    {
      label: 'français',
      value: 'fr'
    },
    {
      label: 'Italiano',
      value: 'it'
    },
    {
      label: '日本語',
      value: 'ja'
    }
  ]
  const defaultValue = options.find(option => option.value === props.defaultValue)

  return (
    <Select
      className={props.className}
      classNamePrefix="react-select"
      defaultValue={defaultValue}
      onChange={handleChange}
      options={options}
    />
  )
}
