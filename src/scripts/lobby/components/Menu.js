import MenuItem from './MenuItem'
import React from 'react'

export default function Menu(props) {
  const items = props.items.map(item => <MenuItem key={item.text} text={item.text} transition={props.transition} type={item.type} />)

  return (
    <ul className="menu">
      {items}
    </ul>
  )
}
