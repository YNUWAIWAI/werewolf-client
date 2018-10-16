// @flow
import {FormattedMessage} from 'react-intl'
import React from 'react'

type Props = {
  +checked: boolean,
  +handleClick: boolean => void,
  +name: string,
  +validity: boolean
}

export default function AdvancedSearchProp(props: Props) {
  return (
    <div className="advanced-search--prop">
      <input
        checked={props.checked}
        disabled={!props.validity}
        id={props.name}
        onClick={event => props.handleClick(event.target.checked)}
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
