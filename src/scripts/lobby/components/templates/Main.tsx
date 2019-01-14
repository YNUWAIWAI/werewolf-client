import * as React from 'react'
import Menu from '../organisms/Menu'

export interface StateProps {
  readonly menuItems: lobby.MenuItem[]
}
export interface OwnProps {
  readonly transition: (target: lobby.Target) => void
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
