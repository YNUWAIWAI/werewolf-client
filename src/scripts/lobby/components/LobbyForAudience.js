// @flow
import AsideContent from './AsideContent'
import Header from './Header'
import MainContent from './MainContent'
import Menu from './Menu'
import React from 'react'
import VillageList from './VillageList'

type Props = {
  isPlayer: boolean,
  menuItems: {
    text: string,
    type: string
  }[],
  selectVillage: number => void => void,
  transition: string => void => void,
  villageItems: Village[]
}

export default function LobbyForAudience(props: Props) {
  return (
    <div className="grid">
      <Header text="Lobby for Audience" />
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
