import * as React from 'react'
import {
  MenuItem,
  Props as MenuItemProps_
} from '../molecules/MenuItem'
import {Target} from '../../actions'

export interface MenuItemProps {
  readonly disabled?: MenuItemProps_['disabled']
  readonly id: MenuItemProps_['id']
  readonly isLoading?: MenuItemProps_['isLoading']
  readonly types: MenuItemProps_['types']
}
export interface OwnProps {
  readonly className: string
  readonly itemClassName: string
  readonly items: MenuItemProps[]
}
export interface StateProps {
  readonly navigatable: boolean
}
export interface DispatchProps {
  readonly transition: (target: Target) => void
}
export type Props = OwnProps & DispatchProps & StateProps

export const Menu: React.FC<Props> = props => {
  const items = props.items.map(item => (
    <MenuItem
      className={props.itemClassName}
      disabled={item.disabled}
      id={item.id}
      isLoading={item.isLoading}
      key={item.id}
      navigatable={props.navigatable}
      transition={props.transition}
      types={item.types}
    />
  ))

  return (
    <ul className={props.className}>
      {items}
    </ul>
  )
}
Menu.displayName = 'Menu'
