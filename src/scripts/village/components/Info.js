// @flow
import Day from '../containers/DayContainer'
import React from 'react'
import Role from '../containers/RoleContainer'

export default function Info() {
  return (
    <div className="info">
      <Day />
      <Role />
    </div>
  )
}
