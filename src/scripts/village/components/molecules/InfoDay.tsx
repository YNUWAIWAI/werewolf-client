import * as React from 'react'
import * as village from '../../types'
import {FormattedMessage} from 'react-intl'
import Timer from '../../containers/TimerContainer'
import {spaceSeparatedToCamelCase} from '../../util'

export interface StateProps {
  readonly date: number
  readonly phase: village.Phase
}
export type Props = StateProps

export default function InfoDay(props: Props) {
  const phase = props.phase === village.Phase.flavorText ? village.Phase.night : props.phase

  return (
    <div className="vi--info--day">
      <div className="vi--info--day--text">
        <FormattedMessage
          id={`InfoDay.${spaceSeparatedToCamelCase(phase)}`}
          values={{
            date: props.date
          }}
        >
          {
            text => (
              <span>
                {text}
              </span>
            )
          }
        </FormattedMessage>
        <Timer />
      </div>
    </div>
  )
}
