// Workaround for https://github.com/microsoft/TypeScript/issues/17002
declare global {
  interface ArrayConstructor {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isArray(arg: readonly any[] | any): arg is readonly any[]
  }
}
// Workaround end

import * as React from 'react'
import {
  ActionMeta,
  ValueType
} from 'react-select/src/types'
import {CustomizedSelect as Select} from './CustomizedSelect'
import {lobby} from '../../../types'

interface Props {
  readonly className: string
  readonly defaultValue: lobby.Language
  readonly handleChange: (valid: boolean) => (value: lobby.Language) => void
  readonly menuPosition: 'absolute' | 'fixed'
  readonly navigatable: boolean
}

interface Option {
  readonly label: string
  readonly value: lobby.Language
}

export const LanguageSelect: React.FC<Props> = props => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      defaultValue={defaultValue}
      menuPosition={props.menuPosition}
      navigatable={props.navigatable}
      onChange={handleChange}
      options={options}
    />
  )
}
LanguageSelect.displayName = 'LanguageSelect'
