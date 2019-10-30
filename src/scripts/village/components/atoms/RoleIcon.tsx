import * as React from 'react'

export interface Props {
  readonly additionalClass?: string
  readonly className: string
  readonly image: string
  readonly name: string
  readonly numberOfCharacters?: number
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
        typeof props.numberOfCharacters === 'number' ?
          <div className={`${props.className}--times`}>
            {times}
          </div> :
          null
      }
      {
        typeof props.numberOfCharacters === 'number' ?
          <div className={`${props.className}--number`}>
            {props.numberOfCharacters}
          </div> :
          null
      }
      <div className={`${props.className}--name`}>
        {props.name}
      </div>
    </div>
  )
}
