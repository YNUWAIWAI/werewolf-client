// @flow
import type {MenuItem, Target} from 'lobby'
import AsideContent from './AsideContent'
import Header from './Header'
import MainContent from './MainContent'
import Menu from './Menu'
import React from 'react'

export type StateProps = {
  +menuItems: MenuItem[]
}
export type DispatchProps = {}
export type OwnProps = {
  +transition: Target => void => void
}
export type Props =
  & StateProps
  & DispatchProps
  & OwnProps

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
