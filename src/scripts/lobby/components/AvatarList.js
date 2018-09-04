// @flow
import AvatarItem from './AvatarItem'
import React from 'react'

export type Props = {
  +isPlayer: boolean,
  +items: {
    +avatarImage: string,
    +canKickOut: boolean,
    +isHost: boolean,
    +isMe: boolean,
    +name: string,
    +ping: string,
    +token: string
  }[],
  +kickOut: string => void => void
}

export default function AvatarList(props: Props) {
  const items = props.items.map(item =>
    <AvatarItem
      key={item.token}
      {... item}
      isPlayer={props.isPlayer}
      kickOut={props.kickOut(item.token)}
    />
  )

  return (
    <div className="avatar-list">
      {items}
    </div>
  )
}
