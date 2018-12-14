// @flow
import {FormattedMessage} from 'react-intl'
import React from 'react'
import type {Village} from 'lobby'
import VillageList from '../organisms/VillageList'

type Props = {
  +className: string,
  +isPlayer: boolean,
  +searched: boolean,
  +selectVillage: number => void => void,
  +villageItems: Village[]
}

export default function SearchResult(props: Props) {
  if (!props.searched) {
    return ''
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
