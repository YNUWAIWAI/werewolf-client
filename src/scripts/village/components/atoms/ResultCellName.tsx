import * as React from 'react'
import {village} from '../../types'

interface Props {
  readonly status: village.CharacterStatus
  readonly text: string
}

export const ResultCellName: React.FC<Props> = props => (
  <div className={`vi--result--cell--name ${props.status === 'alive' ? '' : 'dead'}`}>
    {props.text}
  </div>
)
ResultCellName.displayName = 'ResultCellName'
