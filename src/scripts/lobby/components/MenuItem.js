// @flow
import React from 'react'
import type {Target} from 'lobby'

type Props = {
  +class: string,
  +text: string,
  +transition: Target => void,
  +types: Target[]
}

export default function MenuItem(props: Props) {
  return (
    <li
      className={props.class}
      onClick={() => {
        props.types.forEach(type => {
          props.transition(type)
        })
      }}
    >
      {props.text}
    </li>
  )
}
