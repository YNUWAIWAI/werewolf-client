// @flow
import React from 'react'
import type {Target} from 'lobby'

type Props = {
  +class: string,
  +disabled?: boolean,
  +text: string,
  +transition: Target => void,
  +types: Target[]
}

export default function MenuItem(props: Props) {
  return (
    <li
      className={`${props.class} ${props.disabled ? 'disabled' : ''}`}
      disabled={props.disabled}
      onClick={() => {
        props.types.forEach(type => {
          if (!props.disabled) {
            props.transition(type)
          }
        })
      }}
    >
      {props.text}
    </li>
  )
}
