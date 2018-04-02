// @flow
import React from 'react'
import VillageItem from './VillageItem'

type Props = {
  +isPlayer: boolean,
  +items: Village[],
  +selectVillage: number => void => void
}

export default function VillageList(props: Props) {
  const items = props.items.map(item => <VillageItem key={item.name} {... item} handleClick={props.selectVillage(item.id)} isPlayer={props.isPlayer} />)

  return (
    <div className="village">
      {items}
    </div>
  )
}
