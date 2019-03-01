import * as React from 'react'

interface Props {
  readonly image: string
  readonly name: string
  readonly numberOfAgents: number
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
      <div className="prediction--role--name">
        {props.name}
      </div>
    </div>
  )
}
