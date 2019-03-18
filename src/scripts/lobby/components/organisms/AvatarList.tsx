import * as React from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import AvatarItem from '../molecules/AvatarItem'

export interface Props {
  readonly confirmKickOutPlayer: (values: {name: string, token: lobby.Token}) => void
  readonly items: {
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
}

export default function AvatarList(props: Props) {
  const items = props.items.map(item =>
    <CSSTransition
      appear
      classNames="lo--avatar-list--item--transition"
      key={item.token}
      timeout={{
        enter: 500,
        exit: 300
      }}
      unmountOnExit
    >
      <AvatarItem
        confirmKickOutPlayer={props.confirmKickOutPlayer}
        {... item}
      />
    </CSSTransition>
  )

  return (
    <TransitionGroup className="lo--avatar-list">
      {items}
    </TransitionGroup>
  )
}
