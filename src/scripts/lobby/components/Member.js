import MemberRole from './MemberRole'
import {ORDERED_ROLE_LIST} from '../constants/Role'
import React from 'react'

export default function Member(props) {
  const items = ORDERED_ROLE_LIST.map(item =>
    <MemberRole
      id={item.id}
      image={item.image}
      key={item.id}
      name={item.name.ja}
      numberOfAgents={props.role[item.id]}
    />
  )

  return (
    <div className="village--item--member">
      <div className="village--item--member--robot">
        {`min ${props.robot.min} robots`}
      </div>
      <div className="village--item--member--human">
        {`max ${props.human.max} humans`}
      </div>
      <div className="village--item--member--role">
        {items}
      </div>
    </div>
  )
}
