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
      <img src={props.image} />
      <span>
        {props.name}
      </span>
    </div>
  )
}
