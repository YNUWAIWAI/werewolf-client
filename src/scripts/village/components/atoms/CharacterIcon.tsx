import * as React from 'react'

export interface Props {
  readonly additionalClass?: string
  readonly className: string
  readonly handleOnClick?: () => void
  readonly image: string
  readonly initial?: string
  readonly name?: string
}

export default function CharacterIcon(props: Props) {
  return (
    <div
      className={`${props.className} ${props.additionalClass || ''}`}
      onClick={props.handleOnClick}
    >
      {
        props.initial ?
          <div
            className={`${props.className}--initial`}
          >
            {props.initial}
          </div> :
          null
      }
      <img
        className={`${props.className}--image`}
        src={props.image}
      />
      {
        props.name ?
          <span className={`${props.className}--name`}>
            {props.name}
          </span> :
          null
      }
    </div>
  )
}
