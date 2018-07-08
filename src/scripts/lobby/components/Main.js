// @flow
import type {MenuItem, Target} from 'lobby'
import React, {Fragment} from 'react'
import Menu from './Menu'
import Player from './Player'

export type StateProps = {
  +image: string,
  +menuItems: MenuItem[],
  +name: string
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
      <Player image={props.image} name={props.name} />
      <Menu class="menu" itemClass="menu--item" items={props.menuItems} transition={props.transition} />
    </Fragment>
  )
}
