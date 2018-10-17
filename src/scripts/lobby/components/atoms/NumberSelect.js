// @flow
import {type InjectIntlProvidedProps, injectIntl} from 'react-intl'
import React from 'react'
import Select from 'react-select'

type Props = {
  +ascendingOrder: boolean,
  +className: string,
  +defaultValue?: number,
  +from: number,
  +handleChange: boolean => number => void,
  +name: string,
  +to: number,
  +type: 'player' | 'robot'
} & InjectIntlProvidedProps

type Option = {
  label: string,
  value: number
}

export default injectIntl(function NumberSelect(props: Props) {
  const handleChange = (selectedOption: Option | []) => {
    if (Array.isArray(selectedOption)) {
      props.handleChange(false)(-1)
    } else {
      props.handleChange(true)(selectedOption.value)
    }
  }
  const options = [... Array(props.to - props.from + 1).keys()]
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
