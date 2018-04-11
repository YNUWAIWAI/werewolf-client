// @flow
import Timer, {type Props as TimerProps} from './Timer'
import React from 'react'

export type StateProps = {
  +date: number,
  +phase: string,
  +timer: TimerProps
}
export type OwnProps = {}
export type Props =
  & StateProps
  & OwnProps

export default function Day(props: Props) {
  return (
    <div className="day">
      <div className="day--text">
        <span>
          {`${props.date}日目 ${props.phase}`}
        </span>
        <Timer {... props.timer} />
      </div>
    </div>
  )
}
