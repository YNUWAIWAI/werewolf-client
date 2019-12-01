import * as React from 'react'
import AsideContent from '../atoms/AsideContent'
import CreateNewRobotAvatar from '../organisms/CreateNewRobotAvatar'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import Menu from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from '../organisms/Menu'
import SelectRobotAvatarBox from '../organisms/SelectRobotAvatarBox'

export interface StateProps {
  readonly createNewAvatarCommand: MenuItem[]
  readonly menuItems: MenuItem[]
  readonly selectAvatarCommand: MenuItem[]
}
export type Props = StateProps

export default function SelectRobotAvatar(props: Props) {
  return (
    <div className="lo--grid">
      <Header id="Header.selectRobotAvatar" />
      <MainContent>
        <SelectRobotAvatarBox
          command={props.createNewAvatarCommand}
        />
        <CreateNewRobotAvatar
          command={props.selectAvatarCommand}
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
