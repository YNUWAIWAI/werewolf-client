import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import VillageList from './VillageList'

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
      <FormattedMessage
        id="SearchResult.notFound"
      >
        {
          (text: string) =>
            <div className={`${props.className}--not-found`}>
              {text}
            </div>
        }
      </FormattedMessage>
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
