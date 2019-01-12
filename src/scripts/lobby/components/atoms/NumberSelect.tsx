import * as React from 'react'
import Select from 'react-select'
import {injectIntl} from 'react-intl'

interface Props extends ReactIntl.InjectedIntlProps {
  readonly ascendingOrder: boolean
  readonly className: string
  readonly defaultValue?: number
  readonly from: number
  readonly handleChange: (valid: boolean) => (value: number) => void
  readonly name: string
  readonly to: number
  readonly type: 'player' | 'robot'
}

interface Option {
  readonly label: string
  readonly value: number
}

export default injectIntl(function NumberSelect(props: Props) {
  const handleChange = (selectedOption: Option | []) => {
    if (Array.isArray(selectedOption)) { // selectedOption: []
      props.handleChange(false)(-1)
    } else { // selectedOption: Option
      props.handleChange(true)(selectedOption.value)
    }
  }
  const options: Option[] = [... Array(props.to - props.from + 1).keys()]
    .map(e => e + props.from)
    .map(option => ({
      label: props.intl.formatMessage(
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
      classNamePrefix="react-select"
      defaultValue={
        props.defaultValue ?
          {
            label: props.intl.formatMessage(
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
      name={props.name}
      onChange={handleChange}
      options={props.ascendingOrder ? options : options.reverse()}
    />
  )
})
