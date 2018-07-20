// @flow
import type {MenuItem, Target, Village} from 'lobby'
import AsideContent from './AsideContent'
import Header from './Header'
import MainContent from './MainContent'
import Menu from './Menu'
import Player from './Player'
import React from 'react'
import VillageList from './VillageList'

export type StateProps = {
  +image: string,
  +isPlayer: boolean,
  +menuItems: MenuItem[],
  +name: string,
  +villageItems: Village[]
}
export type DispatchProps = {
  +selectVillage: number => void => void
}
export type OwnProps = {
  +transition: Target => void
}
export type Props =
  & StateProps
  & DispatchProps
  & OwnProps

export default function LobbyForAudience(props: Props) {
  return (
    <div className="grid">
      <Header text="Lobby for Audience" />
      <Player image={props.image} name={props.name} />
      <MainContent>
        <VillageList isPlayer={props.isPlayer} items={props.villageItems} selectVillage={props.selectVillage} transition={props.transition} />
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
