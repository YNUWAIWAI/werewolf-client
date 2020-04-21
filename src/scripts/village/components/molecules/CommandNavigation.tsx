import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import Loader from '../atoms/svg/Loader'
import {Navigation} from '../../constants/ActionTypes'

export interface Props {
  readonly handleClick: (type: Navigation) => void
  readonly items: {
    readonly className?: string
    readonly disabled?: boolean
    readonly id: string
    readonly isLoading?: boolean
    readonly type: Navigation
  }[]
  readonly navigatable: boolean
}

export default function CommandNavigation(props: Props) {
  const items = props.items.map(item => (
    <button
      className={`vi--command--navigation--button ${item.className || ''} ${item.isLoading ? 'isLoading' : ''}`}
      disabled={item.disabled || item.isLoading}
      key={item.id}
      onClick={() => {
        if (!item.disabled && !item.isLoading) {
          props.handleClick(item.type)
        }
      }}
      tabIndex={props.navigatable ? 0 : -1}
    >
      {
        item.isLoading ?
          <Loader>
            <FormattedMessage
              id={item.id}
            />
          </Loader> :
          <FormattedMessage
            id={item.id}
          />
      }
    </button>
  ))

  return (
    <div className="vi--command--navigation">
      {items}
    </div>
  )
}
