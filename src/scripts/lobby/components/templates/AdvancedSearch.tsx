import * as React from 'react'
import AdvancedSearchBox from '../../containers/AdvancedSearchBoxContainer'
import AsideContent from '../atoms/AsideContent'
import Avatar from '../atoms/Avatar'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import Menu from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from '../organisms/Menu'
import SearchResult from '../organisms/SearchResult'
import {lobby} from '../../types'

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
  readonly selectVillage: (id: number) => () => void
}
export type Props = StateProps & DispatchProps

export default function AdvancedSearch(props: Props) {
  return (
    <div className="lo--grid">
      <Header id={props.header} />
      <Avatar image={props.image} name={props.name} />
      <MainContent>
        <AdvancedSearchBox />
        <SearchResult
          className="lo--advanced-search"
          isPlayer={props.isPlayer}
          searched={props.searched}
          selectVillage={props.selectVillage}
          villageItems={props.villageItems}
        />
      </MainContent>
      <AsideContent>
        <Menu
          className="lo--compact-menu"
          itemClassName="lo--compact-menu--item"
          items={props.menuItems}
        />
      </AsideContent>
    </div>
  )
}
