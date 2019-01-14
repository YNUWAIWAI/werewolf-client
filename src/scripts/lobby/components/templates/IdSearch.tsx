import * as React from 'react'
import AsideContent from '../atoms/AsideContent'
import Avatar from '../atoms/Avatar'
import Header from '../atoms/Header'
import IdSearchBox from '../organisms/IdSearchBox'
import MainContent from '../atoms/MainContent'
import Menu from '../organisms/Menu'
import SearchResult from '../organisms/SearchResult'
import {Target} from '../../constants/ActionTypes'

export interface StateProps {
  readonly header: string
  readonly image: string
  readonly isPlayer: boolean
  readonly menuItems: lobby.MenuItem[]
  readonly name: string
  readonly searched: boolean
  readonly villageItems: lobby.Village[]
}
export interface DispatchProps {
  readonly handleSearchIdChange: (id: number) => void
  readonly handleValidityChange: (valid: boolean) => void
  readonly selectVillage: (id: number) => () => void
}
export interface OwnProps {
  readonly transition: (target: Target) => void
}
export interface Props extends StateProps, DispatchProps, OwnProps {}

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
