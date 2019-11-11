import * as React from 'react'
import AsideContent from '../atoms/AsideContent'
import CreateNewHumanAvatar from '../organisms/CreateNewHumanAvatar'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import Menu from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from '../organisms/Menu'
import SelectHumanAvatarBox from '../organisms/SelectHumanAvatarBox'

export interface Avatar {
  readonly allIds: string[]
  readonly byId: {
    readonly [id: string]: {
      readonly checked: boolean
      readonly name: string
    }
  }
}
export interface StateProps {
  readonly avatar: Avatar
  readonly createNewAvatar: {
    readonly command: MenuItem[]
  }
  readonly command: MenuItem[]
  readonly menuItems: MenuItem[]
}
export interface DispatchProps {
  readonly handleAvatarNameChange: (valid: boolean) => (value: string) => void
}
export interface Props extends StateProps, DispatchProps {}

export default function SelectHumanAvatar(props: Props) {
  return (
    <div className="lo--grid">
      <Header id="Header.selectHumanAvatar" />
      <MainContent>
        <SelectHumanAvatarBox
          avatar={props.avatar}
          command={props.command}
          handleAvatarNameChange={props.handleAvatarNameChange}
        />
        <CreateNewHumanAvatar
          command={props.createNewAvatar.command}
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
