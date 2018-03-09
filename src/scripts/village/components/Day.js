// @flow
import React from 'react'
import Timer from '../containers/TimerContainer'

type Props = {
  date: number,
  phase: string
}

export default function Day(props: Props) {
  return (
    <div className="day">
      <div className="day--text">
        <span>
          {`${props.date}日目 ${props.phase}`}
        </span>
        <Timer id="day-time" phaseTimeLimit={props.phaseTimeLimit} />
      </div>
    </div>
  )
}
