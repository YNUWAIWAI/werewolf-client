import React from 'react'
import ReactDOM from 'react-dom'

export default function Day(props) {
  return (
    <div id="day" class="day">
      <div class="day--text">
        <span id="day-phase">{props.date}日目 {props.phase}</span>
        <span id="day-time"></span>
      </div>
    </div>
  )
}
