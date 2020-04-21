import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {village} from '../../types'

interface Props {
  readonly status: village.CharacterStatus
}

export default function ResultCellStatus(props: Props) {
  return (
    <div
      className={`vi--result--cell--status ${props.status === 'alive' ? '' : 'dead'}`}
    >
      <FormattedMessage
        id={`Result.status(${props.status})`}
      />
    </div>
  )
}
