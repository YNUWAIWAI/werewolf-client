import * as React from 'react'
import {CharacterIcon} from './CharacterIcon'

interface Props {
  readonly image: string
  readonly initial: string
  readonly isSilent: boolean
  readonly name: string
  readonly status: string
}

export const PredictionCharacter: React.FC<Props> = props => {
  const isSilent = props.isSilent ? 'silent' : ''

  return (
    <CharacterIcon
      additionalClass={props.status === 'alive' ? isSilent : 'dead'}
      className="vi--prediction--character"
      image={props.image}
      initial={props.initial}
      name={props.name}
    />
  )
}
PredictionCharacter.displayName = 'PredictionCharacter'
