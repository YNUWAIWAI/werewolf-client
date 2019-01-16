import * as React from 'react'

export interface Props {
  readonly additionalClass?: string
  readonly class: string
  readonly handleOnClick?: () => void
  readonly image: string
  readonly name: string
}

export default function AgentIcon(props: Props) {
  return (
    <div
      className={`${props.class} ${props.additionalClass || ''}`}
      onClick={props.handleOnClick}
    >
      <img
        className={`${props.class}--image`}
        src={props.image}
      />
      <span className={`${props.class}--name`}>
        {props.name}
      </span>
    </div>
  )
}
