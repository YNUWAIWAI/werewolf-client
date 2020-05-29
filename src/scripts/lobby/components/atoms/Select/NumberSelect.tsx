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
import {useIntl} from 'react-intl'

interface Props {
  readonly ascendingOrder: boolean
  readonly className: string
  readonly defaultValue?: number
  readonly from: number
  readonly handleChange: (valid: boolean) => (value: number) => void
  readonly navigatable: boolean
  readonly to: number
  readonly type: 'player' | 'robot'
}

interface Option {
  readonly label: string
  readonly value: number
}

export const NumberSelect: React.FC<Props> = props => {
  const intl = useIntl()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChange = (selectedOption: ValueType<Option>, action: ActionMeta) => {
    if (!selectedOption) { // selectedOption: null | undifined
      return
    }
    if (Array.isArray(selectedOption)) { // selectedOption: Option[]
      props.handleChange(false)(-1)
    } else { // selectedOption: Option
      props.handleChange(true)(selectedOption.value)
    }
  }
  const options: Option[] = [... Array(props.to - props.from + 1).keys()]
    .map(e => e + props.from)
    .map(option => ({
      label: intl.formatMessage(
        {
          id: `NumberSelect(${props.type})`
        },
        {
          num: option
        }
      ),
      value: option
    }))

  return (
    <Select
      className={props.className}
      defaultValue={
        typeof props.defaultValue === 'number' ?
          {
            label: intl.formatMessage(
              {
                id: `NumberSelect(${props.type})`
              },
              {
                num: props.defaultValue
              }
            ),
            value: props.defaultValue
          } :
          []
      }
      navigatable={props.navigatable}
      onChange={handleChange}
      options={props.ascendingOrder ? options : options.reverse()}
    />
  )
}
NumberSelect.displayName = 'NumberSelect'
