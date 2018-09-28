// @flow
import React from 'react'

type Props = {
  +caption: string,
  +image: string,
  +numberOfAgents: number
}

export default function PredictionRole(props: Props) {

  return (
    <div className="prediction--role">
      <img
        className="prediction--role--image"
        src={props.image}
      />
      <div className="prediction--role--times">
        {'×'}
      </div>
      <div className="prediction--role--number">
        {props.numberOfAgents}
      </div>
      <div className="prediction--role--caption">
        {props.caption}
      </div>
    </div>
  )
}
