import * as React from 'react'
import SelectAvatarTableBodyAccessToken from '../atoms/SelectAvatarTable/SelectAvatarTableBodyAccessToken'
import SelectAvatarTableBodyAuthorized from '../atoms/SelectAvatarTable/SelectAvatarTableBodyAuthorized'
import SelectAvatarTableBodyAutomation from '../atoms/SelectAvatarTable/SelectAvatarTableBodyAutomation'
import SelectAvatarTableBodyAvatarName from '../atoms/SelectAvatarTable/SelectAvatarTableBodyAvatarName'
import SelectAvatarTableBodyCheckBox from '../atoms/SelectAvatarTable/SelectAvatarTableBodyCheckBox'
import SelectAvatarTableBodyImage from '../atoms/SelectAvatarTable/SelectAvatarTableBodyImage'
import SelectAvatarTableBodyLanguage from '../atoms/SelectAvatarTable/SelectAvatarTableBodyLanguage'
import SelectAvatarTableBodyStatus from '../atoms/SelectAvatarTable/SelectAvatarTableBodyStatus'
import SelectAvatarTableBodyTest from '../atoms/SelectAvatarTable/SelectAvatarTableBodyTest'
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
        readonly isReadyForAcceptance: boolean
        readonly isTestPassed: boolean
        readonly language: lobby.Language
        readonly name: string
        readonly status: lobby.AvatarStatus
        readonly token: lobby.Token
      }
    }
  }
  readonly navigatable: boolean
}
export interface DispatchProps {
  readonly handleAccept: (accessToken: lobby.Token) => () => void
  readonly handleAvatarImageClick: (token: lobby.Token) => (image: string) => void
  readonly handleAvatarLanguageChange: (token: lobby.Token) => (valid: boolean) => (value: lobby.Language) => void
  readonly handleAvatarNameChange: (token: lobby.Token) => (valid: boolean) => (value: string) => void
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
    const automation = avatar.isFullyAutomated ? lobby.Automation.full : lobby.Automation.semi
    const authorized = (() => {
      if (avatar.isAuthorized) {
        return lobby.Authorized.yes
      }
      if (avatar.isReadyForAcceptance) {
        return lobby.Authorized.waitForAcceptance
      }

      return lobby.Authorized.no
    })()
    const test = avatar.isTestPassed ? lobby.TestStatus.passed : lobby.TestStatus.notPassed

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
          handleChange={props.handleAvatarNameChange(avatar.token)}
          handleSelect={props.handleSelectAvatar(id)}
          name={avatar.name}
          navigatable={props.navigatable}
        />
        <SelectAvatarTableBodyLanguage
          additionalClassName={additionalClassName}
          handleChange={props.handleAvatarLanguageChange(id)}
          handleSelect={props.handleSelectAvatar(id)}
          language={avatar.language}
          navigatable={props.navigatable}
        />
        <SelectAvatarTableBodyImage
          additionalClassName={additionalClassName}
          handleClick={props.handleAvatarImageClick(id)}
          handleSelect={props.handleSelectAvatar(id)}
          image={avatar.image}
          navigatable={props.navigatable}
        />
        <SelectAvatarTableBodyStatus
          additionalClassName={additionalClassName}
          handleSelect={props.handleSelectAvatar(id)}
          status={avatar.status}
        />
        <SelectAvatarTableBodyAuthorized
          additionalClassName={additionalClassName}
          authorized={authorized}
          handleAccept={props.handleAccept(avatar.token)}
          handleSelect={props.handleSelectAvatar(id)}
          naviagtable={props.navigatable}
        />
        <SelectAvatarTableBodyTest
          additionalClassName={additionalClassName}
          handleSelect={props.handleSelectAvatar(id)}
          test={test}
        />
        <SelectAvatarTableBodyAutomation
          additionalClassName={additionalClassName}
          automation={automation}
          handleSelect={props.handleSelectAvatar(id)}
        />
        <SelectAvatarTableBodyAccessToken
          additionalClassName={additionalClassName}
          handleSelect={props.handleSelectAvatar(id)}
          naviagtable={props.navigatable}
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
