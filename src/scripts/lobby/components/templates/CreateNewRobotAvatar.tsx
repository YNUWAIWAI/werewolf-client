import * as React from 'react'
import AsideContent from '../atoms/AsideContent'
import CreateNewAvatarHeader from '../molecules/CreateNewAvatarHeader'
import CreateNewRobotAvatarBody from '../../containers/CreateNewRobotAvatarBodyContainer'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import Menu from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from '../organisms/Menu'

export interface StateProps {
  readonly command: MenuItem[]
  readonly menuItems: MenuItem[]
}
export type Props = StateProps

export default function CreateNewRobotAvatar(props: Props) {
  return (
    <div className="lo--grid">
      <Header id="Header.selectRobotAvatar" />
      <MainContent>
        <CreateNewAvatarHeader />
        <CreateNewRobotAvatarBody />
        <Menu
          className="lo--create-new-avatar--command"
          itemClassName="lo--create-new-avatar--command--item"
          items={props.command}
        />
      </MainContent>
      <AsideContent>
        <Menu
          className="lo--compact-menu"
          itemClassName="lo--compact-menu--item"
          items={props.menuItems}
        />
      </AsideContent>
    </div>
  )
}
