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
import Select from './CustomizedSelect'
import {lobby} from '../../../types'
import {useIntl} from 'react-intl'

interface Props {
  readonly className: string
  readonly defaultValue: lobby.Automation
  readonly handleChange: (valid: boolean) => (automation: lobby.Automation) => void
  readonly navigatable: boolean
}

interface Option {
  readonly label: string
  readonly value: lobby.Automation
}

export default function AutomationSelect(props: Props) {
  const intl = useIntl()
  const handleChange = (selectedOption: ValueType<Option>, action: ActionMeta) => {
    if (!selectedOption || Array.isArray(selectedOption)) { // selectedOption: null | undifined | Option[]
      return
    }
    props.handleChange(true)(selectedOption.value)
  }
  const options: Option[] = [
    {
      label: intl.formatMessage(
        {
          id: 'AutomationSelect.full'
        }
      ),
      value: lobby.Automation.full
    },
    {
      label: intl.formatMessage(
        {
          id: 'AutomationSelect.semi'
        }
      ),
      value: lobby.Automation.semi
    }
  ]
  const defaultValue = options.find(option => option.value === props.defaultValue)

  return (
    <Select
      className={`${props.className} automation`}
      defaultValue={defaultValue}
      isSearchable
      navigatable={props.navigatable}
      onChange={handleChange}
      options={options}
    />
  )
}
