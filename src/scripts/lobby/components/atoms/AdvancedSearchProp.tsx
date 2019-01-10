import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  readonly checked: boolean;
  readonly handleClick: (checked: boolean) => void;
  readonly name: string;
  readonly validity: boolean;
}

export default function AdvancedSearchProp(props: Props) {
  return (
    <div className="advanced-search--prop">
      <input
        checked={props.checked}
        disabled={!props.validity}
        id={props.name}
        onChange={event => props.handleClick(event.target.checked)}
        readOnly
        type="checkbox"
      />
      <FormattedMessage
        id={`AdvancedSearch.label(${props.name})`}
      >
        {
          (text: string) =>
            <label htmlFor={props.name}>
              {text}
            </label>
        }
      </FormattedMessage>
    </div>
  )
}
