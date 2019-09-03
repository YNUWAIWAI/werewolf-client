import * as React from 'react'
import * as lobby from 'types/lobby'
import Menu, {MenuItemProps as MenuItem} from '../organisms/Menu'
import AsideContent from '../atoms/AsideContent'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import {Target} from '../../constants/ActionTypes'
import VillageList from '../organisms/VillageList'

export interface StateProps {
  readonly isPlayer: boolean
  readonly menuItems: MenuItem[]
  readonly villageItems: lobby.Village[]
}
export interface DispatchProps {
  readonly selectVillage: (id: number) => () => void
  readonly transition: (target: Target) => void
}
export interface Props extends StateProps, DispatchProps {}

export default function History(props: Props) {
  return (
    <div className="lo--grid">
      <Header id="Header.history" />
      <MainContent>
        <VillageList
          isPlayer={props.isPlayer}
          items={props.villageItems}
          selectVillage={props.selectVillage}
        />
      </MainContent>
      <AsideContent>
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
