// @flow
import React from 'react'

type Props = {
  class: string,
  id: string,
  image: string,
  name: string,
  numberOfAgents: number
}

export default function MemberRole(props: Props) {
  return (
    <div className={props.class} data-id={props.id} data-tooltip={props.name}>
      <img src={props.image} />
      {`✕${props.numberOfAgents}`}
    </div>
  )
}
