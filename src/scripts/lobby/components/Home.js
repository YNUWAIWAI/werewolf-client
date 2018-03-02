import Menu from './Menu'
import Player from './Player'
import React from 'react'

export default function Home(props) {
  return (
    <React.Fragment>
      <Player image={props.image} name={props.name} />
      <Menu items={props.items} />
    </React.Fragment>
  )
}
