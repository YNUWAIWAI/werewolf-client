import React from 'react'

export default function MenuItem(props) {
  return (
    <li className="menu--item" onClick={props.transition(props.type)}>
      {props.text}
    </li>
  )
}
