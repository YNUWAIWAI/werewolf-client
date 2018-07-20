// @flow
import React from 'react'

type Props = {
  +image: string,
  +name: string
}

export default function Player(props: Props) {
  return (
    <div className="player">
      <span>
        <img src={props.image} />
      </span>
      {props.name}
    </div>
  )
}
