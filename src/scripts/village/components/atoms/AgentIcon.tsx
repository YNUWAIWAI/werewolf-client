import * as React from 'react'
import Question from './svg/Question'

export interface Props {
  readonly additionalClass?: string
  readonly className: string
  readonly handleOnClick?: () => void
  readonly initial: string
  readonly image: string
  readonly name: string
}

export default function AgentIcon(props: Props) {
  if (props.image === '') {
    return (
      <div
        className={`${props.className} ${props.additionalClass || ''}`}
        onClick={props.handleOnClick}
      >
        <Question />
      </div>
    )
  }

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
