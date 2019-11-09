import * as React from 'react'
import Menu, {MenuItemProps as MenuItem} from '../organisms/Menu'
import AsideContent from '../atoms/AsideContent'
import CreateNewHumanAvatar from '../organisms/CreateNewHumanAvatar'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import SelectHumanAvatarBox from '../organisms/SelectHumanAvatarBox'
import {Target} from '../../constants/ActionTypes'

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
  readonly command: MenuItem[]
  readonly menuItems: MenuItem[]
}
export interface DispatchProps {
  readonly handleAvatarNameChange: (valid: boolean) => (value: string) => void
  readonly transition: (target: Target) => void
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
          transition={props.transition}
        />
        <CreateNewHumanAvatar />
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
