import * as React from 'react'
import Menu, {MenuItemProps as MenuItem} from '../organisms/Menu'
import AsideContent from '../atoms/AsideContent'
import Avatar from '../atoms/Avatar'
import Header from '../atoms/Header'
import IdSearchBox from '../organisms/IdSearchBox'
import MainContent from '../atoms/MainContent'
import SearchResult from '../organisms/SearchResult'
import {Target} from '../../constants/ActionTypes'

export interface StateProps {
  readonly header: string
  readonly image: string
  readonly isPlayer: boolean
  readonly menuItems: MenuItem[]
  readonly name: string
  readonly searched: boolean
  readonly villageItems: lobby.Village[]
}
export interface DispatchProps {
  readonly handleSearchIdChange: (id: number) => void
  readonly handleValidityChange: (valid: boolean) => void
  readonly selectVillage: (id: number) => () => void
  readonly transition: (target: Target) => void
}
export interface Props extends StateProps, DispatchProps {}

export default function IdSearch(props: Props) {
  return (
    <div className="lo--grid">
      <Header id={props.header} />
      <Avatar image={props.image} name={props.name} />
      <MainContent>
        <SearchResult
          className="lo--id-search"
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
          class="lo--compact-menu"
          itemClass="lo--compact-menu--item"
          items={props.menuItems}
          transition={props.transition}
        />
      </AsideContent>
    </div>
  )
}
