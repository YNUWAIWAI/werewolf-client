// @flow
import type {Human, Robot, RoleSetting} from 'lobby'
import {FormattedMessage} from 'react-intl'
import MemberRole from '../atoms/MemberRole'
import {ORDERED_ROLE_LIST} from '../../constants/Role'
import React from 'react'

type Props = {
  +human: Human,
  +robot: Robot,
  +role: RoleSetting
}

export default function Member(props: Props) {
  const items = ORDERED_ROLE_LIST.map(item =>
    <MemberRole
      class="village--item--member--role--item"
      id={item.id}
      image={item.image}
      key={item.id}
      name={item.name.ja}
      numberOfAgents={props.role[item.id]}
    />
  )

  return (
    <div className="village--item--member">
      <FormattedMessage
        id="Member.min"
        values={{
          num: props.robot.min
        }}
      >
        {
          (text: string) =>
            <div className="village--item--member--robot">
              {text}
            </div>

        }
      </FormattedMessage>
      <FormattedMessage
        id="Member.max"
        values={{
          num: props.robot.min
        }}
      >
        {
          (text: string) =>
            <div className="village--item--member--human">
              {text}
            </div>

        }
      </FormattedMessage>
      <div className="village--item--member--role">
        {items}
      </div>
    </div>
  )
}
