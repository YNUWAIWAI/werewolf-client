import * as React from 'react'
import {
  Avatar,
  DispatchProps
} from '../templates/SelectRobotAvatar'
import SelectAvatarTableBodyAccessToken from '../atoms/SelectAvatarTableBodyAccessToken'
import SelectAvatarTableBodyAuthorized from '../atoms/SelectAvatarTableBodyAuthorized'
import SelectAvatarTableBodyAutomation from '../atoms/SelectAvatarTableBodyAutomation'
import SelectAvatarTableBodyAvatarName from '../atoms/SelectAvatarTableBodyAvatarName'
import SelectAvatarTableBodyCheckBox from '../atoms/SelectAvatarTableBodyCheckBox'
import SelectAvatarTableBodyStatus from '../atoms/SelectAvatarTableBodyStatus'
import SelectAvatarTableBodyTest from '../atoms/SelectAvatarTableBodyTest'
import {lobby} from '../../types'

interface Props {
  readonly avatar: Avatar
  readonly handleAvatarNameChange: DispatchProps['handleAvatarNameChange']
}

export default function SelectRobotAvatarTableBody(props: Props) {
  const rows = props.avatar.allIds.map(id => {
    const avatar = props.avatar.byId[id]

    return (
      <div
        className="lo--select-avatar--table--body--row"
        key={id}
      >
        <SelectAvatarTableBodyCheckBox
          checked={avatar.checked}
        />
        <SelectAvatarTableBodyAvatarName
          handleChange={props.handleAvatarNameChange}
          name={avatar.name}
        />
        <SelectAvatarTableBodyStatus />
        <SelectAvatarTableBodyAuthorized
          authorized={avatar.authorized}
        />
        <SelectAvatarTableBodyTest
          test={avatar.testStatus}
        />
        <SelectAvatarTableBodyAutomation
          automation={avatar.automation}
        />
        <SelectAvatarTableBodyAccessToken />
      </div>
    )
  })

  return (
    <div className="lo--select-avatar--table--body">
      {rows}
    </div>
  )
}
