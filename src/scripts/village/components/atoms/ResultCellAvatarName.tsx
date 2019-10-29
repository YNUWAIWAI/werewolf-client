import * as React from 'react'
import {village} from '../../types'

interface Props {
  readonly status: village.CharacterStatus
  readonly text: string
}

export default function ResultCellAvatarName(props: Props) {
  return (
    <div className={`vi--result--cell--avatarName ${props.status === 'alive' ? '' : 'dead'}`}>
      {props.text}
    </div>
  )
}
