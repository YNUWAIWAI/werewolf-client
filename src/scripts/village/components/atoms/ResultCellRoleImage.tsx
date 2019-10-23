import * as React from 'react'
import RoleIcon from './RoleIcon'
import {village} from '../../types'

interface Props {
  readonly image: string
  readonly name: string
  readonly status: village.AgentStatus
}

export default function ResultCellRoleImage(props: Props) {
  return (
    <RoleIcon
      additionalClass={props.status === 'alive' ? '' : 'dead'}
      className="vi--result--cell--roleImage"
      image={props.image}
      name={props.name}
    />
  )
}
