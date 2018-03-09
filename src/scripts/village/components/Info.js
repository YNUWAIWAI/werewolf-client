// @flow
import Day from '../containers/DayContainer'
import React from 'react'
import Role from '../containers/RoleContainer'

type Props = {}

export default function Info(props: Props) {
  return (
    <div className="info" id="info">
      <Day />
      <Role />
    </div>
  )
}
