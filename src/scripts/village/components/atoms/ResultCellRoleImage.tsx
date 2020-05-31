import * as React from 'react'
import {RoleIcon} from './RoleIcon'
import {village} from '../../types'

interface Props {
  readonly image: string
  readonly name: string
  readonly status: village.CharacterStatus
}

export const ResultCellRoleImage: React.FC<Props> = props => (
  <RoleIcon
    additionalClass={props.status === 'alive' ? '' : 'dead'}
    className="vi--result--cell--roleImage"
    image={props.image}
    name={props.name}
  />
)
ResultCellRoleImage.displayName = 'ResultCellRoleImage'
