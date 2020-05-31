import * as React from 'react'
import {CharacterIcon} from './CharacterIcon'
import {village} from '../../types'

interface Props {
  readonly image: string
  readonly status: village.CharacterStatus
}

export const ResultCellAvatarImage: React.FC<Props> = props => (
  <CharacterIcon
    additionalClass={props.status === 'alive' ? '' : 'dead'}
    className="vi--result--cell--avatarImage"
    image={props.image}
  />
)
ResultCellAvatarImage.displayName = 'ResultCellAvatarImage'
