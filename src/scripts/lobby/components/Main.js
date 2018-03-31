// @flow
import React, {Fragment} from 'react'
import Menu from './Menu'
import Player from './Player'

export type StateProps = {
  image: string,
  items: MenuItem[],
  name: string
}
export type OwnProps = {
  transition: string => void => void
}
export type Props =
  & StateProps
  & OwnProps

export default function Main(props: Props) {
  return (
    <Fragment>
      <Player image={props.image} name={props.name} />
      <Menu class="menu" itemClass="menu--item" items={props.items} transition={props.transition} />
    </Fragment>
  )
}
