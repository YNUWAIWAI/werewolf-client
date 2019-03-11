import * as React from 'react'
import AvatarItem from '../molecules/AvatarItem'

export interface Props {
  readonly confirmKickOutPlayer: (token: lobby.Token) => () => void
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
    <AvatarItem
      confirmKickOutPlayer={props.confirmKickOutPlayer(item.token)}
      key={item.token}
      {... item}
    />
  )

  return (
    <div className="avatar-list">
      {items}
    </div>
  )
}
