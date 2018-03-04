import React from 'react'
import VillageItem from './VillageItem'

export default function VillageList(props) {
  const items = props.items.map(item => <VillageItem key={item.name} {... item} handleClick={props.selectVillage(item.id)} isPlayer={props.isPlayer} />)

  return (
    <div className="village">
      {items}
    </div>
  )
}
