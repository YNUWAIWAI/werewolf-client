import * as React from 'react'
import AdvancedSearchProp from '../../atoms/AdvancedSearchProp'
import {FormattedMessage} from 'react-intl'
import TextInput from '../../atoms/TextInput'

export interface Props {
  readonly checked: boolean
  readonly navigatable: boolean
  readonly valid: boolean
  readonly handleCheckboxChange: (value: boolean) => void
  readonly handleValueChange: (valid: boolean) => (value: string) => void
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
          text => {
            if (typeof text !== 'string') {
              return null
            }

            return (
              <TextInput
                className="lo--advanced-search--input"
                handleChange={props.handleValueChange}
                initialValue=""
                max={values.max}
                min={values.min}
                navigatable={props.navigatable}
                placeholder={text}
                required={false}
              />
            )
          }
        }
      </FormattedMessage>
    </>
  )
}
