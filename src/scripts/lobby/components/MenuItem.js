// @flow
import React from 'react'

type Props = {
  +class: string,
  +text: string,
  +transition: Target => void => void,
  +type: Target
}

export default function MenuItem(props: Props) {
  return (
    <li className={props.class} onClick={props.transition(props.type)}>
      {props.text}
    </li>
  )
}
