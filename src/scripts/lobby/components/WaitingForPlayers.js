import AsideContent from './AsideContent'
import AvatarList from './AvatarList'
import Header from './Header'
import MainContent from './MainContent'
import Menu from './Menu'
import React from 'react'
import VillageItem from './VillageItem'

export default function WaitingForPlayers(props) {
  return (
    <div className="grid">
      <Header text="Waiting for players" />
      <MainContent>
        <VillageItem
          {... props.village}
          isPlayer={props.isPlayer}
        />
      </MainContent>
      <AsideContent>
        <AvatarList
          items={props.players}
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
