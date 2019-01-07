// @flow
import type {MenuItem, Target} from 'lobby'
import React, {Fragment} from 'react'
import Menu from '../organisms/Menu'

export type StateProps = {
  +menuItems: MenuItem[]
}
export type OwnProps = {
  +transition: Target => void
}
export type Props =
  & StateProps
  & OwnProps

export default function Main(props: Props) {
  return (
    <Fragment>
      <Menu
        class="menu"
        itemClass="menu--item"
        items={props.menuItems}
        transition={props.transition}
      />
    </Fragment>
  )
}
