// @flow
import {FormattedMessage} from 'react-intl'
import type {NavigationType} from 'village'
import React from 'react'

type Props = {
  handleClick: NavigationType => void => void,
  items: {
    +id: string,
    +type: NavigationType
  }[]
}

export default function CommandNavigation(props: Props) {
  const items = props.items.map(item =>
    <FormattedMessage
      id={item.id}
      key={item.id}
    >
      {
        (text: string) =>
          <button
            className="command--navigation--button"
            onClick={props.handleClick(item.type)}
          >
            {text}
          </button>
      }
    </FormattedMessage>
  )

  return (
    <div className="command--navigation">
      {items}
    </div>
  )
}
