import * as React from 'react'
import Menu, {MenuItemProps as MenuItem} from '../organisms/Menu'
import AsideContent from '../atoms/AsideContent'
import CreateNewRobotAvatar from '../organisms/CreateNewRobotAvatar'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import SelectRobotAvatarBox from '../organisms/SelectRobotAvatarBox'
import {Target} from '../../constants/ActionTypes'
import {lobby} from '../../types'

export interface Avatar {
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
export interface StateProps {
  readonly avatar: Avatar
  readonly menuItems: MenuItem[]
}
export interface DispatchProps {
  readonly handleAccept: () => void
  readonly handleAvatarNameChange: (valid: boolean) => (value: string) => void
  readonly renewAccessToken: () => void
  readonly transition: (target: Target) => void
}
export interface Props extends StateProps, DispatchProps {}

export default function SelectRobotAvatar(props: Props) {
  return (
    <div className="lo--grid">
      <Header id="Header.selectRobotAvatar" />
      <MainContent>
        <SelectRobotAvatarBox
          avatar={props.avatar}
          handleAccept={props.handleAccept}
          handleAvatarNameChange={props.handleAvatarNameChange}
          renewAccessToken={props.renewAccessToken}
        />
        <CreateNewRobotAvatar />
      </MainContent>
      <AsideContent>
        <Menu
          class="lo--compact-menu"
          itemClass="lo--compact-menu--item"
          items={props.menuItems}
          transition={props.transition}
        />
      </AsideContent>
    </div>
  )
}
