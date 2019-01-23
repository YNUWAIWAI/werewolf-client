import * as React from 'react'
import Menu, {MenuItemProps as MenuItem} from '../organisms/Menu'
import AsideContent from '../atoms/AsideContent'
import Avatar from '../atoms/Avatar'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import {Target} from '../../constants/ActionTypes'
import VillageList from '../organisms/VillageList'

export interface StateProps {
  readonly image: string
  readonly isPlayer: boolean
  readonly menuItems: MenuItem[]
  readonly name: string
  readonly villageItems: lobby.Village[]
}
export interface DispatchProps {
  readonly selectVillage: (id: number) => () => void
  readonly transition: (target: Target) => void
}
export interface OwnProps {}
export interface Props extends StateProps, DispatchProps, OwnProps {}


export default function LobbyForRobotPlayer(props: Props) {
  return (
    <div className="grid">
      <Header id="Header.lobbyForRonotPlayer" />
      <Avatar image={props.image} name={props.name} />
      <MainContent>
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
