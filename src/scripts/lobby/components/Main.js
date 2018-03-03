import Menu from './Menu'
import Player from './Player'
import React from 'react'

export default function Main(props) {
  return (
    <React.Fragment>
      <Player image={props.image} name={props.name} />
      <Menu class="menu" itemClass="menu--item" items={props.items} transition={props.transition} />
    </React.Fragment>
  )
}
