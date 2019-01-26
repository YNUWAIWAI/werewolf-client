/* global lobby */
import * as React from 'react'
import {ActionMeta, ValueType} from 'react-select/lib/types'
import Select from 'react-select'

interface Props {
  readonly className: string
  readonly defaultValue: lobby.Language
  readonly handleChange: (valid: boolean) => (value: lobby.Language) => void
}

interface Option {
  readonly label: string
  readonly value: lobby.Language
}

export default function LanguageSelect(props: Props) {
  const handleChange = (selectedOption: ValueType<Option>, action: ActionMeta) => {
    if (!selectedOption) { // selectedOption: null | undifined
      return
    }
    if (Array.isArray(selectedOption)) { // selectedOption: Option[]
      props.handleChange(false)(lobby.Language.en)
    } else { // selectedOption: Option
      props.handleChange(true)(selectedOption.value)
    }
  }
  const options: Option[] = [
    {
      label: 'English',
      value: lobby.Language.en
    },
    {
      label: 'français',
      value: lobby.Language.fr
    },
    {
      label: 'Italiano',
      value: lobby.Language.it
    },
    {
      label: '日本語',
      value: lobby.Language.ja
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
