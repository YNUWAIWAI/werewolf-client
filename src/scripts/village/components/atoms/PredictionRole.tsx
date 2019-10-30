import * as React from 'react'

interface Props {
  readonly handleMouseEnter: () => void
  readonly handleMouseLeave: () => void
  readonly image: string
  readonly name: string
  readonly numberOfCharacters: number
}

export default function PredictionRole(props: Props) {
  const times = '×'

  return (
    <div
      className="vi--prediction--role"
      onMouseEnter={() => props.handleMouseEnter()}
      onMouseLeave={() => props.handleMouseLeave()}
    >
      <img
        className="vi--prediction--role--image"
        src={props.image}
      />
      <div className="vi--prediction--role--times">
        {times}
      </div>
      <div className="vi--prediction--role--number">
        {props.numberOfCharacters}
      </div>
      <div className="vi--prediction--role--name">
        {props.name}
      </div>
    </div>
  )
}
