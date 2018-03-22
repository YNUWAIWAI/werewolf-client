// @flow
import React from 'react'
import Timer from '../containers/TimerContainer'

export type StateProps = {
  date: number,
  phase: string
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
        <Timer />
      </div>
    </div>
  )
}
