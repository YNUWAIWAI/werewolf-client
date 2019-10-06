import * as React from 'react'
import * as village from '../../types'
import RoleIcon from './RoleIcon'

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
