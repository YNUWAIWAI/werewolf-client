import * as React from 'react'
import AsideContent from '../atoms/AsideContent'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import Menu from '../organisms/Menu'

export interface StateProps {
  readonly menuItems: lobby.MenuItem[]
}
export interface DispatchProps {}
export interface OwnProps {
  readonly transition: (target: lobby.Target) => void
}
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
