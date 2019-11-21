import * as React from 'react'
import SelectAvatarTableBodyAccessToken from '../atoms/SelectAvatarTableBodyAccessToken'
import SelectAvatarTableBodyAuthorized from '../atoms/SelectAvatarTableBodyAuthorized'
import SelectAvatarTableBodyAutomation from '../atoms/SelectAvatarTableBodyAutomation'
import SelectAvatarTableBodyAvatarName from '../atoms/SelectAvatarTableBodyAvatarName'
import SelectAvatarTableBodyCheckBox from '../atoms/SelectAvatarTableBodyCheckBox'
import SelectAvatarTableBodyStatus from '../atoms/SelectAvatarTableBodyStatus'
import SelectAvatarTableBodyTest from '../atoms/SelectAvatarTableBodyTest'
import {lobby} from '../../types'

export interface StateProps {
  readonly avatar: {
    readonly allIds: string[]
    readonly byId: {
      readonly [id: string]: {
        readonly accessToken: lobby.Token
        readonly automation: lobby.Automation
        readonly authorized: lobby.Authorized
        readonly checked: boolean
        readonly name: string
        readonly status: lobby.AvatarStatus
        readonly testStatus: lobby.TestStatus
      }
    }
  }
}
export interface DispatchProps {
  readonly handleAccept: () => void
  readonly handleAvatarNameChange: (valid: boolean) => (value: string) => void
  readonly handleSelectAvatar: (id: string) => () => void
  readonly renewAccessToken: () => void
}
export type Props = StateProps & DispatchProps

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
          handleClick={props.handleSelectAvatar(id)}
        />
        <SelectAvatarTableBodyAvatarName
          handleChange={props.handleAvatarNameChange}
          name={avatar.name}
        />
        <SelectAvatarTableBodyStatus
          status={avatar.status}
        />
        <SelectAvatarTableBodyAuthorized
          authorized={avatar.authorized}
          handleClick={props.handleAccept}
        />
        <SelectAvatarTableBodyTest
          test={avatar.testStatus}
        />
        <SelectAvatarTableBodyAutomation
          automation={avatar.automation}
        />
        <SelectAvatarTableBodyAccessToken
          renewAccessToken={props.renewAccessToken}
          token={avatar.accessToken}
        />
      </div>
    )
  })

  return (
    <div className="lo--select-avatar--table--body">
      {rows}
    </div>
  )
}
