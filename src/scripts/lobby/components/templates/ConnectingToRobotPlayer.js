// @flow
import type {MenuItem, Target} from 'lobby'
import AsideContent from '../atoms/AsideContent'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import Menu from '../organisms/Menu'
import React from 'react'

export type StateProps = {
  +menuItems: MenuItem[]
}
export type DispatchProps = {}
export type OwnProps = {
  +transition: Target => void
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
