// @flow
import AvatarList, {type Props as AvatarListProps} from './AvatarList'
import Menu, {type Props as MenuProps} from './Menu'
import AsideContent from './AsideContent'
import Header from './Header'
import MainContent from './MainContent'
import React from 'react'
import VillageItem from './VillageItem'

type Props = {
  isPlayer: boolean,
  menuItems: $PropertyType<MenuProps, 'items'>,
  players: $PropertyType<AvatarListProps, 'items'>,
  transition: string => void => void,
  village: Village
}

export default function WaitingForPlayers(props: Props) {
  return (
    <div className="grid">
      <Header text="Waiting for players" />
      <MainContent>
        <VillageItem
          {... props.village}
          handleClick={() => {}}
          isPlayer={props.isPlayer}
        />
      </MainContent>
      <AsideContent>
        <AvatarList
          isPlayer={props.isPlayer}
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
