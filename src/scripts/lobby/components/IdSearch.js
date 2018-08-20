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
export type DispatchProps = {
  +changeSearchId: number => void
}
export type OwnProps = {
  +transition: Target => void
}
export type Props =
  & StateProps
  & DispatchProps
  & OwnProps

const numberOfDigit = 3
const placeholder = `${numberOfDigit} digits`

export default function IdSearch(props: Props) {
  return (
    <div className="grid">
      <Header text={props.header} />
      <MainContent>
        <IdSearchBox
          changeSearchId={props.changeSearchId}
          numberOfDigit={numberOfDigit}
          placeholder={placeholder}
        />
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
