import * as React from 'react'
import MemberRoleList from '../../../molecules/MemberRoleList'
import {lobby} from '../../../../types'

type RoleSetting = Readonly<lobby.Payload$BuildVillage['roleSetting']>
interface Props {
  readonly handleMemberChange: () => void
  readonly label: lobby.Member
  readonly role: RoleSetting
}

export default function BuildVillageCellMemberSelectRole(props: Props) {
  return (
    <label
      className="lo--village--item--member-select--role"
      data-opt={props.label}
    >
      <div className="lo--village--item--member-select--role--radio">
        <input
          defaultChecked
          name="member"
          onChange={props.handleMemberChange}
          type="radio"
        />
        <span>
          {props.label}
        </span>
      </div>
      <MemberRoleList
        className="lo--village--item--member-select--role"
        role={props.role}
      />
    </label>
  )
}
