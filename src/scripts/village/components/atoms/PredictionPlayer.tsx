import * as React from 'react'
import AgentIcon from './AgentIcon'

interface Props {
  readonly image: string
  readonly initial: string
  readonly name: string
  readonly status: string
  readonly isSilent: boolean
}

export default function PredictionPlayer(props: Props) {
  const isSilent = props.isSilent ? 'silent' : ''

  return (
    <AgentIcon
      additionalClass={props.status === 'alive' ? isSilent : 'dead'}
      className="vi--prediction--player"
      image={props.image}
      initial={props.initial}
      name={props.name}
    />
  )
}
