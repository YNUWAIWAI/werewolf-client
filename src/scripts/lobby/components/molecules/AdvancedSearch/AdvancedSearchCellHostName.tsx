import * as React from 'react'
import AdvancedSearchProp from '../../atoms/AdvancedSearchProp'
import {FormattedMessage} from 'react-intl'
import TextInput from '../../atoms/TextInput'

interface Props {
  readonly checked: boolean
  readonly handleCheckboxChange: (value: boolean) => void
  readonly handleValueChange: (valid: boolean) => (value: string) => void
  readonly navigatable: boolean
  readonly valid: boolean
}

const values = {
  max: 15,
  min: 5
}

export default function AdvancedSearchCellHostName(props: Props) {
  return (
    <>
      <AdvancedSearchProp
        checked={props.checked}
        handleChange={props.handleCheckboxChange}
        name="hostName"
        navigatable={props.navigatable}
        valid={props.valid}
      />
      <FormattedMessage
        id="AdvancedSearch.placeholder(hostName)"
        values={values}
      >
        {
          text => (
            <TextInput
              className="lo--advanced-search--input"
              handleChange={props.handleValueChange}
              initialValue=""
              max={values.max}
              min={values.min}
              navigatable={props.navigatable}
              placeholder={typeof text === 'string' ? text : ''}
              required={false}
            />
          )
        }
      </FormattedMessage>
    </>
  )
}
