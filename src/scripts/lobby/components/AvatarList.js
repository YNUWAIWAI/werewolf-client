import AvatarItem from './AvatarItem'
import React from 'react'

export default function AvatarList(props) {
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
