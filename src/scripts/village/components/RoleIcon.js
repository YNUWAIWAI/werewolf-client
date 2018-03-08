// @flow
import React from 'react'

type Props = {
  agent: string,
  class: string,
  image: string
}

export default function RoleIcon(props: Props) {
  return (
    <div className={props.class}>
      <img src={props.image} />
      <span>
        {props.agent || ''}
      </span>
    </div>
  )
}
