import * as React from 'react'
import AgentIcon from './AgentIcon'

interface Props {
  readonly image: string
  readonly initial: string
  readonly name: string
  readonly status: string
}

export default function PredictionPlayer(props: Props) {
  return (
    <AgentIcon
      additionalClass={props.status === 'alive' ? '' : 'dead'}
      className="vi--prediction--player"
      image={props.image}
      initial={props.initial}
      name={props.name}
    />
  )
}
