// @flow
import React from 'react'

type Props = {
  +checked: boolean,
  +handleClick: boolean => void,
  +label: string,
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
      <label htmlFor={props.name}>
        {props.label}
      </label>
    </div>
  )
}
