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
            className={`${props.className} ${props.disabled ? 'disabled' : ''}`}
            onClick={() => {
              props.types.forEach(type => {
                if (!props.disabled && !props.isLoading) {
                  props.transition(type)
                }
              })
            }}
          >
            {
              props.isLoading ?
                <button
                  className={`${props.className}--button ${props.isLoading ? 'loader' : ''}`}
                  tabIndex={-1}
                >
                  <Loader>
                    {text}
                  </Loader>
                </button> :
                <button
                  className={`${props.className}--button`}
                  tabIndex={props.navigative ? 0 : -1}
                >
                  {text}
                </button>
            }
          </li>
        )
      }
    </FormattedMessage>
  )
}
