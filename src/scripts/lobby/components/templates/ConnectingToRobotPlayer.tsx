import * as React from 'react'
import AsideContent from '../atoms/AsideContent'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import Menu from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from '../organisms/Menu'

export interface StateProps {
  readonly menuItems: MenuItem[]
}
export type Props = StateProps

export default function ConnectingToRobotPlayer(props: Props) {
  const content = 'TODO'

  return (
    <div className="lo--grid">
      <Header id="Header.connectingToRobotPlayer" />
      <MainContent>
        {content}
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
