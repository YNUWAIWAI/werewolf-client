import * as React from 'react'
import AgentIcon from './AgentIcon'
import {village} from '../../types'

interface Props {
  readonly image: string
  readonly initial: string
  readonly status: village.AgentStatus
}

export default function ResultCellImage(props: Props) {
  return (
    <AgentIcon
      additionalClass={props.status === 'alive' ? '' : 'dead'}
      className="vi--result--cell--image"
      image={props.image}
      initial={props.initial}
    />
  )
}
