import * as React from 'react'
import MenuItem from '../molecules/MenuItem'

export interface Props {
  readonly class: string
  readonly itemClass: string
  readonly items: lobby.MenuItem[]
  readonly transition: (target:lobby.Target) => void
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
