import * as React from 'react'
import VillageItem from '../molecules/VillageItem'

interface Props {
  readonly isPlayer: boolean
  readonly items: lobby.Village[]
  readonly selectVillage: (id: number) => () => void
}

export default function VillageList(props: Props) {
  const items = props.items.map(item =>
    <VillageItem
      key={item.id}
      {... item}
      handleClick={props.selectVillage(item.id)}
      isPlayer={props.isPlayer}
    />
  )

  return (
    <div className="lo--village">
      {items}
    </div>
  )
}
