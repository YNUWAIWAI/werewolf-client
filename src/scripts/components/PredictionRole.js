import React from 'react'

export default function PredictionRole(props) {
  return (
    <div data-role={props.id} data-tooltip={props.name}>
      <img src={props.image} />
      {props.numberOfAgents > 0 ? `✕${props.numberOfAgents}` : ''}
    </div>
  )
}
