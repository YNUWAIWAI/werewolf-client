import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  readonly checked: boolean
  readonly handleChange: (checked: boolean) => void
  readonly name: string
  readonly navigatable: boolean
  readonly valid: boolean
}

export default function AdvancedSearchProp(props: Props) {
  const handleChange = () => {
    if (props.valid) {
      props.handleChange(!props.checked)
    }
  }

  return (
    <label
      className="lo--advanced-search--prop"
      htmlFor={props.name}
    >
      <input
        checked={props.checked}
        disabled={!props.valid}
        id={props.name}
        onChange={handleChange}
        readOnly
        tabIndex={props.navigatable ? 0 : -1}
        type="checkbox"
      />
      <FormattedMessage
        id={`AdvancedSearch.label(${props.name})`}
      >
        {
          text => (
            <span>
              {text}
            </span>
          )
        }
      </FormattedMessage>
    </label>
  )
}
