// @flow
import Timer, {type Props as TimerProps} from '../atoms/Timer'
import {FormattedMessage} from 'react-intl'
import type {Phase} from 'village'
import React from 'react'
import {spaceSeparatedToCamelCase} from '../../util'

export type StateProps = {
  +date: number,
  +phase: Phase,
  +timer: TimerProps
}
export type OwnProps = {}
export type Props =
  & StateProps
  & OwnProps

export default function InfoDay(props: Props) {
  const phase = props.phase === 'flavor text' ? 'night' : props.phase

  return (
    <div className="info--day">
      <div className="info--day--text">
        <FormattedMessage
          id={`InfoDay.${spaceSeparatedToCamelCase(phase)}`}
          values={{
            date: props.date
          }}
        />
        <Timer {... props.timer} />
      </div>
    </div>
  )
}
