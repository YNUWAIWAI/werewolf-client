// @flow
import AvatarItem from './AvatarItem'
import type {PingStatus} from 'lobby'
import React from 'react'

export type Props = {
  +items: {
    +avatarImage: string,
    +canKickOut: boolean,
    +isHost: boolean,
    +isMe: boolean,
    +name: string,
    +ping: string,
    +pingStatus: PingStatus,
    +token: string
  }[],
  +kickOut: string => void => void
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
