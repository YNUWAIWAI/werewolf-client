import React from 'react'
import Timer from '../containers/TimerContainer'

export default function Day(props) {
  return (
    <div className="day" id="day">
      <div className="day--text">
        <span id="day-phase">
          {`${props.date}日目 ${props.phase}`}
        </span>
        <Timer id="day-time" phaseTimeLimit={props.phaseTimeLimit} />
      </div>
    </div>
  )
}
