import * as React from 'react'
import {AsideContent} from '../atoms/AsideContent'
import {AvatarList} from '../organisms/AvatarList'
import {Header} from '../atoms/Header'
import {MainContent} from '../atoms/MainContent'
import {MenuContainer} from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from '../organisms/Menu'
import {VillageList} from '../organisms/VillageList'
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
}
export type Props = StateProps & DispatchProps

export const WaitingForPlayers: React.FC<Props> = props => {
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
        <MenuContainer
          className="lo--compact-menu"
          itemClassName="lo--compact-menu--item"
          items={
            typeof head === 'undefined' ?
              [] :
              [head]
          }
        />
        <AvatarList
          confirmKickOutPlayer={props.confirmKickOutPlayer}
          items={props.players}
        />
        <MenuContainer
          className="lo--compact-menu"
          itemClassName="lo--compact-menu--item"
          items={tail}
        />
      </AsideContent>
    </div>
  )
}
WaitingForPlayers.displayName = 'WaitingForPlayers'
