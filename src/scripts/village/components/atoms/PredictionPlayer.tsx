import * as React from 'react'

interface Props {
  readonly image: string
  readonly name: string
  readonly status: string
}

export default function PredictionPlayer(props: Props) {
  return (
    <div className={`prediction--player ${props.status === 'alive' ? '' : 'dead'}`}>
      <img
        className="prediction--player--image"
        src={props.image}
      />
      <div className="prediction--player--name">
        {props.name}
      </div>
    </div>
  )
}
