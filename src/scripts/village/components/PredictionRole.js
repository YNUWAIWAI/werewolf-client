// @flow
import React from 'react'

type Props = {
  +image: string,
  +name: string,
  +numberOfAgents: number
}

export default function PredictionRole(props: Props) {
  return (
    <div data-tooltip={props.name}>
      <img src={props.image} />
      {props.numberOfAgents >= 0 ? `✕${props.numberOfAgents}` : ''}
    </div>
  )
}
