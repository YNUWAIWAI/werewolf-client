// @flow
import type {MenuItem as MenuItemType, Target} from 'lobby'
import MenuItem from './MenuItem'
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
      class={props.itemClass}
      disabled={item.disabled}
      isLoading={item.isLoading}
      key={item.text}
      text={item.text}
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
