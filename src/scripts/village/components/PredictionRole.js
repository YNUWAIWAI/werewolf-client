// @flow
import React from 'react'

type Props = {
  id: string,
  image: string,
  name: string,
  numberOfAgents: number
}

export default function PredictionRole(props: Props) {
  return (
    <div data-role={props.id} data-tooltip={props.name}>
      <img src={props.image} />
      {props.numberOfAgents >= 0 ? `✕${props.numberOfAgents}` : ''}
    </div>
  )
}
