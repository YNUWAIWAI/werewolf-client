// @flow
import type {MenuItem as MenuItemType, Target} from 'lobby'
import MenuItem from '../molecules/MenuItem'
import React from 'react'

export type Props = {
  +class: string,
  +itemClass: string,
  +items: MenuItemType[],
  +transition: Target => void
}

export default function Menu(props: Props) {
  const items = props.items.map(item =>
    <MenuItem
      className={props.itemClass}
      disabled={item.disabled}
      id={item.id}
      isLoading={item.isLoading}
      key={item.id}
      transition={props.transition}
      types={item.types}
    />
  )

  return (
    <ul className={props.class}>
      {items}
    </ul>
  )
}
