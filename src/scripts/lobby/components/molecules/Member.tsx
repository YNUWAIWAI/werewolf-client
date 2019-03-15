import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import MemberRole from '../atoms/MemberRole'
import {ORDERED_ROLE_LIST} from '../../constants/Role'

interface Props {
  readonly human: Readonly<lobby.Human>
  readonly robot: Readonly<lobby.Robot>
  readonly role: Readonly<lobby.RoleSetting>
}

export default function Member(props: Props) {
  const items = ORDERED_ROLE_LIST.map(item =>
    <MemberRole
      className="lo--village--item--member--role--item"
      id={item.id}
      image={item.image}
      key={item.id}
      name={item.name.ja}
      numberOfAgents={props.role[item.id]}
    />
  )

  return (
    <div className="lo--village--item--member">
      <FormattedMessage
        id="Member.min"
        values={{
          num: props.robot.min
        }}
      >
        {
          text =>
            <div className="lo--village--item--member--robot">
              {text}
            </div>

        }
      </FormattedMessage>
      <FormattedMessage
        id="Member.max"
        values={{
          num: props.human.max
        }}
      >
        {
          text =>
            <div className="lo--village--item--member--human">
              {text}
            </div>

        }
      </FormattedMessage>
      <div className="lo--village--item--member--role">
        {items}
      </div>
    </div>
  )
}
