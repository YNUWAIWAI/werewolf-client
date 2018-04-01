// @flow
import MenuItem from './MenuItem'
import React from 'react'

export type Props = {
  class: string,
  itemClass: string,
  items: {
    text: string,
    type: string
  }[],
  transition: string => void => void
}

export default function Menu(props: Props) {
  const items = props.items.map(item =>
    <MenuItem
      class={props.itemClass}
      key={item.text}
      text={item.text}
      transition={props.transition}
      type={item.type}
    />)

  return (
    <ul className={props.class}>
      {items}
    </ul>
  )
}
