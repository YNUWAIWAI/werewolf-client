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
        readonly isHover: boolean
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
  readonly handleHoverAvatar: (id: string) => () => void
  readonly handleSelectAvatar: (id: string) => () => void
  readonly renewAccessToken: () => void
}
export type Props = StateProps & DispatchProps

export default function SelectRobotAvatarTableBody(props: Props) {
  const rows = props.avatar.allIds.map(id => {
    const avatar = props.avatar.byId[id]
    const additionalClassName = [
      avatar.isHover ? 'hover' : '',
      avatar.checked ? 'selected' : ''
    ]

    return (
      <React.Fragment
        key={id}
      >
        <SelectAvatarTableBodyCheckBox
          additionalClassName={additionalClassName}
          checked={avatar.checked}
          handleClick={props.handleSelectAvatar(id)}
        />
        <SelectAvatarTableBodyAvatarName
          additionalClassName={additionalClassName}
          handleChange={props.handleAvatarNameChange}
          handleSelect={props.handleSelectAvatar(id)}
          name={avatar.name}
        />
        <SelectAvatarTableBodyStatus
          additionalClassName={additionalClassName}
          handleSelect={props.handleSelectAvatar(id)}
          status={avatar.status}
        />
        <SelectAvatarTableBodyAuthorized
          additionalClassName={additionalClassName}
          authorized={avatar.authorized}
          handleAccept={props.handleAccept}
          handleSelect={props.handleSelectAvatar(id)}
        />
        <SelectAvatarTableBodyTest
          additionalClassName={additionalClassName}
          handleSelect={props.handleSelectAvatar(id)}
          test={avatar.testStatus}
        />
        <SelectAvatarTableBodyAutomation
          additionalClassName={additionalClassName}
          automation={avatar.automation}
          handleSelect={props.handleSelectAvatar(id)}
        />
        <SelectAvatarTableBodyAccessToken
          additionalClassName={additionalClassName}
          handleSelect={props.handleSelectAvatar(id)}
          renewAccessToken={props.renewAccessToken}
          token={avatar.accessToken}
        />
      </React.Fragment>
    )
  })

  return (
    <>
      {rows}
    </>
  )
}
