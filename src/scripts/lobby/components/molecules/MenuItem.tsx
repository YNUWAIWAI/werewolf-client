import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import Loader from '../atoms/svg/Loader'
import {Target} from '../../actions'

export interface Props {
  readonly className: string
  readonly disabled?: boolean
  readonly id: string
  readonly isLoading?: boolean
  readonly navigative: boolean
  readonly transition: (target: Target) => void
  readonly types: Target[]
}

export default function MenuItem(props: Props) {
  return (
    <FormattedMessage
      id={props.id}
    >
      {
        text => (
          <li
            className={props.className}
            onClick={() => {
              props.types.forEach(type => {
                if (!props.disabled && !props.isLoading) {
                  props.transition(type)
                }
              })
            }}
          >
            <button
              className={`${props.className}--button ${props.isLoading ? 'loader' : ''}`}
              disabled={props.disabled || props.isLoading}
              tabIndex={props.navigative ? 0 : -1}
            >
              {
                props.isLoading ?
                  <Loader>
                    {text}
                  </Loader> :
                  text
              }
            </button>
          </li>
        )
      }
    </FormattedMessage>
  )
}
