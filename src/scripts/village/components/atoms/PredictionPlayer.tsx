import * as React from 'react'

interface Props {
  readonly image: string
  readonly initial: string
  readonly name: string
  readonly status: string
}

export default function PredictionPlayer(props: Props) {
  return (
    <div
      className={`vi--prediction--player ${props.status === 'alive' ? '' : 'dead'}`}
    >
      <div
        className="vi--prediction--player--initial"
      >
        {props.initial}
      </div>
      <img
        className="vi--prediction--player--image"
        src={props.image}
      />
      <div className="vi--prediction--player--name">
        {props.name}
      </div>
    </div>
  )
}
