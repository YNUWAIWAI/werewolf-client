// @flow
import React from 'react'

type Props = {
  class: string,
  text: string,
  transition: string => void => void,
  type: string
}

export default function MenuItem(props: Props) {
  return (
    <li className={props.class} onClick={props.transition(props.type)}>
      {props.text}
    </li>
  )
}
