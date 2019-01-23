import * as React from 'react'
import MenuItem, {Props as MenuItemProps_} from '../molecules/MenuItem'
import {Target} from '../../constants/ActionTypes'

export interface MenuItemProps {
  readonly disabled?: MenuItemProps_['disabled']
  readonly id: MenuItemProps_['id']
  readonly isLoading?: MenuItemProps_['isLoading']
  readonly types: MenuItemProps_['types']
}
export interface Props {
  readonly class: string
  readonly itemClass: string
  readonly items: MenuItemProps[]
  readonly transition: (target: Target) => void
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
