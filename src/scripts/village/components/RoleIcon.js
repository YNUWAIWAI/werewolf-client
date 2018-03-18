// @flow
import React from 'react'

type Props = {
  +class: string,
  +image: string,
  +name: string
}

export default function RoleIcon(props: Props) {
  return (
    <div className={props.class}>
      <img src={props.image} />
      <span>
        {props.name}
      </span>
    </div>
  )
}
