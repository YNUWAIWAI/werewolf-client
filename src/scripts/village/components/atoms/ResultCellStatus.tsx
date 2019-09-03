import * as React from 'react'
import * as village from 'types/village'
import {FormattedMessage} from 'react-intl'

interface Props {
  readonly status: village.AgentStatus
}

export default function ResultCellStatus(props: Props) {
  return (
    <FormattedMessage
      id={`Result.status(${props.status})`}
    >
      {
        text => (
          <div
            className={`vi--result--cell--status ${props.status === 'alive' ? '' : 'dead'}`}
          >
            {text}
          </div>
        )
      }
    </FormattedMessage>
  )
}
