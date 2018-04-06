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
export type OwnProps = {
  +transition: Target => void
}
export type Props =
  & StateProps
  & OwnProps

export default function Setting(props: Props) {
  return (
    <div className="grid">
      <Header text="Settings" />
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
