// @flow
import {FormattedMessage} from 'react-intl'
import Loader from '../atoms/svg/Loader'
import React from 'react'
import type {Target} from 'lobby'

type Props = {
  +className: string,
  +disabled?: boolean,
  +id: string,
  +isLoading?: boolean,
  +transition: Target => void,
  +types: Target[]
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
