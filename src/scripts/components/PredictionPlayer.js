import React from 'react'

export default function PredictionPlayer(props) {
  return (
    <div class={`prediction--player ${props.status === 'alive' ? '' : 'dead'}`} data-player={props.id}>
      <img src={props.image} />
      <span>{props.name}</span>
    </div>
  )
}
