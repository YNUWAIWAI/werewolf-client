import * as React from 'react'
import CharacterIcon from './CharacterIcon'
import {village} from '../../types'

interface Props {
  readonly image: string
  readonly initial: string
  readonly status: village.CharacterStatus
}

export default function ResultCellImage(props: Props) {
  return (
    <CharacterIcon
      additionalClass={props.status === 'alive' ? '' : 'dead'}
      className="vi--result--cell--image"
      image={props.image}
      initial={props.initial}
    />
  )
}
