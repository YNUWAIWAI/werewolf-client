import * as React from 'react'
import AgentIcon from './AgentIcon'
import {village} from '../../types'

interface Props {
  readonly image: string
  readonly status: village.CharacterStatus
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
