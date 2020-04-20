import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import Timer from '../../containers/TimerContainer'
import {spaceSeparatedToCamelCase} from '../../util'
import {village} from '../../types'

export interface StateProps {
  readonly day: number
  readonly phase: village.Phase
}
export type Props = StateProps

export default function InfoDay(props: Props) {
  const phase = props.phase === village.Phase.flavorText ? village.Phase.night : props.phase

  return (
    <div className="vi--info--day">
      <div className="vi--info--day--text">
        <span>
          <FormattedMessage
            id={`InfoDay.${spaceSeparatedToCamelCase(phase)}`}
            values={{
              day: props.day
            }}
          />
        </span>
        <span>
          <Timer />
        </span>
      </div>
    </div>
  )
}
