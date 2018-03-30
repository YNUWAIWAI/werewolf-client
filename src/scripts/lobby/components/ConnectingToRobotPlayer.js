// @flow
import Menu, {type Props as MenuProps} from './Menu'
import AsideContent from './AsideContent'
import Header from './Header'
import MainContent from './MainContent'
import React from 'react'

type Props = {
  menuItems: $PropertyType<MenuProps, 'items'>,
  transition: string => void => void
}

export default function ConnectingToRobotPlayer(props: Props) {
  return (
    <div className="grid">
      <Header text="Connecting to Robot Player" />
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
