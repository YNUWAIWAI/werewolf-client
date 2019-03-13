import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  readonly checked: boolean
  readonly handleChange: (checked: boolean) => void
  readonly name: string
  readonly valid: boolean
}

export default function AdvancedSearchProp(props: Props) {
  const handleChange = () => {
    if (props.valid) {
      props.handleChange(!props.checked)
    }
  }

  return (
    <div className="advanced-search--prop">
      <input
        checked={props.checked}
        disabled={!props.valid}
        id={props.name}
        onChange={() => handleChange()}
        readOnly
        type="checkbox"
      />
      <FormattedMessage
        id={`AdvancedSearch.label(${props.name})`}
      >
        {
          text =>
            <label htmlFor={props.name}>
              {text}
            </label>
        }
      </FormattedMessage>
    </div>
  )
}
