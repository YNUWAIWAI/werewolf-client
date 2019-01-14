import * as React from 'react'
import Menu, {MenuItemProps as MenuItem} from '../organisms/Menu'
import {Target} from '../../constants/ActionTypes'

export interface StateProps {
  readonly menuItems: MenuItem[]
}
export interface OwnProps {
  readonly transition: (target: Target) => void
}
export interface Props extends StateProps, OwnProps {}

export default function Main(props: Props) {
  return (
    <Menu
      class="menu"
      itemClass="menu--item"
      items={props.menuItems}
      transition={props.transition}
    />
  )
}
