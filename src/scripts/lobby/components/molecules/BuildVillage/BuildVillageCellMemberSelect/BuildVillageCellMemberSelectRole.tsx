import * as React from 'react'
import {MemberRoleList} from '../../../molecules/MemberRoleList'
import {lobby} from '../../../../types'

type RoleSetting = Readonly<lobby.Payload$BuildVillage['roleSetting']>
interface Props {
  readonly defaultChecked?: boolean
  readonly handleMemberChange: () => void
  readonly label: lobby.Member
  readonly role: RoleSetting
}

export const BuildVillageCellMemberSelectRole: React.FC<Props> = props => (
  <label
    className={`lo--village--item--member-select--role ${props.label}`}
    htmlFor={`member${props.label}`}
  >
    <div
      className="lo--village--item--member-select--role--radio"
    >
      <input
        defaultChecked={props.defaultChecked}
        id={`member${props.label}`}
        name="member"
        onChange={props.handleMemberChange}
        type="radio"
      />
    </div>
    <div
      className="lo--village--item--member-select--role--text"
    >
      {props.label}
    </div>
    <MemberRoleList
      className="lo--village--item--member-select--role--list"
      role={props.role}
    />
  </label>
)
BuildVillageCellMemberSelectRole.displayName = 'BuildVillageCellMemberSelectRole'
