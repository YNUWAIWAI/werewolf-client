import * as React from 'react'
import AsideContent from '../atoms/AsideContent'
import CreateNewHumanAvatar from '../organisms/CreateNewHumanAvatar'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import Menu from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from '../organisms/Menu'
import SelectHumanAvatarBox from '../organisms/SelectHumanAvatarBox'

export interface StateProps {
  readonly createNewAvatarCommand: MenuItem[]
  readonly menuItems: MenuItem[]
  readonly selectAvatarCommand: MenuItem[]
}
export type Props = StateProps

export default function SelectHumanAvatar(props: Props) {
  return (
    <div className="lo--grid">
      <Header id="Header.selectHumanAvatar" />
      <MainContent>
        <SelectHumanAvatarBox
          command={props.selectAvatarCommand}
        />
        <CreateNewHumanAvatar
          command={props.createNewAvatarCommand}
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
