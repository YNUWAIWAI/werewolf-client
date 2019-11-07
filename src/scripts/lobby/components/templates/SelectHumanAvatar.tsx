import * as React from 'react'
import Menu, {MenuItemProps as MenuItem} from '../organisms/Menu'
import AsideContent from '../atoms/AsideContent'
import CreateNewHumanAvatar from '../organisms/CreateNewHumanAvatar'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import SelectHumanAvatarBox from '../organisms/SelectHumanAvatarBox'
import {Target} from '../../constants/ActionTypes'
import {lobby} from '../../types'

export interface StateProps {
  readonly menuItems: MenuItem[]
}
export interface DispatchProps {
  readonly transition: (target: Target) => void
}
export interface Props extends StateProps, DispatchProps {}

export default function SelectHumanAvatar(props: Props) {
  return (
    <div className="lo--grid">
      <Header id="Header.selectHumanAvatar" />
      <MainContent>
        <SelectHumanAvatarBox />
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
