import * as React from 'react'
import MemberRoleList from '../MemberRoleList'
import {getCastFromNumberOfPlayers} from '../../../util'
import {lobby} from '../../../types'

interface Props {
  readonly checked: boolean
  readonly handleSelect: (checked: boolean) => void
  readonly numberOfPlayers: number
  readonly member: lobby.Member
}

export default function SupportSelectMemberSelectOption(props: Props) {
  const label = `${props.numberOfPlayers}-${props.member}`
  const className = 'lo--support-select--member-select--option'

  return (
    <label
      className={className}
      htmlFor={`member${label}`}
    >
      <div
        className={`${className}--checkbox`}
      >
        <input
          checked={props.checked}
          id={`member${label}`}
          name="member"
          onChange={() => props.handleSelect(!props.checked)}
          type="checkbox"
        />
      </div>
      <div
        className={`${className}--text`}
      >
        {label}
      </div>
      <MemberRoleList
        className={`${className}--role-list`}
        role={getCastFromNumberOfPlayers(props.numberOfPlayers)[props.member]}
      />
    </label>
  )
}
