import * as React from 'react'
import {village} from '../../types'

interface Props {
  readonly status: village.CharacterStatus
  readonly text: string
}

export const ResultCellAvatarName: React.FC<Props> = props => (
  <div className={`vi--result--cell--avatarName ${props.status === 'alive' ? '' : 'dead'}`}>
    {props.text}
  </div>
)
ResultCellAvatarName.displayName = 'ResultCellAvatarName'
