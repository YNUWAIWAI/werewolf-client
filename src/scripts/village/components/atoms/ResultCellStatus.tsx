import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {village} from '../../types'

interface Props {
  readonly status: village.CharacterStatus
}

export const ResultCellStatus: React.FC<Props> = props => (
  <div
    className={`vi--result--cell--status ${props.status === 'alive' ? '' : 'dead'}`}
  >
    <FormattedMessage
      id={`Result.status(${props.status})`}
    />
  </div>
)
ResultCellStatus.displayName = 'ResultCellStatus'
