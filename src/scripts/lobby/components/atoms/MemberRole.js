// @flow
import React from 'react'

type Props = {
  +className: string,
  +id: string,
  +image: string,
  +name: string,
  +numberOfAgents: number
}

export default function MemberRole(props: Props) {
  return (
    <div className={props.className} data-id={props.id}>
      <img
        className={`${props.className}--image`}
        src={props.image}
      />
      <span
        className={`${props.className}--times`}
      >
        {'✕'}
      </span>
      <span
        className={`${props.className}--number`}
      >
        {props.numberOfAgents}
      </span>
      <span
        className={`${props.className}--caption`}
      >
        {props.name}
      </span>
    </div>
  )
}
