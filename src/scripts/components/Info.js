import Day from '../containers/DayContainer'
import React from 'react'
import ReactDOM from 'react-dom'
import Role from '../containers/RoleContainer'

export default function Info(props) {
  return (
    <div id="info" class="info">
      <Day />
      <Role />
    </div>
  )
}
