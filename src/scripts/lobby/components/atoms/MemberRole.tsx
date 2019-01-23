import * as React from 'react'

interface Props {
  readonly className: string
  readonly id: string
  readonly image: string
  readonly name: string
  readonly numberOfAgents: number
}

export default function MemberRole(props: Props) {
  return (
    <div className={props.className} data-id={props.id}>
      <img
        className={`${props.className}--image`}
        src={props.image}
      />
      <span
        className={`${props.className}--times`}
      >
        {'✕'}
      </span>
      <span
        className={`${props.className}--number`}
      >
        {props.numberOfAgents}
      </span>
      <span
        className={`${props.className}--caption`}
      >
        {props.name}
      </span>
    </div>
  )
}
