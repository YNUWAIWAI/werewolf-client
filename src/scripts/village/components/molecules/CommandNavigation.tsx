import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {Navigation} from '../../constants/ActionTypes'

interface Props {
  readonly handleClick: (type: Navigation) => void
  readonly items: {
    readonly id: string,
    readonly type: Navigation
  }[]
}

export default function CommandNavigation(props: Props) {
  const items = props.items.map(item =>
    <FormattedMessage
      id={item.id}
      key={item.id}
    >
      {
        text =>
          <button
            className="command--navigation--button"
            onClick={() => props.handleClick(item.type)}
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
