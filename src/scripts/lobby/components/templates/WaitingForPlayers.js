// @flow
import type {MenuItem, PingStatus, Target, Village} from 'lobby'
import AsideContent from '../atoms/AsideContent'
import AvatarList from '../organisms/AvatarList'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import Menu from '../organisms/Menu'
import React from 'react'
import VillageItem from '../molecules/VillageItem'

export type StateProps = {
  +isPlayer: boolean,
  +menuItems: MenuItem[],
  +players: {
    +avatarImage: string,
    +canKickOut: boolean,
    +isAnonymous: boolean,
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
      <Header id="Header.waitingForPlayers" />
      <MainContent>
        {
          props.village ?
            <VillageItem
              {... props.village}
              isPlayer={props.isPlayer}
            /> :
            ''
        }
      </MainContent>
      <AsideContent
        expand
      >
        <Menu
          class="compact-menu"
          itemClass="compact-menu--item"
          items={[head]}
          transition={props.transition}
        />
        <AvatarList
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
