import * as React from 'react'
import AvatarItem from '../molecules/AvatarItem'

export interface Props {
  readonly items: {
    readonly avatarImage: string
    readonly canKickOut: boolean
    readonly isAnonymous: boolean
    readonly isHost: boolean
    readonly isMe: boolean
    readonly name: string
    readonly ping: string
    readonly pingStatus: lobby.PingStatus
    readonly token: string
  }[]
  readonly kickOut: (token: string) => () => void
}

export default function AvatarList(props: Props) {
  const items = props.items.map(item =>
    <AvatarItem
      key={item.token}
      {... item}
      kickOut={props.kickOut(item.token)}
    />
  )

  return (
    <div className="avatar-list">
      {items}
    </div>
  )
}
