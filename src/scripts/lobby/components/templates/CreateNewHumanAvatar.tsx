import * as React from 'react'
import AsideContent from '../atoms/AsideContent'
import CreateNewHumanAvatarBox from '../organisms/CreateNewHumanAvatarBox'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import Menu from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from '../organisms/Menu'

export interface StateProps {
  readonly command: MenuItem[]
  readonly menuItems: MenuItem[]
}
export type Props = StateProps

export default function CreateNewHumanAvatar(props: Props) {
  return (
    <div className="lo--grid">
      <Header id="Header.createHumanAvatar" />
      <MainContent>
        <CreateNewHumanAvatarBox
          command={props.command}
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
