import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import VillageList from './VillageList'
import {lobby} from '../../types'

interface Props {
  readonly className: string
  readonly isPlayer: boolean
  readonly searched: boolean
  readonly selectVillage: (id: number) => () => void
  readonly villageItems: lobby.Village[]
}

export default function SearchResult(props: Props) {
  if (!props.searched) {
    return null
  }
  if (props.villageItems.length === 0) { // && props.searched
    return (
      <div className={`${props.className}--not-found`}>
        <FormattedMessage
          id="SearchResult.notFound"
        />
      </div>
    )
  }

  // props.villageItems.length > 0 && props.searched
  return (
    <VillageList
      isPlayer={props.isPlayer}
      items={props.villageItems}
      selectVillage={props.selectVillage}
    />
  )
}
