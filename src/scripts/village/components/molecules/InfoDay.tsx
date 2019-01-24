import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import Timer from '../../containers/TimerContainer'
import {spaceSeparatedToCamelCase} from '../../util'

export interface StateProps {
  readonly date: number
  readonly phase: village.Phase
}
export interface OwnProps {}
export interface Props extends StateProps, OwnProps {}

export default function InfoDay(props: Props) {
  const phase = props.phase === village.Phase.flavorText ? village.Phase.night : props.phase

  return (
    <div className="info--day">
      <div className="info--day--text">
        <FormattedMessage
          id={`InfoDay.${spaceSeparatedToCamelCase(phase)}`}
          values={{
            date: props.date
          }}
        />
        <Timer />
      </div>
    </div>
  )
}
