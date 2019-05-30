import * as React from 'react'

export interface Props {
  readonly additionalClass?: string
  readonly className: string
  readonly handleOnClick?: () => void
  readonly image: string
  readonly initial: string
  readonly name: string
}

export default function AgentIcon(props: Props) {
  return (
    <div
      className={`${props.className} ${props.additionalClass || ''}`}
      onClick={props.handleOnClick}
    >
      <div
        className={`${props.className}--initial`}
      >
        {props.initial}
      </div>
      <img
        className={`${props.className}--image`}
        src={props.image}
      />
      <span className={`${props.className}--name`}>
        {props.name}
      </span>
    </div>
  )
}
