// @flow
import React from 'react'

type Props = {
  +image: string,
  +name: string
}

export default function Player(props: Props) {
  return (
    <div className="player">
      <img className="player--image" src={props.image} />
      <span className="player--name">
        {props.name}
      </span>
    </div>
  )
}
