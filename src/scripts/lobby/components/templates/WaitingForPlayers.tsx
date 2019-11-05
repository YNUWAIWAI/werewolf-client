import * as React from 'react'
import Menu, {MenuItemProps as MenuItem} from '../organisms/Menu'
import AsideContent from '../atoms/AsideContent'
import AvatarList from '../organisms/AvatarList'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import {Target} from '../../constants/ActionTypes'
import VillageList from '../organisms/VillageList'
import {lobby} from '../../types'

export interface StateProps {
  readonly isPlayer: boolean
  readonly menuItems: MenuItem[]
  readonly players: {
    readonly avatarImage: string
    readonly canKickOut: boolean
    readonly isAnonymous: boolean
    readonly isHost: boolean
    readonly isMe: boolean
    readonly name: string
    readonly ping: string
    readonly pingStatus: lobby.PingStatus
    readonly token: lobby.Token
  }[]
  readonly village: lobby.Village | null
}
export interface DispatchProps {
  readonly confirmKickOutPlayer: (values: {name: string, token: lobby.Token}) => void
  readonly transition: (target: Target) => void
}
export interface Props extends StateProps, DispatchProps {}

export default function WaitingForPlayers(props: Props) {
  const [head, ... tail] = props.menuItems

  return (
    <div className="lo--grid">
      <Header id="Header.waitingForPlayers" />
      <MainContent>
        <VillageList
          isPlayer={props.isPlayer}
          items={
            props.village === null ?
              [] :
              [props.village]
          }
        />
      </MainContent>
      <AsideContent
        expand
      >
        <Menu
          class="lo--compact-menu"
          itemClass="lo--compact-menu--item"
          items={
            typeof head === 'undefined' ?
              [] :
              [head]
          }
          transition={props.transition}
        />
        <AvatarList
          confirmKickOutPlayer={props.confirmKickOutPlayer}
          items={props.players}
        />
        <Menu
          class="lo--compact-menu"
          itemClass="lo--compact-menu--item"
          items={tail}
          transition={props.transition}
        />
      </AsideContent>
    </div>
  )
}
