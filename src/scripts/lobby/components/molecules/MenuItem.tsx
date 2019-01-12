import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import Loader from '../atoms/svg/Loader'

interface Props {
  readonly className: string
  readonly disabled?: boolean
  readonly id: string
  readonly isLoading?: boolean
  readonly transition: (target: lobby.Target) => void
  readonly types: lobby.Target[]
}

export default function MenuItem(props: Props) {
  return (
    <FormattedMessage
      id={props.id}
    >
      {
        (text: string) =>
          <li
            className={`${props.className} ${props.disabled ? 'disabled' : ''} ${props.isLoading ? 'loader' : ''}`}
            onClick={() => {
              props.types.forEach(type => {
                if (!props.disabled) {
                  props.transition(type)
                }
              })
            }}
          >
            {
              props.isLoading ?
                <Loader /> :
                text
            }
          </li>
      }
    </FormattedMessage>
  )
}
