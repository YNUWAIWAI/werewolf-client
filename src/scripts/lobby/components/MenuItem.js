// @flow
import Loader from './svg/Loader'
import React from 'react'
import type {Target} from 'lobby'

type Props = {
  +class: string,
  +disabled?: boolean,
  +isLoading?: boolean,
  +text: string,
  +transition: Target => void,
  +types: Target[]
}

export default function MenuItem(props: Props) {
  return (
    <li
      className={`${props.class} ${props.disabled ? 'disabled' : ''} ${props.isLoading ? 'loader' : ''}`}
      disabled={props.disabled}
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
          props.text
      }
    </li>
  )
}
