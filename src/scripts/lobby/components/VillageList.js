import React from 'react'
import VillageItem from './VlillageItem'

export default function VillageList(props) {
  const items = props.items.map(item => <VillageItem key={item.name} {... item} handleClick={props.selectVillage(item.id)} />)

  return (
    <ul className="village">
      {items}
    </ul>
  )
}
