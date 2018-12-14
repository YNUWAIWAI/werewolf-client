// @flow
import type {MenuItem, Target, Village} from 'lobby'
import AsideContent from '../atoms/AsideContent'
import Avatar from '../atoms/Avatar'
import Header from '../atoms/Header'
import IdSearchBox from '../organisms/IdSearchBox'
import MainContent from '../atoms/MainContent'
import Menu from '../organisms/Menu'
import React from 'react'
import SearchResult from '../organisms/SearchResult'

export type StateProps = {
  +header: string,
  +image: string,
  +isPlayer: boolean,
  +menuItems: MenuItem[],
  +name: string,
  +searched: boolean,
  +villageItems: Village[]
}
export type DispatchProps = {
  +handleSearchIdChange: number => void,
  +handleValidityChange: boolean => void,
  +selectVillage: number => void => void
}
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
      <Header id={props.header} />
      <Avatar image={props.image} name={props.name} />
      <MainContent>
        <SearchResult
          className="id-search"
          isPlayer={props.isPlayer}
          searched={props.searched}
          selectVillage={props.selectVillage}
          villageItems={props.villageItems}
        />
      </MainContent>
      <AsideContent>
        <IdSearchBox
          handleSearchIdChange={props.handleSearchIdChange}
          handleValidityChange={props.handleValidityChange}
          max={3}
        />
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
