// @flow
import type {MenuItem, Target} from 'lobby'
import AdvancedSearchBox from './AdvancedSearchBox'
import AsideContent from './AsideContent'
import Avatar from './Avatar'
import Header from './Header'
import MainContent from './MainContent'
import Menu from './Menu'
import React from 'react'

export type StateProps = {
  +header: string,
  +image: string,
  +menuItems: MenuItem[],
  +name: string
}
export type DispatchProps = {}
export type OwnProps = {
  +transition: Target => void
}
export type Props =
  & StateProps
  & DispatchProps
  & OwnProps

export default function AdvancedSearch(props: Props) {
  return (
    <div className="grid">
      <Header text={props.header} />
      <Avatar image={props.image} name={props.name} />
      <MainContent>
        <AdvancedSearchBox text="advanced search" />
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
