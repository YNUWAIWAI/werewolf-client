import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {TimerContainer as Timer} from '../../containers/TimerContainer'
import {spaceSeparatedToCamelCase} from '../../util'
import {village} from '../../types'

export interface StateProps {
  readonly day: number
  readonly phase: village.Phase
}
export type Props = StateProps

export const InfoDay: React.FC<Props> = props => {
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
InfoDay.displayName = 'InfoDay'
