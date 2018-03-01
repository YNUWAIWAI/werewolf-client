import Day from '../containers/DayContainer'
import React from 'react'
import Role from '../containers/RoleContainer'

export default function Info(props) {
  return (
    <div className="info" id="info">
      <Day />
      <Role />
    </div>
  )
}
