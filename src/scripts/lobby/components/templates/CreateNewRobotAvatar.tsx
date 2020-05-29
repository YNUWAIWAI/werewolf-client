import * as React from 'react'
import {AsideContent} from '../atoms/AsideContent'
import {CreateNewAvatarHeader} from '../molecules/CreateNewAvatarHeader'
import CreateNewRobotAvatarSupportBoard from '../../containers/CreateNewRobotAvatarSupportBoardContainer'
import CreateNewRobotAvatarTable from '../../containers/CreateNewRobotAvatarTableContainer'
import {Header} from '../atoms/Header'
import {MainContent} from '../atoms/MainContent'
import Menu from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from '../organisms/Menu'

export interface StateProps {
  readonly command: MenuItem[]
  readonly menuItems: MenuItem[]
}
export type Props = StateProps

export const CreateNewRobotAvatar: React.FC<Props> = props => (
  <div className="lo--grid">
    <Header id="Header.selectRobotAvatar" />
    <MainContent>
      <CreateNewAvatarHeader />
      <CreateNewRobotAvatarTable />
      <CreateNewRobotAvatarSupportBoard
        className="lo--create-new-avatar--support-board"
      />
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
CreateNewRobotAvatar.displayName = 'CreateNewRobotAvatar'
