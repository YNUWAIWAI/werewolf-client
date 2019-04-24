import * as React from 'react'

interface Props {
  readonly image: string
  readonly name: string
  readonly numberOfAgents: number
}

export default function PredictionRole(props: Props) {

  return (
    <div
      className="vi--prediction--role"
      onMouseOver={() => console.log(props.name)}
    >
      <img
        className="vi--prediction--role--image"
        src={props.image}
      />
      <div className="vi--prediction--role--times">
        {'×'}
      </div>
      <div className="vi--prediction--role--number">
        {props.numberOfAgents}
      </div>
      <div className="vi--prediction--role--name">
        {props.name}
      </div>
    </div>
  )
}
