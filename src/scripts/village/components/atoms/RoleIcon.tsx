import * as React from 'react'

export interface Props {
  readonly additionalClass?: string
  readonly className: string
  readonly image: string
  readonly name: string
  readonly numberOfPlayers?: number
}

export default function RoleIcon(props: Props) {
  const times = '×'

  return (
    <div
      className={`${props.className} ${props.additionalClass || ''}`}
    >
      <img
        className={`${props.className}--image`}
        src={props.image}
      />
      {
        typeof props.numberOfPlayers === 'number' ?
          <div className={`${props.className}--times`}>
            {times}
          </div> :
          null
      }
      {
        typeof props.numberOfPlayers === 'number' ?
          <div className={`${props.className}--number`}>
            {props.numberOfPlayers}
          </div> :
          null
      }
      <div className={`${props.className}--name`}>
        {props.name}
      </div>
    </div>
  )
}
