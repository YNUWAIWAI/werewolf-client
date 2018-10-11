// @flow
import Timer, {type Props as TimerProps} from './Timer'
import {FormattedMessage} from 'react-intl'
import type {Phase} from 'village'
import React from 'react'
import {spaceSeparatedToCamelCase} from '../util'

export type StateProps = {
  +date: number,
  +phase: Phase,
  +timer: TimerProps
}
export type OwnProps = {}
export type Props =
  & StateProps
  & OwnProps

export default function Day(props: Props) {
  return (
    <div className="info--day">
      <div className="info--day--text">
        <FormattedMessage
          id={`Day.${spaceSeparatedToCamelCase(props.phase)}`}
          values={{
            date: props.date
          }}
        />
        <Timer {... props.timer} />
      </div>
    </div>
  )
}
