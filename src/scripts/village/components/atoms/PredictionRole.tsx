import * as React from 'react'

interface Props {
  readonly handleMouseEnter: (position: {left: number, top: number}) => void
  readonly handleMouseLeave: () => void
  readonly image: string
  readonly name: string
  readonly numberOfPlayers: number
}

export default function PredictionRole(props: Props) {
  const times = '×'
  const handleMouseEnter = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()

    if (window.innerWidth - rect.right < 0) {
      return
    }
    const position = {
      left: (rect.left + rect.right) / 2,
      top: rect.top + rect.height
    }

    props.handleMouseEnter(position)
  }

  return (
    <div
      className="vi--prediction--role"
      onMouseEnter={handleMouseEnter}
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
        {props.numberOfPlayers}
      </div>
      <div className="vi--prediction--role--name">
        {props.name}
      </div>
    </div>
  )
}
