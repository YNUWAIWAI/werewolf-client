import * as React from 'react'
import Menu, {MenuItemProps as MenuItem} from '../organisms/Menu'
import AsideContent from '../atoms/AsideContent'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import {Target} from '../../constants/ActionTypes'

export interface StateProps {
  readonly menuItems: MenuItem[]
}
export interface DispatchProps {
  readonly transition: (target: Target) => void
}
export interface OwnProps {}
export interface Props extends StateProps, DispatchProps, OwnProps {}

export default function ConnectingToRobotPlayer(props: Props) {
  return (
    <div className="grid">
      <Header id="Header.connectingToRobotPlayer" />
      <MainContent>
        {'TODO'}
      </MainContent>
      <AsideContent>
        <Menu
          class="compact-menu"
          itemClass="compact-menu--item"
          items={props.menuItems}
          transition={props.transition}
        />
      </AsideContent>
    </div>
  )
}
