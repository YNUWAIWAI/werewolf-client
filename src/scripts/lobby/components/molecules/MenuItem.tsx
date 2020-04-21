import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import Loader from '../atoms/svg/Loader'
import {Target} from '../../actions'

export interface Props {
  readonly className: string
  readonly disabled?: boolean
  readonly id: string
  readonly isLoading?: boolean
  readonly navigatable: boolean
  readonly transition: (target: Target) => void
  readonly types: Target[]
}

export default function MenuItem(props: Props) {
  const handleClick = () => {
    props.types.forEach(type => {
      if (!props.disabled && !props.isLoading) {
        props.transition(type)
      }
    })
  }

  return (
    <li
      className={props.className}
      onClick={handleClick}
    >
      <button
        className={`${props.className}--button ${props.isLoading ? 'loader' : ''}`}
        disabled={props.disabled || props.isLoading}
        tabIndex={props.navigatable ? 0 : -1}
      >
        {
          props.isLoading ?
            <Loader>
              <FormattedMessage
                id={props.id}
              />
            </Loader> :
            <FormattedMessage
              id={props.id}
            />
        }
      </button>
    </li>
  )
}
