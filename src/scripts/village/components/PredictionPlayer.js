// @flow
import React from 'react'

type Props = {
  +image: string,
  +name: string,
  +status: string
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
