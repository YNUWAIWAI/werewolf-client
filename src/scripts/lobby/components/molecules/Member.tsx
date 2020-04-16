import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import MemberRoleList from '../molecules/MemberRoleList'
import {lobby} from '../../types'

type Human = Readonly<lobby.Payload$BuildVillage['playerSetting']['human']>
type Robot = Readonly<lobby.Payload$BuildVillage['playerSetting']['robot']>
type RoleSetting = Readonly<lobby.Payload$BuildVillage['roleSetting']>
interface Props {
  readonly human: Human
  readonly robot: Robot
  readonly role: RoleSetting
}

export default function Member(props: Props) {
  return (
    <div className="lo--village--item--member">
      <FormattedMessage
        id="Member.min"
        values={{
          num: props.robot.min
        }}
      >
        {
          text => (
            <div className="lo--village--item--member--robot">
              {text}
            </div>
          )

        }
      </FormattedMessage>
      <FormattedMessage
        id="Member.max"
        values={{
          num: props.human.max
        }}
      >
        {
          text => (
            <div className="lo--village--item--member--human">
              {text}
            </div>
          )

        }
      </FormattedMessage>
      <MemberRoleList
        className="lo--village--item--member--role"
        role={props.role}
      />
    </div>
  )
}
