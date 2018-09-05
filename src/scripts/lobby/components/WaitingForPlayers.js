// @flow
import type {MenuItem, PingStatus, Target, Village} from 'lobby'
import AsideContent from './AsideContent'
import AvatarList from './AvatarList'
import Header from './Header'
import MainContent from './MainContent'
import Menu from './Menu'
import React from 'react'
import VillageItem from './VillageItem'

export type StateProps = {
  +isPlayer: boolean,
  +menuItems: MenuItem[],
  +players: {
    +avatarImage: string,
    +canKickOut: boolean,
    +isHost: boolean,
    +isMe: boolean,
    +name: string,
    +ping: string,
    +pingStatus: PingStatus,
    +token: string
  }[],
  +village?: Village
}
export type DispatchProps = {
  +kickOut: string => void => void
}
export type OwnProps = {
  +transition: Target => void,
}
export type Props =
  & StateProps
  & DispatchProps
  & OwnProps

export default function WaitingForPlayers(props: Props) {
  const [head, ... tail] = props.menuItems

  return (
    <div className="grid">
      <Header text="Waiting for Players" />
      <MainContent>
        {
          props.village ?
            <VillageItem
              {... props.village}
              handleClick={() => {}}
              isPlayer={props.isPlayer}
            /> :
            ''
        }
      </MainContent>
      <AsideContent>
        <Menu
          class="compact-menu"
          itemClass="compact-menu--item"
          items={[head]}
          transition={props.transition}
        />
        <AvatarList
          isPlayer={props.isPlayer}
          items={props.players}
          kickOut={props.kickOut}
        />
        <Menu
          class="compact-menu"
          itemClass="compact-menu--item"
          items={tail}
          transition={props.transition}
        />
      </AsideContent>
    </div>
  )
}
