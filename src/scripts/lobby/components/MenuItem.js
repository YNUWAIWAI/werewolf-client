import React from 'react'

export default function CompactMenuItem(props) {
  return (
    <li className={props.class} onClick={props.transition(props.type)}>
      {props.text}
    </li>
  )
}
