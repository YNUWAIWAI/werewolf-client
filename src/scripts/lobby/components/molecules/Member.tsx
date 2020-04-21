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
      <div className="lo--village--item--member--robot">
        <FormattedMessage
          id="Member.min"
          values={{
            num: props.robot.min
          }}
        />
      </div>
      <div className="lo--village--item--member--human">
        <FormattedMessage
          id="Member.max"
          values={{
            num: props.human.max
          }}
        />
      </div>
      <MemberRoleList
        className="lo--village--item--member--role"
        role={props.role}
      />
    </div>
  )
}
