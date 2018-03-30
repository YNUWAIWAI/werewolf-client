// @flow
import Menu, {type Props as MenuProps} from './Menu'
import React, {Fragment} from 'react'
import Player from './Player'

type Props = {
  image: string,
  items: $PropertyType<MenuProps, 'items'>,
  name: string,
  transition: string => void => void
}

export default function Main(props: Props) {
  return (
    <Fragment>
      <Player image={props.image} name={props.name} />
      <Menu class="menu" itemClass="menu--item" items={props.items} transition={props.transition} />
    </Fragment>
  )
}
