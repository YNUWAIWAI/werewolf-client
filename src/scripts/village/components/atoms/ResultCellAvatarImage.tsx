import * as React from 'react'
import * as village from '../../types'
import AgentIcon from './AgentIcon'

interface Props {
  readonly image: string
  readonly status: village.AgentStatus
}

export default function ResultCellAvatarImage(props: Props) {
  return (
    <AgentIcon
      additionalClass={props.status === 'alive' ? '' : 'dead'}
      className="vi--result--cell--avatarImage"
      image={props.image}
    />
  )
}
