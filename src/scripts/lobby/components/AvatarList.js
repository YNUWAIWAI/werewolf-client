// @flow
import AvatarItem, {type Props as AvatarItemProps} from './AvatarItem'
import React from 'react'

export type Props = {
  +isPlayer: boolean,
  +items: (AvatarItemProps & {token: string})[]
}

export default function AvatarList(props: Props) {
  const items = props.items.map(item =>
    <AvatarItem
      key={item.token}
      {... item}
      isPlayer={props.isPlayer}
    />
  )

  return (
    <div className="avatar-list">
      {items}
    </div>
  )
}
