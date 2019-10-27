import * as React from 'react'
import CharacterIcon from './CharacterIcon'
import {village} from '../../types'

interface Props {
  readonly image: string
  readonly status: village.CharacterStatus
}

export default function ResultCellAvatarImage(props: Props) {
  return (
    <CharacterIcon
      additionalClass={props.status === 'alive' ? '' : 'dead'}
      className="vi--result--cell--avatarImage"
      image={props.image}
    />
  )
}
