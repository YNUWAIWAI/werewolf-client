// @flow
import React from 'react'

export type Props = {
  +additionalClass?: string,
  +class: string,
  +handleOnClick?: void => void,
  +image: string,
  +name: string,
}

export default function AgentIcon(props: Props) {
  return (
    <div
      className={`${props.class} ${props.additionalClass || ''}`}
      onClick={props.handleOnClick}
    >
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
