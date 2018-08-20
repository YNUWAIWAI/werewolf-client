// @flow
import type {MenuItem, Target} from 'lobby'
import AsideContent from './AsideContent'
import Header from './Header'
import IdSearchBox from './IdSearchBox'
import MainContent from './MainContent'
import Menu from './Menu'
import React from 'react'

export type StateProps = {
  +header: string,
  +menuItems: MenuItem[],
}
export type DispatchProps = {}
export type OwnProps = {
  +transition: Target => void
}
export type Props =
  & StateProps
  & DispatchProps
  & OwnProps

export default function IdSearch(props: Props) {
  return (
    <div className="grid">
      <Header text={props.header} />
      <MainContent>
        <IdSearchBox text="id search" />
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
