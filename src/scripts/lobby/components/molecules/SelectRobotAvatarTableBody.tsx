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
        readonly checked: boolean
        readonly image: string
        readonly isAuthorized: boolean
        readonly isFullyAutomated: boolean
        readonly isHover: boolean
        readonly isTestPassed: boolean
        readonly language: lobby.Language
        readonly name: string
        readonly status: lobby.AvatarStatus
        readonly token: lobby.Token
      }
    }
  }
}
export interface DispatchProps {
  readonly handleAccept: () => void
  readonly handleAvatarNameChange: (valid: boolean) => (value: string) => void
  readonly handleHoverAvatar: (id: string) => () => void
  readonly handleSelectAvatar: (id: string) => () => void
  readonly renewAccessToken: (token: lobby.Token) => () => void
}
export type Props = StateProps & DispatchProps

export default function SelectRobotAvatarTableBody(props: Props) {
  const rows = props.avatar.allIds.map(id => {
    const avatar = props.avatar.byId[id]
    const additionalClassName = [
      avatar.isHover ? 'hover' : '',
      avatar.checked ? 'selected' : ''
    ]
    const authorized = avatar.isAuthorized ? lobby.Authorized.yes : lobby.Authorized.waitForAcceptance

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
          authorized={authorized}
          handleAccept={props.handleAccept}
          handleSelect={props.handleSelectAvatar(id)}
        />
        <SelectAvatarTableBodyTest
          additionalClassName={additionalClassName}
          handleSelect={props.handleSelectAvatar(id)}
          isTestPassed={avatar.isTestPassed}
        />
        <SelectAvatarTableBodyAutomation
          additionalClassName={additionalClassName}
          handleSelect={props.handleSelectAvatar(id)}
          isFullyAutomated={avatar.isFullyAutomated}
        />
        <SelectAvatarTableBodyAccessToken
          additionalClassName={additionalClassName}
          handleSelect={props.handleSelectAvatar(id)}
          renewAccessToken={props.renewAccessToken(avatar.token)}
          token={avatar.token}
        />
      </React.Fragment>
    )
  })

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {rows}
    </>
  )
}
