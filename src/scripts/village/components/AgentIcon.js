// @flow
import React from 'react'

type Props = {
  +class: string,
  +image: string,
  +name: string
}

export default function AgentIcon(props: Props) {
  return (
    <div className={props.class}>
      <img
        className={`${props.class}--image`}
        src={props.image}
      />
      <span className={`${props.class}--name`}>
        {props.name}
      </span>
    </div>
  )
}
