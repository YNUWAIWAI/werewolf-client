import * as React from 'react'
import AsideContent from '../atoms/AsideContent'
import Avatar from '../atoms/Avatar'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import Menu from '../organisms/Menu'
import VillageList from '../organisms/VillageList'

export interface StateProps {
  readonly image: string
  readonly isPlayer: boolean
  readonly menuItems: lobby.MenuItem[]
  readonly name: string
  readonly villageItems: lobby.Village[]
}
export interface DispatchProps {
  readonly selectVillage: (id: number) => () => void
}
export interface OwnProps {
  readonly transition: (target: lobby.Target) => void
}
export interface Props extends StateProps, DispatchProps, OwnProps {}

export default function LobbyForHumanPlayer(props: Props) {
  return (
    <div className="grid">
      <Header id="Header.lobbyForHumanPlayer" />
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
