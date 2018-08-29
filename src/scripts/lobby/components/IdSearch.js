// @flow
import type {MenuItem, Target, Village} from 'lobby'
import AsideContent from './AsideContent'
import Avatar from './Avatar'
import Header from './Header'
import IdSearchBox from './IdSearchBox'
import MainContent from './MainContent'
import Menu from './Menu'
import React from 'react'
import VillageList from './VillageList'

export type StateProps = {
  +header: string,
  +image: string,
  +isPlayer: boolean,
  +menuItems: MenuItem[],
  +name: string,
  +villageItems: Village[]
}
export type DispatchProps = {
  +changeSearchId: number => void,
  +selectVillage: number => void => void
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
      <Avatar image={props.image} name={props.name} />
      <MainContent>
        <IdSearchBox
          changeSearchId={props.changeSearchId}
          numberOfDigit={numberOfDigit}
          placeholder={placeholder}
        />
        <VillageList
          isPlayer={props.isPlayer}
          items={props.villageItems}
          selectVillage={props.selectVillage}
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
